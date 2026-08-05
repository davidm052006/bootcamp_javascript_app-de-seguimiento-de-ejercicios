// storage.js - funciones para persistencia en localStorage (named exports)
import { STORAGE_KEY } from '../config.js';

export function saveData(data = []) {
    try {
        const payload = JSON.stringify(data);
        localStorage.setItem(STORAGE_KEY, payload);
        return true;
    } catch (err) {
        console.error('saveData error', err);
        return false;
    }
}

export function loadData() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY) ?? '[]';
        return JSON.parse(raw);
    } catch (err) {
        console.error('loadData error', err);
        return [];
    }
}

export function clearData() { localStorage.removeItem(STORAGE_KEY); }
