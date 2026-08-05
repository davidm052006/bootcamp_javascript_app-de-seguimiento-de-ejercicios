// formatters.js (named exports)
export function toShortDate(iso = '') {
    if (!iso) return '';
    return new Date(iso).toLocaleString();
}

export function safeName(name = '') { return String(name).trim(); }
