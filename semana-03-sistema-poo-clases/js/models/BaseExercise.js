/**
 * CLASE BASE ABSTRACTA: BaseExercise
 *
 * Esta es la clase padre de todos los tipos de ejercicios.
 * NO se puede instanciar directamente (es abstracta).
 *
 * Conceptos POO aplicados:
 * - Campos privados con #
 * - Getters y setters
 * - Método abstracto (debe ser sobrescrito)
 * - Encapsulación
 */

class BaseExercise {
    // ==================== CAMPOS PRIVADOS ====================
    #id;
    #name;
    #description;
    #duration;
    #active;
    #dateCreated;

    // ==================== CONSTRUCTOR ====================
    /**
     * Constructor de la clase base
     * @param {string} name - Nombre del ejercicio
     * @param {string} description - Descripción del ejercicio
     * @param {number} duration - Duración en minutos
     */
    constructor(name, description, duration) {
        if (new.target === BaseExercise) {
            throw new Error('BaseExercise es una clase abstracta y no se puede instanciar directamente');
        }
        if (!name || !name.trim()) throw new Error('El nombre no puede estar vacío');
        if (!description || !description.trim()) throw new Error('La descripción no puede estar vacía');
        if (typeof duration !== 'number' || duration <= 0) throw new Error('La duración debe ser un número mayor a 0');

        this.#id = Date.now() + Math.floor(Math.random() * 1000);
        this.#name = name;
        this.#description = description;
        this.#duration = duration;
        this.#active = true;
        this.#dateCreated = new Date();
    }

    // ==================== GETTERS ====================
    get id() { return this.#id; }
    get name() { return this.#name; }
    get description() { return this.#description; }
    get duration() { return this.#duration; }
    get isActive() { return this.#active; }
    get dateCreated() { return this.#dateCreated; }

    // ==================== SETTERS ====================
    /**
     * Setter para name
     * Validar que no esté vacío y tenga mínimo 3 caracteres
     */
    set name(value) {
        if (!value || value.trim().length < 3) {
            throw new Error('El nombre debe tener al menos 3 caracteres');
        }
        this.#name = value;
    }

    /**
     * Setter para description
     * Validar que no esté vacío
     */
    set description(value) {
        if (!value || !value.trim()) {
            throw new Error('La descripción no puede estar vacía');
        }
        this.#description = value;
    }

    /**
     * Setter para duration
     * Validar que sea un número positivo mayor a 0
     */
    set duration(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error('La duración debe ser un número mayor a 0');
        }
        this.#duration = value;
    }

    // ==================== MÉTODOS DE ESTADO ====================
    /**
     * Activa el ejercicio
     */
    activate() {
        this.#active = true;
    }

    /**
     * Desactiva el ejercicio
     */
    deactivate() {
        this.#active = false;
    }

    // ==================== MÉTODO ABSTRACTO ====================
    /**
     * Método abstracto que DEBE ser implementado por las clases hijas
     * Retorna información específica del tipo de ejercicio
     * @throws {Error} Si no es sobrescrito en la clase hija
     */
    getInfo() {
        throw new Error('El método getInfo() debe ser implementado en la clase hija');
    }

    // ==================== MÉTODOS AUXILIARES ====================
    /**
     * Retorna el tipo de ejercicio (nombre de la clase)
     * @returns {string} Nombre de la clase
     */
    getType() {
        return this.constructor.name;
    }

    /**
     * Retorna un objeto con toda la información del ejercicio
     * @returns {Object} Objeto con todos los datos
     */
    toJSON() {
        return {
            id: this.#id,
            name: this.#name,
            description: this.#description,
            duration: this.#duration,
            active: this.#active,
            dateCreated: this.#dateCreated,
            type: this.getType()
        };
    }
}
