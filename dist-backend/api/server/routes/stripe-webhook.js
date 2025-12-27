import { Router } from "express";
import Stripe from "stripe";
import { handleWebhookEvent } from "../stripe";
import { notifyInvoicePayment } from "../notifications";
const router = Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
    apiVersion: "2025-12-15.clover",
});
router.post("/api/stripe/webhook", async (req, res) => {
    const sig = req.headers["stripe-signature"];
    if (!sig) {
        console.error("[Webhook] Missing stripe-signature header");
        return res.status(400).send("Missing signature");
    }
    let event;
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET || "");
    }
    catch (err) {
        console.error(`[Webhook] Signature verification failed: ${err.message}`);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }
    console.log(`[Webhook] Received event: ${event.type} (${event.id})`);
    try {
        const result = await handleWebhookEvent(event);
        // Send notification for successful payments
        if (event.type === "checkout.session.completed") {
            const session = event.data.object;
            if (session.metadata?.invoice_id) {
                await notifyInvoicePayment({
                    invoiceNumber: session.metadata.invoice_id,
                    amount: session.amount_total / 100,
                    customerEmail: session.metadata.customer_email || session.customer_email,
                    customerName: session.metadata.customer_name,
                });
            }
        }
        res.json(result);
    }
    catch (error) {
        console.error(`[Webhook] Error handling event: ${error.message}`);
        res.status(500).json({ error: error.message });
    }
});
export default router;
