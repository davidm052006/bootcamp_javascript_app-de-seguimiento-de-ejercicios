/**
 * CLASE BASE: Person
 *
 * Clase base para todos los usuarios del sistema
 *
 * Conceptos POO aplicados:
 * - Campos privados
 * - Validación de email
 * - Getters y setters
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

class Person {
    // ==================== CAMPOS PRIVADOS ====================
    #id;
    #name;
    #email;
    #registrationDate;

    // ==================== CONSTRUCTOR ====================
    /**
     * Constructor de Person
     * @param {string} name - Nombre completo
     * @param {string} email - Correo electrónico
     */
    constructor(name, email) {
        if (!name || !name.trim()) throw new Error('El nombre no puede estar vacío');
        if (!EMAIL_REGEX.test(email)) throw new Error('El email no tiene un formato válido');

        this.#id = Date.now() + Math.floor(Math.random() * 1000);
        this.#name = name;
        this.#email = email;
        this.#registrationDate = new Date();
    }

    // ==================== GETTERS ====================
    get id() { return this.#id; }
    get name() { return this.#name; }
    get email() { return this.#email; }
    get registrationDate() { return this.#registrationDate; }

    // ==================== SETTERS ====================
    /**
     * Setter para name con validación
     */
    set name(value) {
        if (!value || value.trim().length < 3) {
            throw new Error('El nombre debe tener al menos 3 caracteres');
        }
        this.#name = value;
    }

    /**
     * Setter para email con validación de formato
     */
    set email(value) {
        if (!EMAIL_REGEX.test(value)) {
            throw new Error('El email no tiene un formato válido');
        }
        this.#email = value;
    }

    // ==================== MÉTODOS ====================
    /**
     * Retorna información básica de la persona
     * @returns {string} Información formateada
     */
    getInfo() {
        return `${this.#name} (${this.#email})`;
    }

    /**
     * Retorna objeto JSON con los datos
     * @returns {Object} Datos de la persona
     */
    toJSON() {
        return {
            id: this.#id,
            name: this.#name,
            email: this.#email,
            registrationDate: this.#registrationDate
        };
    }
}
