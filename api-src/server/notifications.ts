import { getDb } from "./db.js";

/**
 * Send notification using the built-in notification system
 * Notifications will appear in the Management UI Notifications panel
 */
export async function sendNotification(params: {
  title: string;
  body: string;
  type?: "info" | "success" | "warning" | "error";
  actionUrl?: string;
  actionText?: string;
}) {
  const db = await getDb();
  if (!db) {
    console.warn("[Notifications] Database not available");
    return;
  }

  try {
    // Use the built-in notification API endpoint
    const response = await fetch(
      `${process.env.VITE_ANALYTICS_ENDPOINT || "https://api.manus.im"}/notification/send`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.BUILT_IN_FORGE_API_KEY}`,
        },
        body: JSON.stringify({
          appId: process.env.VITE_APP_ID,
          title: params.title,
          body: params.body,
          type: params.type || "info",
          actionUrl: params.actionUrl,
          actionText: params.actionText,
        }),
      }
    );

    if (!response.ok) {
      console.error("[Notifications] Failed to send notification:", await response.text());
    } else {
      console.log(`[Notifications] Sent: ${params.title}`);
    }
  } catch (error) {
    console.error("[Notifications] Error sending notification:", error);
  }
}

/**
 * Notify about new contact form submission
 */
export async function notifyContactFormSubmission(data: {
  name: string;
  email: string;
  company?: string;
  message: string;
}) {
  await sendNotification({
    title: "New Contact Form Submission",
    body: `${data.name} from ${data.company || data.email} submitted a contact form`,
    type: "info",
    actionText: "View Details",
  });
}

/**
 * Notify about new resource download
 */
export async function notifyResourceDownload(data: {
  resourceTitle: string;
  email: string;
  name?: string;
  company?: string;
}) {
  await sendNotification({
    title: "New Resource Download",
    body: `${data.name || data.email} downloaded "${data.resourceTitle}"${data.company ? ` from ${data.company}` : ""}`,
    type: "success",
  });
}

/**
 * Notify about successful invoice payment
 */
export async function notifyInvoicePayment(data: {
  invoiceNumber: string;
  amount: number;
  customerEmail: string;
  customerName?: string;
}) {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(data.amount);

  await sendNotification({
    title: "Invoice Payment Received",
    body: `${data.customerName || data.customerEmail} paid invoice ${data.invoiceNumber} (${formattedAmount})`,
    type: "success",
  });
}
