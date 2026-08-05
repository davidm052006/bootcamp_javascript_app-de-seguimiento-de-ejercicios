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
    // ==================== CONFIGURACIÓN ESTÁTICA ====================
    static {
        this.VERSION = '1.0.0';
        this.MAX_EXERCISES = 1000;
        this.MAX_MEMBERS = 500;
        this.MAX_TRAINERS = 50;
    }

    // ==================== CAMPOS PRIVADOS ====================
    #exercises;
    #members;
    #trainers;
    #routines;
    #sessions;
    #equipment;

    // ==================== CONSTRUCTOR ====================
    constructor() {
        this.#exercises = [];
        this.#members = [];
        this.#trainers = [];
        this.#routines = [];
        this.#sessions = [];
        this.#equipment = [];
    }

    // ==================== MÉTODOS CRUD - EXERCISES ====================
    /**
     * Agrega un ejercicio al sistema
     * @param {BaseExercise} exercise - Ejercicio a agregar
     * @returns {BaseExercise} Ejercicio agregado
     */
    addExercise(exercise) {
        if (!(exercise instanceof BaseExercise)) {
            throw new Error('exercise debe ser una instancia de BaseExercise');
        }
        if (this.#exercises.length >= FitnessSystem.MAX_EXERCISES) {
            throw new Error(`No se pueden superar los ${FitnessSystem.MAX_EXERCISES} ejercicios`);
        }
        this.#exercises.push(exercise);
        return exercise;
    }

    /**
     * Elimina un ejercicio por ID
     * @param {number} id - ID del ejercicio
     * @returns {boolean} true si se eliminó
     */
    removeExercise(id) {
        const index = this.#exercises.findIndex(exercise => exercise.id === id);
        if (index === -1) return false;
        this.#exercises.splice(index, 1);
        return true;
    }

    /**
     * Busca un ejercicio por ID
     * @param {number} id - ID del ejercicio
     * @returns {BaseExercise|null} Ejercicio encontrado o null
     */
    findExercise(id) {
        return this.#exercises.find(exercise => exercise.id === id) ?? null;
    }

    /**
     * Retorna todos los ejercicios
     * @returns {Array} Array de ejercicios
     */
    getAllExercises() {
        return [...this.#exercises];
    }

    // ==================== MÉTODOS CRUD - MEMBERS ====================
    /**
     * Agrega un miembro al sistema
     * @param {Member} member - Miembro a agregar
     * @returns {Member} Miembro agregado
     */
    addMember(member) {
        if (!(member instanceof Member)) {
            throw new Error('member debe ser una instancia de Member');
        }
        if (this.#members.length >= FitnessSystem.MAX_MEMBERS) {
            throw new Error(`No se pueden superar los ${FitnessSystem.MAX_MEMBERS} miembros`);
        }
        this.#members.push(member);
        return member;
    }

    /**
     * Elimina un miembro por ID
     * @param {number} id - ID del miembro
     * @returns {boolean} true si se eliminó
     */
    removeMember(id) {
        const index = this.#members.findIndex(member => member.id === id);
        if (index === -1) return false;
        this.#members.splice(index, 1);
        return true;
    }

    /**
     * Busca un miembro por ID
     * @param {number} id - ID del miembro
     * @returns {Member|null} Miembro encontrado o null
     */
    findMember(id) {
        return this.#members.find(member => member.id === id) ?? null;
    }

    // ==================== MÉTODOS CRUD - TRAINERS ====================
    /**
     * Agrega un entrenador al sistema
     * @param {Trainer} trainer - Entrenador a agregar
     * @returns {Trainer} Entrenador agregado
     */
    addTrainer(trainer) {
        if (!(trainer instanceof Trainer)) {
            throw new Error('trainer debe ser una instancia de Trainer');
        }
        if (this.#trainers.length >= FitnessSystem.MAX_TRAINERS) {
            throw new Error(`No se pueden superar los ${FitnessSystem.MAX_TRAINERS} entrenadores`);
        }
        this.#trainers.push(trainer);
        return trainer;
    }

    /**
     * Busca un entrenador por ID
     * @param {number} id - ID del entrenador
     * @returns {Trainer|null} Entrenador encontrado o null
     */
    findTrainer(id) {
        return this.#trainers.find(trainer => trainer.id === id) ?? null;
    }

    // ==================== MÉTODOS CRUD - ROUTINES ====================
    /**
     * Agrega una rutina al sistema
     * @param {Routine} routine - Rutina a agregar
     * @returns {Routine} Rutina agregada
     */
    addRoutine(routine) {
        if (!(routine instanceof Routine)) {
            throw new Error('routine debe ser una instancia de Routine');
        }
        this.#routines.push(routine);
        return routine;
    }

    /**
     * Busca una rutina por ID
     * @param {number} id - ID de la rutina
     * @returns {Routine|null} Rutina encontrada o null
     */
    findRoutine(id) {
        return this.#routines.find(routine => routine.id === id) ?? null;
    }

    // ==================== MÉTODOS CRUD - SESSIONS ====================
    /**
     * Registra una sesión de entrenamiento
     * @param {WorkoutSession} session - Sesión a registrar
     * @returns {WorkoutSession} Sesión registrada
     */
    addSession(session) {
        if (!(session instanceof WorkoutSession)) {
            throw new Error('session debe ser una instancia de WorkoutSession');
        }
        this.#sessions.push(session);
        return session;
    }

    // ==================== MÉTODOS DE BÚSQUEDA ====================
    /**
     * Busca ejercicios por nombre
     * @param {string} query - Texto a buscar
     * @returns {Array} Ejercicios encontrados
     */
    searchExercisesByName(query) {
        const term = query.toLowerCase();
        return this.#exercises.filter(exercise => exercise.name.toLowerCase().includes(term));
    }

    /**
     * Filtra ejercicios por tipo
     * @param {string} type - Tipo de ejercicio
     * @returns {Array} Ejercicios filtrados
     */
    filterExercisesByType(type) {
        return this.#exercises.filter(exercise => exercise.getType() === type);
    }

    /**
     * Filtra ejercicios activos
     * @returns {Array} Ejercicios activos
     */
    getActiveExercises() {
        return this.#exercises.filter(exercise => exercise.isActive === true);
    }

    // ==================== MÉTODOS DE ESTADÍSTICAS ====================
    /**
     * Retorna estadísticas generales del sistema
     * @returns {Object} Objeto con estadísticas
     */
    getStats() {
        return {
            totalExercises: this.#exercises.length,
            totalMembers: this.#members.length,
            totalTrainers: this.#trainers.length,
            totalRoutines: this.#routines.length,
            totalSessions: this.#sessions.length,
            activeExercises: this.getActiveExercises().length,
            activeMembers: this.#members.filter(member => member.isMembershipActive()).length
        };
    }

    /**
     * Retorna estadísticas de un miembro
     * @param {number} memberId - ID del miembro
     * @returns {Object} Estadísticas del miembro
     */
    getMemberStats(memberId) {
        const memberSessions = this.#sessions.filter(session => session.memberId === memberId);
        const totalTime = memberSessions.reduce((sum, session) => sum + session.getDuration(), 0);
        return {
            totalSessions: memberSessions.length,
            totalTime,
            averageRating: memberSessions.length
                ? memberSessions.reduce((sum, session) => sum + session.rating, 0) / memberSessions.length
                : 0
        };
    }

    // ==================== MÉTODOS ESTÁTICOS ====================
    /**
     * Valida un email
     * @param {string} email - Email a validar
     * @returns {boolean} true si es válido
     */
    static validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    /**
     * Genera un ID único
     * @returns {number} ID único
     */
    static generateId() {
        return Date.now() + Math.floor(Math.random() * 1000);
    }
}
