import { getCollection, type CollectionEntry } from 'astro:content';

export type Taller = CollectionEntry<'talleres'>;
export type TallerDisponible = Taller & { data: Extract<Taller['data'], { estado: 'disponible' }> };
export type Leccion = CollectionEntry<'lecciones'>;

export const urlTaller = (taller: string) => `/talleres/${taller}/`;
export const slugModulo = (leccion: Leccion) => leccion.id.split('/').pop()!;
export const urlModulo = (leccion: Leccion) => `${urlTaller(leccion.data.taller.id)}${slugModulo(leccion)}/`;

/** Todos los talleres del mapa, en su orden. */
export async function talleres(): Promise<Taller[]> {
  return (await getCollection('talleres')).sort((a, b) => a.data.orden - b.data.orden);
}

/** Talleres que ya tienen páginas propias. */
export async function talleresDisponibles(): Promise<TallerDisponible[]> {
  return (await talleres()).filter((t): t is TallerDisponible => t.data.estado === 'disponible');
}

/** Lecciones de un taller ordenadas por módulo. Un taller disponible sin lecciones rompe el build. */
export async function leccionesDe(taller: string): Promise<Leccion[]> {
  const lecciones = (await getCollection('lecciones', (l) => l.data.taller.id === taller)).sort(
    (a, b) => a.data.modulo - b.data.modulo,
  );
  if (lecciones.length === 0) {
    throw new Error(`El taller "${taller}" está disponible pero no tiene lecciones en src/content/lecciones/${taller}/`);
  }
  return lecciones;
}
