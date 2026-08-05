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
    static TYPES = ['cardio', 'strength', 'flexibility', 'other'];
    static CONDITIONS = ['excellent', 'good', 'fair', 'poor'];
    static TYPE_EMOJI = { cardio: '🏃', strength: '🏋️', flexibility: '🧘', other: '🔧' };
    static MAINTENANCE_INTERVAL_DAYS = 30;

    // ==================== CAMPOS PRIVADOS ====================
    #id;
    #name;
    #type;
    #available;
    #condition;
    #lastMaintenance;

    // ==================== CONSTRUCTOR ====================
    /**
     * Constructor de Equipment
     * @param {string} name - Nombre del equipo
     * @param {string} type - Tipo de equipo
     * @param {string} condition - Condición del equipo
     */
    constructor(name, type, condition = 'excellent') {
        if (!name || !name.trim()) throw new Error('El nombre no puede estar vacío');
        if (!Equipment.TYPES.includes(type)) {
            throw new Error(`type debe ser uno de: ${Equipment.TYPES.join(', ')}`);
        }
        if (!Equipment.CONDITIONS.includes(condition)) {
            throw new Error(`condition debe ser uno de: ${Equipment.CONDITIONS.join(', ')}`);
        }
        this.#id = Date.now() + Math.floor(Math.random() * 1000);
        this.#name = name;
        this.#type = type;
        this.#condition = condition;
        this.#available = true;
        this.#lastMaintenance = new Date();
    }

    // ==================== GETTERS ====================
    get id() { return this.#id; }
    get name() { return this.#name; }
    get type() { return this.#type; }
    get available() { return this.#available; }
    get condition() { return this.#condition; }
    get lastMaintenance() { return this.#lastMaintenance; }

    // ==================== SETTERS ====================
    /**
     * Setter para condition con validación
     */
    set condition(value) {
        if (!Equipment.CONDITIONS.includes(value)) {
            throw new Error(`condition debe ser uno de: ${Equipment.CONDITIONS.join(', ')}`);
        }
        this.#condition = value;
    }

    // ==================== MÉTODOS DE DISPONIBILIDAD ====================
    /**
     * Marca el equipo como en uso
     */
    markAsInUse() {
        this.#available = false;
    }

    /**
     * Marca el equipo como disponible
     */
    markAsAvailable() {
        this.#available = true;
    }

    // ==================== MÉTODOS DE MANTENIMIENTO ====================
    /**
     * Registra un mantenimiento
     * @param {string} newCondition - Nueva condición después del mantenimiento
     */
    performMaintenance(newCondition = 'excellent') {
        if (!Equipment.CONDITIONS.includes(newCondition)) {
            throw new Error(`newCondition debe ser uno de: ${Equipment.CONDITIONS.join(', ')}`);
        }
        this.#condition = newCondition;
        this.#lastMaintenance = new Date();
    }

    /**
     * Verifica si necesita mantenimiento (más de 30 días)
     * @returns {boolean} true si necesita mantenimiento
     */
    needsMaintenance() {
        const diasTranscurridos = (new Date() - this.#lastMaintenance) / (1000 * 60 * 60 * 24);
        return diasTranscurridos > Equipment.MAINTENANCE_INTERVAL_DAYS;
    }

    // ==================== MÉTODOS DE INFORMACIÓN ====================
    /**
     * Retorna información del equipo
     * @returns {string} Información formateada
     */
    getInfo() {
        const disponibilidad = this.#available ? 'Disponible' : 'En uso';
        return `${this.#name} - ${this.#type} - ${this.#condition} - ${disponibilidad}`;
    }

    /**
     * Retorna el emoji según el tipo
     * @returns {string} Emoji representativo
     */
    getTypeEmoji() {
        return Equipment.TYPE_EMOJI[this.#type];
    }
}
