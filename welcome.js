"use strict";
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
document.querySelectorAll(".welcome-movement").forEach(badge => {
  const frames = Array.from(badge.children);
  let index = 0;
  let timer, timeout;
  const stop = () => {
    window.clearInterval(timer);
    window.clearTimeout(timeout);
  };
  const start = () => {
    stop();
    index = 0;
    frames.forEach((frame, i) => { frame.hidden = i !== 0; });
    if (reduced || frames.length < 2) return;
    timer = window.setInterval(() => {
      frames[index].hidden = true;
      index = (index + 1) % frames.length;
      frames[index].hidden = false;
    }, 380);
    timeout = window.setTimeout(stop, 5000);
  };
  start();
  window.addEventListener("pageshow", event => { if (event.persisted) start(); });
  window.addEventListener("pagehide", stop);
});
