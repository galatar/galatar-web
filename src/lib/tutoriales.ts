import { getCollection, type CollectionEntry } from 'astro:content';

export type Serie = CollectionEntry<'series'>;
export type Tutorial = CollectionEntry<'tutoriales'>;

/** El id es "<serie>/<slug>", así que la URL sale directamente de él. */
export const urlTutorial = (tutorial: Tutorial) => `/tutoriales/${tutorial.id}/`;
export const urlSerie = (serie: string) => `/tutoriales/#${serie}`;

/** Cada serie con sus tutoriales en orden. Una serie sin tutoriales rompe el build. */
export async function seriesConTutoriales(): Promise<{ serie: Serie; tutoriales: Tutorial[] }[]> {
  const todos = await getCollection('tutoriales');
  const series = (await getCollection('series')).sort((a, b) => a.data.orden - b.data.orden);
  return series.map((serie) => {
    const tutoriales = todos
      .filter((t) => t.data.serie.id === serie.id)
      .sort((a, b) => a.data.orden - b.data.orden);
    if (tutoriales.length === 0) {
      throw new Error(`La serie "${serie.id}" no tiene tutoriales en src/content/tutoriales/${serie.id}/`);
    }
    for (const t of tutoriales) {
      if (!t.id.startsWith(`${serie.id}/`)) {
        throw new Error(`El tutorial "${t.id}" dice ser de la serie "${serie.id}" pero no está en su carpeta`);
      }
    }
    return { serie, tutoriales };
  });
}
