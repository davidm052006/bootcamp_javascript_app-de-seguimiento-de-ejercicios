# 📊 Resumen de Clases - Semana 3

## Jerarquía Completa

```
BaseExercise (abstracta)
├── CardioExercise
├── StrengthExercise
└── FlexibilityExercise

Person
├── Member
└── Trainer

FitnessSystem (principal)

Routine (con estados)

WorkoutSession

Equipment
```

---

## 📋 Checklist de Implementación

### Clases Base

- [ ] **BaseExercise.js** - Clase abstracta con campos privados
- [ ] **Person.js** - Clase base de usuarios

### Clases Derivadas de Ejercicios

- [ ] **CardioExercise.js** - Distancia, intensidad, calorías
- [ ] **StrengthExercise.js** - Series, reps, peso, grupo muscular
- [ ] **FlexibilityExercise.js** - Tiempo de sostén, área objetivo

### Clases de Usuarios

- [ ] **Member.js** - Membresía, historial, objetivos
- [ ] **Trainer.js** - Especialización, certificaciones, clientes

### Clases Auxiliares

- [ ] **Equipment.js** - Equipamiento del gym
- [ ] **WorkoutSession.js** - Sesiones completadas
- [ ] **Routine.js** - Rutinas con máquina de estados

### Sistema Principal

- [ ] **FitnessSystem.js** - CRUD completo, búsqueda, estadísticas

### Integración

- [ ] **app.js** - Conexión con DOM

---

## 🎯 Campos Privados por Clase

### BaseExercise

```javascript
#id
#name
#description
#duration
#active
#dateCreated
```

### CardioExercise (+ BaseExercise)

```javascript
#distance
#intensity
#caloriesBurned
```

### StrengthExercise (+ BaseExercise)

```javascript
#sets
#reps
#weight
#muscleGroup
```

### FlexibilityExercise (+ BaseExercise)

```javascript
#holdTime
#repetitions
#targetArea
#difficulty
```

### Person

```javascript
#id
#name
#email
#registrationDate
```

### Member (+ Person)

```javascript
#membershipType
#membershipExpiry
#workoutHistory
#goals
```

### Trainer (+ Person)

```javascript
#specialization
#certifications
#clients
#rating
```

### Equipment

```javascript
#id
#name
#type
#available
#condition
#lastMaintenance
```

### Routine

```javascript
#id
#name
#description
#exercises
#state
#createdBy
#dateCreated
#dateCompleted
```

### WorkoutSession

```javascript
#id
#memberId
#routineId
#exercises
#startTime
#endTime
#notes
#rating
```

### FitnessSystem

```javascript
#exercises
#members
#trainers
#routines
#sessions
#equipment
```

---

## 🔄 Máquina de Estados (Routine)

```
draft → active → paused → completed
  ↓       ↓        ↓
  ✓       ✓        ✓
          ↓        ↓
          completed
```

**Transiciones válidas:**

- `draft` → `active`
- `active` → `paused`, `completed`
- `paused` → `active`, `completed`
- `completed` → (ninguna, estado final)

---

## 📝 Métodos Clave por Clase

### BaseExercise

- `activate()` / `deactivate()`
- `getInfo()` - abstracto
- `getType()`
- `toJSON()`

### CardioExercise

- `calculateCalories()`
- `getPace()`
- `getInfo()` - sobrescrito

### StrengthExercise

- `getTotalVolume()`
- `getTotalReps()`
- `getMuscleGroupEmoji()`
- `getInfo()` - sobrescrito

### FlexibilityExercise

- `getTotalWorkTime()`
- `getRecommendations()`
- `getTargetAreaEmoji()`
- `getInfo()` - sobrescrito

### Person

- `getInfo()`
- `toJSON()`

### Member

- `isMembershipActive()`
- `addWorkoutSession()`
- `addGoal()` / `removeGoal()`
- `getTotalWorkouts()`
- `getInfo()` - sobrescrito

### Trainer

- `addClient()` / `removeClient()`
- `addCertification()`
- `getTotalClients()`
- `canAcceptClients()`
- `getInfo()` - sobrescrito

### Equipment

- `markAsInUse()` / `markAsAvailable()`
- `performMaintenance()`
- `needsMaintenance()`
- `getInfo()`
- `getTypeEmoji()`

### Routine

- `addExercise()` / `removeExercise()`
- `canTransitionTo()`
- `changeState()`
- `activate()` / `pause()` / `resume()` / `complete()`
- `getTotalExercises()`
- `getInfo()`
- `getStateEmoji()`

### WorkoutSession

- `getDuration()`
- `getTotalExercises()`
- `getAverageTimePerExercise()`
- `getInfo()`
- `getStars()`
- `getSummary()`

### FitnessSystem

**CRUD Exercises:**

- `addExercise()`
- `removeExercise()`
- `findExercise()`
- `getAllExercises()`

**CRUD Members:**

- `addMember()`
- `removeMember()`
- `findMember()`

**CRUD Trainers:**

- `addTrainer()`
- `findTrainer()`

**CRUD Routines:**

- `addRoutine()`
- `findRoutine()`

**CRUD Sessions:**

- `addSession()`

**Búsqueda:**

- `searchExercisesByName()`
- `filterExercisesByType()`
- `getActiveExercises()`

**Estadísticas:**

- `getStats()`
- `getMemberStats()`

**Estáticos:**

- `validateEmail()`
- `generateId()`

---

## ✅ Validaciones Requeridas

### BaseExercise

- `name`: no vacío, mínimo 3 caracteres
- `description`: no vacío
- `duration`: número > 0

### CardioExercise

- `distance`: número >= 0
- `intensity`: 'low', 'medium', 'high'

### StrengthExercise

- `sets`: número > 0
- `reps`: número > 0
- `weight`: número >= 0
- `muscleGroup`: 'chest', 'back', 'legs', 'arms', 'shoulders', 'core'

### FlexibilityExercise

- `holdTime`: número > 0
- `repetitions`: número > 0
- `targetArea`: 'upper', 'lower', 'full-body'
- `difficulty`: 'beginner', 'intermediate', 'advanced'

### Person

- `name`: no vacío, mínimo 3 caracteres
- `email`: formato válido (regex)

### Member

- `membershipType`: 'basic', 'premium', 'vip'
- `membershipExpiry`: fecha futura

### Trainer

- `specialization`: 'cardio', 'strength', 'flexibility', 'general'
- `rating`: 0-5

### Equipment

- `type`: 'cardio', 'strength', 'flexibility', 'other'
- `condition`: 'excellent', 'good', 'fair', 'poor'

### Routine

- `state`: 'draft', 'active', 'paused', 'completed'
- Transiciones válidas según máquina de estados

### WorkoutSession

- `memberId`: número > 0
- `routineId`: número > 0
- `exercises`: array con al menos 1 elemento
- `endTime` > `startTime`
- `rating`: 1-5

---

## 🎓 Conceptos POO Aplicados

| Concepto               | Clase                               | Ejemplo                                |
| ---------------------- | ----------------------------------- | -------------------------------------- |
| **Clase abstracta**    | BaseExercise                        | No se puede instanciar                 |
| **Herencia**           | CardioExercise extends BaseExercise | Hereda campos y métodos                |
| **Campos privados**    | Todas                               | `#id`, `#name`, etc.                   |
| **Getters**            | Todas                               | `get id() { return this.#id; }`        |
| **Setters**            | Todas                               | `set name(value) { ... }`              |
| **Método abstracto**   | BaseExercise.getInfo()              | Debe ser sobrescrito                   |
| **Polimorfismo**       | getInfo()                           | Implementación diferente en cada clase |
| **Static block**       | FitnessSystem                       | Configuración estática                 |
| **Métodos estáticos**  | FitnessSystem                       | validateEmail(), generateId()          |
| **Máquina de estados** | Routine                             | draft → active → paused → completed    |
| **Composición**        | Routine                             | Contiene array de ejercicios           |
| **Validación**         | Setters                             | Lanzar errores si inválido             |

---

## 🚀 Orden de Prueba

1. **BaseExercise** - Probar que no se puede instanciar
2. **CardioExercise** - Crear instancia, probar getInfo()
3. **StrengthExercise** - Crear instancia, probar getTotalVolume()
4. **FlexibilityExercise** - Crear instancia, probar getTotalWorkTime()
5. **Person** - Crear instancia, validar email
6. **Member** - Crear instancia, probar isMembershipActive()
7. **Trainer** - Crear instancia, probar addClient()
8. **Equipment** - Crear instancia, probar needsMaintenance()
9. **WorkoutSession** - Crear instancia, probar getDuration()
10. **Routine** - Crear instancia, probar máquina de estados
11. **FitnessSystem** - Crear instancia, probar CRUD completo

---

**Total de clases: 11**  
**Total de campos privados: ~60**  
**Total de métodos: ~80**  
**Líneas de código estimadas: ~1500-2000**
