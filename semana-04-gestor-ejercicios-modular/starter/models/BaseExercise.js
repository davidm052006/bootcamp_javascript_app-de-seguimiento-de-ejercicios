// BaseExercise.js
// Clase base para ejercicios (default export)

export default class BaseExercise {
    constructor({ id = null, name = '', type = 'cardio', duration = 0, intensity = '', category = '', description = '' } = {}) {
        this.id = id ?? Date.now();
        this.name = name;
        this.type = type;
        this.duration = duration;
        this.intensity = intensity;
        this.category = category;
        this.description = description;
        this.createdAt = new Date().toISOString();
    }

    getType() { return this.type; }

    getInfo() {
        const { name, type, duration, intensity, category, description } = this;
        return `${name} — ${type} — ${duration}min — ${intensity} — ${category}\n${description}`;
    }
}
