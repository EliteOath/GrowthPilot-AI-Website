import { eq, desc } from "drizzle-orm";
import { invoices } from "../../drizzle/schema";
import { getDb } from "./db";
export async function getUserInvoices(userId) {
    const db = await getDb();
    if (!db) {
        console.warn("[Database] Cannot get invoices: database not available");
        return [];
    }
    return db
        .select()
        .from(invoices)
        .where(eq(invoices.userId, userId))
        .orderBy(desc(invoices.createdAt));
}
