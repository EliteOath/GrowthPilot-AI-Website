import express from "express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { appRouter } from "../routers";
import { createContext } from "./context";
import cookieParser from "cookie-parser";
import stripeWebhookRouter from "../routes/stripe-webhook";
const app = express();
// Stripe webhook MUST be registered before JSON middleware
app.use("api/stripe/webhook", stripeWebhookRouter);
app.use(cookieParser());
// Configure body parser with larger size limit for file uploads
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
// OAuth callback under /api/oauth/callback
registerOAuthRoutes(app);
// tRPC API
app.use("/api/trpc", createExpressMiddleware({
    router: appRouter,
    createContext,
}));
// Vite or static files — skip this for Vercel
// Vercel handles static serving separately
export default app;
