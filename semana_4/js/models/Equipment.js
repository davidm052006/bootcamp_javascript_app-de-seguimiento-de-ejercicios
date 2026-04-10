/**
 * CLASE INDEPENDIENTE: Equipment
 * 
 * Representa equipamiento del gimnasio
 * 
 * Conceptos POO aplicados:
 * - Campos privados
 * - Validaciones
 * - Métodos de gestión
 */

class Equipment {
    // ==================== CAMPOS PRIVADOS ====================
    // TODO: Declarar campos privados:
    // - #id (número único)
    // - #name (nombre del equipo)
    // - #type (tipo: 'cardio', 'strength', 'flexibility', 'other')
    // - #available (disponible - boolean)
    // - #condition (condición: 'excellent', 'good', 'fair', 'poor')
    // - #lastMaintenance (fecha del último mantenimiento)


    // ==================== CONSTRUCTOR ====================
    /**
     * Constructor de Equipment
     * @param {string} name - Nombre del equipo
     * @param {string} type - Tipo de equipo
     * @param {string} condition - Condición del equipo
     */
    constructor(name, type, condition = 'excellent') {
        // TODO: Generar ID único
        // TODO: Validar name (no vacío)
        // TODO: Validar type ('cardio', 'strength', 'flexibility', 'other')
        // TODO: Validar condition ('excellent', 'good', 'fair', 'poor')
        // TODO: Inicializar available como true
        // TODO: Inicializar lastMaintenance como new Date()
    }


    // ==================== GETTERS ====================
    // TODO: Crear getters para todos los campos
    // get id() { }
    // get name() { }
    // get type() { }
    // get available() { }
    // get condition() { }
    // get lastMaintenance() { }


    // ==================== SETTERS ====================
    /**
     * Setter para condition con validación
     */
    // set condition(value) {
    //     // TODO: Validar que sea uno de los valores permitidos
    // }


    // ==================== MÉTODOS DE DISPONIBILIDAD ====================
    /**
     * Marca el equipo como en uso
     */
    markAsInUse() {
        // TODO: Cambiar available a false
    }

    /**
     * Marca el equipo como disponible
     */
    markAsAvailable() {
        // TODO: Cambiar available a true
    }


    // ==================== MÉTODOS DE MANTENIMIENTO ====================
    /**
     * Registra un mantenimiento
     * @param {string} newCondition - Nueva condición después del mantenimiento
     */
    performMaintenance(newCondition = 'excellent') {
        // TODO: Validar newCondition
        // TODO: Actualizar condition
        // TODO: Actualizar lastMaintenance a new Date()
    }

    /**
     * Verifica si necesita mantenimiento (más de 30 días)
     * @returns {boolean} true si necesita mantenimiento
     */
    needsMaintenance() {
        // TODO: Calcular días desde lastMaintenance
        // TODO: Retornar true si han pasado más de 30 días
        // Pista: (new Date() - this.#lastMaintenance) / (1000 * 60 * 60 * 24)
    }


    // ==================== MÉTODOS DE INFORMACIÓN ====================
    /**
     * Retorna información del equipo
     * @returns {string} Información formateada
     */
    getInfo() {
        // TODO: Retornar string con nombre, tipo, condición y disponibilidad
        // Ejemplo: "Cinta de correr - Cardio - Excelente - Disponible"
    }

    /**
     * Retorna el emoji según el tipo
     * @returns {string} Emoji representativo
     */
    getTypeEmoji() {
        // TODO: Retornar emoji según type
        // cardio: 🏃, strength: 🏋️, flexibility: 🧘, other: 🔧
    }
}
