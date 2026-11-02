'use strict';
function dayKey(date) { return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`; }
function latestPerDay(entries) {
  const grouped = new Map();
  entries.filter(entry => Number.isInteger(entry.score) && entry.score >= 1 && entry.score <= 5 && Number.isFinite(entry.date.getTime())).forEach(entry => {
    const key = dayKey(entry.date);
    if (!grouped.has(key) || grouped.get(key).date < entry.date) grouped.set(key, entry);
  });
  return Array.from(grouped.values()).sort((a, b) => a.date - b.date);
}
if (typeof module !== 'undefined') module.exports = { latestPerDay };
if (typeof document !== 'undefined') document.querySelectorAll('[data-wellbeing]').forEach(demo => {
  const faces = ['😞', '🙁', '😐', '🙂', '😄'];
  const colors = ['#fa8ba8', '#ffb267', '#f0d581', '#87ead8', '#76d9ef'];
  const labels = demo.dataset.labels.split('|');
  let chosen = null;
  const today = new Date();
  const offsets = [80, 60, 45, 29, 23, 17, 10, 6, 3, 1];
  const scores = [2, 3, 2, 2, 3, 3, 4, 3, 4, 4];
  const entries = offsets.map((offset, i) => {
    const date = new Date(today); date.setDate(date.getDate() - offset); date.setHours(18, 0, 0, 0);
    return { date, score: scores[i] };
  });
  function render() {
    const days = Number(demo.querySelector('[data-period]').value);
    const start = new Date(today); start.setHours(0, 0, 0, 0); start.setDate(start.getDate() - days + 1);
    const end = new Date(today); end.setHours(24, 0, 0, 0);
    const selected = entries.filter(entry => entry.date >= start && entry.date < end);
    const points = latestPerDay(selected);
    const svg = demo.querySelector('svg'); svg.replaceChildren();
    const add = (tag, attrs, text) => {
      const node = document.createElementNS('http://www.w3.org/2000/svg', tag);
      Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, String(v)));
      if (text !== undefined) node.textContent = text;
      svg.appendChild(node); return node;
    };
    const y = score => 208 - (score - 1) * 43;
    const x = date => 52 + 620 * ((date.getTime() - start.getTime()) / (end.getTime() - start.getTime()));
    for (let score = 1; score <= 5; score++) {
      add('line', { x1: 50, x2: 675, y1: y(score), y2: y(score), stroke: '#294452' });
      add('text', { x: 14, y: y(score) + 5 }, faces[score - 1]);
    }
    if (points.length > 1) add('polyline', { points: points.map(entry => `${x(entry.date)},${y(entry.score)}`).join(' '), fill: 'none', stroke: '#87ead8', 'stroke-width': 3 });
    const formatDate = date => new Intl.DateTimeFormat(demo.dataset.locale, { day: 'numeric', month: 'short' }).format(date);
    for (const entry of points) {
      const point = add('circle', { cx: x(entry.date), cy: y(entry.score), r: 6, fill: colors[entry.score - 1] });
      const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');title.textContent = `${formatDate(entry.date)}: ${labels[entry.score - 1]}`; point.appendChild(title);
    }
    add('text', { x: 50, y: 239 }, formatDate(start));
    add('text', { x: 675, y: 239, 'text-anchor': 'end' }, formatDate(today));
    const list = demo.querySelector('.wellbeing-list'); list.replaceChildren();
    selected.slice().sort((a, b) => b.date - a.date).slice(0, 8).forEach(entry => {
      const row = document.createElement('div');row.className = 'wellbeing-row';
      const face = document.createElement('span');face.className = 'face';face.textContent = faces[entry.score - 1];face.setAttribute('aria-hidden', 'true');
      const text = document.createElement('div');const label = document.createElement('strong');label.textContent = labels[entry.score - 1];
      const time = document.createElement('time');time.dateTime = entry.date.toISOString();time.textContent = new Intl.DateTimeFormat(demo.dataset.locale, { dateStyle: 'medium', timeStyle: 'short' }).format(entry.date);
      text.append(label, document.createElement('br'), time);row.append(face, text);list.appendChild(row);
    });
    if (!selected.length) list.textContent = demo.dataset.empty;
  }
  demo.querySelectorAll('[data-score]').forEach(button => button.addEventListener('click', () => {
    chosen = Number(button.dataset.score);
    demo.querySelectorAll('[data-score]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
  }));
  demo.querySelector('[data-add]').addEventListener('click', () => {
    if (chosen === null) { demo.querySelector('[data-message]').textContent = demo.dataset.choose; return; }
    entries.push({ date: new Date(), score: chosen });render();demo.querySelector('[data-message]').textContent = demo.dataset.saved;
  });
  demo.querySelector('[data-period]').addEventListener('change', render);render();
});
