import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import type { User } from "../../drizzle/schema.js";
import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "../../shared/const.js";
import { getUserByOpenId } from "../db.js";

export type TrpcContext = {
  req: CreateExpressContextOptions["req"];
  res: CreateExpressContextOptions["res"];
  user: User | null;
};

export async function createContext(
  opts: CreateExpressContextOptions
): Promise<TrpcContext> {
  const { req, res } = opts;

  let user: User | null = null;

  try {
    const token = req.cookies?.[COOKIE_NAME];

    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
        sub: string;
        name: string;
      };

      const dbUser = await getUserByOpenId(decoded.sub);

      if (dbUser) {
        user = dbUser;
      }
    }
  } catch (error) {
    console.warn("[Auth] Invalid or missing session token");
  }

  return {
    req,
    res,
    user,
  };
}
