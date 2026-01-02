import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import 'aos/dist/aos.css'
import Aos from 'aos'

// Inizializza AOS con configurazione professionale
Aos.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 100,
  delay: 0,
});

// Applica dark mode di default al documento (dark-first design)
if (!localStorage.getItem('theme')) {
  document.documentElement.classList.add('dark');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
