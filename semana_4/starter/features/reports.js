// reports.js - lazy loaded feature (default export)
export default function showReports({ manager } = {}) {
    const stats = manager.getStats();
    const { totalExercises, byType } = stats;
    const lines = [
        `Total exercises: ${totalExercises}`,
        'By type:'
    ];
    for (const [type, count] of Object.entries(byType)) {
        lines.push(` - ${type}: ${count}`);
    }
    // simple alert report (could be a modal)
    alert(lines.join('\n'));
}
