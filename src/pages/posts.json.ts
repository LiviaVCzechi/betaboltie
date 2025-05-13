import { getCollection } from 'astro:content';

// This endpoint will generate a JSON file for search functionality
export async function GET() {
  const allPosts = await getCollection('blog');
  
  // Create a simplified version of posts for search
  const posts = allPosts.map(post => ({
    title: post.data.title,
    description: post.data.description,
    slug: post.slug,
    category: post.data.category,
    pubDate: post.data.pubDate.toISOString()
  }));
  
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}