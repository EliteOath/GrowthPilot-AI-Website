import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { getUserInvoices } from "./billing";
import { createInvoicePaymentSession } from "./stripe";
import { listResources, getResourceById, recordResourceDownload } from "./resources";
import { notifyResourceDownload } from "./notifications";
import { listPublishedBlogPosts, listAllBlogPosts, getBlogPostBySlug, createBlogPost, updateBlogPost, deleteBlogPost, incrementViewCount } from "./blog";
import { z } from "zod";
export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
    system: systemRouter,
    session: router({
        me: publicProcedure.query(({ ctx }) => {
            if (!ctx.user) {
                return { authenticated: false, user: null };
            }
            return {
                authenticated: true,
                user: ctx.user,
            };
        }),
        logout: publicProcedure.mutation(({ ctx }) => {
            const cookieOptions = getSessionCookieOptions(ctx.req);
            ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
            return { success: true };
        }),
    }),
    health: publicProcedure.query(() => ({
        status: "ok",
        timestamp: Date.now(),
    })),
    billing: router({
        getMyInvoices: protectedProcedure.query(async ({ ctx }) => {
            return getUserInvoices(ctx.user.id);
        }),
        payInvoice: protectedProcedure
            .input(z.object({ invoiceId: z.number() }))
            .mutation(async ({ ctx, input }) => {
            const origin = ctx.req.headers?.origin || "http://localhost:3000";
            const checkoutUrl = await createInvoicePaymentSession(input.invoiceId, ctx.user.id, ctx.user.email || "", ctx.user.name || "", origin);
            return { checkoutUrl };
        }),
    }),
    resources: router({
        list: publicProcedure.query(() => listResources()),
        download: publicProcedure
            .input(z.object({
            resourceId: z.number(),
            name: z.string(),
            email: z.string().email(),
            company: z.string().optional(),
        }))
            .mutation(async ({ input }) => {
            const resource = await getResourceById(input.resourceId);
            if (!resource) {
                throw new Error("Resource not found");
            }
            await recordResourceDownload({
                resourceId: input.resourceId,
                email: input.email,
                name: input.name,
                company: input.company,
            });
            // Send notification
            await notifyResourceDownload({
                resourceTitle: resource.title,
                email: input.email,
                name: input.name,
                company: input.company,
            });
            return { fileUrl: resource.fileUrl };
        }),
    }),
    blog: router({
        listPublished: publicProcedure.query(() => listPublishedBlogPosts()),
        listAll: protectedProcedure.query(() => listAllBlogPosts()),
        getBySlug: publicProcedure
            .input(z.object({ slug: z.string() }))
            .query(async ({ input }) => {
            const post = await getBlogPostBySlug(input.slug);
            if (post)
                await incrementViewCount(input.slug);
            return post;
        }),
        create: protectedProcedure
            .input(z.object({
            slug: z.string(),
            title: z.string(),
            excerpt: z.string().optional(),
            content: z.string(),
            author: z.string().optional(),
            authorRole: z.string().optional(),
            category: z.string().optional(),
            tags: z.string().optional(),
            featuredImage: z.string().optional(),
            metaTitle: z.string().optional(),
            metaDescription: z.string().optional(),
            metaKeywords: z.string().optional(),
            isPublished: z.boolean().optional(),
            publishedAt: z.date().optional(),
            readTime: z.number().optional(),
        }))
            .mutation(({ input }) => createBlogPost(input)),
        update: protectedProcedure
            .input(z.object({
            id: z.number(),
            slug: z.string().optional(),
            title: z.string().optional(),
            excerpt: z.string().optional(),
            content: z.string().optional(),
            author: z.string().optional(),
            authorRole: z.string().optional(),
            category: z.string().optional(),
            tags: z.string().optional(),
            featuredImage: z.string().optional(),
            metaTitle: z.string().optional(),
            metaDescription: z.string().optional(),
            metaKeywords: z.string().optional(),
            isPublished: z.boolean().optional(),
            publishedAt: z.date().optional(),
            readTime: z.number().optional(),
        }))
            .mutation(({ input }) => {
            const { id, ...data } = input;
            return updateBlogPost(id, data);
        }),
        delete: protectedProcedure
            .input(z.object({ id: z.number() }))
            .mutation(({ input }) => deleteBlogPost(input.id)),
    }),
});
