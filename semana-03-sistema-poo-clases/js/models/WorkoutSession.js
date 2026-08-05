/**
 * CLASE: WorkoutSession
 *
 * Representa una sesión de entrenamiento completada
 *
 * Conceptos POO aplicados:
 * - Composición (relaciona member, routine, exercises)
 * - Cálculos y estadísticas
 * - Inmutabilidad (una vez creada, no se modifica)
 */

class WorkoutSession {
    // ==================== CAMPOS PRIVADOS ====================
    #id;
    #memberId;
    #routineId;
    #exercises;
    #startTime;
    #endTime;
    #notes;
    #rating;

    // ==================== CONSTRUCTOR ====================
    /**
     * Constructor de WorkoutSession
     * @param {number} memberId - ID del miembro
     * @param {number} routineId - ID de la rutina
     * @param {Array} exercises - Array de IDs de ejercicios
     * @param {Date} startTime - Hora de inicio
     * @param {Date} endTime - Hora de fin
     * @param {number} rating - Calificación (1-5)
     * @param {string} notes - Notas adicionales
     */
    constructor(memberId, routineId, exercises, startTime, endTime, rating = 5, notes = '') {
        if (typeof memberId !== 'number' || memberId <= 0) throw new Error('memberId debe ser mayor a 0');
        if (typeof routineId !== 'number' || routineId <= 0) throw new Error('routineId debe ser mayor a 0');
        if (!Array.isArray(exercises) || exercises.length === 0) {
            throw new Error('exercises debe ser un array con al menos 1 elemento');
        }
        if (!(startTime instanceof Date) || !(endTime instanceof Date) || endTime <= startTime) {
            throw new Error('endTime debe ser posterior a startTime');
        }
        if (typeof rating !== 'number' || rating < 1 || rating > 5) {
            throw new Error('rating debe estar entre 1 y 5');
        }

        this.#id = Date.now() + Math.floor(Math.random() * 1000);
        this.#memberId = memberId;
        this.#routineId = routineId;
        this.#exercises = [...exercises];
        this.#startTime = startTime;
        this.#endTime = endTime;
        this.#rating = rating;
        this.#notes = notes;
    }

    // ==================== GETTERS ====================
    get id() { return this.#id; }
    get memberId() { return this.#memberId; }
    get routineId() { return this.#routineId; }
    get exercises() { return [...this.#exercises]; }
    get startTime() { return this.#startTime; }
    get endTime() { return this.#endTime; }
    get notes() { return this.#notes; }
    get rating() { return this.#rating; }

    // ==================== MÉTODOS DE CÁLCULO ====================
    /**
     * Calcula la duración total de la sesión en minutos
     * @returns {number} Duración en minutos
     */
    getDuration() {
        return (this.#endTime - this.#startTime) / (1000 * 60);
    }

    /**
     * Retorna el número de ejercicios completados
     * @returns {number} Total de ejercicios
     */
    getTotalExercises() {
        return this.#exercises.length;
    }

    /**
     * Calcula el promedio de tiempo por ejercicio
     * @returns {number} Promedio en minutos
     */
    getAverageTimePerExercise() {
        return this.getDuration() / this.#exercises.length;
    }

    // ==================== MÉTODOS DE INFORMACIÓN ====================
    /**
     * Retorna información de la sesión
     * @returns {string} Información formateada
     */
    getInfo() {
        return `Sesión de ${Math.round(this.getDuration())} min - ${this.#exercises.length} ejercicios - ${this.getStars()}`;
    }

    /**
     * Retorna las estrellas según el rating
     * @returns {string} Estrellas (⭐)
     */
    getStars() {
        return '⭐'.repeat(this.#rating);
    }

    /**
     * Retorna un resumen de la sesión
     * @returns {Object} Objeto con estadísticas
     */
    getSummary() {
        return {
            duration: this.getDuration(),
            totalExercises: this.getTotalExercises(),
            averageTime: this.getAverageTimePerExercise(),
            rating: this.#rating,
            date: this.#startTime
        };
    }
}
