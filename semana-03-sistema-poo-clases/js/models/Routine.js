/**
 * CLASE: Routine
 *
 * Representa una rutina de ejercicios con máquina de estados
 *
 * Conceptos POO aplicados:
 * - Máquina de estados (draft, active, paused, completed)
 * - Composición (contiene ejercicios)
 * - Validaciones de transiciones
 */

class Routine {
    // ==================== ESTADOS PERMITIDOS ====================
    static STATES = {
        DRAFT: 'draft',
        ACTIVE: 'active',
        PAUSED: 'paused',
        COMPLETED: 'completed'
    };

    // ==================== TRANSICIONES PERMITIDAS ====================
    static TRANSITIONS = {
        draft: ['active'],
        active: ['paused', 'completed'],
        paused: ['active', 'completed'],
        completed: []
    };

    static STATE_EMOJI = { draft: '📝', active: '▶️', paused: '⏸️', completed: '✅' };

    // ==================== CAMPOS PRIVADOS ====================
    #id;
    #name;
    #description;
    #exercises;
    #state;
    #createdBy;
    #dateCreated;
    #dateCompleted;

    // ==================== CONSTRUCTOR ====================
    /**
     * Constructor de Routine
     * @param {string} name - Nombre de la rutina
     * @param {string} description - Descripción
     * @param {number} createdBy - ID del creador
     */
    constructor(name, description, createdBy) {
        if (!name || !name.trim()) throw new Error('El nombre no puede estar vacío');
        if (!description || !description.trim()) throw new Error('La descripción no puede estar vacía');

        this.#id = Date.now() + Math.floor(Math.random() * 1000);
        this.#name = name;
        this.#description = description;
        this.#createdBy = createdBy;
        this.#exercises = [];
        this.#state = Routine.STATES.DRAFT;
        this.#dateCreated = new Date();
        this.#dateCompleted = null;
    }

    // ==================== GETTERS ====================
    get id() { return this.#id; }
    get name() { return this.#name; }
    get description() { return this.#description; }
    get exercises() { return [...this.#exercises]; }
    get state() { return this.#state; }
    get createdBy() { return this.#createdBy; }
    get dateCreated() { return this.#dateCreated; }
    get dateCompleted() { return this.#dateCompleted; }

    // ==================== MÉTODOS DE EJERCICIOS ====================
    /**
     * Agrega un ejercicio a la rutina
     * @param {number} exerciseId - ID del ejercicio
     */
    addExercise(exerciseId) {
        if (this.#state !== Routine.STATES.DRAFT) {
            throw new Error('Solo se pueden agregar ejercicios mientras la rutina está en borrador');
        }
        if (this.#exercises.includes(exerciseId)) return;
        this.#exercises.push(exerciseId);
    }

    /**
     * Elimina un ejercicio de la rutina
     * @param {number} exerciseId - ID del ejercicio
     */
    removeExercise(exerciseId) {
        if (this.#state !== Routine.STATES.DRAFT) {
            throw new Error('Solo se pueden quitar ejercicios mientras la rutina está en borrador');
        }
        this.#exercises = this.#exercises.filter(id => id !== exerciseId);
    }

    /**
     * Retorna el número total de ejercicios
     * @returns {number} Total de ejercicios
     */
    getTotalExercises() {
        return this.#exercises.length;
    }

    // ==================== MÁQUINA DE ESTADOS ====================
    /**
     * Verifica si una transición es válida
     * @param {string} newState - Nuevo estado
     * @returns {boolean} true si la transición es válida
     */
    canTransitionTo(newState) {
        return Routine.TRANSITIONS[this.#state].includes(newState);
    }

    /**
     * Cambia el estado de la rutina
     * @param {string} newState - Nuevo estado
     * @throws {Error} Si la transición no es válida
     */
    changeState(newState) {
        if (!this.canTransitionTo(newState)) {
            throw new Error(`No se puede pasar de '${this.#state}' a '${newState}'`);
        }
        this.#state = newState;
        if (newState === Routine.STATES.COMPLETED) {
            this.#dateCompleted = new Date();
        }
    }

    /**
     * Activa la rutina (draft -> active)
     */
    activate() {
        if (this.#exercises.length === 0) {
            throw new Error('La rutina necesita al menos 1 ejercicio para activarse');
        }
        this.changeState(Routine.STATES.ACTIVE);
    }

    /**
     * Pausa la rutina (active -> paused)
     */
    pause() {
        this.changeState(Routine.STATES.PAUSED);
    }

    /**
     * Reanuda la rutina (paused -> active)
     */
    resume() {
        this.changeState(Routine.STATES.ACTIVE);
    }

    /**
     * Completa la rutina (active/paused -> completed)
     */
    complete() {
        this.changeState(Routine.STATES.COMPLETED);
    }

    // ==================== MÉTODOS DE INFORMACIÓN ====================
    /**
     * Retorna información de la rutina
     * @returns {string} Información formateada
     */
    getInfo() {
        const estado = this.#state.charAt(0).toUpperCase() + this.#state.slice(1);
        return `${this.#name} - ${estado} - ${this.#exercises.length} ejercicios`;
    }

    /**
     * Retorna el emoji según el estado
     * @returns {string} Emoji representativo
     */
    getStateEmoji() {
        return Routine.STATE_EMOJI[this.#state];
    }
}
