---
taller: certificados-pdf-chat
modulo: 2
titulo: Instala Python con ayuda del chat
resumen: Preparas la carpeta, instalas Python guiado por la IA y creas tu Excel de prueba con un primer programa.
minutos: 20
---

> **Si el chat te dice que no puedes seguir.** Si en alguno de los pasos tu chat de IA te dice que no puedes seguir por falta de tokens o porque has llegado al límite de mensajes, no has hecho nada mal: los planes gratuitos tienen un tope diario. Puedes esperar unas horas a que se renueve o seguir en otro chat gratuito. Para no empezar de cero, pega en el nuevo chat la petición del paso en el que estabas y cuéntale en una frase lo que ya tienes hecho, por ejemplo: «Ya tengo Python instalado; me falta instalar openpyxl y fpdf2».

## Paso 1. Crea tu carpeta de trabajo

Crea una carpeta llamada `certificados-ia` en un sitio fácil de encontrar, por ejemplo en *Documentos*. Todo el taller ocurre ahí dentro.

## Paso 2. Pide ayuda para instalar Python

Abre tu chat de IA y copia esta petición. Cambia lo que va entre corchetes:

```text
Soy principiante y nunca he programado. Uso [Windows 11 / macOS / Linux].
Quiero instalar Python en mi ordenador para ejecutar pequeños programas
que lean archivos Excel y generen PDF.

Guíame paso a paso, de uno en uno: dame solo el primer paso y espera
a que te diga qué ha pasado antes de darme el siguiente.
Explícame en una frase qué hace cada comando antes de que lo ejecute.
Al final quiero comprobar que Python funciona y tener instaladas
las librerías openpyxl y fpdf2.
```

Fíjate en la frase **«dame solo el primer paso y espera»**. Sin ella, el chat te soltará diez pasos de golpe y, si el tercero falla, los siete siguientes ya no sirven.

Ve contándole qué ves en cada paso. Si aparece un mensaje en inglés que no entiendes, cópialo entero y pégalo. No hace falta que lo entiendas tú.

## Paso 3. Abre la terminal en tu carpeta

El chat te habrá enseñado a abrir la terminal. Ahora necesitas que esté **dentro** de tu carpeta, porque ahí buscará los archivos. Pídeselo así:

```text
Ya tengo Python funcionando. ¿Cómo abro la terminal directamente
en mi carpeta Documentos/certificados-ia y cómo compruebo que estoy en ella?
```

## Paso 4. Tu primer programa: datos de prueba

Antes de los certificados, necesitas un Excel con personas inventadas. En lugar de escribirlo a mano, pide al chat un programa que lo cree:

```text
Escríbeme un programa en Python llamado crear_datos.py que cree
el archivo asistentes.xlsx con 10 personas inventadas.

Columnas, en este orden y con estos nombres en la fila 1:
nombre, dni, curso, horas, fecha

- Nombres y apellidos españoles variados, alguno con tilde y alguno compuesto.
- DNI con formato válido (8 cifras y letra), inventados.
- El mismo curso, horas y fecha para todos. La fecha como fecha de Excel.
- Usa openpyxl.

Dame el código completo y dime cómo ejecutarlo.
```

Crea un archivo de texto llamado `crear_datos.py` en tu carpeta, pega el código y guárdalo. Después ejecútalo con el comando que te indique el chat (será parecido a `python crear_datos.py`).

> **Para crear el archivo `.py`.** En Windows, usa el Bloc de notas y elige *Todos los archivos* al guardar, o Windows le añadirá `.txt` al final. En macOS, TextEdit necesita *Formato → Convertir a texto normal*. Mejor aún: instala Visual Studio Code, que es gratis, y pregunta al chat cómo usarlo.

Abre `asistentes.xlsx`. Si ves diez personas inventadas, acabas de ejecutar tu primer programa, escrito por una IA siguiendo tus instrucciones. Así va a ser el resto del taller.

## Si algo falla

Copia el error completo, desde la primera línea hasta la última, y pégalo en el chat con esta frase:

```text
Al ejecutarlo me sale este error. ¿Qué significa y qué hago?
[pega aquí el error]
```
