'use strict';
function calculateGoal(period, sessions, minutes, activeMinutes) {
  if (!['day', 'week'].includes(period) || !Number.isInteger(sessions) || sessions < 1 || sessions > 14 ||
      !Number.isInteger(minutes) || minutes < 1 || minutes > 120 ||
      !Number.isFinite(activeMinutes) || activeMinutes < 0 || activeMinutes > 10080) {
    throw new RangeError('Invalid goal values');
  }
  const target = minutes * (period === 'week' ? sessions : 1);
  return {
    target,
    percent: Math.floor(activeMinutes / target * 100),
    fraction: Math.min(1, activeMinutes / target),
    remaining: Math.max(0, target - activeMinutes)
  };
}
if (typeof module !== 'undefined') module.exports = { calculateGoal };
if (typeof document !== 'undefined') {
  document.querySelectorAll('[data-goal-demo]').forEach(demo => {
    const field = name => demo.querySelector(`[name="${name}"]`);
    const formatter = new Intl.NumberFormat(demo.dataset.locale, { maximumFractionDigits: 1 });
    function render() {
      demo.querySelector('[data-frequency]').hidden = field('period').value === 'day';
      try {
        const result = calculateGoal(field('period').value, Number(field('sessions').value), Number(field('minutes').value), Number(field('active').value));
        if (field('active').value.trim() === '') throw new RangeError('Empty active time');
        demo.querySelector('[data-percent]').textContent = `${result.percent} %`;
        demo.querySelector('[data-active]').textContent = formatter.format(Number(field('active').value));
        demo.querySelector('[data-target]').textContent = formatter.format(result.target);
        demo.querySelector('.goal-fill').setAttribute('stroke-dashoffset', String(100 * (1 - result.fraction)));
        demo.querySelector('svg').setAttribute('aria-label', `${demo.dataset.aria}: ${result.percent} %`);
        demo.querySelector('[data-goal-message]').textContent = result.remaining > 0 ? `${demo.dataset.remaining}: ${formatter.format(result.remaining)} min` : demo.dataset.reached;
      } catch (_) {
        demo.querySelector('[data-goal-message]').textContent = demo.dataset.error;
      }
    }
    demo.addEventListener('input', render);
    demo.addEventListener('change', render);
    render();
  });
}
