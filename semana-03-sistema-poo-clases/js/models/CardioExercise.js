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
    static INTENSITY_MULTIPLIER = { low: 0.8, medium: 1.0, high: 1.3 };

    // ==================== CAMPOS PRIVADOS ADICIONALES ====================
    #distance;
    #intensity;
    #caloriesBurned;

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
        super(name, description, duration);
        if (!Object.hasOwn(CardioExercise.INTENSITY_MULTIPLIER, intensity)) {
            throw new Error("intensity debe ser 'low', 'medium' o 'high'");
        }
        if (typeof distance !== 'number' || distance < 0) {
            throw new Error('distance debe ser >= 0');
        }
        this.#distance = distance;
        this.#intensity = intensity;
        this.#caloriesBurned = this.calculateCalories();
    }

    // ==================== GETTERS ====================
    get distance() { return this.#distance; }
    get intensity() { return this.#intensity; }
    get caloriesBurned() { return this.#caloriesBurned; }

    // ==================== SETTERS ====================
    /**
     * Setter para intensity con validación
     */
    set intensity(value) {
        if (!Object.hasOwn(CardioExercise.INTENSITY_MULTIPLIER, value)) {
            throw new Error("intensity debe ser 'low', 'medium' o 'high'");
        }
        this.#intensity = value;
        this.#caloriesBurned = this.calculateCalories();
    }

    /**
     * Setter para distance con validación
     */
    set distance(value) {
        if (typeof value !== 'number' || value < 0) {
            throw new Error('distance debe ser >= 0');
        }
        this.#distance = value;
    }

    // ==================== MÉTODOS SOBRESCRITOS ====================
    /**
     * Implementación del método abstracto getInfo()
     * @returns {string} Información específica del ejercicio cardio
     */
    getInfo() {
        return `${this.name} - ${this.duration} min - ${this.#distance} km - Intensidad: ${this.#intensity} - ${this.#caloriesBurned} cal`;
    }

    // ==================== MÉTODOS ESPECÍFICOS ====================
    /**
     * Calcula las calorías quemadas según duración e intensidad
     * @returns {number} Calorías quemadas
     */
    calculateCalories() {
        return Math.round(this.duration * 10 * CardioExercise.INTENSITY_MULTIPLIER[this.#intensity]);
    }

    /**
     * Retorna el ritmo (pace) en min/km
     * @returns {number} Ritmo en minutos por kilómetro
     */
    getPace() {
        if (this.#distance > 0) return this.duration / this.#distance;
        return 0;
    }
}
