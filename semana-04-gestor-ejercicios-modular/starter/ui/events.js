// events.js - attach event listeners and wire UI with manager (named export)
import { isNonEmptyString } from '../utils/validators.js';

export function initUI({ manager, elements, renderers }) {
    const { form, inputs, listContainer, statsContainer, filterType, filterCategory, searchInput, btnReports, btnExport, btnImport, btnClear } = elements;
    const { renderExerciseList, renderStats } = renderers;

    function refresh() {
        const filters = { type: filterType.value, category: filterCategory.value, query: searchInput.value };
        const list = manager.getAll(filters);
        renderExerciseList(listContainer, list, { onView, onDelete, onEdit });
        renderStats(statsContainer, manager.getStats());
    }

    function onView(id) {
        const exercise = manager.findExercise(id);
        const modal = document.getElementById('details-modal');
        const modalBody = document.getElementById('modal-body');
        modalBody.textContent = exercise ? exercise.getInfo() : 'Not found';
        modal.style.display = 'flex';
    }

    function onDelete(id) {
        if (confirm('Delete this exercise?')) {
            manager.removeExercise(id);
            refresh();
        }
    }

    function onEdit(id) {
        const e = manager.findExercise(id);
        if (!e) return;
        inputs.id.value = e.id;
        inputs.name.value = e.name;
        inputs.type.value = e.type;
        inputs.duration.value = e.duration;
        inputs.intensity.value = e.intensity;
        inputs.category.value = e.category;
        inputs.desc.value = e.description;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        const payload = {
            name: inputs.name.value,
            type: inputs.type.value,
            duration: Number(inputs.duration.value) || 0,
            intensity: inputs.intensity.value,
            category: inputs.category.value,
            description: inputs.desc.value
        };

        if (!isNonEmptyString(payload.name)) return alert('Name is required');

        const id = inputs.id.value;
        if (id) {
            manager.updateExercise(Number(id), payload);
        } else {
            manager.addExercise(payload);
        }

        form.reset();
        refresh();
    });

    btnClear.addEventListener('click', () => form.reset());

    filterType.addEventListener('change', refresh);
    filterCategory.addEventListener('input', refresh);
    searchInput.addEventListener('input', refresh);

    // modal close
    document.querySelector('#details-modal .close').addEventListener('click', () => {
        document.getElementById('details-modal').style.display = 'none';
    });

    // reports lazy load
    btnReports.addEventListener('click', async () => {
        try {
            const mod = await import('../features/reports.js');
            mod.default({ manager });
        } catch (err) {
            console.error('Error loading reports', err);
            alert('Could not load reports');
        }
    });

    // export lazy load
    btnExport.addEventListener('click', async () => {
        try {
            const mod = await import('../features/export.js');
            mod.default({ manager });
        } catch (err) {
            console.error('Error loading export', err);
            alert('Could not load export feature');
        }
    });

    // import JSON from user
    btnImport.addEventListener('click', async () => {
        const file = document.createElement('input');
        file.type = 'file'; file.accept = 'application/json';
        file.addEventListener('change', (e) => {
            const f = e.target.files[0];
            if (!f) return;
            const reader = new FileReader();
            reader.onload = () => {
                try {
                    const arr = JSON.parse(reader.result);
                    const imported = manager.importFromArray(arr);
                    alert(`Imported ${imported} items`);
                    refresh();
                } catch (err) { alert('Invalid JSON'); }
            };
            reader.readAsText(f);
        });
        file.click();
    });

    // initial render
    refresh();
}
