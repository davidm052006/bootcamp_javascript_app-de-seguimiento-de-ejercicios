/**
 * CLASE DERIVADA: FlexibilityExercise
 * 
 * Extiende de BaseExercise
 * Representa ejercicios de flexibilidad y estiramiento
 * 
 * Conceptos POO aplicados:
 * - Herencia
 * - Campos privados específicos
 * - Métodos personalizados
 */

class FlexibilityExercise extends BaseExercise {
    // ==================== CAMPOS PRIVADOS ADICIONALES ====================
    // TODO: Agregar campos privados específicos de flexibilidad:
    // - #holdTime (tiempo de sostén en segundos por repetición)
    // - #repetitions (número de repeticiones)
    // - #targetArea (área objetivo: 'upper', 'lower', 'full-body')
    // - #difficulty (dificultad: 'beginner', 'intermediate', 'advanced')


    // ==================== CONSTRUCTOR ====================
    /**
     * Constructor de FlexibilityExercise
     * @param {string} name - Nombre del ejercicio
     * @param {string} description - Descripción
     * @param {number} duration - Duración en minutos
     * @param {number} holdTime - Tiempo de sostén en segundos
     * @param {number} repetitions - Número de repeticiones
     * @param {string} targetArea - Área objetivo
     * @param {string} difficulty - Nivel de dificultad
     */
    constructor(name, description, duration, holdTime, repetitions, targetArea, difficulty = 'beginner') {
        // TODO: Llamar al constructor padre con super()
        // TODO: Validar holdTime (debe ser > 0)
        // TODO: Validar repetitions (debe ser > 0)
        // TODO: Validar targetArea ('upper', 'lower', 'full-body')
        // TODO: Validar difficulty ('beginner', 'intermediate', 'advanced')
        // TODO: Inicializar campos privados
    }


    // ==================== GETTERS ====================
    // TODO: Crear getters para todos los campos adicionales
    // get holdTime() { }
    // get repetitions() { }
    // get targetArea() { }
    // get difficulty() { }


    // ==================== SETTERS ====================
    /**
     * Setter para holdTime con validación
     */
    // set holdTime(value) { }

    /**
     * Setter para repetitions con validación
     */
    // set repetitions(value) { }

    /**
     * Setter para targetArea con validación
     */
    // set targetArea(value) {
    //     // TODO: Validar que sea 'upper', 'lower' o 'full-body'
    // }

    /**
     * Setter para difficulty con validación
     */
    // set difficulty(value) {
    //     // TODO: Validar que sea 'beginner', 'intermediate' o 'advanced'
    // }


    // ==================== MÉTODOS SOBRESCRITOS ====================
    /**
     * Implementación del método abstracto getInfo()
     * @returns {string} Información específica del ejercicio de flexibilidad
     */
    getInfo() {
        // TODO: Retornar información del ejercicio
        // Incluir: nombre, tiempo de sostén, repeticiones, área, dificultad
        // Ejemplo: "Estiramiento de isquiotibiales - 30s x 3 reps - Piernas - Principiante"
    }


    // ==================== MÉTODOS ESPECÍFICOS ====================
    /**
     * Calcula el tiempo total de trabajo (holdTime × repetitions)
     * @returns {number} Tiempo total en segundos
     */
    getTotalWorkTime() {
        // TODO: Retornar holdTime * repetitions
    }

    /**
     * Retorna recomendaciones según la dificultad
     * @returns {string} Texto con recomendaciones
     */
    getRecommendations() {
        // TODO: Retornar recomendaciones según difficulty
        // beginner: "Mantén una respiración constante y no fuerces el estiramiento"
        // intermediate: "Aumenta gradualmente la intensidad del estiramiento"
        // advanced: "Enfócate en la técnica y la respiración profunda"
    }

    /**
     * Retorna el emoji del área objetivo
     * @returns {string} Emoji representativo
     */
    getTargetAreaEmoji() {
        // TODO: Retornar emoji según targetArea
        // upper: 🙆, lower: 🦵, full-body: 🧘
    }
}
