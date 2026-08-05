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
    static MUSCLE_GROUPS = ['chest', 'back', 'legs', 'arms', 'shoulders', 'core'];
    static MUSCLE_GROUP_EMOJI = {
        chest: '💪', back: '🦾', legs: '🦵', arms: '💪', shoulders: '🏋️', core: '🧘'
    };

    // ==================== CAMPOS PRIVADOS ADICIONALES ====================
    #sets;
    #reps;
    #weight;
    #muscleGroup;

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
        super(name, description, duration);
        if (typeof sets !== 'number' || sets <= 0) throw new Error('sets debe ser mayor a 0');
        if (typeof reps !== 'number' || reps <= 0) throw new Error('reps debe ser mayor a 0');
        if (typeof weight !== 'number' || weight < 0) throw new Error('weight debe ser >= 0');
        if (!StrengthExercise.MUSCLE_GROUPS.includes(muscleGroup)) {
            throw new Error(`muscleGroup debe ser uno de: ${StrengthExercise.MUSCLE_GROUPS.join(', ')}`);
        }
        this.#sets = sets;
        this.#reps = reps;
        this.#weight = weight;
        this.#muscleGroup = muscleGroup;
    }

    // ==================== GETTERS ====================
    get sets() { return this.#sets; }
    get reps() { return this.#reps; }
    get weight() { return this.#weight; }
    get muscleGroup() { return this.#muscleGroup; }

    // ==================== SETTERS ====================
    /**
     * Setter para sets con validación
     */
    set sets(value) {
        if (typeof value !== 'number' || value <= 0) throw new Error('sets debe ser mayor a 0');
        this.#sets = value;
    }

    /**
     * Setter para reps con validación
     */
    set reps(value) {
        if (typeof value !== 'number' || value <= 0) throw new Error('reps debe ser mayor a 0');
        this.#reps = value;
    }

    /**
     * Setter para weight con validación
     */
    set weight(value) {
        if (typeof value !== 'number' || value < 0) throw new Error('weight debe ser >= 0');
        this.#weight = value;
    }

    /**
     * Setter para muscleGroup con validación
     */
    set muscleGroup(value) {
        if (!StrengthExercise.MUSCLE_GROUPS.includes(value)) {
            throw new Error(`muscleGroup debe ser uno de: ${StrengthExercise.MUSCLE_GROUPS.join(', ')}`);
        }
        this.#muscleGroup = value;
    }

    // ==================== MÉTODOS SOBRESCRITOS ====================
    /**
     * Implementación del método abstracto getInfo()
     * @returns {string} Información específica del ejercicio de fuerza
     */
    getInfo() {
        return `${this.name} - ${this.#sets}x${this.#reps} - ${this.#weight}kg - ${this.#muscleGroup}`;
    }

    // ==================== MÉTODOS ESPECÍFICOS ====================
    /**
     * Calcula el volumen total (sets × reps × weight)
     * @returns {number} Volumen total en kg
     */
    getTotalVolume() {
        return this.#sets * this.#reps * this.#weight;
    }

    /**
     * Calcula el número total de repeticiones
     * @returns {number} Total de repeticiones
     */
    getTotalReps() {
        return this.#sets * this.#reps;
    }

    /**
     * Retorna el emoji del grupo muscular
     * @returns {string} Emoji representativo
     */
    getMuscleGroupEmoji() {
        return StrengthExercise.MUSCLE_GROUP_EMOJI[this.#muscleGroup];
    }
}
