import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { users } from "../drizzle/schema.js";
import { ENV } from './_core/env.js';
import jwt from "jsonwebtoken";
let _db = null;
export function createSessionToken(openId, opts) {
    return jwt.sign({
        sub: openId,
        name: opts.name,
    }, process.env.JWT_SECRET, {
        expiresIn: Math.floor(opts.expiresInMs / 1000), // convert ms â†’ seconds
    });
}
// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
    if (!_db && process.env.DATABASE_URL) {
        try {
            const client = postgres(process.env.DATABASE_URL, {
                ssl: "require",
            });
            _db = drizzle(client);
        }
        catch (error) {
            console.warn("[Database] Failed to connect:", error);
            _db = null;
        }
    }
    return _db;
}
export async function upsertUser(user) {
    if (!user.openId) {
        throw new Error("User openId is required for upsert");
    }
    const db = await getDb();
    if (!db) {
        console.warn("[Database] Cannot upsert user: database not available");
        return;
    }
    try {
        const values = {
            openId: user.openId,
        };
        const updateSet = {};
        const textFields = ["name", "email", "loginMethod"];
        const assignNullable = (field) => {
            const value = user[field];
            if (value === undefined)
                return;
            const normalized = value ?? null;
            values[field] = normalized;
            updateSet[field] = normalized;
        };
        textFields.forEach(assignNullable);
        if (user.lastSignedIn !== undefined) {
            values.lastSignedIn = user.lastSignedIn;
            updateSet.lastSignedIn = user.lastSignedIn;
        }
        if (user.role !== undefined) {
            values.role = user.role;
            updateSet.role = user.role;
        }
        else if (user.openId === ENV.ownerOpenId) {
            values.role = 'admin';
            updateSet.role = 'admin';
        }
        if (!values.lastSignedIn) {
            values.lastSignedIn = new Date();
        }
        if (Object.keys(updateSet).length === 0) {
            updateSet.lastSignedIn = new Date();
        }
        await db.insert(users).values(values).onConflictDoUpdate({
            target: users.openId,
            set: updateSet,
        });
    }
    catch (error) {
        console.error("[Database] Failed to upsert user:", error);
        throw error;
    }
}
export async function getUserByOpenId(openId) {
    const db = await getDb();
    if (!db) {
        console.warn("[Database] Cannot get user: database not available");
        return undefined;
    }
    const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
    return result.length > 0 ? result[0] : undefined;
}
// TODO: add feature queries here as your schema grows.
