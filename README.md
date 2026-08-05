# JavaScript — Ruta de aprendizaje progresiva

[🇬🇧 English version](README.en.md)

8 semanas de ejercicios de JavaScript moderno (ES2023+), todos sobre el
mismo dominio de referencia: seguimiento de ejercicios y fitness
(*FitWell*). Cada semana introduce un concepto nuevo del lenguaje aplicado
a una mini-aplicación funcional en el navegador.

## Problema que busca resolver

Practicar conceptos de JavaScript por separado (POO, módulos, colecciones,
generadores...) sin un hilo conductor hace que cada ejercicio se sienta
aislado. Aquí todas las semanas comparten el mismo dominio (fitness), así
que cada concepto nuevo se aplica a un problema ya familiar en vez de a un
ejemplo genérico, y los resultados son comparables entre sí.

## Qué aprendí

- Clases, herencia, campos privados (`#`) y encapsulación (semana 3).
- Organización en módulos ES (`import`/`export`) y carga diferida de
  funcionalidades (semana 4).
- Métodos de array modernos e inmutabilidad: `toSorted()`, `findLast()`,
  `with()`, `flatMap()` (semana 5).
- Expresiones regulares y sanitización de datos de usuario (semana 6).
- Cuándo usar `Map`, `Set`, `WeakMap` y `WeakSet` (semana 7).
- Generadores (`function*`/`yield`) para paginación perezosa sin cargar
  todo el dataset en memoria (semana 8).

## Tecnologías usadas

| Tecnología | Uso |
| --- | --- |
| JavaScript (ES2023+) | Lógica de cada semana, sin frameworks |
| HTML5 / CSS3 | Interfaz de cada mini-aplicación |
| Módulos ES nativos | Organización de código (semanas 4 en adelante) |
| localStorage | Persistencia de datos en el navegador |
| [Graphify](https://github.com/Graphify-Labs/graphify) | Grafo de dependencias del código (`graphify-out/`), generado localmente sin LLM |

## Resultados

- 8 mini-aplicaciones independientes, cada una ejecutable con un simple
  servidor estático.
- Al revisar el repositorio con Graphify y a mano encontré y corregí varios
  problemas reales: la Semana 3 (sistema POO) era una plantilla sin
  resolver que completé por completo; la Semana 4 tenía una copia muerta
  del código de la Semana 3 (con un `TODO` sin terminar) que eliminé;
  `index.html` de la Semana 3 nunca cargaba `Person.js` pese a que
  `Trainer` y `Member` heredan de esa clase, y dos capturas de pantalla en
  la Semana 1 no coincidían con los nombres de archivo del README.

## Estructura

```
semana-01-ficha-fitness-html/
semana-02-gestor-rutinas-crud/
semana-03-sistema-poo-clases/
semana-04-gestor-ejercicios-modular/
semana-05-metodos-array-es2023/
semana-06-validacion-formularios/
semana-07-colecciones-map-set/
semana-08-generadores-paginacion/
```

Cada carpeta tiene su propio `README.md` con el concepto practicado y el
comando exacto para ejecutarla.

## Cómo iniciar y probar

Cada semana es una página estática independiente:

```bash
cd semana-03-sistema-poo-clases   # o la semana que quieras probar
python3 -m http.server 5500
```

Abrir `http://localhost:5500` en el navegador.

## Licencia

Proyecto educativo de uso personal.
