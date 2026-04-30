import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

const SPLASH_MIN_MS = 1000;
const splashStart = Date.now();

// The Hero component resolves this when the first visible image has loaded.
// main.jsx waits for it (with a 6s safety cap) before dismissing the splash,
// so users never see a flash of unloaded content.
let resolveHeroReady;
window.__hoopHeroReady = new Promise((res) => { resolveHeroReady = res; });
window.__hoopResolveHero = resolveHeroReady;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function dismissSplash() {
  const splash = document.getElementById('splash');
  if (!splash) return;
  splash.classList.add('fade-out');
  const cleanup = () => splash.remove();
  splash.addEventListener('transitionend', cleanup, { once: true });
  setTimeout(cleanup, 600); // fallback for iOS Low Power Mode
}

// Wait for: (1) minimum display time, (2) first hero image loaded, (3) max 6s safety cap
const minWait = new Promise((res) => setTimeout(res, SPLASH_MIN_MS));
const heroReady = Promise.race([
  window.__hoopHeroReady,
  new Promise((res) => setTimeout(res, 6000)), // never block more than 6s
]);
Promise.all([minWait, heroReady]).then(dismissSplash);
