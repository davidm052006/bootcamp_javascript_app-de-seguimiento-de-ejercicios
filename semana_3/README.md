# 📦 FitWell - Sistema de Gestión con POO

## Proyecto Semana 3 - JavaScript Bootcamp

### 🎯 Descripción

Sistema completo de gestión de ejercicios usando Programación Orientada a Objetos (POO) con ES2023. Implementa herencia, encapsulación, campos privados, máquinas de estado y más.

### 🏗️ Arquitectura de Clases

```
BaseExercise (clase base abstracta)
├── CardioExercise
├── StrengthExercise
└── FlexibilityExercise

Person (clase base)
├── Member (miembro del gym)
└── Trainer (entrenador)

FitnessSystem (clase principal)
├── WorkoutSession (sesiones de entrenamiento)
└── Routine (rutinas con estados)

Equipment (equipamiento)
```

### 📁 Estructura del Proyecto

```
semana_3/
├── index.html                     # Página principal
├── styles.css                     # Estilos de la aplicación
├── README.md                      # Este archivo
├── GUIA-IMPLEMENTACION.md         # 📘 Guía detallada paso a paso
├── js/
│   ├── app.js                     # Integración con DOM
│   └── models/                    # Clases del sistema
│       ├── BaseExercise.js        # ⭐ Clase base abstracta
│       ├── CardioExercise.js      # Ejercicio cardiovascular
│       ├── StrengthExercise.js    # Ejercicio de fuerza
│       ├── FlexibilityExercise.js # Ejercicio de flexibilidad
│       ├── Person.js              # Clase base de usuarios
│       ├── Trainer.js             # Entrenador
│       ├── Member.js              # Miembro/Cliente
│       ├── Equipment.js           # Equipamiento
│       ├── Routine.js             # Rutina con máquina de estados
│       ├── WorkoutSession.js      # Sesión de entrenamiento
│       └── FitnessSystem.js       # ⭐ Sistema principal
```

### 🚀 Cómo Empezar

#### 1. Lee la Guía de Implementación

```bash
# Abre este archivo primero
GUIA-IMPLEMENTACION.md
```

#### 2. Implementa las Clases en Orden

1. **BaseExercise.js** - Clase base abstracta
2. **CardioExercise.js** - Primera clase derivada
3. **StrengthExercise.js** - Segunda clase derivada
4. **FlexibilityExercise.js** - Tercera clase derivada
5. **Person.js** - Clase base de usuarios
6. **Member.js** y **Trainer.js** - Roles de usuarios
7. **Equipment.js** - Clase independiente
8. **WorkoutSession.js** - Sesiones
9. **Routine.js** - Rutinas con estados
10. **FitnessSystem.js** - Sistema principal
11. **app.js** - Integración con DOM

#### 3. Prueba en la Consola

Abre `index.html` en el navegador y prueba cada clase:

```javascript
// Ejemplo: Probar CardioExercise
const cardio = new CardioExercise("Correr", "Correr en cinta", 30, 5, "high");
console.log(cardio.getInfo());
console.log(cardio.caloriesBurned);
```

### 📚 Conceptos de POO Implementados

#### ✅ Clases y Herencia (40 puntos)

- Clase base abstracta (BaseExercise)
- Mínimo 3 clases derivadas
- Uso correcto de `extends` y `super()`
- Métodos sobrescritos (`getInfo()`)

#### ✅ Encapsulación (30 puntos)

- Campos privados con `#`
- Getters para acceso controlado
- Setters con validación

#### ✅ Características Modernas ES2023 (30 puntos)

- Static blocks para configuración
- Métodos estáticos
- Integración con DOM

### 🎓 Conceptos Aplicados

| Concepto               | Dónde se Aplica                                |
| ---------------------- | ---------------------------------------------- |
| **Clases**             | Todas las entidades del sistema                |
| **Herencia**           | CardioExercise extends BaseExercise            |
| **Campos privados #**  | Todos los datos sensibles                      |
| **Getters/Setters**    | Control de acceso a propiedades                |
| **Métodos estáticos**  | FitnessSystem.validateEmail()                  |
| **Static blocks**      | Configuración de FitnessSystem                 |
| **Clases abstractas**  | BaseExercise (no se puede instanciar)          |
| **Polimorfismo**       | getInfo() implementado diferente en cada clase |
| **Máquina de estados** | Routine (draft → active → paused → completed)  |
| **Composición**        | Routine contiene ejercicios                    |

### 🧪 Pruebas Sugeridas

#### Prueba 1: Herencia

```javascript
const cardio = new CardioExercise("Correr", "Desc", 30, 5, "high");
console.log(cardio instanceof CardioExercise); // true
console.log(cardio instanceof BaseExercise); // true
```

#### Prueba 2: Validaciones

```javascript
const member = new Member("Juan", "invalid-email", "premium");
// Error: Email inválido
```

#### Prueba 3: Máquina de Estados

```javascript
const routine = new Routine("Full Body", "Desc", 1);
routine.addExercise(1);
routine.activate(); // draft → active
routine.pause(); // active → paused
routine.resume(); // paused → active
routine.complete(); // active → completed
```

#### Prueba 4: Sistema Completo

```javascript
const system = new FitnessSystem();
const cardio = new CardioExercise("Correr", "Desc", 30, 5, "high");
system.addExercise(cardio);
console.log(system.getStats());
```

### 📊 Criterios de Evaluación

| Criterio                        | Puntos  | Estado |
| ------------------------------- | ------- | ------ |
| Clase base abstracta correcta   | 10      | ⬜     |
| Mínimo 3 clases derivadas       | 10      | ⬜     |
| Uso correcto de extends y super | 10      | ⬜     |
| Métodos sobrescritos            | 10      | ⬜     |
| Campos privados #               | 10      | ⬜     |
| Getters y setters               | 10      | ⬜     |
| Validación en setters           | 10      | ⬜     |
| Static blocks                   | 10      | ⬜     |
| Métodos estáticos               | 10      | ⬜     |
| Integración con DOM             | 10      | ⬜     |
| **TOTAL**                       | **100** | **0**  |

**Mínimo para aprobar: 70 puntos**

### 🐛 Errores Comunes a Evitar

1. ❌ Olvidar llamar a `super()` en clases derivadas
2. ❌ No validar en los setters
3. ❌ Olvidar el `#` en campos privados
4. ❌ Intentar instanciar BaseExercise directamente
5. ❌ No implementar `getInfo()` en clases derivadas

### 💡 Tips

- **Implementa de abajo hacia arriba**: Primero las clases base, luego las derivadas
- **Prueba cada clase individualmente** en la consola antes de continuar
- **Usa console.log()** para debuggear
- **Lee los comentarios** en cada archivo, tienen instrucciones detalladas
- **Sigue la guía** en GUIA-IMPLEMENTACION.md paso a paso

### 📖 Recursos

- [Guía de Implementación Detallada](./GUIA-IMPLEMENTACION.md)
- [MDN: Clases](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)
- [MDN: Campos Privados](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- [MDN: Static](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/static)

### ⏱️ Tiempo Estimado

- Clases base: 1-2 horas
- Clases derivadas: 2-3 horas
- Clases de usuarios: 1 hora
- Rutinas y sesiones: 1-2 horas
- Sistema principal: 2 horas
- Integración DOM: 2-3 horas
- **Total: ~10-13 horas**

### 📝 Notas Importantes

- **Nomenclatura**: Código en inglés, comentarios en español
- **Sintaxis**: ES2023 (campos privados #, static blocks)
- **Validaciones**: Todos los setters deben validar
- **Errores**: Lanzar errores descriptivos con `throw new Error()`

---

**Autor:** [Tu nombre]  
**Fecha:** 27/02/2026  
**Bootcamp:** JavaScript Moderno - Semana 3  
**Dominio:** FitWell - Sistema de Seguimiento de Ejercicios
