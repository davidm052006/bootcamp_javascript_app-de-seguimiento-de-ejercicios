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

class Person {
    // ==================== CAMPOS PRIVADOS ====================
    // TODO: Declarar campos privados:
    // - #id (número único)
    // - #name (nombre completo)
    // - #email (correo electrónico)
    // - #registrationDate (fecha de registro)


    // ==================== CONSTRUCTOR ====================
    /**
     * Constructor de Person
     * @param {string} name - Nombre completo
     * @param {string} email - Correo electrónico
     */
    constructor(name, email) {
        // TODO: Validar que name no esté vacío
        // TODO: Validar formato de email (debe contener @ y .)
        // TODO: Generar ID único
        // TODO: Inicializar registrationDate con new Date()
        // TODO: Asignar valores a campos privados
    }


    // ==================== GETTERS ====================
    // TODO: Crear getters para todos los campos
    // get id() { }
    // get name() { }
    // get email() { }
    // get registrationDate() { }


    // ==================== SETTERS ====================
    /**
     * Setter para name con validación
     */
    // set name(value) {
    //     // TODO: Validar que no esté vacío y tenga mínimo 3 caracteres
    // }

    /**
     * Setter para email con validación de formato
     */
    // set email(value) {
    //     // TODO: Validar formato de email
    //     // Debe contener @ y al menos un punto después del @
    //     // Ejemplo regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // }


    // ==================== MÉTODOS ====================
    /**
     * Retorna información básica de la persona
     * @returns {string} Información formateada
     */
    getInfo() {
        // TODO: Retornar string con nombre y email
        // Ejemplo: "Juan Pérez (juan@email.com)"
    }

    /**
     * Retorna objeto JSON con los datos
     * @returns {Object} Datos de la persona
     */
    toJSON() {
        // TODO: Retornar objeto con todos los campos
    }
}
