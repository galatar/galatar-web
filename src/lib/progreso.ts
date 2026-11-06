// Progreso de cada taller, guardado en el navegador de quien lo visita.
// Si el almacenamiento no está disponible (modo privado, bloqueado...),
// la web funciona igual: simplemente no recuerda el avance.

const clave = (taller: string) => `galatar:progreso:${taller}`;

export function leerHechos(taller: string): number[] {
  try {
    const crudo = localStorage.getItem(clave(taller));
    const datos = crudo ? JSON.parse(crudo) : [];
    return Array.isArray(datos) ? datos.filter((n) => Number.isInteger(n)) : [];
  } catch {
    return [];
  }
}

export function marcar(taller: string, modulo: number, hecho: boolean): void {
  const actuales = new Set(leerHechos(taller));
  if (hecho) actuales.add(modulo);
  else actuales.delete(modulo);
  try {
    localStorage.setItem(clave(taller), JSON.stringify([...actuales].sort((a, b) => a - b)));
  } catch {
    // Sin almacenamiento: no pasa nada, solo no se recuerda.
  }
  document.dispatchEvent(new CustomEvent('galatar:progreso'));
}
