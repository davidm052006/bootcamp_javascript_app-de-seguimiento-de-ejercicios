/**
 * User - Clase base para usuarios del sistema
 * 
 * Campos privados:
 * - #userId: string - Identificador único
 * - #username: string - Nombre de usuario
 * - #email: string - Email del usuario
 * - #registrationDate: Date - Fecha de registro
 */

class User {
    // TODO: Definir campos privados
    
    // TODO: Definir configuración estática
    // static #defaultConfig = {};
    
    /**
     * Static block - se ejecuta una vez al cargar la clase
     */
    static {
        // TODO: Inicializar configuración por defecto
    }
    
    /**
     * Constructor de User
     * @param {string} userId - Identificador único
     * @param {string} username - Nombre de usuario
     * @param {string} email - Email
     */
    constructor(userId, username, email) {
        // TODO: Implementar constructor con validaciones
    }
    
    // TODO: Implementar método privado de validación
    // #validateEmail(email) { }
    
    // TODO: Implementar getters y setters
    
    /**
     * Verifica si el usuario puede modificar una rutina
     * @param {Routine} routine - Rutina a verificar
     * @returns {boolean} true si puede modificar
     */
    canModifyRoutine(routine) {
        // TODO: Implementar lógica por defecto
    }
    
    /**
     * Obtiene información del usuario
     * @returns {Object} Información del usuario
     */
    getUserInfo() {
        // TODO: Implementar
    }
}
