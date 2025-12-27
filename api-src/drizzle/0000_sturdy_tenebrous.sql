CREATE TYPE "public"."status" AS ENUM('pending', 'paid', 'overdue', 'cancelled');--> statement-breakpoint
CREATE TYPE "public"."role" AS ENUM('user', 'admin');--> statement-breakpoint
CREATE TABLE "blogPosts" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" varchar(255) NOT NULL,
	"title" varchar(255) NOT NULL,
	"excerpt" text,
	"content" text NOT NULL,
	"author" varchar(255),
	"authorRole" varchar(255),
	"category" varchar(100),
	"tags" text,
	"featuredImage" text,
	"metaTitle" varchar(255),
	"metaDescription" text,
	"metaKeywords" text,
	"isPublished" boolean DEFAULT false NOT NULL,
	"publishedAt" timestamp,
	"readTime" integer,
	"viewCount" integer DEFAULT 0 NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "blogPosts_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "caseStudies" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" varchar(255) NOT NULL,
	"title" varchar(255) NOT NULL,
	"client" varchar(255) NOT NULL,
	"industry" varchar(100),
	"summary" text,
	"challenge" text,
	"solution" text,
	"results" text,
	"testimonial" text,
	"testimonialAuthor" varchar(255),
	"testimonialRole" varchar(255),
	"imageUrl" text,
	"metrics" text,
	"isPublished" boolean DEFAULT false NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "caseStudies_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "invoices" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer NOT NULL,
	"invoiceNumber" varchar(64) NOT NULL,
	"amount" integer NOT NULL,
	"status" "status" DEFAULT 'pending' NOT NULL,
	"dueDate" timestamp NOT NULL,
	"paidDate" timestamp,
	"description" text,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "invoices_invoiceNumber_unique" UNIQUE("invoiceNumber")
);
--> statement-breakpoint
CREATE TABLE "resourceDownloads" (
	"id" serial PRIMARY KEY NOT NULL,
	"resourceId" integer NOT NULL,
	"email" varchar(320) NOT NULL,
	"name" varchar(255),
	"company" varchar(255),
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "resources" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text,
	"category" varchar(100),
	"fileUrl" text NOT NULL,
	"thumbnailUrl" text,
	"downloadCount" integer DEFAULT 0 NOT NULL,
	"isPublic" boolean DEFAULT true NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"openId" varchar(64) NOT NULL,
	"name" text,
	"email" varchar(320),
	"loginMethod" varchar(64),
	"role" "role" DEFAULT 'user' NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	"lastSignedIn" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_openId_unique" UNIQUE("openId")
);
