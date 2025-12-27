import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import type { User } from "../../../drizzle/schema";
import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "@shared/const";
import { getUserByOpenId } from "../db";

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
