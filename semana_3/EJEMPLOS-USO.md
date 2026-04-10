# 💡 Ejemplos de Uso - Semana 3

## Cómo Probar las Clases en la Consola

Abre `index.html` en el navegador, abre la consola (F12) y prueba estos ejemplos:

---

## 1️⃣ BaseExercise (Clase Abstracta)

```javascript
// ❌ Esto debe dar error (no se puede instanciar)
try {
  const base = new BaseExercise("Test", "Descripción", 30);
} catch (error) {
  console.log("✅ Error esperado:", error.message);
  // "El método getInfo() debe ser implementado en la clase hija"
}
```

---

## 2️⃣ CardioExercise

```javascript
// Crear ejercicio de cardio
const cardio = new CardioExercise(
  "Correr en cinta",
  "Correr a ritmo constante",
  30, // duración en minutos
  5, // distancia en km
  "high", // intensidad
);

// Probar getters
console.log("ID:", cardio.id);
console.log("Nombre:", cardio.name);
console.log("Duración:", cardio.duration, "min");
console.log("Distancia:", cardio.distance, "km");
console.log("Intensidad:", cardio.intensity);
console.log("Calorías:", cardio.caloriesBurned);
console.log("Activo:", cardio.isActive);

// Probar métodos
console.log("Info:", cardio.getInfo());
console.log("Tipo:", cardio.getType()); // 'CardioExercise'
console.log("Ritmo:", cardio.getPace(), "min/km");

// Probar setters
cardio.intensity = "medium";
console.log("Nueva intensidad:", cardio.intensity);

// Probar estado
cardio.deactivate();
console.log("Activo después de desactivar:", cardio.isActive); // false

cardio.activate();
console.log("Activo después de activar:", cardio.isActive); // true

// Probar validación
try {
  cardio.intensity = "invalid";
} catch (error) {
  console.log("✅ Validación funciona:", error.message);
}
```

---

## 3️⃣ StrengthExercise

```javascript
// Crear ejercicio de fuerza
const strength = new StrengthExercise(
  "Press de banca",
  "Ejercicio de pecho con barra",
  20, // duración en minutos
  4, // series
  12, // repeticiones
  60, // peso en kg
  "chest", // grupo muscular
);

console.log("Info:", strength.getInfo());
console.log("Volumen total:", strength.getTotalVolume(), "kg");
console.log("Total reps:", strength.getTotalReps());
console.log("Emoji:", strength.getMuscleGroupEmoji());

// Cambiar peso
strength.weight = 65;
console.log("Nuevo volumen:", strength.getTotalVolume(), "kg");
```

---

## 4️⃣ FlexibilityExercise

```javascript
// Crear ejercicio de flexibilidad
const flexibility = new FlexibilityExercise(
  "Estiramiento de isquiotibiales",
  "Estiramiento profundo de piernas",
  15, // duración en minutos
  30, // tiempo de sostén en segundos
  3, // repeticiones
  "lower", // área objetivo
  "beginner", // dificultad
);

console.log("Info:", flexibility.getInfo());
console.log(
  "Tiempo total de trabajo:",
  flexibility.getTotalWorkTime(),
  "segundos",
);
console.log("Recomendaciones:", flexibility.getRecommendations());
console.log("Emoji:", flexibility.getTargetAreaEmoji());
```

---

## 5️⃣ Person

```javascript
// Crear persona
const person = new Person("Juan Pérez", "juan@email.com");

console.log("ID:", person.id);
console.log("Nombre:", person.name);
console.log("Email:", person.email);
console.log("Fecha de registro:", person.registrationDate);
console.log("Info:", person.getInfo());

// Probar validación de email
try {
  person.email = "email-invalido";
} catch (error) {
  console.log("✅ Validación de email funciona:", error.message);
}

// Cambiar email válido
person.email = "juan.nuevo@email.com";
console.log("Nuevo email:", person.email);
```

---

## 6️⃣ Member

```javascript
// Crear miembro
const member = new Member(
  "Ana López",
  "ana@email.com",
  "premium",
  new Date("2025-03-27"), // expira en 1 mes
);

console.log("Info:", member.getInfo());
console.log("Membresía activa:", member.isMembershipActive());
console.log("Tipo de membresía:", member.membershipType);

// Agregar objetivos
member.addGoal("Perder 5kg");
member.addGoal("Correr 5km sin parar");
console.log("Objetivos:", member.goals);

// Agregar sesiones
member.addWorkoutSession(1);
member.addWorkoutSession(2);
console.log("Total entrenamientos:", member.getTotalWorkouts());

// Eliminar objetivo
member.removeGoal(0);
console.log("Objetivos después de eliminar:", member.goals);
```

---

## 7️⃣ Trainer

```javascript
// Crear entrenador
const trainer = new Trainer("Carlos Ruiz", "carlos@email.com", "strength", [
  "NSCA-CPT",
  "CrossFit Level 1",
]);

console.log("Info:", trainer.getInfo());
console.log("Especialización:", trainer.specialization);
console.log("Certificaciones:", trainer.certifications);

// Agregar clientes
trainer.addClient(1);
trainer.addClient(2);
trainer.addClient(3);
console.log("Total clientes:", trainer.getTotalClients());
console.log("Puede aceptar más clientes:", trainer.canAcceptClients());

// Agregar certificación
trainer.addCertification("Nutrition Specialist");
console.log("Certificaciones actualizadas:", trainer.certifications);

// Eliminar cliente
trainer.removeClient(2);
console.log("Clientes después de eliminar:", trainer.clients);
```

---

## 8️⃣ Equipment

```javascript
// Crear equipamiento
const equipment = new Equipment(
  "Cinta de correr ProForm",
  "cardio",
  "excellent",
);

console.log("Info:", equipment.getInfo());
console.log("Disponible:", equipment.available);
console.log("Emoji:", equipment.getTypeEmoji());

// Marcar como en uso
equipment.markAsInUse();
console.log("Disponible después de marcar en uso:", equipment.available);

// Marcar como disponible
equipment.markAsAvailable();
console.log("Disponible después de marcar disponible:", equipment.available);

// Verificar mantenimiento
console.log("Necesita mantenimiento:", equipment.needsMaintenance());

// Realizar mantenimiento
equipment.performMaintenance("good");
console.log("Condición después de mantenimiento:", equipment.condition);
```

---

## 9️⃣ WorkoutSession

```javascript
// Crear sesión de entrenamiento
const session = new WorkoutSession(
  1, // memberId
  1, // routineId
  [1, 2, 3, 4, 5], // exercises (IDs)
  new Date("2024-02-27T10:00:00"), // startTime
  new Date("2024-02-27T11:15:00"), // endTime
  5, // rating
  "Excelente sesión, me sentí muy bien",
);

console.log("Info:", session.getInfo());
console.log("Duración:", session.getDuration(), "minutos");
console.log("Total ejercicios:", session.getTotalExercises());
console.log(
  "Promedio por ejercicio:",
  session.getAverageTimePerExercise(),
  "min",
);
console.log("Estrellas:", session.getStars());
console.log("Resumen:", session.getSummary());
```

---

## 🔟 Routine (Máquina de Estados)

```javascript
// Crear rutina
const routine = new Routine(
  "Full Body Workout",
  "Rutina completa de cuerpo entero",
  1, // createdBy (trainer ID)
);

console.log("Estado inicial:", routine.state); // 'draft'
console.log("Emoji:", routine.getStateEmoji()); // 📝

// Intentar activar sin ejercicios (debe dar error)
try {
  routine.activate();
} catch (error) {
  console.log("✅ Error esperado:", error.message);
  // "La rutina debe tener al menos 1 ejercicio"
}

// Agregar ejercicios
routine.addExercise(1);
routine.addExercise(2);
routine.addExercise(3);
console.log("Total ejercicios:", routine.getTotalExercises());

// Activar rutina
routine.activate();
console.log("Estado después de activar:", routine.state); // 'active'
console.log("Emoji:", routine.getStateEmoji()); // ▶️

// Pausar rutina
routine.pause();
console.log("Estado después de pausar:", routine.state); // 'paused'
console.log("Emoji:", routine.getStateEmoji()); // ⏸️

// Reanudar rutina
routine.resume();
console.log("Estado después de reanudar:", routine.state); // 'active'

// Completar rutina
routine.complete();
console.log("Estado después de completar:", routine.state); // 'completed'
console.log("Emoji:", routine.getStateEmoji()); // ✅
console.log("Fecha de completado:", routine.dateCompleted);

// Intentar activar desde completed (debe dar error)
try {
  routine.activate();
} catch (error) {
  console.log("✅ Transición inválida:", error.message);
}

console.log("Info:", routine.getInfo());
```

---

## 1️⃣1️⃣ FitnessSystem (Sistema Completo)

```javascript
// Crear sistema
const system = new FitnessSystem();

console.log("Versión:", FitnessSystem.VERSION);
console.log("Máximo ejercicios:", FitnessSystem.MAX_EXERCISES);

// Agregar ejercicios
const cardio1 = new CardioExercise("Correr", "Desc", 30, 5, "high");
const cardio2 = new CardioExercise("Bicicleta", "Desc", 45, 0, "medium");
const strength1 = new StrengthExercise("Press", "Desc", 20, 4, 12, 60, "chest");
const strength2 = new StrengthExercise(
  "Sentadilla",
  "Desc",
  25,
  4,
  10,
  80,
  "legs",
);
const flex1 = new FlexibilityExercise(
  "Yoga",
  "Desc",
  30,
  30,
  5,
  "full-body",
  "beginner",
);

system.addExercise(cardio1);
system.addExercise(cardio2);
system.addExercise(strength1);
system.addExercise(strength2);
system.addExercise(flex1);

console.log("Total ejercicios:", system.getAllExercises().length);

// Agregar miembros
const member1 = new Member("Juan", "juan@email.com", "premium");
const member2 = new Member("Ana", "ana@email.com", "basic");
system.addMember(member1);
system.addMember(member2);

// Agregar entrenadores
const trainer1 = new Trainer("Carlos", "carlos@email.com", "strength", [
  "NSCA",
]);
system.addTrainer(trainer1);

// Ver estadísticas
console.log("Estadísticas:", system.getStats());

// Buscar ejercicios
const results = system.searchExercisesByName("correr");
console.log("Resultados de búsqueda:", results);

// Filtrar por tipo
const cardioExercises = system.filterExercisesByType("CardioExercise");
console.log("Ejercicios de cardio:", cardioExercises);

// Obtener ejercicios activos
const activeExercises = system.getActiveExercises();
console.log("Ejercicios activos:", activeExercises.length);

// Buscar ejercicio por ID
const found = system.findExercise(cardio1.id);
console.log("Ejercicio encontrado:", found.getInfo());

// Eliminar ejercicio
const removed = system.removeExercise(cardio2.id);
console.log("Ejercicio eliminado:", removed);
console.log("Total después de eliminar:", system.getAllExercises().length);

// Métodos estáticos
console.log("Email válido:", FitnessSystem.validateEmail("test@email.com"));
console.log("Email inválido:", FitnessSystem.validateEmail("invalid"));
console.log("ID generado:", FitnessSystem.generateId());
```

---

## 🎯 Ejemplo Completo: Flujo de Trabajo

```javascript
// 1. Crear sistema
const system = new FitnessSystem();

// 2. Crear entrenador
const trainer = new Trainer("Carlos", "carlos@gym.com", "strength", [
  "NSCA-CPT",
]);
system.addTrainer(trainer);

// 3. Crear miembro
const member = new Member("Juan", "juan@email.com", "premium");
system.addMember(member);

// 4. Asignar miembro al entrenador
trainer.addClient(member.id);

// 5. Crear ejercicios
const ex1 = new CardioExercise("Correr", "Calentamiento", 10, 1, "medium");
const ex2 = new StrengthExercise("Press", "Pecho", 15, 4, 12, 60, "chest");
const ex3 = new StrengthExercise(
  "Sentadilla",
  "Piernas",
  20,
  4,
  10,
  80,
  "legs",
);
const ex4 = new FlexibilityExercise(
  "Estiramiento",
  "Enfriamiento",
  10,
  30,
  3,
  "full-body",
  "beginner",
);

system.addExercise(ex1);
system.addExercise(ex2);
system.addExercise(ex3);
system.addExercise(ex4);

// 6. Crear rutina
const routine = new Routine("Full Body", "Rutina completa", trainer.id);
routine.addExercise(ex1.id);
routine.addExercise(ex2.id);
routine.addExercise(ex3.id);
routine.addExercise(ex4.id);
system.addRoutine(routine);

// 7. Activar rutina
routine.activate();
console.log("Rutina activada:", routine.getInfo());

// 8. Registrar sesión de entrenamiento
const session = new WorkoutSession(
  member.id,
  routine.id,
  [ex1.id, ex2.id, ex3.id, ex4.id],
  new Date("2024-02-27T10:00:00"),
  new Date("2024-02-27T11:15:00"),
  5,
  "Excelente sesión",
);
system.addSession(session);

// 9. Actualizar historial del miembro
member.addWorkoutSession(session.id);

// 10. Completar rutina
routine.complete();

// 11. Ver estadísticas finales
console.log("=== ESTADÍSTICAS FINALES ===");
console.log("Sistema:", system.getStats());
console.log("Miembro:", member.getInfo());
console.log("Total entrenamientos:", member.getTotalWorkouts());
console.log("Entrenador:", trainer.getInfo());
console.log("Clientes del entrenador:", trainer.getTotalClients());
console.log("Rutina:", routine.getInfo());
console.log("Sesión:", session.getSummary());
```

---

## 💡 Tips para Probar

1. **Copia y pega** estos ejemplos en la consola del navegador
2. **Modifica los valores** para probar diferentes casos
3. **Prueba las validaciones** intentando valores inválidos
4. **Usa console.log()** para ver los resultados
5. **Inspecciona los objetos** con `console.dir(objeto)`

---

**¡Diviértete probando las clases! 🚀**
