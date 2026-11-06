---
taller: certificados-pdf
modulo: 3
titulo: Genera tus primeros PDF
resumen: Instalas dos librerías, ejecutas el programa y ves aparecer los certificados.
minutos: 20
---

## Paso 1. Comprueba que tienes Python

Abre una terminal (en Windows, *PowerShell*; en macOS, *Terminal*) y escribe:

```bash
python3 --version
```

Si ves algo como `Python 3.12.4`, todo bien. Si en Windows no funciona, prueba con `python --version`. Si tampoco, instala Python desde [python.org](https://www.python.org/downloads/) y marca la casilla **Add Python to PATH**.

## Paso 2. Instala las dos librerías

Una librería es código que otra persona ya escribió y que puedes reutilizar. Necesitamos dos: `openpyxl` para leer Excel y `fpdf2` para escribir PDF.

```bash
python3 -m pip install openpyxl fpdf2
```

## Paso 3. El programa

Crea una carpeta, pon dentro tu `asistentes.xlsx` y un archivo de texto llamado `generar.py` con este contenido:

```python
from pathlib import Path

from fpdf import FPDF
from openpyxl import load_workbook

libro = load_workbook("asistentes.xlsx")
hoja = libro.active

carpeta = Path("certificados")
carpeta.mkdir(exist_ok=True)

for nombre, dni, curso, horas, fecha in hoja.iter_rows(min_row=2, values_only=True):
    if not nombre:
        continue

    pdf = FPDF(orientation="landscape", format="A4")
    pdf.add_page()

    pdf.set_font("Helvetica", "B", 32)
    pdf.cell(0, 40, "CERTIFICADO", align="C", new_x="LMARGIN", new_y="NEXT")

    pdf.set_font("Helvetica", "", 16)
    texto = (
        f"Se certifica que {nombre}, con DNI {dni}, "
        f"ha completado el curso «{curso}», de {horas} horas de duración, "
        f"el {fecha:%d/%m/%Y}."
    )
    pdf.multi_cell(0, 10, texto, align="C")

    pdf.output(str(carpeta / f"certificado-{dni}.pdf"))
    print(f"Hecho: {nombre}")
```

## Paso 4. Ejecútalo

En la terminal, entra en la carpeta y lanza el programa:

```bash
python3 generar.py
```

Verás una línea `Hecho:` por cada persona y aparecerá la carpeta `certificados/` con todos los PDF. Ábrelos. Acabas de hacer en un segundo lo que antes te llevaba una tarde.

## Ahora sí: qué hace cada parte

- **`load_workbook`** abre el Excel y **`libro.active`** elige la primera hoja.
- **`carpeta.mkdir(exist_ok=True)`** crea la carpeta de salida, y si ya existe no se queja.
- **`for ... in hoja.iter_rows(min_row=2, ...)`** es el bucle: recorre las filas desde la 2 (la 1 son los encabezados) y en cada vuelta reparte las cinco celdas en cinco nombres.
- **`if not nombre: continue`** salta las filas vacías.
- **`FPDF(...)`, `add_page`, `cell` y `multi_cell`** dibujan la página: un título en una línea y el texto en un párrafo centrado.
- **`f"...{nombre}..."`** es una plantilla de texto: Python sustituye lo que va entre llaves por el valor de cada fila. `{fecha:%d/%m/%Y}` pone la fecha en formato español.
- **`pdf.output(...)`** guarda el archivo con el DNI en el nombre, así nunca se pisan dos certificados.

> **Si algo falla.** El error más común es `FileNotFoundError: asistentes.xlsx`: la terminal no está en la carpeta del programa. El segundo es un error con la fecha: revisa la regla 5 del módulo 2.
