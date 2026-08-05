// starter/script.js
// Implementa los requisitos de la Semana 5 usando ES2023
// Comentarios en español; nombres en inglés

import data from './data.js';

// helpers
const $ = (sel) => document.querySelector(sel);

// parse sample data (inmutable reference)
const SAMPLE = Array.from(data);

// UI elements
const startInput = $('#start-date');
const endInput = $('#end-date');
const minDurInput = $('#min-duration');
const btnApply = $('#btn-apply');
const btnReset = $('#btn-reset');

const statsContainer = $('#stats');
const rankingList = $('#ranking-list');
const groupingList = $('#grouping-list');
const lastFound = $('#last-found');
const immutabilitySample = $('#immutability-sample');

// UTIL: format date to YYYY-MM-DD for grouping
const toYMD = (iso) => new Date(iso).toISOString().slice(0,10);

// FILTER by date range and min duration
function filterData({ start=null, end=null, minDuration=0 } = {}){
  const s = start ? new Date(start) : null;
  const e = end ? new Date(end) : null;

  return SAMPLE.filter(item => {
    const d = new Date(item.date);
    if (s && d < s) return false;
    if (e && d > e) return false;
    if (minDuration && item.duration < minDuration) return false;
    return true;
  });
}

// STATS using reduce: total, avg, min, max
function computeStats(arr){
  const total = arr.length;
  const durations = arr.map(x=>x.duration);
  const { sum, min, max } = durations.reduce((acc, cur)=>{
    acc.sum += cur;
    acc.min = cur < acc.min ? cur : acc.min;
    acc.max = cur > acc.max ? cur : acc.max;
    return acc;
  }, { sum: 0, min: Infinity, max: -Infinity });

  const avg = total ? +(sum/total).toFixed(2) : 0;
  return { total, sum, avg, min: total?min:0, max: total?max:0 };
}

// RANKING: top categories using flatMap + toSorted
function rankingByCategory(arr){
  // extraemos las categorías (puede ser una cadena) y flatten
  const categories = arr.flatMap(it => it.category.split(',').map(s=>s.trim()));

  // contar ocurrencias
  const counts = categories.reduce((m, c) => m.set(c, (m.get(c)||0)+1), new Map());

  // convertir a array y usar toSorted (ES2023) para ordenar por count desc
  const ranked = Array.from(counts.entries()).map(([category,count])=>({ category, count })).toSorted((a,b)=>b.count - a.count);

  return ranked;
}

// Temporal grouping: agrupación por fecha (YYYY-MM-DD)
function temporalGrouping(arr){
  const groups = arr.reduce((acc, it) => {
    const key = toYMD(it.date);
    if (!acc[key]) acc[key] = [];
    acc[key].push(it);
    return acc;
  }, {});

  // convertir a array de {date, items} y ordenar por fecha asc
  return Object.entries(groups).map(([date, items]) => ({ date, items })).toSorted((a,b)=> a.date.localeCompare(b.date));
}

// findLast example: último ejercicio con duracion >= x
function findLastLongerThan(arr, minDur){
  // findLast es nativo en ES2023
  const found = arr.findLast(item => item.duration >= minDur);
  const idx = arr.findLastIndex(item => item.duration >= minDur);
  return { found, idx };
}

// immutability sample: update an item without mutating original array using with()
function updateWithoutMutation(arr, id, changes){
  const index = arr.findIndex(x => x.id === id);
  if (index === -1) return arr;
  const updatedItem = { ...arr[index], ...changes };
  // array.with returns new array with element replaced immutably
  const newArr = arr.with(index, updatedItem);
  return newArr;
}

// render functions
function renderStats(arr){
  const s = computeStats(arr);
  statsContainer.innerHTML = `
    <h3>General Statistics</h3>
    <div>Total items: <strong>${s.total}</strong></div>
    <div>Total duration: <strong>${s.sum} min</strong></div>
    <div>Average duration: <strong>${s.avg} min</strong></div>
    <div>Min duration: <strong>${s.min} min</strong></div>
    <div>Max duration: <strong>${s.max} min</strong></div>
  `;
}

function renderRanking(arr){
  const ranked = rankingByCategory(arr);
  rankingList.innerHTML = '';
  ranked.forEach(r => {
    const li = document.createElement('li');
    li.textContent = `${r.category} — ${r.count}`;
    rankingList.appendChild(li);
  });
}

function renderGrouping(arr){
  const groups = temporalGrouping(arr);
  groupingList.innerHTML = '';
  groups.forEach(g => {
    const el = document.createElement('div');
    el.innerHTML = `<strong>${g.date}</strong> — ${g.items.length} item(s)`;
    groupingList.appendChild(el);
  });
}

function renderExtras(arr){
  const { found, idx } = findLastLongerThan(arr, 40);
  lastFound.innerHTML = `<strong>Last >=40min:</strong> ${found? found.name + ' ('+found.duration+'min)':'None'} (index ${idx})`;

  // Demo immutability: update first item duration +10 without mutating SAMPLE
  const demoBefore = SAMPLE[0];
  const newArr = updateWithoutMutation(SAMPLE, demoBefore.id, { duration: demoBefore.duration + 10 });
  immutabilitySample.innerHTML = `
    <div><strong>Immutability demo:</strong></div>
    <div>Original first duration: ${SAMPLE[0].duration} min</div>
    <div>Updated first duration (new array): ${newArr.find(x=>x.id===demoBefore.id).duration} min</div>
  `;
}

// main render pipeline (chaining example)
function renderAll(filtered){
  // chaining: filter -> map -> reduce (simple example: sum durations of cardio items)
  const cardioTotal = filtered
    .filter(x => x.type === 'cardio')
    .map(x => x.duration)
    .reduce((a,b)=>a+b, 0);

  // show overall panels
  renderStats(filtered);
  renderRanking(filtered);
  renderGrouping(filtered);
  renderExtras(filtered);

  // append chaining sample
  const chainingDiv = document.createElement('div');
  chainingDiv.style.marginTop = '.6rem';
  chainingDiv.innerHTML = `<em>Cardio total (chaining): ${cardioTotal} min</em>`;
  statsContainer.appendChild(chainingDiv);
}

// initial render using full SAMPLE
renderAll(SAMPLE);

// events
btnApply.addEventListener('click', () => {
  const start = startInput.value || null;
  const end = endInput.value || null;
  const minDuration = Number(minDurInput.value) || 0;
  const filtered = filterData({ start, end, minDuration });
  renderAll(filtered);
});

btnReset.addEventListener('click', () => {
  startInput.value = '';
  endInput.value = '';
  minDurInput.value = '';
  renderAll(SAMPLE);
});

// Expose helpers for debugging in console
window.__week5 = { SAMPLE, filterData, computeStats, rankingByCategory, temporalGrouping, updateWithoutMutation };
