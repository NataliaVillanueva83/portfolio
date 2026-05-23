// Importamos tu ilustración desde assets. Asegurate de que el nombre coincida.
import miAvatar from '../assets/avatar.png'; 

export function Hero({ setSeccionActiva }) {
  return (
    <div className="pf-section">
      <div className="pf-hero">
        <div className="pf-hero-grid"></div>
        <div className="pf-hero-glow"></div>
        <div className="pf-hero-inner">
          <div className="pf-hero-text">
            <div className="pf-eyebrow">Disponible para proyectos</div>
            <h1 className="pf-hero-name">
              Natalia<span className="hl">Villanueva</span>
            </h1>
            <p className="pf-hero-role">Desarrollador Backend</p>
            <p className="pf-hero-bio">
                     "Desarrolladora Backend. Me especializo en construir la lógica y arquitectura detrás de escena, creando APIs robustas y bases de datos eficientes con Java, Spring Boot, PHP y Node.js. Entusiasta de Linux y la administración de servidores."
            </p>
            <div className="pf-hero-btns">
              <button className="pf-btn pf-btn-p" onClick={() => setSeccionActiva('projects')}>Ver proyectos →</button>
              <button className="pf-btn pf-btn-g" onClick={() => setSeccionActiva('contact')}>Contactarme</button>
            </div>
            <div className="pf-social">
              <a href="#" title="GitHub">GH</a>
              <a href="#" title="LinkedIn">in</a>
              <a href="#" title="Twitter/X">𝕏</a>
              <a href="#" title="Email">✉</a>
            </div>
          </div>
          
          <div className="pf-avatar">
            <div className="pf-avatar-bg"></div>
            {/* Reemplazamos la letra y el texto por la etiqueta img */}
            <img 
              src={miAvatar} 
              alt="Avatar de Natalia" 
              className="pf-avatar-image"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}
