import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { blogPosts } from '../drizzle/schema';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function seedBlogPosts() {
  const connection = await mysql.createConnection(process.env.DATABASE_URL!);
  const db = drizzle(connection);

  const postsData = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'blog-posts.json'), 'utf-8')
  );

  for (const post of postsData) {
    const postData = {
      ...post,
      tags: JSON.stringify(post.tags),
      publishedAt: new Date(),
      viewCount: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await db.insert(blogPosts).values(postData);
    console.log(`✓ Inserted: ${post.title}`);
  }

  await connection.end();
  console.log('\n✅ Blog posts seeded successfully!');
}

seedBlogPosts().catch(console.error);
