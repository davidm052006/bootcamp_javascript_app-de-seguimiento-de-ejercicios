// starter/script.js
// Week 8 - Lazy pagination using generators (function*, yield)
// Comentarios en español, nombres en inglés

// Generator that yields entity objects lazily
export function* dataGenerator(totalItems = 50){
  for (let i = 1; i <= totalItems; i++){
    // simulate some domain-specific data
    yield {
      id: i,
      name: `Workout ${i}`,
      category: `Category ${Math.ceil(i / 10)}`,
      duration: Math.floor(Math.random() * 60) + 10
    };
  }
}

// Paginator class
export class Paginator {
  constructor(generator, totalItems, itemsPerPage = 10){
    this._gen = generator; // generator instance
    this.totalItems = totalItems;
    this.itemsPerPage = itemsPerPage;
    this.cache = []; // store yielded items so far
    this.done = false; // generator done
    this.currentPage = 1;
  }

  get totalPages(){ return Math.max(1, Math.ceil(this.totalItems / this.itemsPerPage)); }

  // ensure cache has items up to 'count'
  _ensure(count){
    if (this.done) return;
    while (this.cache.length < count){
      const res = this._gen.next();
      if (res.done){ this.done = true; break; }
      this.cache.push(res.value);
    }
  }

  // returns items for a page (1-based)
  getPage(page = 1){
    page = Math.max(1, Math.min(page, this.totalPages));
    const startIdx = (page - 1) * this.itemsPerPage; // zero-based
    const endIdx = Math.min(this.totalItems, page * this.itemsPerPage);
    // ensure we have generated up to endIdx
    this._ensure(endIdx);
    this.currentPage = page;
    return this.cache.slice(startIdx, endIdx);
  }

  next(){
    if (this.currentPage < this.totalPages) return this.getPage(this.currentPage + 1);
    return [];
  }

  previous(){
    if (this.currentPage > 1) return this.getPage(this.currentPage - 1);
    return [];
  }

  setItemsPerPage(n){
    // change itemsPerPage; do not clear cache (we keep generated items)
    this.itemsPerPage = n;
    // adjust current page if out of range
    if (this.currentPage > this.totalPages) this.currentPage = this.totalPages;
    return this.getPage(this.currentPage);
  }

  goTo(page){ return this.getPage(page); }
}

// ===== UI wiring =====
const $ = (s) => document.querySelector(s);
const listEl = $('#items-list');
const indicator = $('#page-indicator');
const info = $('#info');
const prevBtn = $('#prev');
const nextBtn = $('#next');
const ipp = $('#items-per-page');
const gotoInput = $('#goto');
const gotoBtn = $('#btn-goto');

// Create generator instance lazily
const TOTAL = 80; // generate 80 entities (between 50-100 as requested)
const gen = dataGenerator(TOTAL);
const paginator = new Paginator(gen, TOTAL, Number(ipp.value));

function renderPage(items){
  listEl.innerHTML = '';
  items.forEach(it => {
    const li = document.createElement('li');
    li.textContent = `${it.id}. ${it.name} — ${it.category} — ${it.duration} min`;
    listEl.appendChild(li);
  });
  indicator.textContent = `Page ${paginator.currentPage} / ${paginator.totalPages}`;
  info.textContent = `Generated items in memory: ${paginator.cache.length} / ${paginator.totalItems}`;
}

// initial render
renderPage(paginator.getPage(1));

prevBtn.addEventListener('click', () => {
  const pageItems = paginator.previous();
  renderPage(pageItems);
});

nextBtn.addEventListener('click', () => {
  const pageItems = paginator.next();
  renderPage(pageItems);
});

ipp.addEventListener('change', (e) => {
  const n = Number(e.target.value) || 10;
  const items = paginator.setItemsPerPage(n);
  renderPage(items);
});

gotoBtn.addEventListener('click', () => {
  const p = Math.max(1, Math.min(Number(gotoInput.value) || 1, paginator.totalPages));
  const items = paginator.goTo(p);
  renderPage(items);
});

// expose for debugging
window.__week8 = { dataGenerator, Paginator, paginator };
