import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    author: z.string().optional(),
    readingTime: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};