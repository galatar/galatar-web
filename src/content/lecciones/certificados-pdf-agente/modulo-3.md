---
taller: certificados-pdf-agente
modulo: 3
titulo: Pide tu generador de certificados
resumen: Describes el resultado, el agente escribe y prueba el programa, y tú revisas los PDF.
minutos: 20
---

## Describe el resultado, no el código

Con un agente no hace falta explicar cómo programarlo. Basta con describir bien qué quieres obtener y cómo sabrás que está bien. Lo demás lo resuelve él, y además lo prueba.

```text
Quiero un programa generar.py que cree un certificado en PDF
por cada persona de asistentes.xlsx, en A4 horizontal, con:
- el título CERTIFICADO arriba y centrado,
- el texto «Se certifica que [nombre], con DNI [dni], ha completado
  el curso [curso], de [horas] horas de duración, el [fecha]»,
- la fecha en formato español (14/10/2026).
Cada PDF va a la carpeta certificados/ con el nombre certificado-[dni].pdf.

Condiciones:
- Que salte las filas vacías sin dar error.
- Que el español salga bien: tildes, eñes y comillas.
- Que al terminar diga cuántos certificados ha generado.

Cuando lo tengas, ejecútalo, comprueba que hay un PDF por persona
y dime cuál debo abrir para revisarlo.
```

Fíjate en la última frase. Le pides que **compruebe su propio trabajo** antes de dártelo. Un agente puede hacerlo porque ve la carpeta; un chat no.

## Mira cómo trabaja

Mientras trabaja verás cómo escribe el archivo, lo ejecuta y, si algo falla, lee el error y lo corrige. Es normal que dé dos o tres vueltas. No te preocupes por entender cada línea ahora: lo harás en el módulo 5.

## Revisa tú el resultado

El agente comprueba que hay diez PDF, pero no sabe si te gustan. Eso es cosa tuya. Abre tres con calma: uno con nombre largo, uno con tilde y uno con apellido compuesto.

- ¿Están todos los datos y son los de esa persona?
- ¿Se leen bien las tildes y las eñes?
- ¿La fecha sale en formato español?

Si algo no está bien, cuéntalo como lo contarías a un compañero:

```text
Abro certificado-12345678A.pdf y la fecha sale como 2026-10-14 00:00:00.
Quiero 14/10/2026. Corrígelo y vuelve a generarlos.
```

## Que apunte lo que habéis decidido

Cuando el resultado te guste, pide:

```text
Funciona. Guarda esta versión en versiones/generar-v1.py
y apunta en el archivo de instrucciones, en «Decisiones tomadas»,
lo que hemos decidido sobre el formato del certificado.
```

Así, la próxima vez que abras la carpeta, el agente sabrá de dónde partís aunque sea una conversación nueva. En el taller con chat esa memoria la llevabas tú. Aquí la lleva la carpeta.
