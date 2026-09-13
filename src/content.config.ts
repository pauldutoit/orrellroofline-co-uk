import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cityContent = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cityContent' }),
  schema: z.object({
    city: z.string(),
    citySlug: z.string(),
    intent: z.string(),
    intentSlug: z.string(),
    region: z.string().optional(),
    indexable: z.boolean().default(false),
    metaTitle: z.string(),
    metaDescription: z.string(),
    generatedAt: z.string().optional(),
    generatedBy: z.enum(['llm', 'manual']).default('manual'),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    excerpt: z.string(),
    publishedDate: z.string(),
    updatedDate: z.string().optional(),
    readingMinutes: z.number().optional(),
    relatedCities: z.array(z.string()).default([]),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
  }),
});

export const collections = { cityContent, blog };
