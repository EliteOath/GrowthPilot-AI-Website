import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { resources } from "../drizzle/schema.js";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error("DATABASE_URL environment variable is not set");
  process.exit(1);
}

const client = postgres(connectionString);
const db = drizzle(client);

const resourcesData = [
  {
    title: "AI Strategy Roadmap Template",
    description: "A comprehensive template to help you plan your AI implementation journey. Includes assessment frameworks, timeline planning, and ROI calculation worksheets.",
    type: "template",
    fileUrl: "/resources/ai-strategy-roadmap-template.pdf",
    downloadCount: 0,
  },
  {
    title: "AI ROI Calculator",
    description: "Calculate the potential return on investment for your AI initiatives. This Excel-based calculator helps you estimate cost savings, efficiency gains, and revenue impact.",
    type: "tool",
    fileUrl: "/resources/ai-roi-calculator.xlsx",
    downloadCount: 0,
  },
  {
    title: "AI Readiness Assessment Guide",
    description: "Evaluate your organization's readiness for AI adoption. This guide includes a scoring framework across technology, data, people, and process dimensions.",
    type: "guide",
    fileUrl: "/resources/ai-readiness-assessment.pdf",
    downloadCount: 0,
  },
  {
    title: "Home Services AI Automation Playbook",
    description: "Industry-specific guide for home services businesses looking to automate scheduling, dispatch, and customer communication with AI.",
    type: "guide",
    fileUrl: "/resources/home-services-ai-playbook.pdf",
    downloadCount: 0,
  },
  {
    title: "Healthcare AI Compliance Checklist",
    description: "Ensure your AI implementations meet HIPAA and healthcare compliance requirements. Includes security controls, audit requirements, and documentation templates.",
    type: "checklist",
    fileUrl: "/resources/healthcare-ai-compliance-checklist.pdf",
    downloadCount: 0,
  },
  {
    title: "Professional Services AI Use Case Library",
    description: "50+ proven AI use cases for consulting, legal, accounting, and other professional services firms. Each use case includes implementation complexity and expected ROI.",
    type: "guide",
    fileUrl: "/resources/professional-services-use-cases.pdf",
    downloadCount: 0,
  },
  {
    title: "E-commerce AI Implementation Guide",
    description: "Step-by-step guide to implementing AI for product recommendations, customer support, inventory optimization, and marketing personalization.",
    type: "guide",
    fileUrl: "/resources/ecommerce-ai-implementation.pdf",
    downloadCount: 0,
  },
  {
    title: "AI Vendor Evaluation Scorecard",
    description: "Structured framework for evaluating AI vendors and solutions. Compare capabilities, pricing, integration requirements, and support across multiple vendors.",
    type: "template",
    fileUrl: "/resources/ai-vendor-scorecard.xlsx",
    downloadCount: 0,
  },
];

async function seedResources() {
  try {
    console.log("Seeding resources...");
    
    for (const resource of resourcesData) {
      await db.insert(resources).values(resource);
      console.log(`✓ Added: ${resource.title}`);
    }
    
    console.log("\n✅ Resources seeded successfully!");
  } catch (error) {
    console.error("Error seeding resources:", error);
    process.exit(1);
  } finally {
    await client.end();
  }
}

seedResources();
