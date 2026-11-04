"use strict";
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
document.querySelectorAll(".welcome-movement").forEach(badge => {
  const frames = Array.from(badge.children);
  let index = 0;
  if (reduced || frames.length < 2) return;
  const timer = window.setInterval(() => {
    frames[index].hidden = true;
    index = (index + 1) % frames.length;
    frames[index].hidden = false;
  }, 380);
  window.setTimeout(() => window.clearInterval(timer), 5000);
  window.addEventListener("pagehide", () => window.clearInterval(timer), {once: true});
});
