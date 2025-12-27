import { eq, desc } from "drizzle-orm";
import { resources, resourceDownloads } from "../../drizzle/schema";
import { getDb } from "./db";
export async function listResources() {
    const db = await getDb();
    if (!db) {
        console.warn("[Database] Cannot get resources: database not available");
        return [];
    }
    return db
        .select()
        .from(resources)
        .where(eq(resources.isPublic, true))
        .orderBy(desc(resources.createdAt));
}
export async function getResourceById(id) {
    const db = await getDb();
    if (!db) {
        console.warn("[Database] Cannot get resource: database not available");
        return null;
    }
    const result = await db
        .select()
        .from(resources)
        .where(eq(resources.id, id))
        .limit(1);
    return result.length > 0 ? result[0] : null;
}
export async function recordResourceDownload(download) {
    const db = await getDb();
    if (!db) {
        console.warn("[Database] Cannot record download: database not available");
        return;
    }
    await db.insert(resourceDownloads).values(download);
    // Increment download count using SQL
    await db.execute(`UPDATE resources SET downloadCount = downloadCount + 1 WHERE id = ${download.resourceId}`);
}
