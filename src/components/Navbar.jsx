import { useState, useEffect } from 'react';

export function Navbar({ seccionActiva, setSeccionActiva }) {
  // Estado para el fondo del menú al hacer scroll
  const [scrolled, setScrolled] = useState(false);
  // Estado para abrir/cerrar el menú en celular
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Escuchamos el scroll de la página
  useEffect(() => {
    const handleScroll = () => {
      // Si bajamos más de 20px, activamos el fondo oscuro
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para cambiar de sección y cerrar el menú móvil automáticamente
  const cambiarSeccion = (seccion) => {
    setSeccionActiva(seccion);
    setMenuAbierto(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        
        {/* Logo */}
        <a 
          href="#" 
          className="navbar__logo" 
          onClick={(e) => { e.preventDefault(); cambiarSeccion('hero'); }}
        >
          <div className="pf-logo-icon">N</div>
          &lt;NatiDev /&gt;
        </a>

        {/* Enlaces de Escritorio */}
        <div className="navbar__links">
          <a href="#" className={`navbar__link ${seccionActiva === 'hero' ? 'navbar__link--active' : ''}`} onClick={(e) => { e.preventDefault(); cambiarSeccion('hero'); }}>Inicio</a>
          <a href="#" className={`navbar__link ${seccionActiva === 'projects' ? 'navbar__link--active' : ''}`} onClick={(e) => { e.preventDefault(); cambiarSeccion('projects'); }}>Proyectos</a>
          <a href="#" className={`navbar__link ${seccionActiva === 'skills' ? 'navbar__link--active' : ''}`} onClick={(e) => { e.preventDefault(); cambiarSeccion('skills'); }}>Skills</a>
          <a href="#" className={`navbar__link ${seccionActiva === 'contact' ? 'navbar__link--active' : ''}`} onClick={(e) => { e.preventDefault(); cambiarSeccion('contact'); }}>Contacto</a>
        </div>

        {/* Botón Hamburguesa (solo visible en móviles) */}
        <button className="navbar__burger" onClick={() => setMenuAbierto(!menuAbierto)}>
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Menú Desplegable Móvil */}
      {menuAbierto && (
        <div className="navbar__mobile">
          <a href="#" className={`navbar__mobile-link ${seccionActiva === 'hero' ? 'navbar__mobile-link--active' : ''}`} onClick={(e) => { e.preventDefault(); cambiarSeccion('hero'); }}>Inicio</a>
          <a href="#" className={`navbar__mobile-link ${seccionActiva === 'projects' ? 'navbar__mobile-link--active' : ''}`} onClick={(e) => { e.preventDefault(); cambiarSeccion('projects'); }}>Proyectos</a>
          <a href="#" className={`navbar__mobile-link ${seccionActiva === 'skills' ? 'navbar__mobile-link--active' : ''}`} onClick={(e) => { e.preventDefault(); cambiarSeccion('skills'); }}>Skills</a>
          <a href="#" className={`navbar__mobile-link ${seccionActiva === 'contact' ? 'navbar__mobile-link--active' : ''}`} onClick={(e) => { e.preventDefault(); cambiarSeccion('contact'); }}>Contacto</a>
        </div>
      )}
    </nav>
  );
}
