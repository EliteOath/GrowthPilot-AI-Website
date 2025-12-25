import express from "express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

// Stripe webhook MUST be registered before JSON middleware
app.use("/api/stripe/webhook", express.raw({ type: "application/json" }));
import("../routes/stripe-webhook").then(router => {
  app.use(router.default);
});

// Configure body parser with larger size limit for file uploads
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// OAuth callback under /api/oauth/callback
registerOAuthRoutes(app);

// tRPC API
app.use(
  "/api/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

// Vite or static files — skip this for Vercel
// Vercel handles static serving separately

export default app;
