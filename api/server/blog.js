import { eq, desc } from "drizzle-orm";
import { blogPosts } from "../drizzle/schema.js";
import { getDb } from "./db.js";
export async function listPublishedBlogPosts() {
    const db = await getDb();
    if (!db)
        return [];
    return db
        .select()
        .from(blogPosts)
        .where(eq(blogPosts.isPublished, true))
        .orderBy(desc(blogPosts.publishedAt));
}
export async function listAllBlogPosts() {
    const db = await getDb();
    if (!db)
        return [];
    return db
        .select()
        .from(blogPosts)
        .orderBy(desc(blogPosts.createdAt));
}
export async function getBlogPostBySlug(slug) {
    const db = await getDb();
    if (!db)
        return null;
    const result = await db
        .select()
        .from(blogPosts)
        .where(eq(blogPosts.slug, slug))
        .limit(1);
    return result[0] || null;
}
export async function createBlogPost(data) {
    const db = await getDb();
    if (!db)
        throw new Error("Database not available");
    const result = await db.insert(blogPosts).values(data);
    return result;
}
export async function updateBlogPost(id, data) {
    const db = await getDb();
    if (!db)
        throw new Error("Database not available");
    await db
        .update(blogPosts)
        .set(data)
        .where(eq(blogPosts.id, id));
}
export async function deleteBlogPost(id) {
    const db = await getDb();
    if (!db)
        throw new Error("Database not available");
    await db
        .delete(blogPosts)
        .where(eq(blogPosts.id, id));
}
export async function incrementViewCount(slug) {
    const db = await getDb();
    if (!db)
        return;
    const post = await getBlogPostBySlug(slug);
    if (post) {
        await db
            .update(blogPosts)
            .set({ viewCount: (post.viewCount || 0) + 1 })
            .where(eq(blogPosts.id, post.id));
    }
}
