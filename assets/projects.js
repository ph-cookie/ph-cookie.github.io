(() => {
  'use strict';
  if (typeof document === 'undefined' || document.body.dataset.concept === 'section') return;
  const isReport = Array.isArray(window.REPORTS);
  const data = isReport ? window.REPORTS : window.PROJECTS;
  const viewKey = isReport ? 'reports-view' : 'projects-view';
  const allowedSorts = isReport ? ['name', 'created'] : ['name', 'stars'];
  const cards = document.querySelector('#cards');
  const search = document.querySelector('#search');
  const category = document.querySelector('#category');
  const sort = document.querySelector('#sort');
  const empty = document.querySelector('#empty');
  const viewButtons = document.querySelectorAll('[data-view]');
  function setView(view) {
    cards.classList.toggle('tile-view', view === 'tile');
    cards.querySelectorAll('.project-heading').forEach(heading => {
      if (view === 'tile') {
        heading.setAttribute('aria-haspopup', 'dialog');
        heading.parentElement.open = false;
      } else heading.removeAttribute('aria-haspopup');
    });
    viewButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.view === view)));
    try { localStorage.setItem(viewKey, view); } catch (_) {}
  }
  let savedView = 'list';
  try { if (localStorage.getItem(viewKey) === 'tile') savedView = 'tile'; } catch (_) {}
  setView(savedView);
  viewButtons.forEach(button => button.addEventListener('click', () => setView(button.dataset.view)));
  if (!Array.isArray(data)) {
    document.querySelector('#count').textContent = '一覧データを読み込めなかった。ページを再読み込みして確認。';
    return;
  }
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    node.className = className;
    node.textContent = text;
    return node;
  };
  const link = (text, url, className) => {
    const node = element('a', className, text);
    node.href = url;
    node.target = '_blank';
    node.rel = 'noopener noreferrer';
    return node;
  };
  const registrationOrder = new Map(data.map((p, index) => [p.url, index]));
  const starCounts = new Map();
  const starLabel = count => '⭐︎' + (count >= 1000000 ? `${Number((count / 1000000).toFixed(1))}m` : count >= 1000 ? `${Number((count / 1000).toFixed(1))}k` : count);
  function updateStarLabels() {
    document.querySelectorAll('.project-stars').forEach(node => {
      const info = starCounts.get(node.dataset.repository);
      node.textContent = info ? starLabel(info.count) : '⭐︎—';
      node.title = info ? `${info.count.toLocaleString('ja-JP')} stars（${info.source}）` : 'スター数を取得できませんでした';
      node.setAttribute('aria-label', node.title);
    });
  }
  async function loadStars(p) {
    const repo = new URL(p.url, location.href).pathname.slice(1);
    const key = `projects-stars:${repo}`;
    let cached;
    try { cached = JSON.parse(localStorage.getItem(key)); } catch (_) {}
    const valid = cached && Number.isSafeInteger(cached.count) && cached.count >= 0 && Number.isFinite(cached.time) && cached.time <= Date.now();
    if (valid) starCounts.set(repo, {count: cached.count, source: `取得 ${new Date(cached.time).toLocaleString('ja-JP')}`});
    else if (Number.isSafeInteger(p.stars)) starCounts.set(repo, {count: p.stars, source: `登録データ・${p.starsCheckedAt || '確認日不明'}取得`});
    updateStarLabels();
    if (valid && Date.now() - cached.time < 3 * 24 * 60 * 60 * 1000) return;
    try {
      const response = await fetch(`https://api.github.com/repos/${repo}`, {headers: {Accept: 'application/vnd.github+json'}, signal: AbortSignal.timeout(8000), credentials: 'omit'});
      if (!response.ok) return;
      const payload = await response.json();
      if (!Number.isSafeInteger(payload.stargazers_count) || payload.stargazers_count < 0) return;
      const value = {count: payload.stargazers_count, time: Date.now()};
      starCounts.set(repo, {count: value.count, source: `取得 ${new Date(value.time).toLocaleString('ja-JP')}`});
      try { localStorage.setItem(key, JSON.stringify(value)); } catch (_) {}
      updateStarLabels();
    } catch (_) { /* Keep the last known count if the API is unavailable. */ }
  }
  const dialog = element('dialog', 'project-dialog', '');
  dialog.setAttribute('aria-labelledby', 'project-dialog-title');
  const dialogHeader = element('div', 'dialog-header', '');
  const dialogTitle = element('h2', '', '');
  dialogTitle.id = 'project-dialog-title';
  const closeButton = element('button', 'dialog-close', '×');
  closeButton.type = 'button';
  closeButton.setAttribute('aria-label', '詳細を閉じる');
  const dialogContent = element('div', 'dialog-content', '');
  dialogHeader.append(dialogTitle, closeButton);
  dialog.append(dialogHeader, dialogContent);
  document.body.append(dialog);
  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
  // A click outside the panel closes it; clicks in its padding stay inside.
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  function openDialog(project, body) {
    dialogTitle.textContent = project.name;
    const intro = element('p', 'dialog-intro', project.summary);
    dialogContent.replaceChildren(element('span', 'category', project.category), intro, body.cloneNode(true));
    dialog.showModal();
    dialogContent.scrollTop = 0;
    document.body.classList.add('dialog-open');
  }
  [...new Set(data.map(p => p.category))].sort((a,b) => a.localeCompare(b,'ja')).forEach(value => {
    const option = element('option', '', value);
    option.value = value;
    category.append(option);
  });
  const state = new URLSearchParams(location.search);
  search.value = state.get('q') || '';
  if ([...category.options].some(o => o.value === state.get('category'))) category.value = state.get('category');
  if (allowedSorts.includes(state.get('sort'))) sort.value = state.get('sort');
  function render() {
    const query = search.value.normalize('NFKC').toLocaleLowerCase().trim();
    const terms = query.split(/\s+/).filter(Boolean);
    const filtered = data.filter(p => (!category.value || p.category === category.value) && terms.every(term => [p.name,p.url,p.summary,p.description,p.category,...p.tags].join(' ').normalize('NFKC').toLocaleLowerCase().includes(term)));
    const newestFirst = (a,b) => b.addedAt.localeCompare(a.addedAt) || registrationOrder.get(b.url) - registrationOrder.get(a.url);
    const starsOf = p => starCounts.get(new URL(p.url, location.href).pathname.slice(1))?.count ?? p.stars ?? -1;
    filtered.sort(sort.value === 'name' ? (a,b) => a.name.localeCompare(b.name,'ja') : sort.value === 'stars' ? (a,b) => starsOf(b) - starsOf(a) || newestFirst(a,b) : sort.value === 'created' ? (a,b) => b.createdAt.localeCompare(a.createdAt) || newestFirst(a,b) : newestFirst);
    cards.replaceChildren();
    filtered.forEach(p => {
      const card = element('details', 'project-item', '');
      const heading = element('summary', 'project-heading', '');
      if (cards.classList.contains('tile-view')) heading.setAttribute('aria-haspopup', 'dialog');
      const overview = element('div', 'project-overview', '');
      const meta = element('div', 'project-meta', '');
      const stars = element('span', 'project-stars', '⭐︎—');
      stars.dataset.repository = new URL(p.url, location.href).pathname.slice(1);
      meta.append(element('span','category',p.category));
      if (!isReport) meta.append(stars);
      overview.append(meta, element('h2','',p.name), element('p','summary',p.summary));
      heading.append(overview, element('span','project-toggle',''));
      const body = element('div', 'project-body', '');
      const description = element('div', 'description', '');
      // Explicit newlines take priority; older one-line records split at Japanese sentence ends.
      const paragraphs = p.description.includes('\n')
        ? p.description.split(/\n+/)
        : p.description.match(/[^。]+。|[^。]+$/g) || [];
      paragraphs.filter(text => text.trim()).forEach(text => {
        if (text.trim().startsWith('対応環境：') && p.environment?.length) return;
        description.append(element('p', '', text.trim()));
      });
      if (p.environment?.length) {
          const environment = element('div', 'environment-block', '');
          const environmentLabel = p.environmentLabel || '対応環境';
          environment.append(element('p', 'environment-label', `▼${environmentLabel}`));
          const table = element('table', 'environment-table', '');
          table.setAttribute('aria-label', environmentLabel);
          const tbody = element('tbody', '', '');
          p.environment.forEach(row => {
            const tr = element('tr', '', '');
            const th = element('th', '', row.label);
            th.scope = 'row';
            tr.append(th, element('td', '', row.value));
            tbody.append(tr);
          });
          table.append(tbody);
          environment.append(table);
          description.append(environment);
      }
      if (!isReport) body.append(element('span','repo',new URL(p.url, location.href).pathname.slice(1)));
      body.append(description);
      const bottom = element('div','card-bottom','');
      bottom.append(link(isReport ? 'PDFを開く ↗' : 'GitHubで見る ↗',p.url,'external'),element('span','date',isReport ? `作成 ${p.createdAt}` : `確認 ${p.checkedAt}`));
      body.append(bottom);
      const sources = element('details','','');
      sources.append(element('summary','','説明の出典'));
      const list = element('ul','','');
      p.sources.forEach(source => {const item = element('li','','');item.append(link(source.label,source.url,''));list.append(item);});
      sources.append(list);if (!isReport || p.sources.length) body.append(sources);card.append(heading,body);cards.append(card);
      heading.addEventListener('click', event => {
        if (cards.classList.contains('tile-view')) {
          event.preventDefault();
          openDialog(p, body);
        }
      });
    });
    document.querySelector('#count').textContent = `${filtered.length} / ${data.length} ${isReport ? "REPORTS" : "PROJECTS"}`;
    empty.hidden = filtered.length > 0;
    document.querySelector('#empty-title').textContent = data.length ? (isReport ? '一致するレポートがない。' : '一致するプロジェクトがない。') : (isReport ? 'レポートは準備中。' : 'コレクションは、ここから。');
    document.querySelector('#empty-text').textContent = data.length ? 'キーワードや分類を変えて検索。' : (isReport ? '大学で作成したレポートを、少しずつ追加していく。' : '気になったプロジェクトを、少しずつ追加していく。');
    updateStarLabels();
  }
  function update() {
    const params = new URLSearchParams();
    if (search.value.trim()) params.set('q',search.value.trim());
    if (category.value) params.set('category',category.value);
    if (allowedSorts.includes(sort.value)) params.set('sort',sort.value);
    try {history.replaceState(null,'',location.pathname + (params.size ? '?' + params : '') + location.hash);} catch (_) {}
    render();
  }
  search.addEventListener('input',update);category.addEventListener('change',update);sort.addEventListener('change',update);render();
  Promise.all(isReport ? [] : data.map(loadStars)).then(() => { if (sort.value === 'stars') render(); });
})();

// B: browse one introduction, select text freely, and compare verified catalog data.
(function () {
  'use strict';
  const DAY = 24 * 60 * 60 * 1000;
  const short = p => p.name.split(/\s*—\s*/)[0];
  const what = p => p.name.split(/\s*—\s*/).slice(1).join(' — ');
  const repository = p => new URL(p.url).pathname.slice(1);
  const starLabel = count => '⭐︎' + (count >= 1e6 ? `${Number((count / 1e6).toFixed(1))}m` : count >= 1000 ? `${Number((count / 1000).toFixed(1))}k` : count);
  function filterRecords(data, state, counts = new Map()) {
    const terms = state.query.normalize('NFKC').toLocaleLowerCase('ja').trim().split(/\s+/).filter(Boolean);
    const order = new Map(data.map((p, i) => [p.url, i]));
    const newest = (a, b) => b.addedAt.localeCompare(a.addedAt) || order.get(b.url) - order.get(a.url);
    const stars = p => counts.get(repository(p))?.count ?? p.stars ?? -1;
    return data.filter(p => (!state.category || p.category === state.category) && terms.every(term =>
      [p.name, p.url, p.summary, p.description, p.category, ...p.tags].join(' ').normalize('NFKC').toLocaleLowerCase('ja').includes(term)))
      .sort(state.sort === 'name' ? (a, b) => a.name.localeCompare(b.name, 'ja') : state.sort === 'stars' ? (a, b) => stars(b) - stars(a) || newest(a, b) : newest);
  }
  const swipeStep = (dx, dy) => Math.abs(dx) >= 48 && Math.abs(dx) > Math.abs(dy) * 1.5 ? (dx < 0 ? 1 : -1) : 0;
  const candidates = (values, data) => Array.isArray(values) ? [...new Set(values)].filter(url => data.some(p => p.url === url)).slice(0, 3) : [];
  const relatedItems = (p, data) => (p.related || []).map(row => ({label: row.label, project: data.find(item => item.url === row.url)})).filter(row => row.project && row.project.url !== p.url).slice(0, 2);
  const overview = p => p.presentation?.overview || {label: '利用条件', value: '情報を再読み込みしてください', remaining: 0};
  const conditions = p => overview(p).value;
  const slotNames = ['meta', 'title', 'purpose', 'summary', 'conditions', 'actions'];
  const slotMaxima = samples => Object.fromEntries(slotNames.map(key => [key, Math.ceil(Math.max(0, ...samples.map(row => Number.isFinite(row[key]) && row[key] >= 0 ? row[key] : 0)))]));
  // Pure helpers can be tested without a browser or third-party packages.
  if (typeof module === 'object' && module.exports) {
    module.exports = {filterRecords, swipeStep, candidates, relatedItems, conditions, starLabel, overview, slotMaxima};
    return;
  }
  if (document.body.dataset.concept !== 'section') return;
  const $ = selector => document.querySelector(selector);
  const data = window.PROJECTS;
  if (!Array.isArray(data) || data.some(p => !p.presentation)) {
    $('#boot-message').textContent = '紹介データを読み込めませんでした。下の一覧からも確認できます。';
    return;
  }
  const el = (tag, className = '', text = '') => {
    const node = document.createElement(tag);
    node.className = className;
    node.textContent = text;
    return node;
  };
  const link = (label, url) => {
    const node = el('a', '', label);
    node.href = url;
    node.target = '_blank';
    node.rel = 'noopener noreferrer';
    return node;
  };
  const readStorage = key => { try { return JSON.parse(localStorage.getItem(key)); } catch (_) { return null; } };
  const store = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch (_) {} };
  const selected = new Set(candidates(readStorage('projects-comparison'), data));
  const counts = new Map();
  let visible = [], active = 0, epoch = 0, switching = false, pointer = null, suppressUntil = 0;
  let toastTimer, wheelTimer, wheelTotal = 0, wheelUsed = false;
  const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const selectedText = () => !!window.getSelection()?.toString();
  const state = () => ({query: $('#search').value, category: $('#category').value, sort: $('#sort').value});
  const current = () => visible[active];
  const position = () => String(active + 1).padStart(2, '0');
  function urlState() {
    const params = new URLSearchParams(location.search);
    for (const [key, value] of [['q', $('#search').value.trim()], ['category', $('#category').value], ['sort', $('#sort').value === 'new' ? '' : $('#sort').value], ['project', current() ? repository(current()) : '']]) {
      if (value) params.set(key, value); else params.delete(key);
    }
    try { history.replaceState(null, '', location.pathname + (params.size ? '?' + params : '') + location.hash); } catch (_) {}
  }
  function toast(text) {
    $('#toast').textContent = text;
    $('#toast').classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => $('#toast').classList.remove('visible'), 2200);
  }
  function starNode(p) {
    const node = el('span', 'project-stars');
    node.dataset.repository = repository(p);
    node.textContent = counts.has(repository(p)) ? starLabel(counts.get(repository(p)).count) : '⭐︎—';
    return node;
  }
  function updateStars() {
    document.querySelectorAll('.project-stars').forEach(node => {
      const info = counts.get(node.dataset.repository);
      node.textContent = info ? starLabel(info.count) : '⭐︎—';
      node.title = info ? `${info.count.toLocaleString('ja-JP')} stars（${info.source}）` : 'スター数は未取得';
      node.setAttribute('aria-label', node.title);
    });
  }
  function seedStars() {
    for (const p of data) {
      const cached = readStorage(`projects-stars:${repository(p)}`);
      if (cached && Number.isSafeInteger(cached.count) && cached.count >= 0 && Number.isFinite(cached.time) && cached.time <= Date.now()) {
        counts.set(repository(p), {count: cached.count, source: `取得 ${new Date(cached.time).toLocaleString('ja-JP')}`});
      } else if (Number.isSafeInteger(p.stars)) {
        counts.set(repository(p), {count: p.stars, source: `登録データ・${p.starsCheckedAt || '確認日不明'}取得`});
      }
    }
  }
  async function loadStars(p) {
    const key = `projects-stars:${repository(p)}`, cached = readStorage(key), now = Date.now();
    const recent = time => Number.isFinite(time) && time <= now && now - time < 3 * DAY;
    if (cached && (recent(cached.triedAt) || (Number.isSafeInteger(cached.count) && cached.count >= 0 && recent(cached.time)))) return;
    // Failed requests are also cooled down, so reloads do not repeat them.
    store(key, {...(cached || {}), triedAt: now});
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetch(`https://api.github.com/repos/${repository(p)}`, {headers: {Accept: 'application/vnd.github+json'}, signal: controller.signal, credentials: 'omit'});
      if (!response.ok) return;
      const payload = await response.json();
      if (!Number.isSafeInteger(payload.stargazers_count) || payload.stargazers_count < 0) return;
      const value = {count: payload.stargazers_count, time: Date.now(), triedAt: now};
      counts.set(repository(p), {count: value.count, source: `取得 ${new Date(value.time).toLocaleString('ja-JP')}`});
      store(key, value);
      updateStars();
    } catch (_) { /* Keep the catalog or cached count; introductions remain usable offline. */ }
    finally { clearTimeout(timeout); }
  }
  function pickButton(p) {
    const button = el('button', 'pick');
    button.type = 'button';
    button.dataset.pick = p.url;
    button.onclick = () => {
      if (selected.has(p.url)) selected.delete(p.url);
      else if (selected.size < 3) selected.add(p.url);
      else return toast('比較候補は3件までです');
      store('projects-comparison', [...selected]);
      updateDock();
    };
    return button;
  }
  function updateDock() {
    document.querySelectorAll('[data-pick]').forEach(button => {
      const on = selected.has(button.dataset.pick), p = data.find(p => p.url === button.dataset.pick);
      button.textContent = on ? '✓ 比較候補' : '＋ 比較候補';
      button.setAttribute('aria-pressed', String(on));
      button.setAttribute('aria-label', `${short(p)}を比較候補${on ? 'から外す' : 'に追加'}`);
    });
    $('.candidate-dock').hidden = !selected.size;
    document.body.classList.toggle('has-candidates', selected.size > 0);
    $('#selected-count').textContent = selected.size;
    $('#selected').replaceChildren();
    for (const url of selected) {
      const p = data.find(p => p.url === url), button = el('button', 'selected-chip', short(p) + ' ×');
      button.setAttribute('aria-label', short(p) + 'を比較候補から外す');
      button.onclick = () => {
        const previous = [...selected], index = previous.indexOf(url);
        selected.delete(url); store('projects-comparison', [...selected]); updateDock();
        const remaining = [...$('#selected').children];
        (remaining[Math.min(index, remaining.length - 1)] || $('.focus-copy .pick'))?.focus({preventScroll: true});
      };
      $('#selected').append(button);
    }
    $('#compare').disabled = selected.size < 2;
    measureDock();
  }
  function measureDock() {
    const height = $('.candidate-dock').hidden ? 0 : $('.candidate-dock').getBoundingClientRect().height;
    document.body.style.setProperty('--dock-height', `${height}px`);
    document.body.style.setProperty('--footer-height', `${$('footer').getBoundingClientRect().height}px`);
  }
  function factValue(cell, row) {
    if (!row) { cell.append(el('span', 'fact-missing', '—')); return; }
    if (row.levelLabel) cell.append(el('span', 'fact-level', row.levelLabel));
    if (row.stateLabel) cell.append(el('span', 'fact-level', row.stateLabel));
    cell.append(document.createTextNode(row.value));
  }
  function factHeading(row) {
    return row.label + (row.scopeLabel ? `（${row.scopeLabel}）` : '');
  }
  function tableFor(p) {
    const groups = p.presentation?.groups || [];
    if (!groups.length) return null;
    const blocks = el('div', 'fact-groups');
    for (const group of groups) {
      const block = el('div', 'environment-block'), table = el('table', 'environment-table'), body = el('tbody');
      block.append(el('p', 'environment-label', '▼' + group.label));
      table.setAttribute('aria-label', group.label);
      for (const row of group.rows) {
        const tr = el('tr'), th = el('th', '', factHeading(row)), td = el('td');
        th.scope = 'row'; factValue(td, row); tr.append(th, td); body.append(tr);
      }
      table.append(body); block.append(table); blocks.append(block);
    }
    return blocks;
  }
  function copyFor(p, measuring = false) {
    const copy = el('div', 'focus-copy'), meta = el('div', 'focus-meta');
    meta.append(el('span', 'category', p.category), starNode(p));
    copy.append(meta, el('h2', '', short(p)), el('p', 'what', what(p)), el('p', 'summary', p.summary));
    const info = overview(p), facts = el('dl', 'condition-lines'), row = el('div'), value = el('dd');
    for (const text of info.lines || [info.value]) value.append(el('span', 'condition-item', text));
    if (info.remaining) {
      const more = el('button', 'condition-more', `ほか${info.remaining}項目`); more.type = 'button';
      if (!measuring) more.onclick = () => openDetail(p);
      value.append(more);
    }
    row.append(el('dt', '', info.label), value); facts.append(row); copy.append(facts);
    const actions = el('div', 'focus-actions'), read = el('button', 'read-more', '詳しく見る ↗');
    read.type = 'button'; read.setAttribute('aria-haspopup', 'dialog');
    if (!measuring) read.onclick = () => openDetail(p);
    const pick = measuring ? el('button', 'pick', '✓ 比較候補') : pickButton(p);
    actions.append(read, pick); copy.append(actions);
    [...copy.children].forEach((child, i) => { child.dataset.slot = slotNames[i]; });
    return copy;
  }
  let measureFrame = 0, measurementKey = '', pendingMeasurement = false, measuredSlots = {};
  function scheduleMeasurement(force = false) {
    if (force) measurementKey = '';
    if (switching) { pendingMeasurement = true; return; }
    if (!measureFrame) measureFrame = requestAnimationFrame(() => { measureFrame = 0; measureCopies(); });
  }
  function measureCopies() {
    if (switching) { pendingMeasurement = true; return; }
    pendingMeasurement = false;
    const copy = $('.focus-copy'); if (!copy) return;
    const width = copy.getBoundingClientRect().width;
    if (!width) return;
    const key = [width, getComputedStyle(copy.querySelector('h2')).font, getComputedStyle(copy.querySelector('.summary')).font].join('|');
    if (key === measurementKey) return;
    const measure = el('div', 'focus-copy measure-copy');
    measure.style.width = width + 'px'; measure.inert = true; measure.setAttribute('aria-hidden', 'true'); document.body.append(measure);
    const samples = [];
    try {
      for (const project of data) {
        measure.replaceChildren(...copyFor(project, true).children);
        const sample = Object.fromEntries([...measure.children].map(child => [child.dataset.slot, child.getBoundingClientRect().height]));
        measure.querySelector('.pick').textContent = '＋ 比較候補';
        sample.actions = Math.max(sample.actions, measure.querySelector('.focus-actions').getBoundingClientRect().height);
        samples.push(sample);
      }
      measuredSlots = slotMaxima(samples);
      for (const [name, height] of Object.entries(measuredSlots)) $('#content').style.setProperty('--slot-' + name, height + 'px');
      measurementKey = key;
    } finally { measure.remove(); }
  }
  const copyObserver = window.ResizeObserver ? new ResizeObserver(entries => {
    const overflow = entries.some(({target}) => target.dataset.slot && target.getBoundingClientRect().height > (measuredSlots[target.dataset.slot] || 0) + .5);
    scheduleMeasurement(overflow);
  }) : null;
  function sourcesFor(p) {
    const details = el('details', 'sources'), list = el('ul');
    details.append(el('summary', '', '説明の出典'));
    for (const source of p.sources) {
      const item = el('li'); item.append(link(source.label, source.url)); list.append(item);
    }
    details.append(list); return details;
  }
function cookieSvg(p, suffix){const i=data.indexOf(p);let dots='';for(let k=0;k<58;k++){const x=80+(k*67+i*13)%292,y=60+(k*43+i*11)%244;dots+=`<circle cx="${x}" cy="${y}" r="${k%4===0?2.7:1}" fill="#1a5a3a" opacity="${k%4===0?.55:.25}"/>`;}return `<svg viewBox="0 0 470 400" aria-hidden="true"><defs><mask id="bite-${suffix}"><rect width="470" height="400" fill="white"/><circle cx="378" cy="56" r="33" fill="black"/><circle cx="409" cy="86" r="37" fill="black"/><circle cx="420" cy="132" r="28" fill="black"/></mask><clipPath id="disc-${suffix}"><path d="M244 25C354 24 428 91 421 191C419 281 358 350 247 351C139 354 59 289 58 191C56 90 128 27 244 25Z"/></clipPath></defs><g transform="rotate(-9 235 200)"><g mask="url(#bite-${suffix})"><path d="M244 49C354 48 428 115 421 215C419 305 358 374 247 375C139 378 59 313 58 215C56 114 128 51 244 49Z" fill="#e5d5ae" stroke="#f2e8cd" stroke-width="2"/><path d="M244 25C354 24 428 91 421 191C419 281 358 350 247 351C139 354 59 289 58 191C56 90 128 27 244 25Z" fill="#f2e8cd" stroke="#173e2c" stroke-width="1.5"/><g clip-path="url(#disc-${suffix})">${dots}</g><path d="M112 88Q77 130 85 185M112 93Q87 131 92 174M310 310q-48 21-92 14" stroke="#1a5a3a" stroke-width="1.2" fill="none" opacity=".5"/><path d="M70 244Q245 209 404 247L395 265Q246 225 78 262Z" fill="#1a5a3a"/><path d="M78 262Q250 231 395 265L383 282Q237 247 87 280Z" fill="#f2e8cd" stroke="#1a5a3a" stroke-width="1"/><path d="M91 291q139-38 286 0" stroke="#1a5a3a" fill="none" stroke-dasharray="2 8" stroke-width="2"/></g><path d="M397 32l7 9-12 3zM439 62l8 8-11 5zM432 166l10 1-4 9zM405 181l5 7-9 2z" fill="#f2e8cd" stroke="#f2e8cd"/><path d="M37 277l-11 4m405 45l10 8M24 286l3 5" stroke="#f2e8cd" opacity=".5"/></g></svg>`;}

  let opener = null;
  function showDialog(dialog) {
    opener = document.activeElement;
    document.body.classList.add('dialog-open');
    dialog.showModal();
    dialog.scrollTop = 0;
    dialog.querySelector('.close').focus({preventScroll: true});
  }
  function openDetail(p) {
    const dialog = $('#detail'), body = dialog.querySelector('.dialog-body');
    $('#detail-title').textContent = p.name;
    dialog.querySelector('.dialog-eyebrow').textContent = p.category;
    body.replaceChildren(el('p', 'summary', p.summary));
    const paragraphs = p.description.includes('\n') ? p.description.split(/\n+/) : p.description.match(/[^。]+。|[^。]+$/g) || [];
    for (const text of paragraphs) {
      if (text.trim() && !(text.trim().startsWith('対応環境：') && p.environment?.length)) body.append(el('p', '', text.trim()));
    }
    const table = tableFor(p); if (table) body.append(table);
    const actions = el('div', 'dialog-actions'); actions.append(link('GitHubで見る ↗', p.url), pickButton(p));
    body.append(actions, el('p', 'checked-date', '確認 ' + p.checkedAt), sourcesFor(p));
    updateDock(); showDialog(dialog);
  }
  async function animateStage(stage, frames, duration, easing, persist = false) {
    if (!stage || reducedMotion() || !stage.animate) return;
    await stage.animate(frames, {duration, easing, fill: persist ? 'forwards' : 'none'}).finished.catch(() => {});
  }
  async function navigate(index, direction = index < active ? -1 : 1) {
    if (switching || visible.length < 2) return;
    const destination = (index + visible.length) % visible.length;
    if (destination === active) return;
    const token = ++epoch, old = $('.focus-stage'); switching = true;
    const focus = document.activeElement?.dataset.nav, stageFocused = document.activeElement === old;
    const distance = window.matchMedia('(max-width:600px)').matches ? 36 : 52;
    try {
      await animateStage(old, [{opacity: 1, transform: old?.style.transform || 'translateX(0)'}, {opacity: 0, transform: `translateX(${-direction * distance}px)`}], 110, 'cubic-bezier(.4,0,1,1)', true);
      if (token !== epoch) return;
      active = destination; render(); urlState();
      if (focus) document.querySelector(`[data-nav="${focus}"]`)?.focus({preventScroll: true});
      else if (stageFocused) $('.focus-stage').focus({preventScroll: true});
      await animateStage($('.focus-stage'), [{opacity: 0, transform: `translateX(${direction * distance}px)`}, {opacity: 1, transform: 'translateX(0)'}], 190, 'cubic-bezier(.16,1,.3,1)');
    } finally { if (token === epoch) { switching = false; if (pendingMeasurement) scheduleMeasurement(true); } }
  }
  function render() {
    const content = $('#content'); content.replaceChildren();
    const filtered = !!($('#search').value.trim() || $('#category').value);
    $('#count').hidden = !filtered;
    $('#count').textContent = `${visible.length} / ${data.length} 件`;
    $('#filter-summary').textContent = [$('#search').value.trim(), $('#category').value].filter(Boolean).join(' / ');
    $('#clear-filters').hidden = !filtered;
    $('#empty').hidden = !!visible.length;
    $('#boot-message').hidden = true;
    if (!visible.length) return;
    const p = current(), stage = el('div', 'focus-stage');
    stage.tabIndex = 0; stage.setAttribute('aria-label', `${short(p)}の紹介。左右キーで切り替え`);
    const art = el('div', 'cookie-visual'), cookie = el('button', 'cookie-open');
    cookie.type = 'button'; cookie.setAttribute('aria-label', p.name + 'の詳細を開く'); cookie.setAttribute('aria-haspopup', 'dialog');
    cookie.innerHTML = cookieSvg(p, 'current'); cookie.append(el('span', '', position(p))); cookie.onclick = () => openDetail(p); art.append(cookie);
    if (visible.length > 1) for (const [step, side] of [[-1, 'previous'], [1, 'next']]) {
      const item = visible[(active + step + visible.length) % visible.length], edge = el('button', 'edge-preview ' + side);
      edge.type = 'button'; edge.dataset.nav = step < 0 ? 'prev' : 'next';
      edge.setAttribute('aria-label', `${step < 0 ? '前' : '次'}の項目：${short(item)}`);
      const neighbor = el('span', 'neighbor-art'); neighbor.innerHTML = cookieSvg(item, side); neighbor.setAttribute('aria-hidden', 'true');
      const arrow = el('span', 'edge-arrow', step < 0 ? '‹' : '›'); arrow.setAttribute('aria-hidden', 'true');
      edge.append(neighbor, arrow); edge.onclick = () => navigate(active + step, step); art.append(edge);
    }
    const copy = copyFor(p);
    stage.append(art, copy); content.append(stage);
    copyObserver?.disconnect();
    if (copyObserver) { copyObserver.observe(copy); [...copy.children].forEach(child => copyObserver.observe(child)); }
    scheduleMeasurement();
    const bottom = el('div', 'focus-bottom'), pos = el('p', 'position', `${String(active + 1).padStart(2, '0')} / ${visible.length} 件`);
    pos.setAttribute('role', 'status'); pos.setAttribute('aria-live', 'polite');
    pos.setAttribute('aria-label', `${visible.length}件中、${active + 1}件目：${short(p)}`); bottom.append(pos); content.append(bottom);
    const related = relatedItems(p, data);
    if (related.length) {
      const section = el('section', 'related'); section.setAttribute('aria-labelledby', 'related-title');
      const title = el('h3', 'related-label', 'こんな目的なら'); title.id = 'related-title'; section.append(title);
      for (const row of related) {
        const button = el('button', 'related-link'); button.type = 'button';
        button.append(el('span', 'related-purpose', row.label), el('span', 'related-project', short(row.project)));
        const arrow = el('span', 'related-arrow', '↗'); arrow.setAttribute('aria-hidden', 'true'); button.append(arrow);
        button.onclick = () => {
          if (switching) return;
          const old = current();
          if (!visible.includes(row.project)) {
            $('#search').value = ''; $('#category').value = ''; visible = filterRecords(data, state(), counts);
            active = visible.findIndex(item => item.url === old.url);
          }
          $('#search-panel').hidden = true; $('#search-toggle').setAttribute('aria-expanded', 'false');
          navigate(visible.indexOf(row.project)).then(() => $('.focus-stage')?.focus({preventScroll: true}));
        };
        section.append(button);
      }
      content.append(section);
    }
    updateDock(); updateStars();
  }
  function refresh(project = '') {
    ++epoch; switching = false; pointer = null;
    visible = filterRecords(data, state(), counts);
    active = Math.max(0, visible.findIndex(p => repository(p) === project));
    render(); urlState();
  }
  function restore() {
    const params = new URLSearchParams(location.search);
    $('#search').value = params.get('q') || '';
    $('#category').value = [...$('#category').options].some(o => o.value === params.get('category')) ? params.get('category') : '';
    $('#sort').value = ['name', 'stars'].includes(params.get('sort')) ? params.get('sort') : 'new';
    refresh(params.get('project') || '');
  }
  function showComparison() {
    const list = [...selected].map(url => data.find(p => p.url === url));
    if (list.length < 2) return;
    const body = $('#comparison .comparison-body'), grid = el('table', 'comparison-table'), head = el('thead'), header = el('tr'), tbody = el('tbody');
    grid.setAttribute('aria-label', '比較候補の紹介と利用条件');
    grid.style.setProperty('--columns', list.length);
    const corner = el('th', '', '項目'); corner.scope = 'col'; header.append(corner);
    for (const p of list) {
      const column = el('th'); column.scope = 'col';
      column.append(el('p', 'compare-category', p.category), el('h3', '', short(p)), el('p', 'compare-purpose', what(p)), link('GitHubで見る ↗', p.url)); header.append(column);
    }
    head.append(header); grid.append(head);
    const intro = el('tr'), label = el('th', '', '一言紹介'); label.scope = 'row'; intro.append(label);
    list.forEach(p => intro.append(el('td', '', p.summary))); tbody.append(intro);
    for (const groupKey of ['requirements', 'specifications', 'usage', 'licenses']) {
      const groups = list.map(p => p.presentation.groups.find(group => group.key === groupKey));
      const example = groups.find(Boolean); if (!example) continue;
      const groupRow = el('tr', 'comparison-group'), groupTitle = el('th', '', '▼' + example.label);
      groupTitle.colSpan = list.length + 1; groupRow.append(groupTitle); tbody.append(groupRow);
      const union = new Map();
      groups.filter(Boolean).forEach(group => group.rows.forEach(row => union.set(row.key + ':' + row.scope, row)));
      const rows = [...union.values()].sort((a, b) => (a.scope !== 'basic') - (b.scope !== 'basic') || a.scope.localeCompare(b.scope, 'ja') || a.order - b.order);
      for (const row of rows) {
        const tr = el('tr'), th = el('th', '', factHeading(row)); th.scope = 'row'; tr.append(th);
        groups.forEach(group => {
          const cell = el('td'), actual = group?.rows.find(item => item.key === row.key && item.scope === row.scope);
          factValue(cell, actual); tr.append(cell);
        });
        tbody.append(tr);
      }
    }
    grid.append(tbody);
    const copyButton = el('button', 'copy-notes', '紹介文とURLをコピー'); copyButton.type = 'button';
    copyButton.onclick = async () => {
      const text = list.map(p => `${p.name}\n${p.summary}\n${p.url}`).join('\n\n');
      try { await navigator.clipboard.writeText(text); toast('紹介文とURLをコピーしました'); }
      catch (_) {
        let area = body.querySelector('textarea');
        if (!area) { area = el('textarea', 'clipboard-text'); area.readOnly = true; area.setAttribute('aria-label', 'コピーする紹介文とURL'); body.append(area); }
        area.value = text; area.focus(); area.select();
      }
    };
    body.replaceChildren(grid, el('p', 'comparison-note', '—：この紹介に記載なし。未対応を意味するものではありません。'), copyButton); showDialog($('#comparison'));
  }
  for (const dialog of document.querySelectorAll('dialog')) {
    dialog.querySelector('.close').onclick = () => dialog.close();
    dialog.addEventListener('close', () => {
      document.body.classList.remove('dialog-open');
      (opener?.isConnected ? opener : $('.read-more') || $('#search-toggle'))?.focus({preventScroll: true});
    });
    dialog.addEventListener('click', event => {
      const rect = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
    });
  }
  $('#compare').onclick = showComparison;
  $('#search-toggle').disabled = false;
  $('#search-toggle').onclick = () => {
    const open = $('#search-panel').hidden;
    $('#search-panel').hidden = !open; $('#search-toggle').setAttribute('aria-expanded', String(open));
    if (open) $('#search').focus({preventScroll: true});
  };
  $('#clear-filters').onclick = () => { $('#search').value = ''; $('#category').value = ''; refresh(); $('#search').focus({preventScroll: true}); };
  for (const input of [$('#search'), $('#category'), $('#sort')]) input.addEventListener(input.id === 'search' ? 'input' : 'change', () => refresh());
  [...new Set(data.map(p => p.category))].sort((a, b) => a.localeCompare(b, 'ja')).forEach(value => {
    const option = el('option', '', value); option.value = value; $('#category').append(option);
  });
  const surface = $('#content');
  surface.addEventListener('pointerdown', event => {
    pointer = null;
    if (switching || event.isPrimary === false || (event.pointerType === 'mouse' && event.button !== 0) || !event.target.closest('.cookie-open')) return;
    pointer = {id: event.pointerId, x: event.clientX, y: event.clientY, horizontal: false};
  });
  surface.addEventListener('pointermove', event => {
    if (!pointer || event.pointerId !== pointer.id) return;
    const dx = event.clientX - pointer.x, dy = event.clientY - pointer.y;
    if (Math.abs(dx) > 14 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      pointer.horizontal = true; surface.setPointerCapture(event.pointerId);
      const stage = $('.focus-stage');
      if (stage && !switching && !reducedMotion()) stage.style.transform = `translateX(${Math.max(-48, Math.min(48, dx * .22))}px)`;
    }
  });
  function endPointer(event, cancel = false) {
    if (!pointer || event.pointerId !== pointer.id) return;
    const step = cancel ? 0 : swipeStep(event.clientX - pointer.x, event.clientY - pointer.y), dragged = pointer.horizontal;
    pointer = null;
    if (surface.hasPointerCapture(event.pointerId)) surface.releasePointerCapture(event.pointerId);
    if (dragged) suppressUntil = Date.now() + 450;
    if (step) navigate(active + step, step);
    else {
      const stage = $('.focus-stage');
      if (stage) { animateStage(stage, [{transform: stage.style.transform || 'translateX(0)'}, {transform: 'translateX(0)'}], 120, 'ease-out'); stage.style.transform = ''; }
    }
  }
  surface.addEventListener('pointerup', event => endPointer(event));
  surface.addEventListener('pointercancel', event => endPointer(event, true));
  surface.addEventListener('click', event => { if (Date.now() < suppressUntil) { event.preventDefault(); event.stopImmediatePropagation(); } }, true);
  surface.addEventListener('wheel', event => {
    if (!event.target.closest('.cookie-visual') || selectedText() || Math.abs(event.deltaX) <= Math.abs(event.deltaY) * 1.7 || Math.abs(event.deltaX) < 2) return;
    event.preventDefault(); clearTimeout(wheelTimer);
    wheelTimer = setTimeout(() => { wheelTotal = 0; wheelUsed = false; }, 180);
    if (wheelUsed) return;
    wheelTotal += event.deltaX;
    if (Math.abs(wheelTotal) > 55) { wheelUsed = true; const step = wheelTotal > 0 ? 1 : -1; navigate(active + step, step); }
  }, {passive: false});
  document.addEventListener('keydown', event => {
    if (document.querySelector('dialog[open]') || selectedText() || event.target.closest('a,button,input,select,textarea,[contenteditable]') || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); const step = event.key === 'ArrowRight' ? 1 : -1; navigate(active + step, step); }
  });
  window.addEventListener('popstate', restore);
  window.addEventListener('resize', () => { measureDock(); scheduleMeasurement(true); });
  document.fonts?.ready.then(() => scheduleMeasurement(true));
  document.fonts?.addEventListener('loadingdone', () => scheduleMeasurement(true));
  if (window.ResizeObserver) {
    const chromeObserver = new ResizeObserver(measureDock);
    chromeObserver.observe($('.candidate-dock')); chromeObserver.observe($('footer'));
  }
  seedStars(); restore();
  // Keep text selections and the current introduction stable during background updates.
  Promise.all(data.map(loadStars)).then(() => {
    if ($('#sort').value === 'stars' && !pointer && !switching && !selectedText() && !document.querySelector('dialog[open]')) refresh(current() ? repository(current()) : '');
  });
})();
