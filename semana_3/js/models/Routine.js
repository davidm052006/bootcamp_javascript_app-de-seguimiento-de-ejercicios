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
    // ==================== CAMPOS PRIVADOS ====================
    // TODO: Declarar campos privados:
    // - #id (número único)
    // - #name (nombre de la rutina)
    // - #description (descripción)
    // - #exercises (array de IDs de ejercicios)
    // - #state (estado: 'draft', 'active', 'paused', 'completed')
    // - #createdBy (ID del creador - puede ser trainer o member)
    // - #dateCreated (fecha de creación)
    // - #dateCompleted (fecha de completado - null si no está completada)


    // ==================== ESTADOS PERMITIDOS ====================
    // TODO: Crear un objeto estático con los estados permitidos
    // static STATES = {
    //     DRAFT: 'draft',
    //     ACTIVE: 'active',
    //     PAUSED: 'paused',
    //     COMPLETED: 'completed'
    // };


    // ==================== TRANSICIONES PERMITIDAS ====================
    // TODO: Crear un objeto estático con las transiciones válidas
    // static TRANSITIONS = {
    //     draft: ['active'],
    //     active: ['paused', 'completed'],
    //     paused: ['active', 'completed'],
    //     completed: []
    // };


    // ==================== CONSTRUCTOR ====================
    /**
     * Constructor de Routine
     * @param {string} name - Nombre de la rutina
     * @param {string} description - Descripción
     * @param {number} createdBy - ID del creador
     */
    constructor(name, description, createdBy) {
        // TODO: Generar ID único
        // TODO: Validar name (no vacío)
        // TODO: Validar description (no vacío)
        // TODO: Inicializar exercises como array vacío
        // TODO: Inicializar state como 'draft'
        // TODO: Inicializar dateCreated como new Date()
        // TODO: Inicializar dateCompleted como null
    }


    // ==================== GETTERS ====================
    // TODO: Crear getters para todos los campos
    // get id() { }
    // get name() { }
    // get description() { }
    // get exercises() { }
    // get state() { }
    // get createdBy() { }
    // get dateCreated() { }
    // get dateCompleted() { }


    // ==================== MÉTODOS DE EJERCICIOS ====================
    /**
     * Agrega un ejercicio a la rutina
     * @param {number} exerciseId - ID del ejercicio
     */
    addExercise(exerciseId) {
        // TODO: Validar que la rutina esté en estado 'draft'
        // TODO: Validar que exerciseId no esté ya en el array
        // TODO: Agregar exerciseId al array exercises
    }

    /**
     * Elimina un ejercicio de la rutina
     * @param {number} exerciseId - ID del ejercicio
     */
    removeExercise(exerciseId) {
        // TODO: Validar que la rutina esté en estado 'draft'
        // TODO: Eliminar exerciseId del array usando filter
    }

    /**
     * Retorna el número total de ejercicios
     * @returns {number} Total de ejercicios
     */
    getTotalExercises() {
        // TODO: Retornar la longitud del array exercises
    }


    // ==================== MÁQUINA DE ESTADOS ====================
    /**
     * Verifica si una transición es válida
     * @param {string} newState - Nuevo estado
     * @returns {boolean} true si la transición es válida
     */
    canTransitionTo(newState) {
        // TODO: Verificar si newState está en TRANSITIONS[this.#state]
        // return Routine.TRANSITIONS[this.#state].includes(newState);
    }

    /**
     * Cambia el estado de la rutina
     * @param {string} newState - Nuevo estado
     * @throws {Error} Si la transición no es válida
     */
    changeState(newState) {
        // TODO: Validar que la transición sea válida usando canTransitionTo()
        // TODO: Si no es válida, lanzar error
        // TODO: Cambiar #state al nuevo estado
        // TODO: Si newState es 'completed', actualizar dateCompleted
    }

    /**
     * Activa la rutina (draft -> active)
     */
    activate() {
        // TODO: Validar que haya al menos 1 ejercicio
        // TODO: Llamar a changeState('active')
    }

    /**
     * Pausa la rutina (active -> paused)
     */
    pause() {
        // TODO: Llamar a changeState('paused')
    }

    /**
     * Reanuda la rutina (paused -> active)
     */
    resume() {
        // TODO: Llamar a changeState('active')
    }

    /**
     * Completa la rutina (active/paused -> completed)
     */
    complete() {
        // TODO: Llamar a changeState('completed')
    }


    // ==================== MÉTODOS DE INFORMACIÓN ====================
    /**
     * Retorna información de la rutina
     * @returns {string} Información formateada
     */
    getInfo() {
        // TODO: Retornar string con nombre, estado y número de ejercicios
        // Ejemplo: "Rutina Full Body - Activa - 8 ejercicios"
    }

    /**
     * Retorna el emoji según el estado
     * @returns {string} Emoji representativo
     */
    getStateEmoji() {
        // TODO: Retornar emoji según state
        // draft: 📝, active: ▶️, paused: ⏸️, completed: ✅
    }
}
