import { useState } from 'react';

export function Contact() {
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();
    setMensajeEnviado(true);
    // Ocultar el mensaje después de 4 segundos
    setTimeout(() => {
      setMensajeEnviado(false);
    }, 4000);
    // Acá iría el reseteo del formulario en una app real
  };

  return (
    <div className="pf-section">
      <div className="pf-sh">
        <div className="pf-tag">◆ ¿Hablamos?</div>
        <h2 className="pf-stitle">Contacto <span className="pf-cbadge">&lt;Contact /&gt;</span></h2>
      </div>
      
      <div className="pf-contact-wrap">
        <div className="pf-contact-info">
          <p>Estoy disponible para proyectos freelance, oportunidades laborales o simplemente charlar sobre tecnología y código.</p>
          <div className="pf-contact-items">
            <div className="pf-citem"><div className="pf-citem-icon">✉</div><span>nataliavillanueva83@gmail.com</span></div>
            <div className="pf-citem"><div className="pf-citem-icon">⌥</div><span>github.com/NataliaVillanueva83</span></div>
            <div className="pf-citem"><div className="pf-citem-icon">in</div><span>linkedin.com/in/natalia-villanueva13</span></div>
            <div className="pf-citem"><div className="pf-citem-icon">◎</div><span>Tandil, Argentina 🇦🇷</span></div>
          </div>
          <div className="pf-social" style={{ marginTop: '1.5rem' }}>
            <a href="#" title="GitHub">GH</a>
            <a href="#" title="LinkedIn">in</a>
            <a href="#" title="Twitter/X">𝕏</a>
            <a href="#" title="Email">✉</a>
          </div>
        </div>
        
        <div>
          <form className="pf-form" onSubmit={manejarEnvio}>
            <div className="pf-input-row">
              <input className="pf-input" placeholder="Tu nombre" required />
              <input className="pf-input" placeholder="Tu email" type="email" required />
            </div>
            <input className="pf-input" placeholder="Asunto" required />
            <textarea className="pf-input" placeholder="Tu mensaje..." required></textarea>
            
            <button type="submit" className="pf-btn pf-btn-p" style={{ alignSelf: 'flex-start' }}>Enviar mensaje →</button>
            
            {/* Mensaje de éxito condicional */}
            {mensajeEnviado && (
              <div className="pf-form-success">
                ✅ ¡Mensaje enviado! Me pondré en contacto pronto.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
