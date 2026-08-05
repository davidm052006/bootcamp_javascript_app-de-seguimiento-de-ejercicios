/*
 * GESTOR DE RUTINAS DE EJERCICIOS - SEMANA 2
 * Bootcamp JavaScript
 * 
 * Conceptos implementados:
 * - CRUD completo (Create, Read, Update, Delete)
 * - Inmutabilidad (nunca mutar el estado directamente)
 * - Array methods (map, filter, reduce)
 * - Spread/Rest operators
 * - Funciones puras
 * - localStorage para persistencia
 * - Filtros y búsqueda
 * - Estadísticas en tiempo real
 */

// ============================================================================
// ESTADO DE LA APLICACIÓN (Inmutable)
// ============================================================================

/**
 * Estado global de la aplicación
 * REGLA: Nunca modificar directamente, siempre crear una copia nueva
 */
let state = {
    routines: [],           // Array de rutinas
    filters: {
        search: '',
        status: 'all',
        category: 'all',
        level: 'all'
    },
    editingId: null        // ID de la rutina que se está editando
};

// ============================================================================
// FUNCIONES PURAS - GESTIÓN DE ESTADO
// ============================================================================

/**
 * Función pura: Crea una nueva rutina
 * No modifica nada, solo retorna un nuevo objeto
 */
const createRoutine = (name, category, level, duration, description) => {
    return {
        id: Date.now(),                    // ID único basado en timestamp
        name,
        category,
        level,
        duration: parseInt(duration),
        description,
        active: true,                      // Por defecto activa
        createdAt: new Date().toISOString()
    };
};

/**
 * Función pura: Agrega una rutina al estado
 * Usa spread operator para crear un nuevo array
 */
const addRoutine = (currentState, routine) => {
    return {
        ...currentState,                   // Copia el estado actual
        routines: [...currentState.routines, routine]  // Agrega la nueva rutina
    };
};

/**
 * Función pura: Actualiza una rutina existente
 * Usa map para crear un nuevo array con la rutina actualizada
 */
const updateRoutine = (currentState, id, updates) => {
    return {
        ...currentState,
        routines: currentState.routines.map(routine =>
            routine.id === id
                ? { ...routine, ...updates }  // Combina rutina existente con actualizaciones
                : routine                      // Mantiene las demás sin cambios
        )
    };
};

/**
 * Función pura: Elimina una rutina
 * Usa filter para crear un nuevo array sin la rutina eliminada
 */
const deleteRoutine = (currentState, id) => {
    return {
        ...currentState,
        routines: currentState.routines.filter(routine => routine.id !== id)
    };
};

/**
 * Función pura: Cambia el estado activo/inactivo de una rutina
 */
const toggleRoutineStatus = (currentState, id) => {
    return {
        ...currentState,
        routines: currentState.routines.map(routine =>
            routine.id === id
                ? { ...routine, active: !routine.active }
                : routine
        )
    };
};

/**
 * Función pura: Actualiza los filtros
 */
const updateFilters = (currentState, filterUpdates) => {
    return {
        ...currentState,
        filters: { ...currentState.filters, ...filterUpdates }
    };
};

// ============================================================================
// FUNCIONES PURAS - FILTRADO Y BÚSQUEDA
// ============================================================================

/**
 * Filtra rutinas por búsqueda de texto
 * Busca en nombre y descripción (case insensitive)
 */
const filterBySearch = (routines, searchTerm) => {
    if (!searchTerm) return routines;
    
    const term = searchTerm.toLowerCase();
    return routines.filter(routine =>
        routine.name.toLowerCase().includes(term) ||
        routine.description.toLowerCase().includes(term)
    );
};

/**
 * Filtra rutinas por estado (activo/inactivo)
 */
const filterByStatus = (routines, status) => {
    if (status === 'all') return routines;
    return routines.filter(routine =>
        status === 'active' ? routine.active : !routine.active
    );
};

/**
 * Filtra rutinas por categoría
 */
const filterByCategory = (routines, category) => {
    if (category === 'all') return routines;
    return routines.filter(routine => routine.category === category);
};

/**
 * Filtra rutinas por nivel
 */
const filterByLevel = (routines, level) => {
    if (level === 'all') return routines;
    return routines.filter(routine => routine.level === level);
};

/**
 * Aplica todos los filtros en secuencia
 * Composición de funciones: cada filtro recibe el resultado del anterior
 */
const applyAllFilters = (routines, filters) => {
    let filtered = routines;
    filtered = filterBySearch(filtered, filters.search);
    filtered = filterByStatus(filtered, filters.status);
    filtered = filterByCategory(filtered, filters.category);
    filtered = filterByLevel(filtered, filters.level);
    return filtered;
};

// ============================================================================
// FUNCIONES PURAS - ESTADÍSTICAS
// ============================================================================

/**
 * Calcula el total de rutinas
 */
const getTotalRoutines = (routines) => routines.length;

/**
 * Calcula rutinas activas usando filter y length
 */
const getActiveRoutines = (routines) =>
    routines.filter(routine => routine.active).length;

/**
 * Calcula rutinas inactivas
 */
const getInactiveRoutines = (routines) =>
    routines.filter(routine => !routine.active).length;

/**
 * Calcula estadísticas por categoría usando reduce
 * Retorna un objeto con el conteo de cada categoría
 */
const getStatsByCategory = (routines) => {
    return routines.reduce((stats, routine) => {
        const category = routine.category;
        stats[category] = (stats[category] || 0) + 1;
        return stats;
    }, {});
};

// ============================================================================
// PERSISTENCIA - localStorage
// ============================================================================

const STORAGE_KEY = 'fitness_routines_state';

/**
 * Guarda el estado en localStorage
 */
const saveToLocalStorage = (state) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
        console.error('Error guardando en localStorage:', error);
    }
};

/**
 * Carga el estado desde localStorage
 */
const loadFromLocalStorage = () => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : null;
    } catch (error) {
        console.error('Error cargando desde localStorage:', error);
        return null;
    }
};

// ============================================================================
// RENDERIZADO - DOM
// ============================================================================

/**
 * Renderiza las estadísticas
 */
const renderStats = () => {
    const { routines } = state;
    
    document.getElementById('total-routines').textContent = getTotalRoutines(routines);
    document.getElementById('active-routines').textContent = getActiveRoutines(routines);
    document.getElementById('inactive-routines').textContent = getInactiveRoutines(routines);
};

/**
 * Renderiza una tarjeta de rutina
 * Usa template literals para crear el HTML
 */
const renderRoutineCard = (routine) => {
    const statusClass = routine.active ? 'status-active' : 'status-inactive';
    const statusText = routine.active ? 'Activa' : 'Inactiva';
    const cardClass = routine.active ? '' : 'inactive';
    
    return `
        <div class="routine-card ${cardClass}" data-id="${routine.id}">
            <div class="routine-header">
                <div>
                    <h3 class="routine-title">${routine.name}</h3>
                    <div class="routine-meta">
                        <span class="badge badge-category">${routine.category}</span>
                        <span class="badge badge-level">${routine.level}</span>
                        <span class="meta-item">⏱️ ${routine.duration} min</span>
                    </div>
                </div>
                <span class="routine-status ${statusClass}">${statusText}</span>
            </div>
            
            ${routine.description ? `<p class="routine-description">${routine.description}</p>` : ''}
            
            <div class="routine-actions">
                <button class="btn btn-success" onclick="handleToggleStatus(${routine.id})">
                    ${routine.active ? 'Desactivar' : 'Activar'}
                </button>
                <button class="btn btn-edit" onclick="handleEdit(${routine.id})">
                    Editar
                </button>
                <button class="btn btn-danger" onclick="handleDelete(${routine.id})">
                    Eliminar
                </button>
            </div>
        </div>
    `;
};

/**
 * Renderiza la lista completa de rutinas
 */
const renderRoutines = () => {
    const container = document.getElementById('routines-list');
    const emptyState = document.getElementById('empty-state');
    
    // Aplicar filtros
    const filteredRoutines = applyAllFilters(state.routines, state.filters);
    
    if (filteredRoutines.length === 0) {
        container.innerHTML = '';
        emptyState.style.display = 'block';
    } else {
        emptyState.style.display = 'none';
        // Usa map para transformar cada rutina en HTML y join para unirlas
        container.innerHTML = filteredRoutines
            .map(routine => renderRoutineCard(routine))
            .join('');
    }
};

/**
 * Renderiza toda la UI
 */
const render = () => {
    renderStats();
    renderRoutines();
    saveToLocalStorage(state);  // Persiste después de cada cambio
};

// ============================================================================
// MANEJADORES DE EVENTOS
// ============================================================================

/**
 * Maneja el envío del formulario (crear o actualizar)
 */
const handleSubmit = (e) => {
    e.preventDefault();
    
    // Obtener valores del formulario
    const name = document.getElementById('routine-name').value.trim();
    const category = document.getElementById('routine-category').value;
    const level = document.getElementById('routine-level').value;
    const duration = document.getElementById('routine-duration').value;
    const description = document.getElementById('routine-description').value.trim();
    
    if (state.editingId) {
        // Modo edición: actualizar rutina existente
        state = updateRoutine(state, state.editingId, {
            name,
            category,
            level,
            duration: parseInt(duration),
            description
        });
        state.editingId = null;
        resetForm();
    } else {
        // Modo creación: crear nueva rutina
        const newRoutine = createRoutine(name, category, level, duration, description);
        state = addRoutine(state, newRoutine);
    }
    
    // Limpiar formulario y re-renderizar
    document.getElementById('routine-form').reset();
    render();
};

/**
 * Maneja la eliminación de una rutina
 */
const handleDelete = (id) => {
    if (confirm('¿Estás seguro de eliminar esta rutina?')) {
        state = deleteRoutine(state, id);
        render();
    }
};

/**
 * Maneja el cambio de estado activo/inactivo
 */
const handleToggleStatus = (id) => {
    state = toggleRoutineStatus(state, id);
    render();
};

/**
 * Maneja la edición de una rutina
 */
const handleEdit = (id) => {
    // Buscar la rutina a editar
    const routine = state.routines.find(r => r.id === id);
    if (!routine) return;
    
    // Llenar el formulario con los datos de la rutina
    document.getElementById('routine-name').value = routine.name;
    document.getElementById('routine-category').value = routine.category;
    document.getElementById('routine-level').value = routine.level;
    document.getElementById('routine-duration').value = routine.duration;
    document.getElementById('routine-description').value = routine.description;
    
    // Cambiar el título y botones del formulario
    document.getElementById('form-title').textContent = 'Editar Rutina';
    document.getElementById('submit-btn').textContent = 'Actualizar Rutina';
    document.getElementById('cancel-btn').style.display = 'inline-block';
    
    // Guardar el ID que se está editando
    state.editingId = id;
    
    // Scroll al formulario
    document.querySelector('.form-card').scrollIntoView({ behavior: 'smooth' });
};

/**
 * Resetea el formulario al modo creación
 */
const resetForm = () => {
    document.getElementById('form-title').textContent = 'Crear Nueva Rutina';
    document.getElementById('submit-btn').textContent = 'Crear Rutina';
    document.getElementById('cancel-btn').style.display = 'none';
    document.getElementById('routine-form').reset();
    state.editingId = null;
};

/**
 * Maneja los cambios en los filtros
 */
const handleFilterChange = () => {
    const search = document.getElementById('search-input').value;
    const status = document.getElementById('filter-status').value;
    const category = document.getElementById('filter-category').value;
    const level = document.getElementById('filter-level').value;
    
    state = updateFilters(state, { search, status, category, level });
    render();
};

/**
 * Maneja el cambio de tema
 */
const handleThemeToggle = () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    
    // Guardar preferencia
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Cambiar emoji del botón
    document.getElementById('theme-toggle').textContent = isDark ? '☀️' : '🌙';
};

/**
 * Carga el tema guardado
 */
const loadTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.getElementById('theme-toggle').textContent = '☀️';
    }
};

// ============================================================================
// INICIALIZACIÓN
// ============================================================================

/**
 * Inicializa la aplicación
 */
const init = () => {
    // Cargar estado guardado
    const savedState = loadFromLocalStorage();
    if (savedState) {
        state = savedState;
    }
    
    // Cargar tema
    loadTheme();
    
    // Event listeners
    document.getElementById('routine-form').addEventListener('submit', handleSubmit);
    document.getElementById('cancel-btn').addEventListener('click', resetForm);
    document.getElementById('search-input').addEventListener('input', handleFilterChange);
    document.getElementById('filter-status').addEventListener('change', handleFilterChange);
    document.getElementById('filter-category').addEventListener('change', handleFilterChange);
    document.getElementById('filter-level').addEventListener('change', handleFilterChange);
    document.getElementById('theme-toggle').addEventListener('click', handleThemeToggle);
    
    // Renderizado inicial
    render();
    
    console.log('✅ Aplicación inicializada');
};

// Iniciar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);
