---
taller: certificados-pdf
modulo: 2
titulo: Prepara tus datos en Excel
resumen: Cinco reglas para que un programa entienda tu hoja sin sorpresas.
minutos: 15
---

## Una hoja que un programa pueda leer

Un programa no ve tu Excel como lo ves tú. No entiende los colores, las celdas combinadas ni los títulos decorativos. Lee filas y columnas. Si las preparas bien, el resto es fácil.

Esta es la hoja de ejemplo del taller, `asistentes-cursos.xlsx`:

| nombre | dni | curso | horas | fecha |
|---|---|---|---|---|
| Lucía Martín Ortega | 12345678A | Excel avanzado | 20 | 14/10/2026 |
| Javier Ruiz Campos | 87654321B | Excel avanzado | 20 | 14/10/2026 |
| Carmen Núñez Gil | 11223344C | Excel avanzado | 20 | 14/10/2026 |
| Andrés Hurtado González | 11111111H | Word intermedio | 15 | 01/10/2026 |

## Las cinco reglas

1. **Los encabezados van en la fila 1.** Nada de títulos ni logotipos encima de la tabla.
2. **Los dni no pueden estar duplicados.** Esta versión solo permite un certificado por persona.
3. **Sin celdas combinadas.** Cada dato en su celda.
4. **Sin filas vacías en medio.** Una fila vacía al final no molesta; en medio, sí.
5. **Las fechas, como fechas.** Escribe `14/10/2026` y comprueba que Excel la alinea a la derecha. Si la alinea a la izquierda, la está tratando como texto.

## Comprueba tu hoja

Antes de seguir, repasa esto:

- ¿Están las cinco columnas en este orden: `nombre`, `dni`, `curso`, `horas`, `fecha`?
- ¿Hay algún DNI vacío? 
- ¿Los nombres tienen espacios de más al principio o al final? La función `=ESPACIOS(A2)` los quita.

> **Ojo con los datos personales.** Un DNI es un dato personal. Trabaja con una copia de la hoja, guárdala en una carpeta que solo veas tú y no la envíes por correo sin necesidad.

## Ejercicio

Descarga la plantilla del taller (módulo 5) o crea tu propia hoja con cinco personas inventadas. La usaremos en el módulo siguiente.
