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
    // TODO: Declarar campos privados con #
    // Obligatorios:
    // - #id (número único)
    // - #name (nombre del ejercicio)
    // - #description (descripción)
    // - #duration (duración en minutos)
    // - #active (estado activo/inactivo - boolean)
    // - #dateCreated (fecha de creación)


    // ==================== CONSTRUCTOR ====================
    /**
     * Constructor de la clase base
     * @param {string} name - Nombre del ejercicio
     * @param {string} description - Descripción del ejercicio
     * @param {number} duration - Duración en minutos
     */
    constructor(name, description, duration) {
        // TODO: Validar que los parámetros no estén vacíos
        // TODO: Generar un ID único (puedes usar Date.now())
        // TODO: Inicializar todos los campos privados
        // TODO: Por defecto, active debe ser true
        // TODO: dateCreated debe ser new Date()
    }

    // ==================== GETTERS ====================
    // TODO: Crear getters para TODOS los campos privados
    // Ejemplo:
    // get id() { return this.#id; }
    
    // get id() { }
    // get name() { }
    // get description() { }
    // get duration() { }
    // get isActive() { }  // Nota: usar isActive en lugar de active
    // get dateCreated() { }


    // ==================== SETTERS ====================
    // TODO: Crear setters con VALIDACIÓN
    
    /**
     * Setter para name
     * Validar que no esté vacío y tenga mínimo 3 caracteres
     */
    // set name(value) { }

    /**
     * Setter para description
     * Validar que no esté vacío
     */
    // set description(value) { }

    /**
     * Setter para duration
     * Validar que sea un número positivo mayor a 0
     */
    // set duration(value) { }


    // ==================== MÉTODOS DE ESTADO ====================
    /**
     * Activa el ejercicio
     */
    activate() {
        // TODO: Cambiar #active a true
    }

    /**
     * Desactiva el ejercicio
     */
    deactivate() {
        // TODO: Cambiar #active a false
    }


    // ==================== MÉTODO ABSTRACTO ====================
    /**
     * Método abstracto que DEBE ser implementado por las clases hijas
     * Retorna información específica del tipo de ejercicio
     * @throws {Error} Si no es sobrescrito en la clase hija
     */
    getInfo() {
        // TODO: Lanzar un error indicando que este método debe ser implementado
        // throw new Error('El método getInfo() debe ser implementado en la clase hija');
    }


    // ==================== MÉTODOS AUXILIARES ====================
    /**
     * Retorna el tipo de ejercicio (nombre de la clase)
     * @returns {string} Nombre de la clase
     */
    getType() {
        // TODO: Retornar this.constructor.name
    }

    /**
     * Retorna un objeto con toda la información del ejercicio
     * @returns {Object} Objeto con todos los datos
     */
    toJSON() {
        // TODO: Retornar un objeto con todos los campos
        // return {
        //     id: this.#id,
        //     name: this.#name,
        //     ...
        // };
    }
}
