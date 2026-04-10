// manager.js - clase que maneja la colección de ejercicios (default export)
import { loadData, saveData } from './storage.js';
import BaseExercise from '../models/BaseExercise.js';

export default class Manager {
    constructor() {
        // cargar desde storage
        this.exercises = loadData().map(d => new BaseExercise(d));
    }

    addExercise(data = {}) {
        const exercise = new BaseExercise(data);
        this.exercises.push(exercise);
        saveData(this.exercises);
        return exercise;
    }

    updateExercise(id, changes = {}) {
        const idx = this.exercises.findIndex(e => e.id === id);
        if (idx === -1) return null;
        this.exercises[idx] = Object.assign(this.exercises[idx], changes);
        saveData(this.exercises);
        return this.exercises[idx];
    }

    removeExercise(id) {
        this.exercises = this.exercises.filter(e => e.id !== id);
        saveData(this.exercises);
    }

    findExercise(id) { return this.exercises.find(e => e.id === id) ?? null; }

    getAll({ type = 'all', category = '', query = '' } = {}) {
        const q = (query || '').toLowerCase();
        return this.exercises.filter(e => {
            if (type !== 'all' && e.type !== type) return false;
            if (category && !e.category.toLowerCase().includes(category.toLowerCase())) return false;
            if (q && !e.name.toLowerCase().includes(q)) return false;
            return true;
        });
    }

    getStats() {
        const totalExercises = this.exercises.length;
        const byType = this.exercises.reduce((acc, e) => {
            acc[e.type] = (acc[e.type] || 0) + 1;
            return acc;
        }, {});
        return { totalExercises, byType };
    }

    importFromArray(arr = []) {
        // map raw objects to BaseExercise
        const added = arr.map(item => new BaseExercise(item));
        this.exercises = this.exercises.concat(added);
        saveData(this.exercises);
        return added.length;
    }

    exportToJson() {
        return JSON.stringify(this.exercises, null, 2);
    }
}
