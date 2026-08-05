/**
 * CLASE DERIVADA: Trainer
 *
 * Extiende de Person
 * Representa un entrenador del gimnasio
 *
 * Conceptos POO aplicados:
 * - Herencia de Person
 * - Campos privados específicos
 * - Métodos de gestión
 */

class Trainer extends Person {
    static SPECIALIZATIONS = ['cardio', 'strength', 'flexibility', 'general'];
    static MAX_CLIENTS = 20;

    // ==================== CAMPOS PRIVADOS ADICIONALES ====================
    #specialization;
    #certifications;
    #clients;
    #rating;

    // ==================== CONSTRUCTOR ====================
    /**
     * Constructor de Trainer
     * @param {string} name - Nombre completo
     * @param {string} email - Correo electrónico
     * @param {string} specialization - Especialización
     * @param {Array} certifications - Array de certificaciones
     */
    constructor(name, email, specialization = 'general', certifications = []) {
        super(name, email);
        if (!Trainer.SPECIALIZATIONS.includes(specialization)) {
            throw new Error(`specialization debe ser uno de: ${Trainer.SPECIALIZATIONS.join(', ')}`);
        }
        this.#specialization = specialization;
        this.#clients = [];
        this.#rating = 5.0;
        this.#certifications = [...certifications];
    }

    // ==================== GETTERS ====================
    get specialization() { return this.#specialization; }
    get certifications() { return [...this.#certifications]; }
    get clients() { return [...this.#clients]; }
    get rating() { return this.#rating; }

    // ==================== SETTERS ====================
    /**
     * Setter para specialization con validación
     */
    set specialization(value) {
        if (!Trainer.SPECIALIZATIONS.includes(value)) {
            throw new Error(`specialization debe ser uno de: ${Trainer.SPECIALIZATIONS.join(', ')}`);
        }
        this.#specialization = value;
    }

    /**
     * Setter para rating con validación
     */
    set rating(value) {
        if (typeof value !== 'number' || value < 0 || value > 5) {
            throw new Error('rating debe estar entre 0 y 5');
        }
        this.#rating = value;
    }

    // ==================== MÉTODOS ESPECÍFICOS ====================
    /**
     * Agrega un cliente al entrenador
     * @param {number} clientId - ID del cliente
     */
    addClient(clientId) {
        if (this.#clients.includes(clientId)) return;
        this.#clients.push(clientId);
    }

    /**
     * Elimina un cliente del entrenador
     * @param {number} clientId - ID del cliente
     */
    removeClient(clientId) {
        this.#clients = this.#clients.filter(id => id !== clientId);
    }

    /**
     * Agrega una certificación
     * @param {string} certification - Nombre de la certificación
     */
    addCertification(certification) {
        if (!certification || !certification.trim()) throw new Error('La certificación no puede estar vacía');
        this.#certifications.push(certification);
    }

    /**
     * Retorna el número de clientes asignados
     * @returns {number} Total de clientes
     */
    getTotalClients() {
        return this.#clients.length;
    }

    /**
     * Verifica si puede aceptar más clientes (máximo 20)
     * @returns {boolean} true si puede aceptar más
     */
    canAcceptClients() {
        return this.#clients.length < Trainer.MAX_CLIENTS;
    }

    /**
     * Retorna información del entrenador (sobrescribe getInfo de Person)
     * @returns {string} Información formateada
     */
    getInfo() {
        const especializacion = this.#specialization.charAt(0).toUpperCase() + this.#specialization.slice(1);
        return `${this.name} (${this.email}) - Especialización: ${especializacion} - ${this.#clients.length} clientes`;
    }
}
