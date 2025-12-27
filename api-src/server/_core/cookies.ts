type SessionCookieOptions = {
  httpOnly: boolean;
  path: string;
  sameSite: "lax" | "strict" | "none";
  secure: boolean;
  domain?: string;
};

export function getSessionCookieOptions(req: any): SessionCookieOptions {
  // Prefer x-forwarded-proto if present (behind proxies)
  const forwardedProto = req.headers?.["x-forwarded-proto"];
  const protocolHeader =
    typeof forwardedProto === "string"
      ? forwardedProto.split(",")[0]
      : req.protocol ?? "https";

  const hostHeader = req.headers?.["x-forwarded-host"] ?? req.headers?.host;
  const hostname =
    typeof hostHeader === "string" ? hostHeader.split(":")[0] : undefined;

  const secure = protocolHeader === "https";

  return {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure,
    ...(hostname ? { domain: hostname } : {}),
  };
}
