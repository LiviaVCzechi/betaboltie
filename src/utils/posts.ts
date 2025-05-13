interface BlogPost {
  slug: string;
  data: {
    title: string;
    pubDate: Date;
    category?: string;
    [key: string]: any;
  };
}

type GroupedPosts = Record<string, Record<string, BlogPost[]>>;

export function groupPostsByYearAndMonth(posts: BlogPost[]): GroupedPosts {
  const grouped: GroupedPosts = {};
  
  posts.forEach(post => {
    const date = new Date(post.data.pubDate);
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    
    if (!grouped[year]) {
      grouped[year] = {};
    }
    
    if (!grouped[year][month]) {
      grouped[year][month] = [];
    }
    
    grouped[year][month].push(post);
  });
  
  return grouped;
}

export function getPostsByCategory(posts: BlogPost[], category: string): BlogPost[] {
  return posts.filter(post => 
    post.data.category?.toLowerCase() === category.toLowerCase()
  );
}

export function searchPosts(posts: BlogPost[], query: string): BlogPost[] {
  const searchTerm = query.toLowerCase().trim();
  
  if (!searchTerm) return [];
  
  return posts.filter(post => {
    const titleMatch = post.data.title.toLowerCase().includes(searchTerm);
    const descMatch = post.data.description?.toLowerCase()?.includes(searchTerm);
    const categoryMatch = post.data.category?.toLowerCase()?.includes(searchTerm);
    
    return titleMatch || descMatch || categoryMatch;
  });
}