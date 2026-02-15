/*
 * APLICACIÓN DE SEGUIMIENTO DE EJERCICIOS
 * Bootcamp JavaScript - Semana 1
 * 
 * Conceptos implementados:
 * - Variables modernas (const, let)
 * - Template literals
 * - Arrow functions
 * - Destructuring
 * - Array methods (map, reduce, filter)
 */

// ============================================================================
// DATOS DE LA RUTINA
// ============================================================================

// Objeto principal que contiene toda la información de la rutina
const routineData = {
    // Información básica
    name: 'Rutina Full Body',
    description: 'Entrenamiento completo de cuerpo entero enfocado en fuerza y resistencia',
    code: 'RUT-001',
    
    // Objeto anidado con detalles adicionales
    details: {
        place: 'Gimnasio Central',
        duration: 60, // minutos
        difficulty: 'Intermedio'
    },
    
    // Array de ejercicios
    exercises: [
        { 
            name: 'Sentadillas', 
            type: 'Piernas', 
            intensity: 85,
            calories: 120
        },
        { 
            name: 'Press de Banca', 
            type: 'Pecho', 
            intensity: 78,
            calories: 95
        },
        { 
            name: 'Peso Muerto', 
            type: 'Espalda', 
            intensity: 92,
            calories: 150
        },
        { 
            name: 'Press Militar', 
            type: 'Hombros', 
            intensity: 72,
            calories: 85
        },
        { 
            name: 'Dominadas', 
            type: 'Espalda', 
            intensity: 88,
            calories: 110
        }
    ],
    
    // Estadísticas generales
    stats: {
        completionRate: 87,
        sessionsCompleted: 24
    }
};

// ============================================================================
// DESTRUCTURING
// ============================================================================

// Extracción de propiedades del objeto principal
// Esto permite acceder directamente a las propiedades sin usar routineData.propiedad
const { name, description, code, details, exercises, stats } = routineData;

// Extracción de propiedades del objeto anidado 'details'
const { place, duration, difficulty } = details;


// ============================================================================
// FUNCIONES DE RENDERIZADO
// ============================================================================

/**
 * Renderiza la información básica de la rutina en el DOM
 * Actualiza los elementos HTML con los datos del objeto routineData
 */
const renderBasicInfo = () => {
    document.getElementById('routine-name').textContent = name;
    document.getElementById('routine-code').textContent = code;
    document.getElementById('routine-description').textContent = description;
    
    // Actualización de información detallada usando template literals
    document.getElementById('location').textContent = place;
    document.getElementById('duration').textContent = `${duration} minutos`;
    document.getElementById('difficulty').textContent = difficulty;
};

/**
 * Renderiza la lista de ejercicios en el DOM
 * Utiliza map() para transformar el array de ejercicios en elementos HTML
 */
const renderExercises = () => {
    const container = document.getElementById('exercises-list');
    
    // Transformación de cada ejercicio en HTML usando map()
    const exercisesHTML = exercises.map(exercise => {
        const { name, type, intensity, calories } = exercise;
        
        // Template literal para crear la estructura HTML de cada ejercicio
        return `
            <div class="exercise-item">
                <div class="exercise-header">
                    <span class="exercise-name">${name}</span>
                    <span class="exercise-type">${type}</span>
                </div>
                <div class="intensity-bar">
                    <div class="intensity-fill" style="width: ${intensity}%"></div>
                </div>
                <div class="intensity-label">
                    <span>Intensidad: ${intensity}%</span>
                    <span>${calories} kcal</span>
                </div>
            </div>
        `;
    }).join(''); // join() convierte el array de strings en un único string
    
    container.innerHTML = exercisesHTML;
};


// ============================================================================
// CÁLCULO DE ESTADÍSTICAS
// ============================================================================

/**
 * Calcula y renderiza las estadísticas de la rutina
 * Utiliza métodos de array (map, reduce) para procesar los datos
 */
const calculateStats = () => {
    // Total de ejercicios
    const totalExercises = exercises.length;
    
    // Suma total de calorías usando reduce()
    const totalCalories = exercises.reduce((sum, exercise) => {
        return sum + exercise.calories;
    }, 0);
    
    // Cálculo de intensidad promedio
    // Primero extrae todas las intensidades con map(), luego las suma con reduce()
    const avgIntensity = exercises
        .map(ex => ex.intensity)
        .reduce((sum, intensity) => sum + intensity, 0) / totalExercises;
    
    // Tasa de finalización
    const completionRate = stats.completionRate;
    
    // Actualización del DOM con los valores calculados
    document.getElementById('total-exercises').textContent = totalExercises;
    document.getElementById('avg-intensity').textContent = `${Math.round(avgIntensity)}%`;
    document.getElementById('total-calories').textContent = totalCalories;
    document.getElementById('completion-rate').textContent = `${completionRate}%`;
};


// ============================================================================
// FUNCIONES DE INTERACCIÓN
// ============================================================================

/**
 * Muestra una notificación temporal (toast) en la pantalla
 * @param {string} message - Mensaje a mostrar en la notificación
 */
const showToast = (message) => {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    // Oculta la notificación después de 3 segundos
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
};

/**
 * Alterna entre tema claro y oscuro
 * Utiliza classList.toggle() para añadir/quitar la clase 'dark-theme'
 * Guarda la preferencia del usuario en localStorage
 */
const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
    
    // Verificación del tema activo
    const isDark = document.body.classList.contains('dark-theme');
    const themeBtn = document.getElementById('toggle-theme');
    
    // Guardar preferencia en localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Actualización del texto del botón según el tema activo
    themeBtn.textContent = isDark ? 'Tema Claro' : 'Tema Oscuro';
    
    showToast(isDark ? 'Tema oscuro activado' : 'Tema claro activado');
};

/**
 * Carga el tema guardado desde localStorage
 * Se ejecuta al iniciar la aplicación
 */
const loadSavedTheme = () => {
    // Obtener tema guardado (por defecto 'light')
    const savedTheme = localStorage.getItem('theme') || 'light';
    const themeBtn = document.getElementById('toggle-theme');
    
    // Aplicar tema guardado
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeBtn.textContent = 'Tema Claro';
    } else {
        document.body.classList.remove('dark-theme');
        themeBtn.textContent = 'Tema Oscuro';
    }
};

/**
 * Copia la información de la rutina al portapapeles
 * Utiliza la API moderna del navegador (Clipboard API)
 */
const copyInfo = () => {
    // Template literal multilínea para formatear la información
    const info = `
${name}
${description}
Ubicacion: ${place}  
Duracion: ${duration} minutos
Nivel: ${difficulty}
Ejercicios: ${exercises.length}
    `.trim();
    
    // Uso de la API Clipboard con manejo de promesas
    navigator.clipboard.writeText(info)
        .then(() => showToast('Informacion copiada al portapapeles'))
        .catch(() => showToast('Error al copiar'));
};

/**
 * Alterna la visibilidad de las secciones acordeón
 * @param {string} buttonId - ID del botón que activa el acordeón
 * @param {string} contentId - ID del contenido a mostrar/ocultar
 */
const toggleAccordion = (buttonId, contentId) => {
    const button = document.getElementById(buttonId);
    const content = document.getElementById(contentId);
    
    // Toggle de clases para activar/desactivar el acordeón
    button.classList.toggle('active');
    content.classList.toggle('active');
    
    // Verificación del estado actual
    const isActive = content.classList.contains('active');
    const icon = buttonId === 'toggle-exercises' ? '' : '';
    const text = buttonId === 'toggle-exercises' ? 'Ejercicios' : 'Estadisticas';
    const action = isActive ? 'Ocultar' : 'Ver';
    
    button.innerHTML = `${icon} ${action} ${text} <span class="arrow">▼</span>`;
};


// ============================================================================
// EVENT LISTENERS
// ============================================================================

// Event listener para el botón de cambio de tema
document.getElementById('toggle-theme').addEventListener('click', () => {
    toggleTheme();
});

// Event listener para el botón de copiar información
document.getElementById('copy-info').addEventListener('click', () => {
    copyInfo();
});

// Event listeners para los acordeones
document.getElementById('toggle-exercises').addEventListener('click', () => {
    toggleAccordion('toggle-exercises', 'exercises-accordion');
});

document.getElementById('toggle-stats-accordion').addEventListener('click', () => {
    toggleAccordion('toggle-stats-accordion', 'stats-accordion');
});


// ============================================================================
// INICIALIZACIÓN
// ============================================================================

/**
 * Función de inicialización de la aplicación
 * Se ejecuta cuando el DOM está completamente cargado
 */
const init = () => {
    console.log('Iniciando aplicacion...');
    
    // Cargar tema guardado antes de renderizar
    loadSavedTheme();
    
    // Renderizado de toda la información
    renderBasicInfo();
    renderExercises();
    calculateStats();
    
    console.log('Aplicacion cargada correctamente');
};

// Event listener para el evento DOMContentLoaded
// Asegura que el HTML esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    init();
    showToast('Bienvenido a tu rutina de ejercicios');
});
