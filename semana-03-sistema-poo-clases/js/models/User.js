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
    #userId;
    #username;
    #email;
    #registrationDate;

    static #defaultConfig = {};

    /**
     * Static block - se ejecuta una vez al cargar la clase
     */
    static {
        this.#defaultConfig = {
            minUsernameLength: 3,
            emailPattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        };
    }

    /**
     * Constructor de User
     * @param {string} userId - Identificador único
     * @param {string} username - Nombre de usuario
     * @param {string} email - Email
     */
    constructor(userId, username, email) {
        if (!userId) throw new Error('userId es obligatorio');
        if (!username || username.trim().length < User.#defaultConfig.minUsernameLength) {
            throw new Error(`username debe tener al menos ${User.#defaultConfig.minUsernameLength} caracteres`);
        }
        if (!User.#validateEmail(email)) {
            throw new Error('email no tiene un formato válido');
        }
        this.#userId = userId;
        this.#username = username;
        this.#email = email;
        this.#registrationDate = new Date();
    }

    /**
     * Valida el formato de un email
     * @param {string} email
     * @returns {boolean}
     */
    static #validateEmail(email) {
        return User.#defaultConfig.emailPattern.test(email);
    }

    // ==================== GETTERS ====================
    get userId() { return this.#userId; }
    get username() { return this.#username; }
    get email() { return this.#email; }
    get registrationDate() { return this.#registrationDate; }

    // ==================== SETTERS ====================
    set username(value) {
        if (!value || value.trim().length < User.#defaultConfig.minUsernameLength) {
            throw new Error(`username debe tener al menos ${User.#defaultConfig.minUsernameLength} caracteres`);
        }
        this.#username = value;
    }

    set email(value) {
        if (!User.#validateEmail(value)) throw new Error('email no tiene un formato válido');
        this.#email = value;
    }

    /**
     * Verifica si el usuario puede modificar una rutina
     * @param {Routine} routine - Rutina a verificar
     * @returns {boolean} true si puede modificar
     */
    canModifyRoutine(routine) {
        return routine?.createdBy === this.#userId;
    }

    /**
     * Obtiene información del usuario
     * @returns {Object} Información del usuario
     */
    getUserInfo() {
        return {
            userId: this.#userId,
            username: this.#username,
            email: this.#email,
            registrationDate: this.#registrationDate
        };
    }
}
