// starter/script.js
// Week 7 - Collections: Map, Set, WeakMap, WeakSet
// Comentarios en español. Nombres en inglés.

const el = (sel) => document.querySelector(sel);
const logEl = el('#log');

function log(...args){
  const line = args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ');
  logEl.textContent = `${line}\n` + logEl.textContent;
  console.log(...args);
}

// ======= Core structures =======
// Map: id -> entity object (structured storage)
const entities = new Map();
// Set: unique names to prevent duplicates
const nameSet = new Set();
// Global categories (Set) for quick listing
const categories = new Set();
// WeakSet: active entity tracking by object reference
const activeSet = new WeakSet();
// WeakMap: cache computed values per entity object
const cache = new WeakMap();

// Simple id generator
let idCounter = 1;

// Entity factory returns a plain object (will be used as key in WeakMap/WeakSet)
function createEntity({ name, cats = [] } = {}){
  const obj = { id: idCounter++, name, cats: new Set(cats) };
  return obj;
}

// ======= Manager functions (Map + Set) =======
function addEntity(name, cats = []){
  const keyName = name.trim().toLowerCase();
  if (nameSet.has(keyName)) { log('Duplicate skipped:', name); return null; }
  const entity = createEntity({ name, cats });
  entities.set(entity.id, entity);
  nameSet.add(keyName);
  cats.forEach(c => categories.add(c));
  log('Added entity', entity);
  return entity;
}

function removeEntity(id){
  const e = entities.get(id);
  if (!e) return false;
  entities.delete(id);
  nameSet.delete(e.name.trim().toLowerCase());
  // Note: categories may remain in global set (could be cleaned optionally)
  log('Removed entity', id);
  return true;
}

function listEntities(){
  return Array.from(entities.values());
}

// ======= Categories ops (Set) =======
function unionSets(A = new Set(), B = new Set()){
  return new Set([...A, ...B]);
}

function intersectSets(A = new Set(), B = new Set()){
  return new Set([...A].filter(x => B.has(x)));
}

// helpers to get category sets by name
function categoryToSet(catName){
  // return set of entity names that have this category
  const s = new Set();
  for (const e of entities.values()) if (e.cats.has(catName)) s.add(e.name);
  return s;
}

// ======= Active state (WeakSet) =======
function setActive(entity){ activeSet.add(entity); log('Set active:', entity.name); }
function setInactive(entity){ /* WeakSet has no delete in some engines; use a Map for full control if needed */ log('Mark inactive request:', entity.name); }
function isActive(entity){ try { return activeSet.has(entity); } catch { return false; } }

// ======= Cache (WeakMap) =======
function computeExpensive(entity){
  // pretend expensive calculation: score based on name length and categories
  if (cache.has(entity)) return cache.get(entity);
  const score = Math.round(entity.name.length * (1 + entity.cats.size * 0.5));
  const result = { score, timestamp: Date.now() };
  cache.set(entity, result);
  log('Cached for', entity.name, result);
  return result;
}

// ======= UI wiring =======
const entName = el('#ent-name');
const entCats = el('#ent-cats');
const btnAdd = el('#btn-add');
const btnClear = el('#btn-clear');
const entitiesList = el('#entities-list');
const categoriesList = el('#categories-list');
const activeList = el('#active-list');
const cacheList = el('#cache-list');
const setA = el('#set-a');
const setB = el('#set-b');
const btnUnion = el('#btn-union');
const btnInter = el('#btn-inter');
const catResult = el('#cat-result');

function renderEntities(){
  entitiesList.innerHTML = '';
  for (const entity of entities.values()){
    const li = document.createElement('li');
    const cats = Array.from(entity.cats).join(', ');
    li.innerHTML = `<span>${entity.name} <small class="muted">[${cats}]</small></span>`;
    const actions = document.createElement('div');
    const btnAct = document.createElement('button'); btnAct.textContent = isActive(entity)?'Active ✅':'Set Active';
    btnAct.addEventListener('click', () => { setActive(entity); renderAll(); });
    const btnCache = document.createElement('button'); btnCache.textContent = 'Compute';
    btnCache.addEventListener('click', () => { computeExpensive(entity); renderAll(); });
    const btnDel = document.createElement('button'); btnDel.textContent = 'Delete';
    btnDel.addEventListener('click', () => { removeEntity(entity.id); renderAll(); });
    actions.append(btnAct, btnCache, btnDel);
    li.appendChild(actions);
    entitiesList.appendChild(li);
  }
}

function renderCategories(){
  categoriesList.innerHTML = '';
  for (const c of categories){
    const chip = document.createElement('span'); chip.className = 'chip'; chip.textContent = c;
    categoriesList.appendChild(chip);
  }
}

function renderActive(){
  activeList.innerHTML = '';
  // WeakSet is not iterable; to show active items we will scan entities and check has()
  for (const e of entities.values()){
    if (isActive(e)){
      const div = document.createElement('div'); div.className = 'item';
      div.textContent = `${e.name} (id:${e.id})`;
      activeList.appendChild(div);
    }
  }
}

function renderCache(){
  cacheList.innerHTML = '';
  for (const e of entities.values()){
    if (cache.has(e)){
      const val = cache.get(e);
      const div = document.createElement('div'); div.className = 'item';
      div.textContent = `${e.name}: score=${val.score} @ ${new Date(val.timestamp).toLocaleTimeString()}`;
      cacheList.appendChild(div);
    }
  }
}

function renderAll(){ renderEntities(); renderCategories(); renderActive(); renderCache(); }

btnAdd.addEventListener('click', () => {
  const name = entName.value.trim();
  const cats = entCats.value.split(',').map(s=>s.trim()).filter(Boolean);
  if (!name) { log('Name required'); return; }
  const e = addEntity(name, cats);
  if (e) {
    // automatically set active and cache compute example
    setActive(e);
    computeExpensive(e);
  }
  entName.value = ''; entCats.value = '';
  renderAll();
});

btnClear.addEventListener('click', () => { entName.value=''; entCats.value=''; });

btnUnion.addEventListener('click', () => {
  const A = categoryToSet(setA.value.trim());
  const B = categoryToSet(setB.value.trim());
  const U = unionSets(A,B);
  catResult.textContent = `Union (${U.size}) : ${[...U].join(', ')}`;
  log('Union', [...U]);
});

btnInter.addEventListener('click', () => {
  const A = categoryToSet(setA.value.trim());
  const B = categoryToSet(setB.value.trim());
  const I = intersectSets(A,B);
  catResult.textContent = `Intersection (${I.size}) : ${[...I].join(', ')}`;
  log('Intersection', [...I]);
});

// seed demo data
addEntity('Morning Run', ['cardio']);
addEntity('Yoga Flow', ['mobility','flexibility']);
addEntity('Bench Press', ['strength']);
addEntity('HIIT Express', ['cardio','strength']);

renderAll();

// expose for debugging
window.__week7 = { entities, nameSet, categories, activeSet, cache, addEntity, removeEntity, computeExpensive, unionSets, intersectSets };
