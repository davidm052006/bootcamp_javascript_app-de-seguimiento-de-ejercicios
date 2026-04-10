/**
 * CLASE PRINCIPAL: FitnessSystem
 * 
 * Sistema principal que gestiona todos los elementos
 * 
 * Conceptos POO aplicados:
 * - Static blocks para configuración
 * - Métodos estáticos
 * - Gestión centralizada
 * - CRUD completo
 */

class FitnessSystem {
    // ==================== CAMPOS PRIVADOS ====================
    // TODO: Declarar campos privados:
    // - #exercises (array de ejercicios)
    // - #members (array de miembros)
    // - #trainers (array de entrenadores)
    // - #routines (array de rutinas)
    // - #sessions (array de sesiones)
    // - #equipment (array de equipamiento)


    // ==================== CONFIGURACIÓN ESTÁTICA ====================
    // TODO: Crear static block para configuración
    // static {
    //     this.VERSION = '1.0.0';
    //     this.MAX_EXERCISES = 1000;
    //     this.MAX_MEMBERS = 500;
    //     this.MAX_TRAINERS = 50;
    // }


    // ==================== CONSTRUCTOR ====================
    constructor() {
        // TODO: Inicializar todos los arrays como vacíos
    }


    // ==================== MÉTODOS CRUD - EXERCISES ====================
    /**
     * Agrega un ejercicio al sistema
     * @param {BaseExercise} exercise - Ejercicio a agregar
     * @returns {BaseExercise} Ejercicio agregado
     */
    addExercise(exercise) {
        // TODO: Validar que exercise sea instancia de BaseExercise
        // TODO: Validar que no se exceda MAX_EXERCISES
        // TODO: Agregar al array #exercises
        // TODO: Retornar el ejercicio
    }

    /**
     * Elimina un ejercicio por ID
     * @param {number} id - ID del ejercicio
     * @returns {boolean} true si se eliminó
     */
    removeExercise(id) {
        // TODO: Buscar índice del ejercicio
        // TODO: Si existe, eliminarlo con splice
        // TODO: Retornar true si se eliminó, false si no
    }

    /**
     * Busca un ejercicio por ID
     * @param {number} id - ID del ejercicio
     * @returns {BaseExercise|null} Ejercicio encontrado o null
     */
    findExercise(id) {
        // TODO: Usar find() para buscar por ID
    }

    /**
     * Retorna todos los ejercicios
     * @returns {Array} Array de ejercicios
     */
    getAllExercises() {
        // TODO: Retornar copia del array #exercises
        // return [...this.#exercises];
    }


    // ==================== MÉTODOS CRUD - MEMBERS ====================
    /**
     * Agrega un miembro al sistema
     * @param {Member} member - Miembro a agregar
     * @returns {Member} Miembro agregado
     */
    addMember(member) {
        // TODO: Validar que member sea instancia de Member
        // TODO: Validar que no se exceda MAX_MEMBERS
        // TODO: Agregar al array #members
    }

    /**
     * Elimina un miembro por ID
     * @param {number} id - ID del miembro
     * @returns {boolean} true si se eliminó
     */
    removeMember(id) {
        // TODO: Similar a removeExercise
    }

    /**
     * Busca un miembro por ID
     * @param {number} id - ID del miembro
     * @returns {Member|null} Miembro encontrado o null
     */
    findMember(id) {
        // TODO: Usar find() para buscar por ID
    }


    // ==================== MÉTODOS CRUD - TRAINERS ====================
    /**
     * Agrega un entrenador al sistema
     * @param {Trainer} trainer - Entrenador a agregar
     * @returns {Trainer} Entrenador agregado
     */
    addTrainer(trainer) {
        // TODO: Validar que trainer sea instancia de Trainer
        // TODO: Validar que no se exceda MAX_TRAINERS
        // TODO: Agregar al array #trainers
    }

    /**
     * Busca un entrenador por ID
     * @param {number} id - ID del entrenador
     * @returns {Trainer|null} Entrenador encontrado o null
     */
    findTrainer(id) {
        // TODO: Usar find() para buscar por ID
    }


    // ==================== MÉTODOS CRUD - ROUTINES ====================
    /**
     * Agrega una rutina al sistema
     * @param {Routine} routine - Rutina a agregar
     * @returns {Routine} Rutina agregada
     */
    addRoutine(routine) {
        // TODO: Validar que routine sea instancia de Routine
        // TODO: Agregar al array #routines
    }

    /**
     * Busca una rutina por ID
     * @param {number} id - ID de la rutina
     * @returns {Routine|null} Rutina encontrada o null
     */
    findRoutine(id) {
        // TODO: Usar find() para buscar por ID
    }


    // ==================== MÉTODOS CRUD - SESSIONS ====================
    /**
     * Registra una sesión de entrenamiento
     * @param {WorkoutSession} session - Sesión a registrar
     * @returns {WorkoutSession} Sesión registrada
     */
    addSession(session) {
        // TODO: Validar que session sea instancia de WorkoutSession
        // TODO: Agregar al array #sessions
    }


    // ==================== MÉTODOS DE BÚSQUEDA ====================
    /**
     * Busca ejercicios por nombre
     * @param {string} query - Texto a buscar
     * @returns {Array} Ejercicios encontrados
     */
    searchExercisesByName(query) {
        // TODO: Filtrar exercises donde name incluya query (case insensitive)
    }

    /**
     * Filtra ejercicios por tipo
     * @param {string} type - Tipo de ejercicio
     * @returns {Array} Ejercicios filtrados
     */
    filterExercisesByType(type) {
        // TODO: Filtrar exercises donde getType() === type
    }

    /**
     * Filtra ejercicios activos
     * @returns {Array} Ejercicios activos
     */
    getActiveExercises() {
        // TODO: Filtrar exercises donde isActive === true
    }


    // ==================== MÉTODOS DE ESTADÍSTICAS ====================
    /**
     * Retorna estadísticas generales del sistema
     * @returns {Object} Objeto con estadísticas
     */
    getStats() {
        // TODO: Retornar objeto con:
        // - totalExercises
        // - totalMembers
        // - totalTrainers
        // - totalRoutines
        // - totalSessions
        // - activeExercises
        // - activeMembers (con membresía activa)
    }

    /**
     * Retorna estadísticas de un miembro
     * @param {number} memberId - ID del miembro
     * @returns {Object} Estadísticas del miembro
     */
    getMemberStats(memberId) {
        // TODO: Filtrar sessions del miembro
        // TODO: Calcular total de sesiones, tiempo total, etc.
    }


    // ==================== MÉTODOS ESTÁTICOS ====================
    /**
     * Valida un email
     * @param {string} email - Email a validar
     * @returns {boolean} true si es válido
     */
    static validateEmail(email) {
        // TODO: Validar formato de email con regex
        // /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    }

    /**
     * Genera un ID único
     * @returns {number} ID único
     */
    static generateId() {
        // TODO: Retornar Date.now() o un número aleatorio
    }
}
