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
    // TODO: Declarar campos privados:
    // - #id (número único)
    // - #memberId (ID del miembro que realizó la sesión)
    // - #routineId (ID de la rutina ejecutada)
    // - #exercises (array de IDs de ejercicios completados)
    // - #startTime (fecha/hora de inicio)
    // - #endTime (fecha/hora de fin)
    // - #notes (notas adicionales - opcional)
    // - #rating (calificación de la sesión 1-5)


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
        // TODO: Generar ID único
        // TODO: Validar memberId (debe ser > 0)
        // TODO: Validar routineId (debe ser > 0)
        // TODO: Validar exercises (debe ser array con al menos 1 elemento)
        // TODO: Validar startTime y endTime (endTime debe ser > startTime)
        // TODO: Validar rating (debe estar entre 1 y 5)
        // TODO: Inicializar todos los campos privados
    }


    // ==================== GETTERS ====================
    // TODO: Crear getters para todos los campos
    // get id() { }
    // get memberId() { }
    // get routineId() { }
    // get exercises() { }
    // get startTime() { }
    // get endTime() { }
    // get notes() { }
    // get rating() { }


    // ==================== MÉTODOS DE CÁLCULO ====================
    /**
     * Calcula la duración total de la sesión en minutos
     * @returns {number} Duración en minutos
     */
    getDuration() {
        // TODO: Calcular diferencia entre endTime y startTime
        // TODO: Convertir a minutos
        // return (this.#endTime - this.#startTime) / (1000 * 60);
    }

    /**
     * Retorna el número de ejercicios completados
     * @returns {number} Total de ejercicios
     */
    getTotalExercises() {
        // TODO: Retornar la longitud del array exercises
    }

    /**
     * Calcula el promedio de tiempo por ejercicio
     * @returns {number} Promedio en minutos
     */
    getAverageTimePerExercise() {
        // TODO: Dividir duración total entre número de ejercicios
    }


    // ==================== MÉTODOS DE INFORMACIÓN ====================
    /**
     * Retorna información de la sesión
     * @returns {string} Información formateada
     */
    getInfo() {
        // TODO: Retornar string con duración, ejercicios y calificación
        // Ejemplo: "Sesión de 45 min - 8 ejercicios - ⭐⭐⭐⭐⭐"
    }

    /**
     * Retorna las estrellas según el rating
     * @returns {string} Estrellas (⭐)
     */
    getStars() {
        // TODO: Retornar string con tantas ⭐ como el rating
        // Ejemplo: rating = 4 -> "⭐⭐⭐⭐"
    }

    /**
     * Retorna un resumen de la sesión
     * @returns {Object} Objeto con estadísticas
     */
    getSummary() {
        // TODO: Retornar objeto con:
        // - duration (duración en minutos)
        // - totalExercises (número de ejercicios)
        // - averageTime (tiempo promedio por ejercicio)
        // - rating (calificación)
        // - date (fecha de la sesión)
    }
}
