# Semana 5 — FitWell (Resumen)

Este README describe los cambios realizados, la estructura de la semana y cómo probar la entrega de la semana 5.

Descripción breve
------------------
En esta semana consolidamos y mejoramos el trabajo de la semana 4. Se eliminaron duplicados que habían sido copiados por error y se creó un pequeño proyecto independiente en `semana_5/` que implementa los requisitos específicos de la semana 5:

- Rankings por categoría (uso de `flatMap` y `toSorted`).
- Filtro por fechas (uso de `filter`).
- Estadísticas generales (uso de `reduce`: total, promedio, min, max).
- Tendencias temporales (agrupación por fecha y ordenamiento con `toSorted`).
- Uso de `findLast()` / `findLastIndex()` para localizar el último elemento que cumple una condición.
- Actualización sin mutar usando `with()` (inmutabilidad).
- Uso general de ES2023: `flat()`, `flatMap()`, `Array.from()`, `toSorted()`, `toReversed()`, `with()`, `findLast()`, `findLastIndex()`, encadenamiento y `reduce()`.

Cambios operativos
-------------------
- Se eliminaron archivos duplicados traídos de la semana 4 (carpeta `starter/` y `js/` duplicadas). Esto deja el contenido de la semana 5 limpio y enfocado.
- Se movió el contenido creado inicialmente en `3-proyecto/` a la raíz `semana_5/` y se eliminó la carpeta `3-proyecto/` vacía.

Estructura final de `semana_5/`
--------------------------------

- `index.html` — Interfaz de usuario: filtros, paneles de estadísticas, ranking y agrupaciones.
- `styles.css` — Estilos del dashboard.
- `starter/`
  - `data.js` — Dataset de ejemplo (>= 10 registros). Campos: id, name, type, duration, category, date, tags.
  - `script.js` — Lógica de la semana 5. Contiene implementaciones que usan las APIs ES2023 solicitadas y funciones de render.
- `RESUMEN-CLASES.md` — Nota de la semana (preexistente).

Cómo ejecutar / probar
----------------------
Desde la carpeta `semana_5/` sirve un servidor estático y abre el navegador (ejemplo con Python):

```bash
cd "/home/david/Documentos/TRIMESTRE 3/bc_javascrypt/proyecto_semanas/bootcamp_javascript_app-de-seguimiento-de-ejercicios/semana_5"
python3 -m http.server 5501
```

Abrir en el navegador: http://localhost:5501

Pruebas rápidas
---------------
- Ver el panel de estadísticas (total, suma, promedio, min, max).
- Ver ranking por categoría (ordenado por frecuencia).
- Ver agrupación temporal por fecha (YYYY-MM-DD) y conteos.
- Aplicar filtros: rango de fechas y duración mínima.
- Resetear filtros para volver al dataset completo.
- Abrir la consola y ejecutar `__week5` para acceder a helpers y datos (por ejemplo `__week5.SAMPLE`).

Resumen técnico — puntos clave implementados
-------------------------------------------
- `Array.from()` se usa para crear copias del dataset de ejemplo.
- `flatMap()` se usa para extraer y normalizar categorías para generar rankings.
- `toSorted()` se usa para ordenar resultados sin mutar los arrays originales.
- `findLast()` / `findLastIndex()` se usan para localizar el último elemento que cumple condiciones (ej. duración >= 40min).
- `with()` se usa en `script.js` para mostrar una actualización inmutable de un elemento en el array.
- `reduce()` se utiliza para computar estadísticas (suma, min, max) y para agrupar por fecha.
- Encadenamiento (chaining) de métodos array para realizar transformaciones concisas y declarativas.

Notas y siguientes pasos sugeridos
--------------------------------
- Puedo integrar persistencia (localStorage) para guardar filtros o datos creados.
- Puedo añadir export/import de datos en `semana_5/` (como en la semana 4) para facilitar pruebas y respaldo.
- Puedo añadir visualizaciones sencillas (chart.js o SVG) para mostrar tendencias temporales de forma gráfica.

Si quieres que implemente alguno de los siguientes pasos: persistencia, export/import, o gráficos, dímelo y lo hago ahora.

Fin del README — Semana 5
