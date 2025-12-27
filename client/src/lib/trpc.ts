import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../routers"; // adjust path if needed

export const trpc = createTRPCReact<AppRouter>();
