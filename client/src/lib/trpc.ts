import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../../server/routers"; // adjust path if needed

export const trpc = createTRPCReact<AppRouter>();
