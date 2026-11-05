'use strict';
// The URL carries the website selection; no cookies, storage or app settings are changed.
(() => {
  const panels = Array.from(document.querySelectorAll('.mode-panel'));
  const choices = Array.from(document.querySelectorAll('[data-mode-choice]'));
  const prompt = document.getElementById('mode-prompt');
  if (!panels.length) return;
  let activeMode = '';
  function render() {
    let hash;
    try { hash = decodeURIComponent(location.hash.slice(1)); } catch (_) { hash = ''; }
    const mode = hash === 'main' ? activeMode : hash === 'einfach' || hash.startsWith('einfach-') ? 'einfach' :
      hash === 'regulaer' || hash.startsWith('regulaer-') ? 'regulaer' : '';
    activeMode = mode;
    for (const panel of panels) panel.hidden = panel.id !== mode;
    for (const choice of choices) {
      const selected = choice.dataset.modeChoice === mode;
      choice.setAttribute('aria-expanded', String(selected));
      if (selected) choice.setAttribute('aria-current', 'true');
      else choice.removeAttribute('aria-current');
    }
    if (prompt) prompt.hidden = Boolean(mode);
    const target = hash && document.getElementById(hash);
    if (target && mode) {
      for (let node = target; node && node !== document.body; node = node.parentElement) {
        if (node.tagName === 'DETAILS') node.open = true;
      }
      // Keep the selected topic visible after revealing its parent panel.
      requestAnimationFrame(() => target.scrollIntoView({block:'start', behavior:'instant'}));
    }
    for (const link of document.querySelectorAll('[data-language-link]')) {
      const base = link.getAttribute('href').split('#')[0];
      link.setAttribute('href', base + (mode ? '#' + (hash === 'main' ? mode : hash) : ''));
    }
    for (const group of document.querySelectorAll('.menu-groups section:last-child a')) {
      const href = group.getAttribute('href');
      const parts = href.split('#');
      const slug = (parts[1] || '').replace(/^(einfach|regulaer)-/, '');
      if (mode && slug) group.setAttribute('href', parts[0] + '#' + mode + '-' + slug);
    }
    for (const menu of document.querySelectorAll('.site-menu')) menu.open = false;
  }
  for (const menu of document.querySelectorAll('.site-menu')) {
    for (const link of menu.querySelectorAll('a')) link.addEventListener('click', () => { menu.open = false; });
  }
  window.addEventListener('hashchange', render);
  render();
})();
