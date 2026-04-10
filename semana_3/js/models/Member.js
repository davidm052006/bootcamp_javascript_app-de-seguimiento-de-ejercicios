/**
 * CLASE DERIVADA: Member
 * 
 * Extiende de Person
 * Representa un miembro/cliente del gimnasio
 * 
 * Conceptos POO aplicados:
 * - Herencia de Person
 * - Campos privados adicionales
 * - Métodos específicos del rol
 */

class Member extends Person {
    // ==================== CAMPOS PRIVADOS ADICIONALES ====================
    // TODO: Agregar campos privados específicos de Member:
    // - #membershipType (tipo: 'basic', 'premium', 'vip')
    // - #membershipExpiry (fecha de expiración)
    // - #workoutHistory (array de IDs de sesiones completadas)
    // - #goals (objetivos del miembro - array de strings)


    // ==================== CONSTRUCTOR ====================
    /**
     * Constructor de Member
     * @param {string} name - Nombre completo
     * @param {string} email - Correo electrónico
     * @param {string} membershipType - Tipo de membresía
     * @param {Date} membershipExpiry - Fecha de expiración
     */
    constructor(name, email, membershipType = 'basic', membershipExpiry = null) {
        // TODO: Llamar al constructor padre con super()
        // TODO: Validar membershipType ('basic', 'premium', 'vip')
        // TODO: Si membershipExpiry es null, establecer 1 mes desde hoy
        // TODO: Inicializar workoutHistory como array vacío
        // TODO: Inicializar goals como array vacío
    }


    // ==================== GETTERS ====================
    // TODO: Crear getters para campos adicionales
    // get membershipType() { }
    // get membershipExpiry() { }
    // get workoutHistory() { }
    // get goals() { }


    // ==================== SETTERS ====================
    /**
     * Setter para membershipType con validación
     */
    // set membershipType(value) {
    //     // TODO: Validar que sea 'basic', 'premium' o 'vip'
    // }

    /**
     * Setter para membershipExpiry con validación
     */
    // set membershipExpiry(value) {
    //     // TODO: Validar que sea una fecha futura
    // }


    // ==================== MÉTODOS ESPECÍFICOS ====================
    /**
     * Verifica si la membresía está activa
     * @returns {boolean} true si está activa
     */
    isMembershipActive() {
        // TODO: Comparar membershipExpiry con la fecha actual
        // Retornar true si membershipExpiry > new Date()
    }

    /**
     * Agrega una sesión al historial
     * @param {number} sessionId - ID de la sesión completada
     */
    addWorkoutSession(sessionId) {
        // TODO: Agregar sessionId al array workoutHistory
    }

    /**
     * Agrega un objetivo
     * @param {string} goal - Objetivo a agregar
     */
    addGoal(goal) {
        // TODO: Validar que goal no esté vacío
        // TODO: Agregar al array goals
    }

    /**
     * Elimina un objetivo
     * @param {number} index - Índice del objetivo a eliminar
     */
    removeGoal(index) {
        // TODO: Eliminar objetivo del array usando splice
    }

    /**
     * Retorna el número de entrenamientos completados
     * @returns {number} Total de entrenamientos
     */
    getTotalWorkouts() {
        // TODO: Retornar la longitud de workoutHistory
    }

    /**
     * Retorna información del miembro (sobrescribe getInfo de Person)
     * @returns {string} Información formateada
     */
    getInfo() {
        // TODO: Retornar string con nombre, email, tipo de membresía y estado
        // Ejemplo: "Juan Pérez (juan@email.com) - Premium - Activo"
    }
}
