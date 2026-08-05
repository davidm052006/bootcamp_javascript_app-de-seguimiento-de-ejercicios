# Semana 7 — Colecciones: Map, Set, WeakMap, WeakSet

**Concepto practicado:** estructuras de datos nativas de ES6+ y cuándo usar
cada una.

Gestor de entidades que combina las cuatro colecciones según el problema:
- `Map` — almacenamiento principal `id -> entidad`.
- `Set` — nombres únicos (evita duplicados) y categorías globales.
- `WeakSet` — marca de "entidad activa" por referencia de objeto, sin
  impedir que el recolector de basura libere entidades eliminadas.
- `WeakMap` — caché de valores computados por entidad, con la misma
  ventaja de no retener memoria innecesariamente.

## Ejecutar

```bash
cd semana-07-colecciones-map-set
python3 -m http.server 5500
```

Abrir `http://localhost:5500` en el navegador.
