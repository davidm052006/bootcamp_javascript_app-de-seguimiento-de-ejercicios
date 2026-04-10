# Gestor de Rutinas de Ejercicios - Semana 2

## 📋 Información

- **Proyecto**: CRUD de Rutinas de Ejercicios
- **Semana**: 2
- **Dominio**: Fitness y Gestión de Entrenamientos
- **Nivel**: Intermedio-Avanzado

## 🎯 Descripción

Aplicación web completa para gestionar rutinas de ejercicios con funcionalidades CRUD (Create, Read, Update, Delete), filtros avanzados, búsqueda en tiempo real, y persistencia de datos usando localStorage.

### Funcionalidades Principales

#### ✅ CRUD Completo

- **Crear**: Agregar nuevas rutinas con nombre, categoría, nivel, duración y descripción
- **Leer**: Visualizar todas las rutinas en tarjetas organizadas
- **Actualizar**: Editar rutinas existentes
- **Eliminar**: Borrar rutinas con confirmación

#### ✅ Gestión de Estado

- Activar/Desactivar rutinas
- Filtrar por estado (activas/inactivas)
- Persistencia automática en localStorage

#### ✅ Filtros y Búsqueda

- Búsqueda por texto (nombre y descripción)
- Filtro por categoría (Fuerza, Cardio, Flexibilidad, HIIT)
- Filtro por nivel (Principiante, Intermedio, Avanzado)
- Filtro por estado (Todas, Activas, Inactivas)
- Combinación de múltiples filtros

#### ✅ Estadísticas en Tiempo Real

- Total de rutinas
- Rutinas activas
- Rutinas inactivas
- Actualización automática

#### ✅ Persistencia

- Guardado automático en localStorage
- Carga automática al iniciar
- No se pierden datos al cerrar el navegador

## 📚 Conceptos ES2023 Implementados

### ✅ Inmutabilidad

```javascript
// Nunca mutar el estado directamente
state = {
  ...state,
  routines: [...state.routines, newRoutine],
};
```

### ✅ Spread/Rest Operators

```javascript
// Copiar y actualizar objetos
const updated = { ...routine, active: false };

// Copiar y agregar a arrays
const newArray = [...oldArray, newItem];
```

### ✅ Array Methods Modernos

```javascript
// map: Transformar elementos
const html = routines.map(r => renderCard(r));

// filter: Filtrar elementos
const activas = routines.filter(r => r.active);

// reduce: Acumular valores
const stats = routines.reduce((acc, r) => {...}, {});

// find: Encontrar elemento
const routine = routines.find(r => r.id === id);
```

### ✅ Funciones Puras

```javascript
// Sin efectos secundarios, siempre retorna nuevo estado
const addRoutine = (state, routine) => ({
  ...state,
  routines: [...state.routines, routine],
});
```

### ✅ Arrow Functions

```javascript
const createRoutine = (name, category) => ({
  id: Date.now(),
  name,
  category,
});
```

### ✅ Destructuring

```javascript
const { routines, filters } = state;
const { name, category, level } = routine;
```

### ✅ Template Literals

```javascript
const html = `
    <div class="card">
        <h3>${routine.name}</h3>
        <p>${routine.description}</p>
    </div>
`;
```

### ✅ Short Property Names

```javascript
const routine = {
  name, // En vez de name: name
  category, // En vez de category: category
  level,
};
```

### ✅ Ternary Operators

```javascript
const status = routine.active ? "Activa" : "Inactiva";
const cardClass = routine.active ? "" : "inactive";
```

## 🛠️ Tecnologías

- HTML5 semántico
- CSS3 con variables y gradientes
- JavaScript ES2023 (Vanilla JS - sin frameworks)
- localStorage API

## 📁 Estructura del Proyecto

```
semana_2/
├── index.html                    # Estructura HTML
├── script.js                     # Lógica JavaScript (CRUD + Filtros)
├── styles.css                    # Estilos CSS
├── README.md                     # Este archivo
└── EXPLICACION-CONCEPTOS.md      # Guía detallada de conceptos
```

## 🚀 Cómo Ejecutar

### Opción 1: Abrir directamente

```bash
# Navega a la carpeta
cd semana_2

# Abre index.html en tu navegador
firefox index.html
```

### Opción 2: Con Live Server

1. Click derecho en `index.html`
2. "Open with Live Server"

### Opción 3: Servidor local

```bash
cd semana_2
python3 -m http.server 8000
# Abre http://localhost:8000
```

## 💡 Cómo Usar la Aplicación

### Crear una Rutina

1. Completa el formulario en la parte superior
2. Todos los campos marcados con \* son obligatorios
3. Click en "Crear Rutina"

### Editar una Rutina

1. Click en el botón "Editar" de la rutina
2. El formulario se llenará con los datos actuales
3. Modifica lo que necesites
4. Click en "Actualizar Rutina"

### Eliminar una Rutina

1. Click en el botón "Eliminar"
2. Confirma la acción

### Activar/Desactivar

1. Click en "Activar" o "Desactivar"
2. El cambio es inmediato

### Filtrar y Buscar

1. Usa la barra de búsqueda para buscar por texto
2. Usa los selectores para filtrar por estado, categoría o nivel
3. Los filtros se pueden combinar

## 🎨 Características de Diseño

### Tema Claro/Oscuro

- Botón flotante en la esquina inferior derecha
- Persistencia de preferencia
- Transiciones suaves

### Colores

- **Modo Claro**: Violeta y azul pastel
- **Modo Oscuro**: Amarillo y naranja vibrante
- Misma paleta que Semana 1

### Responsive

- Diseño adaptable a móviles
- Grid flexible
- Formularios optimizados

## 📊 Arquitectura del Código

### Patrón de Estado Inmutable

```
Estado Global (state)
    ↓
Función Pura (calcula nuevo estado)
    ↓
Reasignación (state = newState)
    ↓
Render (actualiza UI)
    ↓
localStorage (persiste)
```

### Separación de Responsabilidades

1. **Gestión de Estado**: Funciones puras que calculan nuevo estado
2. **Filtrado**: Funciones puras para filtrar datos
3. **Estadísticas**: Funciones puras para calcular stats
4. **Persistencia**: Funciones para localStorage
5. **Renderizado**: Funciones para actualizar DOM
6. **Event Handlers**: Funciones que coordinan todo

## 🎓 Conceptos Avanzados

### Inmutabilidad

El estado nunca se modifica directamente. Siempre se crea una copia nueva.

**Ventajas:**

- Predecibilidad
- Fácil debugging
- Mejor performance en frameworks
- Menos bugs

### Funciones Puras

Funciones sin efectos secundarios que siempre retornan lo mismo con los mismos inputs.

**Ventajas:**

- Fáciles de testear
- Fáciles de entender
- Reutilizables
- Componibles

### Composición de Funciones

Combinar funciones pequeñas para crear funcionalidades complejas.

```javascript
const result = applyAllFilters(state.routines, state.filters);
```

## 🔍 Detalles Técnicos

### IDs Únicos

```javascript
id: Date.now(); // Timestamp como ID único
```

### Timestamps

```javascript
createdAt: new Date().toISOString(); // ISO 8601 format
```

### Búsqueda Case-Insensitive

```javascript
const term = searchTerm.toLowerCase();
routine.name.toLowerCase().includes(term);
```

### Validación de Formulario

- HTML5 validation (required, min, max)
- Trim de espacios en blanco
- Conversión de tipos (parseInt)

## 📈 Estadísticas Implementadas

1. **Total de Rutinas**: `routines.length`
2. **Rutinas Activas**: `filter(r => r.active).length`
3. **Rutinas Inactivas**: `filter(r => !r.active).length`
4. **Por Categoría**: `reduce()` para agrupar

## 🎯 Autoevaluación

| Criterio            | %    | Justificación                                                |
| ------------------- | ---- | ------------------------------------------------------------ |
| **Funcionalidad**   | 100% | CRUD completo, filtros, búsqueda, estadísticas, persistencia |
| **Inmutabilidad**   | 100% | Estado nunca se muta directamente                            |
| **Array Methods**   | 100% | Uso intensivo de map, filter, reduce, find                   |
| **Funciones Puras** | 100% | Todas las funciones de estado son puras                      |
| **Código Limpio**   | 95%  | Bien organizado, comentado, modular                          |
| **UI/UX**           | 95%  | Diseño moderno, responsive, feedback visual                  |

### **Total Estimado**: 98%

## 🚀 Posibles Mejoras Futuras

- [ ] Ordenamiento (por nombre, fecha, duración)
- [ ] Exportar/Importar datos (JSON)
- [ ] Duplicar rutinas
- [ ] Categorías personalizadas
- [ ] Historial de cambios (undo/redo)
- [ ] Drag & drop para reordenar
- [ ] Compartir rutinas (URL)
- [ ] Modo offline completo (Service Worker)

## 📝 Notas de Aprendizaje

### Diferencias con Semana 1

- **Semana 1**: Visualización de datos estáticos
- **Semana 2**: Gestión completa de datos dinámicos

### Conceptos Nuevos

- Inmutabilidad
- Funciones puras
- CRUD operations
- Filtros complejos
- Composición de funciones

### Tiempo de Desarrollo

- Estimado: 4-6 horas
- Incluye: Diseño, implementación, testing, documentación

---

**Fecha de última actualización**: 15/02/2026  
**Versión**: 1.0.0  
**Estado**: ✅ Completado
