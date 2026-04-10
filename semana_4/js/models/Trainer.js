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
    // ==================== CAMPOS PRIVADOS ADICIONALES ====================
    // TODO: Agregar campos privados específicos de Trainer:
    // - #specialization (especialización: 'cardio', 'strength', 'flexibility', 'general')
    // - #certifications (array de certificaciones)
    // - #clients (array de IDs de clientes asignados)
    // - #rating (calificación promedio 0-5)


    // ==================== CONSTRUCTOR ====================
    /**
     * Constructor de Trainer
     * @param {string} name - Nombre completo
     * @param {string} email - Correo electrónico
     * @param {string} specialization - Especialización
     * @param {Array} certifications - Array de certificaciones
     */
    constructor(name, email, specialization = 'general', certifications = []) {
        // TODO: Llamar al constructor padre con super()
        // TODO: Validar specialization ('cardio', 'strength', 'flexibility', 'general')
        // TODO: Inicializar clients como array vacío
        // TODO: Inicializar rating en 5.0
        // TODO: Asignar certifications
    }


    // ==================== GETTERS ====================
    // TODO: Crear getters para campos adicionales
    // get specialization() { }
    // get certifications() { }
    // get clients() { }
    // get rating() { }


    // ==================== SETTERS ====================
    /**
     * Setter para specialization con validación
     */
    // set specialization(value) {
    //     // TODO: Validar que sea uno de los valores permitidos
    // }

    /**
     * Setter para rating con validación
     */
    // set rating(value) {
    //     // TODO: Validar que esté entre 0 y 5
    // }


    // ==================== MÉTODOS ESPECÍFICOS ====================
    /**
     * Agrega un cliente al entrenador
     * @param {number} clientId - ID del cliente
     */
    addClient(clientId) {
        // TODO: Validar que clientId no esté ya en el array
        // TODO: Agregar clientId al array clients
    }

    /**
     * Elimina un cliente del entrenador
     * @param {number} clientId - ID del cliente
     */
    removeClient(clientId) {
        // TODO: Buscar y eliminar clientId del array clients
        // Usar filter o splice
    }

    /**
     * Agrega una certificación
     * @param {string} certification - Nombre de la certificación
     */
    addCertification(certification) {
        // TODO: Validar que no esté vacío
        // TODO: Agregar al array certifications
    }

    /**
     * Retorna el número de clientes asignados
     * @returns {number} Total de clientes
     */
    getTotalClients() {
        // TODO: Retornar la longitud del array clients
    }

    /**
     * Verifica si puede aceptar más clientes (máximo 20)
     * @returns {boolean} true si puede aceptar más
     */
    canAcceptClients() {
        // TODO: Retornar true si clients.length < 20
    }

    /**
     * Retorna información del entrenador (sobrescribe getInfo de Person)
     * @returns {string} Información formateada
     */
    getInfo() {
        // TODO: Retornar string con nombre, email, especialización y clientes
        // Ejemplo: "Ana García (ana@email.com) - Especialización: Fuerza - 15 clientes"
    }
}
