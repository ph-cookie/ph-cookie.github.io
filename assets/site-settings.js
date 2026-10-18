/* Optional GA4. No Google tag, cookies or replay of actions before consent. */
(function () {
  'use strict';
  const ID = 'G-06E0498F9H';
  const KEY = 'ph-cookie-metrics-v1';
  const MAX_AGE = 180 * 86400000;
  function cleanPage(value) {
    try { const u = new URL(value); return u.origin + u.pathname; } catch (_) { return ''; }
  }
  function cleanReferrer(value) {
    try { return new URL(value).origin + '/'; } catch (_) { return ''; }
  }
  function preference(value, now = Date.now()) {
    try {
      const p = JSON.parse(value);
      return p && ['granted', 'denied'].includes(p.choice) && typeof p.excluded === 'boolean' &&
        Number.isFinite(p.at) && now >= p.at && now - p.at < MAX_AGE ? p : null;
    } catch (_) { return null; }
  }
  function eventData(name, details = {}) {
    if (name === 'page_view' || name === 'collection_open') return {};
    if (!['project_detail_open', 'project_outbound'].includes(name) ||
        typeof details.project_id !== 'string' || !/^[\w.-]+\/[\w.-]+$/.test(details.project_id)) return null;
    if (name === 'project_detail_open' && ['main', 'overview'].includes(details.entry_point)) {
      return {project_id: details.project_id, entry_point: details.entry_point};
    }
    if (name === 'project_outbound' && ['github', 'official'].includes(details.destination)) {
      return {project_id: details.project_id, destination: details.destination};
    }
    return null;
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = {cleanPage, cleanReferrer, preference, eventData};
  if (typeof document === 'undefined') return;
  const panel = document.querySelector('#metrics-panel'), dialog = document.querySelector('#metrics-dialog');
  if (!panel || !dialog) return;
  const status = dialog.querySelector('[data-metrics-status]');
  const exclusion = dialog.querySelector('[data-metrics-exclude]');
  const publicHost = location.protocol === 'https:' && location.hostname === 'ph-cookie.github.io';
  const disableKey = 'ga-disable-' + ID;
  let saved = null, ready = false, started = false, script = null, opener = null;
  try { saved = preference(localStorage.getItem(KEY)); } catch (_) {}
  const allowed = () => publicHost && saved?.choice === 'granted' && !saved.excluded;
  window[disableKey] = !allowed();
  const command = function () { window.dataLayer.push(arguments); };
  function track(name, details = {}) {
    if (!ready || !allowed()) return;
    const data = eventData(name, details);
    if (!data) return;
    command('event', name, {...data, page_location: cleanPage(location.href), page_referrer: cleanReferrer(document.referrer), send_to: ID});
  }
  window.siteMetrics = Object.freeze({track});
  function start() {
    if (!allowed() || started) return;
    started = true;
    window[disableKey] = false;
    window.dataLayer = window.dataLayer || [];
    command('consent', 'default', {analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'});
    command('consent', 'update', {analytics_storage: 'granted'});
    command('js', new Date());
    command('config', ID, {send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false,
      cookie_expires: 15552000, cookie_update: false, page_location: cleanPage(location.href), page_referrer: cleanReferrer(document.referrer)});
    script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
    script.onload = () => { if (allowed()) { ready = true; track('page_view'); } };
    script.onerror = () => { ready = false; };
    document.head.append(script);
  }
  function forgetCookies() {
    for (const name of ['_ga', '_ga_06E0498F9H']) {
      for (const domain of ['', ';domain=' + location.hostname, ';domain=.' + location.hostname]) {
        document.cookie = name + '=;max-age=0;path=/' + domain + ';SameSite=Lax';
      }
    }
  }
  function updateView() {
    panel.hidden = !!saved;
    exclusion.checked = !!saved?.excluded;
    status.textContent = !publicHost ? 'プレビューではGoogleへの計測送信は行いません。' :
      saved?.excluded ? 'このブラウザは制作確認用として計測から除外しています。' :
      saved?.choice === 'granted' ? 'アクセス解析を許可しています。' : 'アクセス解析は無効です。';
  }
  function save(choice, excluded) {
    const wasStarted = started;
    saved = {choice, excluded, at: Date.now()};
    try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (_) {}
    if (!allowed()) {
      ready = false;
      window[disableKey] = true;
      script?.remove();
      forgetCookies();
    }
    updateView();
    if (dialog.open) dialog.close();
    if (wasStarted && !allowed()) { location.reload(); return; }
    start();
  }
  document.addEventListener('click', event => {
    const target = event.target.closest?.('[data-metrics-choice],[data-metrics-open],[data-metrics-close],a');
    if (!target) return;
    if (target.hasAttribute('data-metrics-open')) { opener = document.activeElement; updateView(); document.body.classList.add('metrics-modal-open'); dialog.showModal(); return; }
    if (target.hasAttribute('data-metrics-close')) { dialog.close(); return; }
    if (target.hasAttribute('data-metrics-choice')) {
      save(target.dataset.metricsChoice, dialog.contains(target) ? exclusion.checked : false); return;
    }
    if (target.matches('a.collection-package')) track('collection_open');
    if (target.dataset.metricsProject) track('project_outbound', {project_id: target.dataset.metricsProject, destination: target.dataset.metricsDestination});
  }, true);
  // Only the selected preference is shared; no identifiers or browsing history.
  window.addEventListener('storage', event => {
    if (event.key !== KEY) return;
    const wasStarted = started;
    saved = preference(event.newValue);
    window[disableKey] = !allowed();
    updateView();
    if (wasStarted && !allowed()) { ready = false; forgetCookies(); location.reload(); }
    else start();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('metrics-modal-open');
    if (opener?.isConnected) opener.focus({preventScroll: true});
  });
  updateView();
  start();
})();
