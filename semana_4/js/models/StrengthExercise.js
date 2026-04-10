/**
 * CLASE DERIVADA: StrengthExercise
 * 
 * Extiende de BaseExercise
 * Representa ejercicios de fuerza/resistencia
 * 
 * Conceptos POO aplicados:
 * - Herencia
 * - Campos privados específicos
 * - Validaciones personalizadas
 */

class StrengthExercise extends BaseExercise {
    // ==================== CAMPOS PRIVADOS ADICIONALES ====================
    // TODO: Agregar campos privados específicos de fuerza:
    // - #sets (número de series)
    // - #reps (repeticiones por serie)
    // - #weight (peso en kg)
    // - #muscleGroup (grupo muscular: 'chest', 'back', 'legs', 'arms', 'shoulders', 'core')


    // ==================== CONSTRUCTOR ====================
    /**
     * Constructor de StrengthExercise
     * @param {string} name - Nombre del ejercicio
     * @param {string} description - Descripción
     * @param {number} duration - Duración en minutos
     * @param {number} sets - Número de series
     * @param {number} reps - Repeticiones por serie
     * @param {number} weight - Peso en kg
     * @param {string} muscleGroup - Grupo muscular trabajado
     */
    constructor(name, description, duration, sets, reps, weight, muscleGroup) {
        // TODO: Llamar al constructor padre con super()
        // TODO: Validar sets (debe ser > 0)
        // TODO: Validar reps (debe ser > 0)
        // TODO: Validar weight (debe ser >= 0)
        // TODO: Validar muscleGroup (debe ser uno de los valores permitidos)
        // TODO: Inicializar campos privados
    }


    // ==================== GETTERS ====================
    // TODO: Crear getters para todos los campos adicionales
    // get sets() { }
    // get reps() { }
    // get weight() { }
    // get muscleGroup() { }


    // ==================== SETTERS ====================
    /**
     * Setter para sets con validación
     */
    // set sets(value) { }

    /**
     * Setter para reps con validación
     */
    // set reps(value) { }

    /**
     * Setter para weight con validación
     */
    // set weight(value) { }

    /**
     * Setter para muscleGroup con validación
     */
    // set muscleGroup(value) {
    //     // TODO: Validar que sea uno de: 'chest', 'back', 'legs', 'arms', 'shoulders', 'core'
    // }


    // ==================== MÉTODOS SOBRESCRITOS ====================
    /**
     * Implementación del método abstracto getInfo()
     * @returns {string} Información específica del ejercicio de fuerza
     */
    getInfo() {
        // TODO: Retornar información del ejercicio
        // Incluir: nombre, series, reps, peso, grupo muscular
        // Ejemplo: "Press de banca - 4x12 - 60kg - Pecho"
    }


    // ==================== MÉTODOS ESPECÍFICOS ====================
    /**
     * Calcula el volumen total (sets × reps × weight)
     * @returns {number} Volumen total en kg
     */
    getTotalVolume() {
        // TODO: Retornar sets * reps * weight
    }

    /**
     * Calcula el número total de repeticiones
     * @returns {number} Total de repeticiones
     */
    getTotalReps() {
        // TODO: Retornar sets * reps
    }

    /**
     * Retorna el emoji del grupo muscular
     * @returns {string} Emoji representativo
     */
    getMuscleGroupEmoji() {
        // TODO: Retornar emoji según muscleGroup
        // chest: 💪, back: 🦾, legs: 🦵, arms: 💪, shoulders: 🏋️, core: 🧘
    }
}
