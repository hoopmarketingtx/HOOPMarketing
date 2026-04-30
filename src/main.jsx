import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

const SPLASH_MIN_MS = 800; // keep splash visible for at least this long
const splashStart = Date.now();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Dismiss the splash screen once React has painted AND the minimum time has passed.
// The setTimeout fallback handles iOS Low Power Mode where transitionend never fires.
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    const elapsed = Date.now() - splashStart;
    const remaining = Math.max(0, SPLASH_MIN_MS - elapsed);
    setTimeout(() => {
      const splash = document.getElementById('splash');
      if (!splash) return;
      splash.classList.add('fade-out');
      const cleanup = () => splash.remove();
      splash.addEventListener('transitionend', cleanup, { once: true });
      // Fallback: if transitionend never fires (Low Power Mode, reduced-motion), remove after transition duration
      setTimeout(cleanup, 600);
    }, remaining);
  });
});
