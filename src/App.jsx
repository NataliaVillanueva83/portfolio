import { useState } from 'react';
import { Hero } from './components/Hero.jsx';
import { Projects } from './components/Projects.jsx';
import { Skills } from './components/Skills.jsx';
import { Contact } from './components/Contact.jsx';
import './App.css';

function App() {
  // Estado para controlar qué sección se está viendo
  const [seccionActiva, setSeccionActiva] = useState('hero');

  return (
    <div className="pf">
      <nav className="pf-nav">
        <div className="pf-logo">
          <div className="pf-logo-icon">N</div>
          &lt;NatiDev /&gt;
        </div>
        <ul className="pf-nav-links">
          <li>
            <button className={seccionActiva === 'hero' ? 'active' : ''} onClick={() => setSeccionActiva('hero')}>Inicio</button>
          </li>
          <li>
            <button className={seccionActiva === 'projects' ? 'active' : ''} onClick={() => setSeccionActiva('projects')}>Proyectos</button>
          </li>
          <li>
            <button className={seccionActiva === 'skills' ? 'active' : ''} onClick={() => setSeccionActiva('skills')}>Skills</button>
          </li>
          <li>
            <button className={seccionActiva === 'contact' ? 'active' : ''} onClick={() => setSeccionActiva('contact')}>Contacto</button>
          </li>
        </ul>
      </nav>

      {/* Renderizado condicional: solo muestra el componente si su estado está activo */}
      {seccionActiva === 'hero' && <Hero setSeccionActiva={setSeccionActiva} />}
      {seccionActiva === 'projects' && <Projects />}
      {seccionActiva === 'skills' && <Skills />}
      {seccionActiva === 'contact' && <Contact />}

      <footer className="pf-footer">
        <div className="pf-footer-logo">&lt;NatiDev /&gt;</div>
        <div>© 2026 — React + Vite + Node.js</div>
        <div>Argentina 🇦🇷</div>
      </footer>
    </div>
  );
}

export default App;
