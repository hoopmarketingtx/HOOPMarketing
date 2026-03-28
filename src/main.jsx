import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Dismiss the splash screen once React has painted
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    const splash = document.getElementById('splash');
    if (splash) {
      splash.classList.add('fade-out');
      splash.addEventListener('transitionend', () => splash.remove(), { once: true });
    }
  });
});
