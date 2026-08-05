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
    static MEMBERSHIP_TYPES = ['basic', 'premium', 'vip'];

    // ==================== CAMPOS PRIVADOS ADICIONALES ====================
    #membershipType;
    #membershipExpiry;
    #workoutHistory;
    #goals;

    // ==================== CONSTRUCTOR ====================
    /**
     * Constructor de Member
     * @param {string} name - Nombre completo
     * @param {string} email - Correo electrónico
     * @param {string} membershipType - Tipo de membresía
     * @param {Date} membershipExpiry - Fecha de expiración
     */
    constructor(name, email, membershipType = 'basic', membershipExpiry = null) {
        super(name, email);
        if (!Member.MEMBERSHIP_TYPES.includes(membershipType)) {
            throw new Error(`membershipType debe ser uno de: ${Member.MEMBERSHIP_TYPES.join(', ')}`);
        }
        this.#membershipType = membershipType;
        this.#membershipExpiry = membershipExpiry ?? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
        this.#workoutHistory = [];
        this.#goals = [];
    }

    // ==================== GETTERS ====================
    get membershipType() { return this.#membershipType; }
    get membershipExpiry() { return this.#membershipExpiry; }
    get workoutHistory() { return [...this.#workoutHistory]; }
    get goals() { return [...this.#goals]; }

    // ==================== SETTERS ====================
    /**
     * Setter para membershipType con validación
     */
    set membershipType(value) {
        if (!Member.MEMBERSHIP_TYPES.includes(value)) {
            throw new Error(`membershipType debe ser uno de: ${Member.MEMBERSHIP_TYPES.join(', ')}`);
        }
        this.#membershipType = value;
    }

    /**
     * Setter para membershipExpiry con validación
     */
    set membershipExpiry(value) {
        if (!(value instanceof Date) || value <= new Date()) {
            throw new Error('membershipExpiry debe ser una fecha futura');
        }
        this.#membershipExpiry = value;
    }

    // ==================== MÉTODOS ESPECÍFICOS ====================
    /**
     * Verifica si la membresía está activa
     * @returns {boolean} true si está activa
     */
    isMembershipActive() {
        return this.#membershipExpiry > new Date();
    }

    /**
     * Agrega una sesión al historial
     * @param {number} sessionId - ID de la sesión completada
     */
    addWorkoutSession(sessionId) {
        this.#workoutHistory.push(sessionId);
    }

    /**
     * Agrega un objetivo
     * @param {string} goal - Objetivo a agregar
     */
    addGoal(goal) {
        if (!goal || !goal.trim()) throw new Error('El objetivo no puede estar vacío');
        this.#goals.push(goal);
    }

    /**
     * Elimina un objetivo
     * @param {number} index - Índice del objetivo a eliminar
     */
    removeGoal(index) {
        this.#goals.splice(index, 1);
    }

    /**
     * Retorna el número de entrenamientos completados
     * @returns {number} Total de entrenamientos
     */
    getTotalWorkouts() {
        return this.#workoutHistory.length;
    }

    /**
     * Retorna información del miembro (sobrescribe getInfo de Person)
     * @returns {string} Información formateada
     */
    getInfo() {
        const estado = this.isMembershipActive() ? 'Activo' : 'Vencido';
        const tipo = this.#membershipType.charAt(0).toUpperCase() + this.#membershipType.slice(1);
        return `${this.name} (${this.email}) - ${tipo} - ${estado}`;
    }
}
