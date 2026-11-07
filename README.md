# galatar-web

Web de Galatar (galatar.com): talleres cortos de Excel, Python e IA para el trabajo de oficina.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Estructura

- `src/pages/` — portada y rutas dinámicas de los talleres (`talleres/[taller]/`).
- `src/content/talleres/<taller>.yaml` — ficha de cada taller (`estado: disponible` o `proximamente`). El nombre del archivo es el slug.
- `src/content/lecciones/<taller>/modulo-N.md` — las lecciones (frontmatter: taller, modulo, titulo, resumen, minutos).
- `src/lib/talleres.ts` — consultas y URLs de talleres y lecciones.

Para añadir un taller basta con crear su ficha YAML y sus lecciones; no hay que tocar las páginas.
- `src/lib/progreso.ts` — progreso del alumno, guardado solo en su navegador.
- `public/descargas/` — recursos descargables de los talleres (pendiente).

Despliegue: Vercel, a partir de la rama `main`.
