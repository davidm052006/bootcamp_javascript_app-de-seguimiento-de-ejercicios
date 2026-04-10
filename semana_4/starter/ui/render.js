// render.js - funciones para renderizado (named exports)
import { toShortDate } from '../utils/formatters.js';

export function renderStats(container, stats = {}) {
    const { totalExercises = 0, byType = {} } = stats;
    container.innerHTML = `
        <div><strong>Total:</strong> <span id="total-exercises">${totalExercises}</span></div>
        <div><strong>By type:</strong> ${Object.entries(byType).map(([k,v])=>`<span class="badge">${k}: ${v}</span>`).join(' ')}</div>
    `;
}

export function createExerciseCard(exercise = {}, { onView, onDelete, onEdit } = {}) {
    const { id, name, type, duration, intensity, category, createdAt } = exercise;
    const card = document.createElement('div');
    card.className = 'exercise-card';
    card.innerHTML = `
        <div class="meta">
            <strong>${name}</strong>
            <small>${type} · ${duration}min · ${category}</small>
            <small>${toShortDate(createdAt)}</small>
        </div>
        <div class="actions">
            <button data-id="${id}" class="view">View</button>
            <button data-id="${id}" class="edit secondary">Edit</button>
            <button data-id="${id}" class="delete">Delete</button>
        </div>
    `;

    // attach basic handlers
    card.querySelector('.view').addEventListener('click', () => onView?.(id));
    card.querySelector('.delete').addEventListener('click', () => onDelete?.(id));
    card.querySelector('.edit').addEventListener('click', () => onEdit?.(id));

    return card;
}

export function renderExerciseList(container, exercises = [], handlers = {}) {
    container.innerHTML = '';
    exercises.forEach(ex => container.appendChild(createExerciseCard(ex, handlers)));
}
