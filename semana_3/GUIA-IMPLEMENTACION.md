# 📘 Guía de Implementación - Semana 3

## 🎯 Objetivo

Implementar un sistema completo de gestión de ejercicios usando POO (Programación Orientada a Objetos) con ES2023.

---

## 📋 Orden de Implementación

### Fase 1: Clases Base (1-2 horas)

#### 1.1 BaseExercise.js ⭐ EMPEZAR AQUÍ

- [ ] Declarar campos privados con `#`
- [ ] Implementar constructor con validaciones
- [ ] Crear getters para todos los campos
- [ ] Crear setters con validaciones
- [ ] Implementar métodos `activate()` y `deactivate()`
- [ ] Implementar método abstracto `getInfo()`
- [ ] Implementar `getType()` y `toJSON()`

**Prueba en consola:**

```javascript
// Esto debe dar error (clase abstracta)
const base = new BaseExercise("Test", "Desc", 30);
base.getInfo(); // Error: debe ser implementado
```

#### 1.2 Person.js

- [ ] Declarar campos privados
- [ ] Implementar constructor con validación de email
- [ ] Crear getters y setters
- [ ] Implementar `getInfo()` y `toJSON()`

**Prueba en consola:**

```javascript
const person = new Person("Juan Pérez", "juan@email.com");
console.log(person.getInfo()); // "Juan Pérez (juan@email.com)"
```

---

### Fase 2: Clases Derivadas de Ejercicios (2-3 horas)

#### 2.1 CardioExercise.js

- [ ] Extender de BaseExercise con `extends`
- [ ] Declarar campos privados adicionales
- [ ] Llamar a `super()` en el constructor
- [ ] Implementar getters y setters
- [ ] Sobrescribir `getInfo()`
- [ ] Implementar `calculateCalories()` y `getPace()`

**Prueba en consola:**

```javascript
const cardio = new CardioExercise("Correr", "Correr en cinta", 30, 5, "high");
console.log(cardio.getInfo());
console.log(cardio.caloriesBurned); // Debe mostrar calorías calculadas
console.log(cardio.getPace()); // Debe mostrar min/km
```

#### 2.2 StrengthExercise.js

- [ ] Extender de BaseExercise
- [ ] Implementar campos privados (sets, reps, weight, muscleGroup)
- [ ] Validar muscleGroup en el setter
- [ ] Implementar `getTotalVolume()` y `getTotalReps()`
- [ ] Implementar `getMuscleGroupEmoji()`

**Prueba en consola:**

```javascript
const strength = new StrengthExercise(
  "Press de banca",
  "Ejercicio de pecho",
  20,
  4,
  12,
  60,
  "chest",
);
console.log(strength.getTotalVolume()); // 4 * 12 * 60 = 2880 kg
console.log(strength.getMuscleGroupEmoji()); // 💪
```

#### 2.3 FlexibilityExercise.js

- [ ] Extender de BaseExercise
- [ ] Implementar campos privados
- [ ] Validar targetArea y difficulty
- [ ] Implementar `getTotalWorkTime()`
- [ ] Implementar `getRecommendations()`

**Prueba en consola:**

```javascript
const flex = new FlexibilityExercise(
  "Estiramiento",
  "Piernas",
  15,
  30,
  3,
  "lower",
  "beginner",
);
console.log(flex.getTotalWorkTime()); // 30 * 3 = 90 segundos
console.log(flex.getRecommendations());
```

---

### Fase 3: Clases de Usuarios (1 hora)

#### 3.1 Member.js

- [ ] Extender de Person
- [ ] Implementar campos privados (membershipType, membershipExpiry, etc.)
- [ ] Implementar `isMembershipActive()`
- [ ] Implementar `addWorkoutSession()` y `addGoal()`
- [ ] Sobrescribir `getInfo()`

**Prueba en consola:**

```javascript
const member = new Member("Ana López", "ana@email.com", "premium");
console.log(member.isMembershipActive()); // true
member.addGoal("Perder 5kg");
console.log(member.goals); // ['Perder 5kg']
```

#### 3.2 Trainer.js

- [ ] Extender de Person
- [ ] Implementar campos privados (specialization, certifications, clients)
- [ ] Implementar `addClient()` y `removeClient()`
- [ ] Implementar `canAcceptClients()`
- [ ] Implementar `getTotalClients()`

**Prueba en consola:**

```javascript
const trainer = new Trainer("Carlos Ruiz", "carlos@email.com", "strength", [
  "NSCA-CPT",
]);
trainer.addClient(1);
trainer.addClient(2);
console.log(trainer.getTotalClients()); // 2
console.log(trainer.canAcceptClients()); // true (< 20)
```

---

### Fase 4: Clases Auxiliares (1 hora)

#### 4.1 Equipment.js

- [ ] Implementar campos privados
- [ ] Implementar `markAsInUse()` y `markAsAvailable()`
- [ ] Implementar `performMaintenance()`
- [ ] Implementar `needsMaintenance()`

**Prueba en consola:**

```javascript
const equipment = new Equipment("Cinta de correr", "cardio", "excellent");
equipment.markAsInUse();
console.log(equipment.available); // false
console.log(equipment.needsMaintenance()); // false (recién creado)
```

#### 4.2 WorkoutSession.js

- [ ] Implementar campos privados
- [ ] Implementar `getDuration()`
- [ ] Implementar `getTotalExercises()`
- [ ] Implementar `getSummary()`

**Prueba en consola:**

```javascript
const session = new WorkoutSession(
  1, // memberId
  1, // routineId
  [1, 2, 3], // exercises
  new Date("2024-02-27T10:00:00"),
  new Date("2024-02-27T11:00:00"),
  5, // rating
);
console.log(session.getDuration()); // 60 minutos
console.log(session.getTotalExercises()); // 3
```

---

### Fase 5: Rutinas con Estados (1-2 horas)

#### 5.1 Routine.js ⚠️ IMPORTANTE

- [ ] Implementar campos privados
- [ ] Crear objetos estáticos `STATES` y `TRANSITIONS`
- [ ] Implementar `canTransitionTo()`
- [ ] Implementar `changeState()`
- [ ] Implementar métodos de transición (activate, pause, resume, complete)
- [ ] Implementar `addExercise()` y `removeExercise()`

**Prueba en consola:**

```javascript
const routine = new Routine("Full Body", "Rutina completa", 1);
routine.addExercise(1);
routine.addExercise(2);
console.log(routine.state); // 'draft'

routine.activate();
console.log(routine.state); // 'active'

routine.pause();
console.log(routine.state); // 'paused'

routine.resume();
console.log(routine.state); // 'active'

routine.complete();
console.log(routine.state); // 'completed'
console.log(routine.dateCompleted); // Fecha actual
```

---

### Fase 6: Sistema Principal (2 horas)

#### 6.1 FitnessSystem.js ⭐ CLASE PRINCIPAL

- [ ] Implementar static block con configuración
- [ ] Implementar campos privados (arrays)
- [ ] Implementar CRUD para exercises
- [ ] Implementar CRUD para members
- [ ] Implementar CRUD para trainers
- [ ] Implementar CRUD para routines
- [ ] Implementar CRUD para sessions
- [ ] Implementar métodos de búsqueda
- [ ] Implementar `getStats()`
- [ ] Implementar métodos estáticos

**Prueba en consola:**

```javascript
const system = new FitnessSystem();

// Agregar ejercicios
const cardio = new CardioExercise("Correr", "Desc", 30, 5, "high");
system.addExercise(cardio);

const strength = new StrengthExercise("Press", "Desc", 20, 4, 12, 60, "chest");
system.addExercise(strength);

// Agregar miembros
const member = new Member("Juan", "juan@email.com", "premium");
system.addMember(member);

// Ver estadísticas
console.log(system.getStats());
// {
//   totalExercises: 2,
//   totalMembers: 1,
//   totalTrainers: 0,
//   ...
// }

// Buscar
const results = system.searchExercisesByName("correr");
console.log(results); // [cardio]

// Filtrar
const cardioExercises = system.filterExercisesByType("CardioExercise");
console.log(cardioExercises); // [cardio]
```

---

### Fase 7: Integración con DOM (2-3 horas)

#### 7.1 app.js

- [ ] Crear instancia global de FitnessSystem
- [ ] Implementar `loadSampleData()` para pruebas
- [ ] Implementar `renderStats()`
- [ ] Implementar `renderExercises()`
- [ ] Implementar `createExerciseCard()`
- [ ] Implementar event listeners
- [ ] Implementar `handleExerciseSubmit()`
- [ ] Implementar `viewDetails()` y `deleteExercise()`
- [ ] Implementar filtros y búsqueda

**Orden de implementación:**

1. Cargar datos de prueba
2. Renderizar estadísticas
3. Renderizar lista de ejercicios
4. Agregar event listeners
5. Implementar formulario
6. Implementar acciones (ver, eliminar)
7. Implementar filtros

---

## 🧪 Estrategia de Pruebas

### 1. Prueba cada clase individualmente en la consola

Abre `index.html` en el navegador y abre la consola (F12).

### 2. Prueba la jerarquía de herencia

```javascript
const cardio = new CardioExercise("Test", "Desc", 30, 5, "high");
console.log(cardio instanceof CardioExercise); // true
console.log(cardio instanceof BaseExercise); // true
console.log(cardio.getType()); // 'CardioExercise'
```

### 3. Prueba las validaciones

```javascript
// Esto debe lanzar error
const invalid = new CardioExercise("", "Desc", 30, 5, "high"); // Error: name vacío

// Esto debe lanzar error
cardio.intensity = "invalid"; // Error: intensity inválida
```

### 4. Prueba la máquina de estados

```javascript
const routine = new Routine("Test", "Desc", 1);
routine.activate(); // Error: debe tener al menos 1 ejercicio

routine.addExercise(1);
routine.activate(); // OK
routine.complete(); // OK
routine.activate(); // Error: no se puede activar desde completed
```

---

## ✅ Checklist de Conceptos POO

### Clases y Herencia (40 pts)

- [ ] Clase base abstracta (BaseExercise) - 10pts
- [ ] Mínimo 3 clases derivadas (Cardio, Strength, Flexibility) - 10pts
- [ ] Uso correcto de extends y super - 10pts
- [ ] Métodos sobrescritos (getInfo) - 10pts

### Encapsulación (30 pts)

- [ ] Campos privados # en todas las clases - 10pts
- [ ] Getters para todos los campos - 10pts
- [ ] Setters con validación - 10pts

### Características Modernas (30 pts)

- [ ] Static blocks en FitnessSystem - 10pts
- [ ] Métodos estáticos (validateEmail, generateId) - 10pts
- [ ] Integración con DOM funcional - 10pts

---

## 🐛 Errores Comunes

### 1. Olvidar llamar a super()

```javascript
// ❌ MAL
class CardioExercise extends BaseExercise {
  constructor(name, description, duration, distance, intensity) {
    this.#distance = distance; // Error: debe llamar super() primero
  }
}

// ✅ BIEN
class CardioExercise extends BaseExercise {
  constructor(name, description, duration, distance, intensity) {
    super(name, description, duration); // Primero super()
    this.#distance = distance; // Ahora sí
  }
}
```

### 2. No validar en los setters

```javascript
// ❌ MAL
set intensity(value) {
    this.#intensity = value; // No valida
}

// ✅ BIEN
set intensity(value) {
    const valid = ['low', 'medium', 'high'];
    if (!valid.includes(value)) {
        throw new Error('Intensidad inválida');
    }
    this.#intensity = value;
}
```

### 3. Olvidar el # en campos privados

```javascript
// ❌ MAL
class Example {
  id; // Campo público

  constructor() {
    this.id = 1;
  }
}

// ✅ BIEN
class Example {
  #id; // Campo privado

  constructor() {
    this.#id = 1;
  }

  get id() {
    return this.#id;
  }
}
```

---

## 📚 Recursos

- [MDN: Clases](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)
- [MDN: Campos privados](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- [MDN: Static](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/static)

---

## 🎯 Criterios de Éxito

- [ ] Todas las clases implementadas correctamente
- [ ] Todas las pruebas en consola funcionan
- [ ] La interfaz muestra ejercicios correctamente
- [ ] Se pueden crear, ver y eliminar ejercicios
- [ ] Los filtros funcionan
- [ ] Las estadísticas se actualizan
- [ ] No hay errores en la consola

---

**¡Mucho éxito con tu implementación! 🚀**
