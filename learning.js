'use strict';
// Learning checkmarks stay in this page only. No storage, network or app access.
document.querySelectorAll('[data-print]').forEach(button => button.addEventListener('click', () => window.print()));
const checks = Array.from(document.querySelectorAll('[data-learning-check]'));
function updateCount() {
  const count = document.querySelector('[data-count]');
  if (count) count.textContent = String(checks.filter(input => input.checked).length);
}
checks.forEach(input => input.addEventListener('change', updateCount));
document.querySelectorAll('[data-reset]').forEach(button => button.addEventListener('click', () => {
  checks.forEach(input => { input.checked = false; });
  updateCount();
}));
updateCount();
