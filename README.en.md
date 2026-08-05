# JavaScript — Progressive Learning Path

[🇪🇸 Versión en español](README.md)

8 weeks of modern JavaScript (ES2023+) exercises, all built around the same
reference domain: fitness and workout tracking (*FitWell*). Each week
introduces a new language concept applied to a small, functional
in-browser app.

## Problem it addresses

Practicing JavaScript concepts in isolation (OOP, modules, collections,
generators...) makes each exercise feel disconnected. Here every week
shares the same domain (fitness), so each new concept is applied to an
already-familiar problem instead of a generic example, and results are
comparable across weeks.

## What I learned

- Classes, inheritance, private fields (`#`), and encapsulation (week 3).
- Organizing code into ES modules (`import`/`export`) and lazy-loading
  features (week 4).
- Modern array methods and immutability: `toSorted()`, `findLast()`,
  `with()`, `flatMap()` (week 5).
- Regular expressions and sanitizing user input (week 6).
- When to use `Map`, `Set`, `WeakMap`, and `WeakSet` (week 7).
- Generators (`function*`/`yield`) for lazy pagination without loading the
  whole dataset into memory (week 8).

## Technologies used

| Technology | Use |
| --- | --- |
| JavaScript (ES2023+) | Logic for every week, no frameworks |
| HTML5 / CSS3 | UI for each mini app |
| Native ES modules | Code organization (week 4 onward) |
| localStorage | Browser-side data persistence |
| [Graphify](https://github.com/Graphify-Labs/graphify) | Code dependency graph (`graphify-out/`), generated locally with no LLM |

## Results

- 8 independent mini apps, each runnable with a simple static server.
- Reviewing the repo with Graphify and by hand surfaced and fixed several
  real issues: Week 3 (OOP system) was an unsolved template that I
  completed in full; Week 4 had a dead copy of Week 3's code (with an
  unfinished `TODO`) which I removed; Week 3's `index.html` never loaded
  `Person.js` even though `Trainer` and `Member` extend it; and two Week 1
  screenshots didn't match the filenames referenced in its README.

## Structure

```
semana-01-ficha-fitness-html/          # week 1 — fitness card / HTML form
semana-02-gestor-rutinas-crud/         # week 2 — routines CRUD
semana-03-sistema-poo-clases/          # week 3 — OOP class system
semana-04-gestor-ejercicios-modular/   # week 4 — modular exercise manager
semana-05-metodos-array-es2023/        # week 5 — ES2023 array methods
semana-06-validacion-formularios/      # week 6 — form validation
semana-07-colecciones-map-set/         # week 7 — Map/Set collections
semana-08-generadores-paginacion/      # week 8 — generators / pagination
```

Each folder has its own `README.md` with the concept practiced and the
exact command to run it.

## How to run and test

Each week is an independent static page:

```bash
cd semana-03-sistema-poo-clases   # or whichever week you want to try
python3 -m http.server 5500
```

Open `http://localhost:5500` in the browser.

## License

Personal educational project.
