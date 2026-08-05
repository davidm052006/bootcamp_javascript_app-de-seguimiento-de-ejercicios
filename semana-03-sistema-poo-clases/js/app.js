/**
 * APP.JS - Integración con el DOM
 *
 * Este archivo conecta las clases POO con la interfaz de usuario
 *
 * Conceptos aplicados:
 * - Instanciación de clases
 * - Event listeners
 * - Manipulación del DOM
 * - Renderizado dinámico
 */

// ==================== INSTANCIA DEL SISTEMA ====================
const fitnessSystem = new FitnessSystem();

let currentFilterType = '';
let currentSearchQuery = '';

// ==================== INICIALIZACIÓN ====================
/**
 * Inicializa la aplicación cuando el DOM está listo
 */
document.addEventListener('DOMContentLoaded', () => {
    initEventListeners();
    loadSampleData();
    renderStats();
    renderExercises();
});

// ==================== EVENT LISTENERS ====================
/**
 * Inicializa todos los event listeners
 */
function initEventListeners() {
    document.getElementById('exercise-form').addEventListener('submit', handleExerciseSubmit);
    document.getElementById('exercise-type').addEventListener('change', handleTypeChange);
    document.getElementById('filter-type').addEventListener('change', handleFilterChange);
    document.getElementById('search-input').addEventListener('input', handleSearch);
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('details-modal').addEventListener('click', (e) => {
        if (e.target.id === 'details-modal') closeModal();
    });
}

/**
 * Muestra solo los campos específicos del tipo de ejercicio seleccionado
 */
function handleTypeChange() {
    const type = document.getElementById('exercise-type').value;
    document.getElementById('fields-cardio').hidden = type !== 'cardio';
    document.getElementById('fields-strength').hidden = type !== 'strength';
    document.getElementById('fields-flexibility').hidden = type !== 'flexibility';
}

// ==================== MANEJADORES DE FORMULARIOS ====================
/**
 * Maneja el envío del formulario de ejercicios
 * @param {Event} e - Evento del formulario
 */
function handleExerciseSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('exercise-name').value;
    const type = document.getElementById('exercise-type').value;
    const duration = Number(document.getElementById('exercise-duration').value);
    const description = document.getElementById('exercise-desc').value;

    let exercise;
    try {
        switch (type) {
            case 'cardio':
                exercise = new CardioExercise(
                    name, description, duration,
                    Number(document.getElementById('cardio-distance').value),
                    document.getElementById('cardio-intensity').value
                );
                break;
            case 'strength':
                exercise = new StrengthExercise(
                    name, description, duration,
                    Number(document.getElementById('strength-sets').value),
                    Number(document.getElementById('strength-reps').value),
                    Number(document.getElementById('strength-weight').value),
                    document.getElementById('strength-muscle').value
                );
                break;
            case 'flexibility':
                exercise = new FlexibilityExercise(
                    name, description, duration,
                    Number(document.getElementById('flex-holdtime').value),
                    Number(document.getElementById('flex-repetitions').value),
                    document.getElementById('flex-area').value,
                    document.getElementById('flex-difficulty').value
                );
                break;
        }

        fitnessSystem.addExercise(exercise);
        e.target.reset();
        handleTypeChange();
        renderExercises();
        renderStats();
    } catch (error) {
        alert(`No se pudo crear el ejercicio: ${error.message}`);
    }
}

// ==================== RENDERIZADO ====================
/**
 * Renderiza las estadísticas del sistema
 */
function renderStats() {
    const stats = fitnessSystem.getStats();
    document.getElementById('stats').innerHTML = `
        <span>Ejercicios: <strong>${stats.totalExercises}</strong></span>
        <span>Activos: <strong>${stats.activeExercises}</strong></span>
        <span>Miembros: <strong>${stats.totalMembers}</strong></span>
        <span>Entrenadores: <strong>${stats.totalTrainers}</strong></span>
    `;
}

/**
 * Renderiza la lista de ejercicios
 */
function renderExercises() {
    let exercises = currentFilterType
        ? fitnessSystem.filterExercisesByType(currentFilterType)
        : fitnessSystem.getAllExercises();

    if (currentSearchQuery) {
        const term = currentSearchQuery.toLowerCase();
        exercises = exercises.filter(exercise => exercise.name.toLowerCase().includes(term));
    }

    const container = document.getElementById('exercise-list');
    container.innerHTML = '';

    if (exercises.length === 0) {
        container.innerHTML = '<p class="empty-state">No hay ejercicios que coincidan con los filtros.</p>';
        return;
    }

    exercises.forEach(exercise => {
        container.appendChild(createExerciseCard(exercise));
    });
}

/**
 * Crea una tarjeta HTML para un ejercicio
 * @param {BaseExercise} exercise - Ejercicio a renderizar
 * @returns {HTMLElement} Elemento DOM de la tarjeta
 */
function createExerciseCard(exercise) {
    const card = document.createElement('div');
    card.className = `exercise-card ${exercise.isActive ? 'active' : 'inactive'}`;

    card.innerHTML = `
        <h3>${exercise.name}</h3>
        <p>${exercise.description}</p>
        <span class="badge">${exercise.getType()}</span>
        <div class="actions">
            <button type="button" class="btn-details" data-id="${exercise.id}">Ver detalles</button>
            <button type="button" class="btn-delete" data-id="${exercise.id}">Eliminar</button>
        </div>
    `;

    card.querySelector('.btn-details').addEventListener('click', () => viewDetails(exercise.id));
    card.querySelector('.btn-delete').addEventListener('click', () => deleteExercise(exercise.id));

    return card;
}

// ==================== ACCIONES ====================
/**
 * Muestra los detalles de un ejercicio en el modal
 * @param {number} id - ID del ejercicio
 */
function viewDetails(id) {
    const exercise = fitnessSystem.findExercise(id);
    if (!exercise) return;

    const modal = document.getElementById('details-modal');
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `<p>${exercise.getInfo()}</p>`;
    modal.hidden = false;
}

/**
 * Cierra el modal de detalles
 */
function closeModal() {
    document.getElementById('details-modal').hidden = true;
}

/**
 * Elimina un ejercicio
 * @param {number} id - ID del ejercicio
 */
function deleteExercise(id) {
    if (confirm('¿Estás seguro de eliminar este ejercicio?')) {
        fitnessSystem.removeExercise(id);
        renderExercises();
        renderStats();
    }
}

// ==================== FILTROS Y BÚSQUEDA ====================
/**
 * Maneja cambios en los filtros
 */
function handleFilterChange() {
    currentFilterType = document.getElementById('filter-type').value;
    renderExercises();
}

/**
 * Maneja la búsqueda de ejercicios
 * @param {Event} e - Evento del input
 */
function handleSearch(e) {
    currentSearchQuery = e.target.value;
    renderExercises();
}

// ==================== DATOS DE PRUEBA ====================
/**
 * Carga datos de prueba para desarrollo
 */
function loadSampleData() {
    const cardio1 = new CardioExercise('Correr', 'Correr en cinta', 30, 5, 'high');
    fitnessSystem.addExercise(cardio1);

    const cardio2 = new CardioExercise('Bicicleta estática', 'Sesión de ciclismo indoor', 40, 15, 'medium');
    fitnessSystem.addExercise(cardio2);

    const strength1 = new StrengthExercise('Press de banca', 'Ejercicio de pecho', 20, 4, 12, 60, 'chest');
    fitnessSystem.addExercise(strength1);

    const strength2 = new StrengthExercise('Sentadillas', 'Ejercicio de piernas', 25, 5, 10, 80, 'legs');
    fitnessSystem.addExercise(strength2);

    const flex1 = new FlexibilityExercise('Estiramiento de isquiotibiales', 'Estiramiento estático', 10, 30, 3, 'lower', 'beginner');
    fitnessSystem.addExercise(flex1);

    const member1 = new Member('Juan Pérez', 'juan@email.com', 'premium');
    fitnessSystem.addMember(member1);

    const trainer1 = new Trainer('Ana García', 'ana@email.com', 'strength', ['NSCA-CPT']);
    fitnessSystem.addTrainer(trainer1);
}
