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
// TODO: Crear una instancia global del FitnessSystem
// const fitnessSystem = new FitnessSystem();


// ==================== INICIALIZACIÓN ====================
/**
 * Inicializa la aplicación cuando el DOM está listo
 */
document.addEventListener('DOMContentLoaded', () => {
    // TODO: Llamar a funciones de inicialización
    // initEventListeners();
    // loadSampleData(); // Opcional: cargar datos de prueba
    // renderStats();
    // renderExercises();
});


// ==================== EVENT LISTENERS ====================
/**
 * Inicializa todos los event listeners
 */
function initEventListeners() {
    // TODO: Agregar event listener al formulario de ejercicios
    // document.getElementById('exercise-form').addEventListener('submit', handleExerciseSubmit);
    
    // TODO: Agregar event listeners a los filtros
    // document.getElementById('filter-type').addEventListener('change', handleFilterChange);
    
    // TODO: Agregar event listener al botón de búsqueda
    // document.getElementById('search-input').addEventListener('input', handleSearch);
}


// ==================== MANEJADORES DE FORMULARIOS ====================
/**
 * Maneja el envío del formulario de ejercicios
 * @param {Event} e - Evento del formulario
 */
function handleExerciseSubmit(e) {
    e.preventDefault();
    
    // TODO: Obtener valores del formulario
    // const name = document.getElementById('exercise-name').value;
    // const type = document.getElementById('exercise-type').value;
    // ...
    
    // TODO: Crear instancia del tipo de ejercicio correcto
    // let exercise;
    // switch(type) {
    //     case 'cardio':
    //         exercise = new CardioExercise(...);
    //         break;
    //     case 'strength':
    //         exercise = new StrengthExercise(...);
    //         break;
    //     case 'flexibility':
    //         exercise = new FlexibilityExercise(...);
    //         break;
    // }
    
    // TODO: Agregar al sistema
    // fitnessSystem.addExercise(exercise);
    
    // TODO: Limpiar formulario
    // e.target.reset();
    
    // TODO: Re-renderizar
    // renderExercises();
    // renderStats();
}


// ==================== RENDERIZADO ====================
/**
 * Renderiza las estadísticas del sistema
 */
function renderStats() {
    // TODO: Obtener estadísticas del sistema
    // const stats = fitnessSystem.getStats();
    
    // TODO: Actualizar el DOM con las estadísticas
    // document.getElementById('total-exercises').textContent = stats.totalExercises;
    // document.getElementById('total-members').textContent = stats.totalMembers;
    // ...
}

/**
 * Renderiza la lista de ejercicios
 */
function renderExercises() {
    // TODO: Obtener ejercicios (aplicar filtros si hay)
    // const exercises = fitnessSystem.getAllExercises();
    
    // TODO: Limpiar contenedor
    // const container = document.getElementById('exercise-list');
    // container.innerHTML = '';
    
    // TODO: Crear HTML para cada ejercicio
    // exercises.forEach(exercise => {
    //     const card = createExerciseCard(exercise);
    //     container.appendChild(card);
    // });
}

/**
 * Crea una tarjeta HTML para un ejercicio
 * @param {BaseExercise} exercise - Ejercicio a renderizar
 * @returns {HTMLElement} Elemento DOM de la tarjeta
 */
function createExerciseCard(exercise) {
    // TODO: Crear elemento div con clase 'exercise-card'
    // const card = document.createElement('div');
    // card.className = 'exercise-card';
    
    // TODO: Agregar contenido HTML
    // card.innerHTML = `
    //     <h3>${exercise.name}</h3>
    //     <p>${exercise.description}</p>
    //     <span class="badge">${exercise.getType()}</span>
    //     <div class="actions">
    //         <button onclick="viewDetails(${exercise.id})">Ver detalles</button>
    //         <button onclick="deleteExercise(${exercise.id})">Eliminar</button>
    //     </div>
    // `;
    
    // return card;
}


// ==================== ACCIONES ====================
/**
 * Muestra los detalles de un ejercicio en el modal
 * @param {number} id - ID del ejercicio
 */
function viewDetails(id) {
    // TODO: Buscar ejercicio en el sistema
    // const exercise = fitnessSystem.findExercise(id);
    
    // TODO: Mostrar modal con información completa
    // const modal = document.getElementById('details-modal');
    // const modalBody = document.getElementById('modal-body');
    // modalBody.innerHTML = exercise.getInfo();
    // modal.style.display = 'block';
}

/**
 * Elimina un ejercicio
 * @param {number} id - ID del ejercicio
 */
function deleteExercise(id) {
    // TODO: Confirmar eliminación
    // if (confirm('¿Estás seguro de eliminar este ejercicio?')) {
    //     fitnessSystem.removeExercise(id);
    //     renderExercises();
    //     renderStats();
    // }
}


// ==================== FILTROS Y BÚSQUEDA ====================
/**
 * Maneja cambios en los filtros
 */
function handleFilterChange() {
    // TODO: Obtener valores de los filtros
    // const type = document.getElementById('filter-type').value;
    // const status = document.getElementById('filter-status').value;
    
    // TODO: Aplicar filtros y re-renderizar
    // renderExercises();
}

/**
 * Maneja la búsqueda de ejercicios
 * @param {Event} e - Evento del input
 */
function handleSearch(e) {
    // TODO: Obtener query de búsqueda
    // const query = e.target.value;
    
    // TODO: Buscar ejercicios
    // const results = fitnessSystem.searchExercisesByName(query);
    
    // TODO: Renderizar resultados
}


// ==================== DATOS DE PRUEBA (OPCIONAL) ====================
/**
 * Carga datos de prueba para desarrollo
 */
function loadSampleData() {
    // TODO: Crear ejercicios de ejemplo
    // const cardio1 = new CardioExercise('Correr', 'Correr en cinta', 30, 5, 'high');
    // fitnessSystem.addExercise(cardio1);
    
    // const strength1 = new StrengthExercise('Press de banca', 'Ejercicio de pecho', 20, 4, 12, 60, 'chest');
    // fitnessSystem.addExercise(strength1);
    
    // TODO: Crear miembros de ejemplo
    // const member1 = new Member('Juan Pérez', 'juan@email.com', 'premium');
    // fitnessSystem.addMember(member1);
    
    // TODO: Crear entrenadores de ejemplo
    // const trainer1 = new Trainer('Ana García', 'ana@email.com', 'strength', ['NSCA-CPT']);
    // fitnessSystem.addTrainer(trainer1);
}


// ==================== NOTAS IMPORTANTES ====================
/*
 * ORDEN DE IMPLEMENTACIÓN SUGERIDO:
 * 
 * 1. Implementa primero todas las clases en /models/
 * 2. Prueba cada clase en la consola del navegador
 * 3. Implementa loadSampleData() para tener datos de prueba
 * 4. Implementa renderStats() y renderExercises()
 * 5. Implementa los event listeners
 * 6. Implementa las acciones (view, delete, edit)
 * 7. Implementa filtros y búsqueda
 * 
 * TIPS:
 * - Usa console.log() para debuggear
 * - Prueba cada función individualmente
 * - Revisa la consola del navegador para errores
 * - Usa las DevTools para inspeccionar el DOM
 */
