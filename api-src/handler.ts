// api-src/handler.ts

import express from "express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "./server/routers.js";
import { createContext } from "./server/_core/context.js";
import stripeWebhookHandler from "./server/routes/stripe-webhook.js";

// Create the Express app
const app = express();

// Stripe webhook must use raw body
app.post(
  "/api/stripe-webhook",
  express.raw({ type: "application/json" }),
  stripeWebhookHandler
);

// TRPC middleware
app.use(
  "/api/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

// Fallback
app.use("/api/*", (_req, res) => {
  res.status(404).send("Not found");
});

// Export Vercel-compatible handler
export default app;
