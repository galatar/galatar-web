import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lecciones = defineCollection({
  loader: glob({ base: './src/content/lecciones', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    taller: z.string(),
    modulo: z.number(),
    titulo: z.string(),
    resumen: z.string(),
    minutos: z.number(),
  }),
});

export const collections = { lecciones };
