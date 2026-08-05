# Semana 8 — Generadores y paginación perezosa

**Concepto practicado:** `function*` / `yield` para generar datos bajo
demanda, sin construir el array completo en memoria.

`dataGenerator()` produce elementos uno a uno de forma perezosa; la clase
`Paginator` consume el generador solo hasta donde hace falta para servir la
página pedida (`getPage()`, `next()`, `previous()`), cacheando lo ya
generado para no volver a calcularlo.

## Ejecutar

```bash
cd semana-08-generadores-paginacion
python3 -m http.server 5500
```

Abrir `http://localhost:5500` en el navegador.
