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
    static TARGET_AREAS = ['upper', 'lower', 'full-body'];
    static TARGET_AREA_EMOJI = { upper: '🙆', lower: '🦵', 'full-body': '🧘' };
    static DIFFICULTIES = ['beginner', 'intermediate', 'advanced'];
    static DIFFICULTY_RECOMMENDATIONS = {
        beginner: 'Mantén una respiración constante y no fuerces el estiramiento',
        intermediate: 'Aumenta gradualmente la intensidad del estiramiento',
        advanced: 'Enfócate en la técnica y la respiración profunda'
    };

    // ==================== CAMPOS PRIVADOS ADICIONALES ====================
    #holdTime;
    #repetitions;
    #targetArea;
    #difficulty;

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
        super(name, description, duration);
        if (typeof holdTime !== 'number' || holdTime <= 0) throw new Error('holdTime debe ser mayor a 0');
        if (typeof repetitions !== 'number' || repetitions <= 0) throw new Error('repetitions debe ser mayor a 0');
        if (!FlexibilityExercise.TARGET_AREAS.includes(targetArea)) {
            throw new Error(`targetArea debe ser uno de: ${FlexibilityExercise.TARGET_AREAS.join(', ')}`);
        }
        if (!FlexibilityExercise.DIFFICULTIES.includes(difficulty)) {
            throw new Error(`difficulty debe ser uno de: ${FlexibilityExercise.DIFFICULTIES.join(', ')}`);
        }
        this.#holdTime = holdTime;
        this.#repetitions = repetitions;
        this.#targetArea = targetArea;
        this.#difficulty = difficulty;
    }

    // ==================== GETTERS ====================
    get holdTime() { return this.#holdTime; }
    get repetitions() { return this.#repetitions; }
    get targetArea() { return this.#targetArea; }
    get difficulty() { return this.#difficulty; }

    // ==================== SETTERS ====================
    /**
     * Setter para holdTime con validación
     */
    set holdTime(value) {
        if (typeof value !== 'number' || value <= 0) throw new Error('holdTime debe ser mayor a 0');
        this.#holdTime = value;
    }

    /**
     * Setter para repetitions con validación
     */
    set repetitions(value) {
        if (typeof value !== 'number' || value <= 0) throw new Error('repetitions debe ser mayor a 0');
        this.#repetitions = value;
    }

    /**
     * Setter para targetArea con validación
     */
    set targetArea(value) {
        if (!FlexibilityExercise.TARGET_AREAS.includes(value)) {
            throw new Error(`targetArea debe ser uno de: ${FlexibilityExercise.TARGET_AREAS.join(', ')}`);
        }
        this.#targetArea = value;
    }

    /**
     * Setter para difficulty con validación
     */
    set difficulty(value) {
        if (!FlexibilityExercise.DIFFICULTIES.includes(value)) {
            throw new Error(`difficulty debe ser uno de: ${FlexibilityExercise.DIFFICULTIES.join(', ')}`);
        }
        this.#difficulty = value;
    }

    // ==================== MÉTODOS SOBRESCRITOS ====================
    /**
     * Implementación del método abstracto getInfo()
     * @returns {string} Información específica del ejercicio de flexibilidad
     */
    getInfo() {
        return `${this.name} - ${this.#holdTime}s x ${this.#repetitions} reps - ${this.#targetArea} - ${this.#difficulty}`;
    }

    // ==================== MÉTODOS ESPECÍFICOS ====================
    /**
     * Calcula el tiempo total de trabajo (holdTime × repetitions)
     * @returns {number} Tiempo total en segundos
     */
    getTotalWorkTime() {
        return this.#holdTime * this.#repetitions;
    }

    /**
     * Retorna recomendaciones según la dificultad
     * @returns {string} Texto con recomendaciones
     */
    getRecommendations() {
        return FlexibilityExercise.DIFFICULTY_RECOMMENDATIONS[this.#difficulty];
    }

    /**
     * Retorna el emoji del área objetivo
     * @returns {string} Emoji representativo
     */
    getTargetAreaEmoji() {
        return FlexibilityExercise.TARGET_AREA_EMOJI[this.#targetArea];
    }
}
