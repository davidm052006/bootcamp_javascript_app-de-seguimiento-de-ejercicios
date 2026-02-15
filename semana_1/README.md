# Ficha de Fitness & Ejercicios - [David Mateo Paredes Ramirez]

## 📋 Información

- **Nombre**: [David Mateo Paredes Ramirez]
- **Fecha**: [15/02/2026]
- **Dominio Asignado**: Fitness y Seguimiento de Ejercicios
- **Entidad Principal**: Rutina de Ejercicios Full Body

## 🎯 Descripción

Aplicación web interactiva para el seguimiento de rutinas de ejercicios. Permite visualizar información detallada de entrenamientos, incluyendo ejercicios individuales con sus intensidades y calorías, estadísticas calculadas en tiempo real, y un sistema de temas claro/oscuro con persistencia de preferencias.

### Características principales:

- Visualización de rutina de ejercicios con información detallada
- Sistema de acordeón para mostrar/ocultar ejercicios y estadísticas
- Cálculo automático de estadísticas (intensidad promedio, calorías totales)
- Tema claro/oscuro con animaciones suaves
- Persistencia de preferencias usando localStorage
- Diseño responsive y moderno

## 📚 Conceptos ES2023 Aplicados

### ✅ Implementados

- [x] **Variables con let/const**: Uso exclusivo de `const` para objetos y funciones, evitando `var`
- [x] **Template literals**: Interpolación de variables en strings con backticks (\`\`)
- [x] **Arrow functions**: Todas las funciones usan sintaxis de flecha (`() => {}`)
- [x] **Destructuring**: Extracción de propiedades de objetos (`const { name, age } = person`)
- [x] **Array methods modernos**: `map()`, `reduce()`, `filter()` para procesamiento de datos
- [x] **Spread operator**: Uso implícito en manipulación de arrays
- [x] **Default parameters**: Valores por defecto en localStorage
- [x] **Ternary operators**: Operadores ternarios para lógica condicional

### ⚠️ No aplicables en este proyecto

- [ ] **Optional chaining (?.)**: No necesario (no hay objetos anidados opcionales)
- [ ] **Nullish coalescing (??)**: Usamos `||` que es suficiente para este caso

## 🛠️ Tecnologías Utilizadas

- HTML5 semántico
- CSS3 con variables CSS y gradientes
- JavaScript ES2023 (Vanilla JS - sin librerías)
- localStorage API
- Clipboard API

## 🚀 Cómo Ejecutar

### Opción 1: Abrir directamente

1. Navega a la carpeta `semana_1/`
2. Abre `index.html` en tu navegador

### Opción 2: Con Live Server (recomendado)

1. Instala la extensión "Live Server" en VS Code
2. Click derecho en `index.html`
3. Selecciona "Open with Live Server"

### Opción 3: Servidor local

```bash
cd semana_1
python3 -m http.server 8000
# Abre http://localhost:8000 en tu navegador
```

## 💡 Funcionalidades Destacadas

### 1. Renderizado Dinámico

```javascript
// Uso de map() para transformar datos en HTML
const exercisesHTML = exercises
  .map((exercise) => {
    const { name, type, intensity, calories } = exercise;
    return `<div class="exercise-item">...</div>`;
  })
  .join("");
```

### 2. Cálculo de Estadísticas

```javascript
// Uso de reduce() para sumar calorías
const totalCalories = exercises.reduce((sum, exercise) => {
  return sum + exercise.calories;
}, 0);
```

### 3. Persistencia de Datos

```javascript
// localStorage para guardar preferencias
localStorage.setItem("theme", isDark ? "dark" : "light");
const savedTheme = localStorage.getItem("theme") || "light";
```

### 4. Animaciones Suaves

```css
/* Transiciones con cubic-bezier para efecto profesional */
transition: background 0.6s cubic-bezier(0.4, 0, 0.2, 1);
```

## 📸 Screenshots

### Modo Claro

![Modo Claro](screenshots/light-mode.png)
_Interfaz con tema claro y colores pastel suaves_

### Modo Oscuro

![Modo Oscuro](screenshots/dark-mode.png)
_Interfaz con tema oscuro y colores vibrantes_

## 🎯 Autoevaluación

### Criterios de Evaluación

| Criterio                  | Porcentaje | Justificación                                                                                                                            |
| ------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Funcionalidad**         | 95%        | Todas las funcionalidades implementadas y funcionando correctamente. Sistema de acordeón, cálculo de estadísticas, persistencia de tema. |
| **Código ES2023**         | 100%       | Uso completo de características modernas: arrow functions, destructuring, template literals, array methods (map, reduce).                |
| **Código Limpio**         | 90%        | Código bien estructurado, comentado profesionalmente, funciones con responsabilidad única, nombres descriptivos.                         |
| **Adaptación al Dominio** | 95%        | Perfectamente adaptado al dominio de fitness: ejercicios, intensidades, calorías, estadísticas relevantes.                               |
| **UI/UX**                 | 90%        | Diseño moderno, responsive, animaciones suaves, tema claro/oscuro, feedback visual (toast notifications).                                |

### **Total Estimado**: 94%

## 🔍 Detalles Técnicos

### Conceptos Avanzados Implementados

1. **Destructuring anidado**: Extracción de propiedades de objetos anidados
2. **Composición de funciones**: Funciones pequeñas y reutilizables
3. **Event delegation**: Manejo eficiente de eventos
4. **CSS Variables**: Temas dinámicos con variables CSS
5. **Cubic-bezier**: Animaciones con curvas de aceleración personalizadas

### Buenas Prácticas Aplicadas

- ✅ Separación de responsabilidades (HTML, CSS, JS)
- ✅ Código DRY (Don't Repeat Yourself)
- ✅ Nombres descriptivos y semánticos
- ✅ Comentarios profesionales sin emojis excesivos
- ✅ Manejo de errores en operaciones asíncronas
- ✅ Accesibilidad básica (labels, contraste de colores)

## 📝 Notas Adicionales

### Aprendizajes Clave

- Renderizado dinámico con JavaScript vanilla
- Manipulación del DOM de forma eficiente
- Uso de localStorage para persistencia
- Implementación de animaciones CSS suaves
- Estructuración de código profesional

### Posibles Mejoras Futuras

- [ ] Agregar más rutinas de ejercicios
- [ ] Sistema de login/registro
- [ ] Historial de entrenamientos
- [ ] Gráficos de progreso
- [ ] Exportar datos a PDF
- [ ] PWA (Progressive Web App)

## 🤝 Créditos

- Desarrollado como parte del Bootcamp de JavaScript
- Conceptos aplicados: ES2023, DOM Manipulation, localStorage API
- Diseño inspirado en aplicaciones modernas de fitness

---

**Fecha de última actualización**: [15/02/2026]  
**Versión**: 1.0.0  
**Estado**: ✅ Completado
