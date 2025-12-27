import Stripe from "stripe";
import { eq } from "drizzle-orm";
import { invoices } from "../../drizzle/schema";
import { getDb } from "./db";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-12-15.clover",
});

export async function createInvoicePaymentSession(
  invoiceId: number,
  userId: number,
  userEmail: string,
  userName: string,
  origin: string
) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  // Get invoice details
  const result = await db
    .select()
    .from(invoices)
    .where(eq(invoices.id, invoiceId))
    .limit(1);

  if (result.length === 0) {
    throw new Error("Invoice not found");
  }

  const invoice = result[0];

  if (invoice.userId !== userId) {
    throw new Error("Unauthorized");
  }

  if (invoice.status === "paid") {
    throw new Error("Invoice already paid");
  }

  // Create Stripe checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: `Invoice ${invoice.invoiceNumber}`,
            description: invoice.description || "GrowthPilot AI Services",
          },
          unit_amount: Math.round(invoice.amount * 100), // Convert to cents
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${origin}/account?payment=success&invoice=${invoiceId}`,
    cancel_url: `${origin}/account?payment=cancelled`,
    customer_email: userEmail,
    client_reference_id: userId.toString(),
    metadata: {
      invoice_id: invoiceId.toString(),
      user_id: userId.toString(),
      customer_email: userEmail,
      customer_name: userName,
    },
    allow_promotion_codes: true,
  });

  return session.url;
}

export async function handleWebhookEvent(event: Stripe.Event) {
  // Handle test events
  if (event.id.startsWith("evt_test_")) {
    console.log("[Webhook] Test event detected, returning verification response");
    return { verified: true };
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Webhook] Database not available");
    return { verified: false };
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const invoiceId = session.metadata?.invoice_id;

      if (invoiceId) {
        // Update invoice status to paid
        await db
          .update(invoices)
          .set({
            status: "paid",
            paidDate: new Date(),
          })
          .where(eq(invoices.id, parseInt(invoiceId)));

        console.log(`[Webhook] Invoice ${invoiceId} marked as paid`);
      }
      break;
    }

    case "payment_intent.succeeded": {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log(`[Webhook] Payment succeeded: ${paymentIntent.id}`);
      break;
    }

    case "payment_intent.payment_failed": {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log(`[Webhook] Payment failed: ${paymentIntent.id}`);
      break;
    }

    default:
      console.log(`[Webhook] Unhandled event type: ${event.type}`);
  }

  return { verified: true };
}

export { stripe };
