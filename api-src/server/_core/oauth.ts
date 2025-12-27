import { COOKIE_NAME, ONE_YEAR_MS } from "../../shared/const.js";
import * as db from "../db.js";
import { getSessionCookieOptions } from "./cookies.js";

export function registerOAuthRoutes(app: any) {
  app.get("/api/oauth/google/callback", async (req: any, res: any) => {
    const code = req.query?.code;

    if (!code || typeof code !== "string") {
      res.status(400).json({ error: "Missing ?code=" });
      return;
    }

    try {
      // 1. Exchange code for tokens
      const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          code,
          client_id: process.env.GOOGLE_CLIENT_ID!,
          client_secret: process.env.GOOGLE_CLIENT_SECRET!,
          redirect_uri: process.env.OAUTH_REDIRECT_URL!,
          grant_type: "authorization_code",
        }),
      });

      const tokenJson = await tokenRes.json();

      if (!tokenJson.access_token) {
        console.error("Google token exchange failed:", tokenJson);
        res.status(500).json({ error: "Failed to exchange code for token" });
        return;
      }

      // 2. Fetch user info
      const userRes = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${tokenJson.access_token}` },
      });

      const userInfo = await userRes.json();

      if (!userInfo.sub) {
        res.status(400).json({ error: "Missing Google user ID (sub)" });
        return;
      }

      // 3. Upsert user in DB
      await db.upsertUser({
        openId: userInfo.sub,
        name: userInfo.name || null,
        email: userInfo.email ?? null,
        loginMethod: "google",
        lastSignedIn: new Date(),
      });

      // 4. Create session token
      const sessionToken = db.createSessionToken(userInfo.sub, {
        name: userInfo.name || "",
        expiresInMs: ONE_YEAR_MS,
      });

      // 5. Set cookie
      const cookieOptions = getSessionCookieOptions(req);
      res.cookie(COOKIE_NAME, sessionToken, { ...cookieOptions, maxAge: ONE_YEAR_MS });

      // 6. Redirect to homepage
      res.redirect(302, "/");
    } catch (error) {
      console.error("[OAuth] Google callback failed", error);
      res.status(500).json({ error: "OAuth callback failed" });
    }
  });
}
