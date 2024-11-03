import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number(),
    metaTitle: z.string(),
    metaDescription: z.string(),
  }),
});

const cities = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    province: z.string(),
    population: z.number(),
    subMunicipalities: z.array(z.string()).optional(),
    postalCode: z.string(),
  }),
});

export const collections = { services, cities };