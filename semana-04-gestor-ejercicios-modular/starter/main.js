// main.js - entry point (ES module)
import { APP_TITLE } from './config.js';
import Manager from './services/manager.js';
import * as UI from './ui/render.js';
import { initUI } from './ui/events.js';

// instancia principal
const manager = new Manager();

// elementos del DOM (destructuring)
const elements = {
    form: document.getElementById('exercise-form'),
    inputs: {
        id: document.getElementById('exercise-id'),
        name: document.getElementById('exercise-name'),
        type: document.getElementById('exercise-type'),
        duration: document.getElementById('exercise-duration'),
        intensity: document.getElementById('exercise-intensity'),
        category: document.getElementById('exercise-category'),
        desc: document.getElementById('exercise-desc')
    },
    listContainer: document.getElementById('exercise-list'),
    statsContainer: document.getElementById('stats'),
    filterType: document.getElementById('filter-type'),
    filterCategory: document.getElementById('filter-category'),
    searchInput: document.getElementById('search-input'),
    btnReports: document.getElementById('btn-reports'),
    btnExport: document.getElementById('btn-export'),
    btnImport: document.getElementById('btn-import'),
    btnClear: document.getElementById('btn-clear')
};

document.title = APP_TITLE;

// initialize UI wiring
initUI({ manager, elements, renderers: UI });

// Expose manager for quick debugging in dev
window.__fitwell = { manager };
