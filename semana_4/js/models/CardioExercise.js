/**
 * CLASE DERIVADA: CardioExercise
 * 
 * Extiende de BaseExercise
 * Representa ejercicios cardiovasculares
 * 
 * Conceptos POO aplicados:
 * - Herencia (extends)
 * - super() para llamar al constructor padre
 * - Campos privados adicionales
 * - Sobrescritura de métodos (getInfo)
 */

class CardioExercise extends BaseExercise {
    // ==================== CAMPOS PRIVADOS ADICIONALES ====================
    // TODO: Agregar campos privados específicos de cardio:
    // - #distance (distancia en km - puede ser 0 si no aplica)
    // - #intensity (intensidad: 'low', 'medium', 'high')
    // - #caloriesBurned (calorías quemadas estimadas)


    // ==================== CONSTRUCTOR ====================
    /**
     * Constructor de CardioExercise
     * @param {string} name - Nombre del ejercicio
     * @param {string} description - Descripción
     * @param {number} duration - Duración en minutos
     * @param {number} distance - Distancia en km (opcional, default 0)
     * @param {string} intensity - Intensidad ('low', 'medium', 'high')
     */
    constructor(name, description, duration, distance = 0, intensity = 'medium') {
        // TODO: Llamar al constructor padre con super()
        // TODO: Validar intensity (solo puede ser 'low', 'medium', 'high')
        // TODO: Validar distance (debe ser >= 0)
        // TODO: Inicializar campos privados adicionales
        // TODO: Calcular calorías quemadas (puedes usar una fórmula simple)
        //       Ejemplo: duration * 10 * intensityMultiplier
        //       low = 0.8, medium = 1.0, high = 1.3
    }


    // ==================== GETTERS ====================
    // TODO: Crear getters para los campos adicionales
    // get distance() { }
    // get intensity() { }
    // get caloriesBurned() { }


    // ==================== SETTERS ====================
    /**
     * Setter para intensity con validación
     */
    // set intensity(value) {
    //     // TODO: Validar que sea 'low', 'medium' o 'high'
    //     // TODO: Recalcular calorías si cambia la intensidad
    // }

    /**
     * Setter para distance con validación
     */
    // set distance(value) {
    //     // TODO: Validar que sea >= 0
    // }


    // ==================== MÉTODOS SOBRESCRITOS ====================
    /**
     * Implementación del método abstracto getInfo()
     * @returns {string} Información específica del ejercicio cardio
     */
    getInfo() {
        // TODO: Retornar un string con información del ejercicio
        // Incluir: nombre, duración, distancia, intensidad, calorías
        // Ejemplo: "Correr - 30 min - 5 km - Intensidad: high - 390 cal"
    }


    // ==================== MÉTODOS ESPECÍFICOS ====================
    /**
     * Calcula las calorías quemadas según duración e intensidad
     * @returns {number} Calorías quemadas
     */
    calculateCalories() {
        // TODO: Implementar cálculo de calorías
        // Fórmula sugerida: duration * 10 * intensityMultiplier
    }

    /**
     * Retorna el ritmo (pace) en min/km
     * @returns {number} Ritmo en minutos por kilómetro
     */
    getPace() {
        // TODO: Si distance > 0, retornar duration / distance
        // TODO: Si distance = 0, retornar 0
    }
}
