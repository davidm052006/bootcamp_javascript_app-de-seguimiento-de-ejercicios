# Semana 4 — Gestor de ejercicios modular

**Concepto practicado:** organización de código en módulos ES (`import`/`export`), carga diferida (*lazy loading*) de funcionalidades y persistencia con `localStorage`.

A diferencia de la Semana 3 (clases POO en un único árbol de herencia), esta
semana separa el código por responsabilidad en carpetas: `config`,
`models`, `services`, `ui`, `utils` y `features` (funcionalidades que se
cargan bajo demanda, como exportar a JSON o ver reportes).

## Estructura

```
starter/
├── config.js              # Constantes del dominio
├── main.js                 # Punto de entrada
├── models/BaseExercise.js  # Modelo de ejercicio
├── services/
│   ├── manager.js           # Colección de ejercicios (CRUD + storage)
│   └── storage.js           # Persistencia en localStorage
├── ui/                      # Render y manejo de eventos del DOM
├── utils/                   # Formatters y validadores
└── features/                # export.js y reports.js (carga diferida)
```

## Ejecutar

```bash
cd semana-04-gestor-ejercicios-modular
python3 -m http.server 5500
```

Abrir `http://localhost:5500` en el navegador.
