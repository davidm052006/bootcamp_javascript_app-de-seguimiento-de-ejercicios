// validators.js (named exports)
export function isNonEmptyString(v = '') { return typeof v === 'string' && v.trim().length > 0; }
export function isPositiveNumber(v) { return typeof v === 'number' ? v > 0 : Number(v) > 0; }
