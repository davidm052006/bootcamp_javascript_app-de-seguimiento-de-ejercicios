# 📚 Explicación de Conceptos - Semana 2

## 🎯 Objetivo

Crear una aplicación CRUD completa usando JavaScript puro (ES2023) con énfasis en:

- Inmutabilidad
- Funciones puras
- Array methods modernos
- Persistencia con localStorage

---

## 1️⃣ INMUTABILIDAD

### ¿Qué es?

**Nunca modificar el estado directamente**, siempre crear una copia nueva.

### ❌ Forma INCORRECTA (Mutación):

```javascript
// Esto MUTA el array original
state.routines.push(newRoutine);

// Esto MUTA el objeto
routine.active = false;
```

### ✅ Forma CORRECTA (Inmutabilidad):

```javascript
// Crear un NUEVO array con el elemento agregado
state = {
  ...state,
  routines: [...state.routines, newRoutine],
};

// Crear un NUEVO objeto con la propiedad actualizada
routine = { ...routine, active: false };
```

### ¿Por qué es importante?

1. **Predecibilidad**: Sabes exactamente qué cambió
2. **Debugging**: Puedes ver el estado anterior
3. **Performance**: React y otros frameworks lo necesitan
4. **Menos bugs**: No hay efectos secundarios inesperados

---

## 2️⃣ SPREAD OPERATOR (...)

### Copiar Arrays

```javascript
const original = [1, 2, 3];
const copia = [...original]; // [1, 2, 3]
const conNuevo = [...original, 4]; // [1, 2, 3, 4]
```

### Copiar Objetos

```javascript
const persona = { nombre: "Ana", edad: 25 };
const copia = { ...persona }; // Copia exacta
const actualizada = { ...persona, edad: 26 }; // Cambia solo edad
```

### Combinar

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const combinado = [...arr1, ...arr2]; // [1, 2, 3, 4]

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const combinado = { ...obj1, ...obj2 }; // { a: 1, b: 2 }
```

---

## 3️⃣ ARRAY METHODS

### map() - Transformar cada elemento

```javascript
// Transforma cada rutina en HTML
const html = routines.map(
  (routine) => `
    <div>${routine.name}</div>
`,
);

// Extrae solo los nombres
const nombres = routines.map((r) => r.name);
```

**Cuándo usar**: Cuando necesitas transformar cada elemento del array.

### filter() - Filtrar elementos

```javascript
// Solo rutinas activas
const activas = routines.filter((r) => r.active);

// Solo rutinas de fuerza
const fuerza = routines.filter((r) => r.category === "fuerza");

// Eliminar una rutina (crear nuevo array sin ella)
const sinEliminada = routines.filter((r) => r.id !== idAEliminar);
```

**Cuándo usar**: Cuando necesitas un subconjunto del array.

### reduce() - Acumular un valor

```javascript
// Contar por categoría
const stats = routines.reduce((acc, routine) => {
  const cat = routine.category;
  acc[cat] = (acc[cat] || 0) + 1;
  return acc;
}, {});
// Resultado: { fuerza: 3, cardio: 2, ... }

// Sumar duraciones
const totalMinutos = routines.reduce((sum, r) => sum + r.duration, 0);
```

**Cuándo usar**: Cuando necesitas calcular un único valor a partir del array.

### find() - Encontrar un elemento

```javascript
// Buscar rutina por ID
const rutina = routines.find((r) => r.id === 123);
```

**Cuándo usar**: Cuando necesitas encontrar UN elemento específico.

---

## 4️⃣ FUNCIONES PURAS

### ¿Qué es una función pura?

1. **Mismo input → Mismo output**: Siempre retorna lo mismo con los mismos argumentos
2. **Sin efectos secundarios**: No modifica nada fuera de la función

### ❌ Función IMPURA:

```javascript
let total = 0;

function sumar(n) {
  total += n; // Modifica variable externa
  return total;
}
```

### ✅ Función PURA:

```javascript
function sumar(total, n) {
  return total + n; // Solo retorna, no modifica nada
}
```

### Ejemplo en nuestra app:

```javascript
// Función pura: no modifica state, retorna uno nuevo
const addRoutine = (currentState, routine) => {
  return {
    ...currentState,
    routines: [...currentState.routines, routine],
  };
};

// Uso:
state = addRoutine(state, newRoutine); // Reasignamos el resultado
```

---

## 5️⃣ COMPOSICIÓN DE FUNCIONES

### Aplicar múltiples filtros en secuencia

```javascript
const applyAllFilters = (routines, filters) => {
  let filtered = routines;
  filtered = filterBySearch(filtered, filters.search);
  filtered = filterByStatus(filtered, filters.status);
  filtered = filterByCategory(filtered, filters.category);
  filtered = filterByLevel(filtered, filters.level);
  return filtered;
};
```

Cada función recibe el resultado de la anterior. Es como una cadena de producción.

---

## 6️⃣ CRUD OPERATIONS

### Create (Crear)

```javascript
const createRoutine = (name, category, level, duration, description) => {
  return {
    id: Date.now(),
    name,
    category,
    level,
    duration,
    description,
    active: true,
    createdAt: new Date().toISOString(),
  };
};

// Agregar al estado
state = addRoutine(state, newRoutine);
```

### Read (Leer)

```javascript
// Leer todas
const allRoutines = state.routines;

// Leer una específica
const routine = state.routines.find((r) => r.id === id);

// Leer con filtros
const filtered = applyAllFilters(state.routines, state.filters);
```

### Update (Actualizar)

```javascript
const updateRoutine = (currentState, id, updates) => {
  return {
    ...currentState,
    routines: currentState.routines.map(
      (routine) =>
        routine.id === id
          ? { ...routine, ...updates } // Actualiza esta
          : routine, // Mantiene las demás
    ),
  };
};

// Uso
state = updateRoutine(state, 123, { name: "Nuevo nombre" });
```

### Delete (Eliminar)

```javascript
const deleteRoutine = (currentState, id) => {
  return {
    ...currentState,
    routines: currentState.routines.filter((r) => r.id !== id),
  };
};

// Uso
state = deleteRoutine(state, 123);
```

---

## 7️⃣ PERSISTENCIA - localStorage

### Guardar

```javascript
const saveToLocalStorage = (state) => {
  localStorage.setItem("key", JSON.stringify(state));
};
```

### Cargar

```javascript
const loadFromLocalStorage = () => {
  const saved = localStorage.getItem("key");
  return saved ? JSON.parse(saved) : null;
};
```

### ¿Por qué JSON.stringify/parse?

localStorage solo guarda strings. Necesitamos convertir objetos a string y viceversa.

---

## 8️⃣ FILTROS Y BÚSQUEDA

### Búsqueda de texto

```javascript
const filterBySearch = (routines, searchTerm) => {
  if (!searchTerm) return routines;

  const term = searchTerm.toLowerCase();
  return routines.filter(
    (routine) =>
      routine.name.toLowerCase().includes(term) ||
      routine.description.toLowerCase().includes(term),
  );
};
```

### Filtro por propiedad

```javascript
const filterByCategory = (routines, category) => {
  if (category === "all") return routines;
  return routines.filter((routine) => routine.category === category);
};
```

---

## 9️⃣ ESTADÍSTICAS

### Contar elementos

```javascript
const total = routines.length;
const activas = routines.filter((r) => r.active).length;
```

### Agrupar con reduce

```javascript
const statsByCategory = routines.reduce((stats, routine) => {
  const cat = routine.category;
  stats[cat] = (stats[cat] || 0) + 1;
  return stats;
}, {});
```

---

## 🔟 PATRÓN DE ACTUALIZACIÓN

### Flujo completo:

```
1. Usuario hace algo (click, input, etc.)
   ↓
2. Event handler se ejecuta
   ↓
3. Función pura calcula nuevo estado
   ↓
4. Reasignar estado: state = newState
   ↓
5. render() actualiza la UI
   ↓
6. saveToLocalStorage() persiste los cambios
```

### Ejemplo completo:

```javascript
const handleToggleStatus = (id) => {
  // 1. Calcular nuevo estado (función pura)
  const newState = toggleRoutineStatus(state, id);

  // 2. Reasignar
  state = newState;

  // 3. Re-renderizar
  render();
};
```

---

## 📊 VENTAJAS DE ESTE ENFOQUE

1. **Predecible**: Siempre sabes qué va a pasar
2. **Testeable**: Funciones puras son fáciles de testear
3. **Debuggeable**: Puedes ver cada cambio de estado
4. **Escalable**: Fácil agregar nuevas funcionalidades
5. **Mantenible**: Código limpio y organizado

---

## 🎓 CONCEPTOS CLAVE PARA RECORDAR

1. **Inmutabilidad**: Nunca mutar, siempre copiar
2. **Spread operator**: `...` para copiar arrays/objetos
3. **map**: Transformar cada elemento
4. **filter**: Seleccionar elementos que cumplen condición
5. **reduce**: Acumular un valor
6. **Funciones puras**: Sin efectos secundarios
7. **Composición**: Combinar funciones pequeñas
8. **localStorage**: Persistir datos en el navegador

---

## 🚀 PRÓXIMOS PASOS

1. Practica modificando el código
2. Agrega nuevas funcionalidades
3. Experimenta con diferentes filtros
4. Intenta agregar ordenamiento
5. Implementa exportar/importar datos

---

**Fecha**: 15/02/2026  
**Nivel**: Intermedio-Avanzado  
**Tiempo estimado de estudio**: 2-3 horas
