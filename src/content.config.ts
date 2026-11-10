import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Un archivo YAML por taller en src/content/talleres/<slug>.yaml.
// El nombre del archivo es el slug: aparece en la URL y en el frontmatter de las lecciones.
// Los talleres "proximamente" solo salen en el mapa de la portada; los "disponible"
// generan sus páginas y necesitan todos los campos de la ficha.
// `archivo`: ruta bajo /descargas/ (en public/). Sin él, el recurso sigue «en preparación».
const recurso = z.object({ titulo: z.string(), detalle: z.string(), archivo: z.string().optional() });

const talleres = defineCollection({
  loader: glob({ base: './src/content/talleres', pattern: '*.{yaml,yml}' }),
  schema: ({ image }) =>
    z.discriminatedUnion('estado', [
      z.object({
        estado: z.literal('proximamente'),
        orden: z.number(),
        titulo: z.string(),
        tarjeta: z.string(),
      }),
      z.object({
        estado: z.literal('disponible'),
        orden: z.number(),
        titulo: z.string(),
        tarjeta: z.string(),
        descripcion: z.string(),
        etiqueta: z.string(),
        entrada: z.string(),
        nivel: z.string(),
        portada: image(),
        enfoque: z.string(),
        recursos: z.array(recurso),
        // Material de consulta que no forma parte del recorrido («Material de referencia»).
        referencia: z.array(recurso).optional(),
      }),
    ]),
});

const lecciones = defineCollection({
  loader: glob({ base: './src/content/lecciones', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    taller: reference('talleres'),
    modulo: z.number(),
    titulo: z.string(),
    resumen: z.string(),
    minutos: z.number(),
  }),
});

export const collections = { talleres, lecciones };
