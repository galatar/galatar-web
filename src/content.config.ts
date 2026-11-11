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

// Tutoriales: piezas sueltas de consulta, agrupadas en series y sin seguimiento de progreso.
// Una ficha YAML por serie en src/content/series/<slug>.yaml.
const series = defineCollection({
  loader: glob({ base: './src/content/series', pattern: '*.{yaml,yml}' }),
  schema: ({ image }) =>
    z.object({
      orden: z.number(),
      titulo: z.string(),
      descripcion: z.string(),
      etiqueta: z.string(),
      // Logo de la herramienta (sobre fondo blanco); sale en el índice y en cada tutorial.
      logo: image().optional(),
      logoAlt: z.string().optional(),
      // true si el logo trae su propio fondo oscuro: se muestra tal cual, sin la placa blanca.
      logoOscuro: z.boolean().optional(),
    }),
});

// src/content/tutoriales/<serie>/<slug>.md; la URL es /tutoriales/<serie>/<slug>/.
const tutoriales = defineCollection({
  loader: glob({ base: './src/content/tutoriales', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    serie: reference('series'),
    orden: z.number(),
    titulo: z.string(),
    resumen: z.string(),
    minutos: z.number(),
    nivel: z.enum(['Principiante', 'Intermedio', 'Avanzado']),
  }),
});

export const collections = { talleres, lecciones, series, tutoriales };
