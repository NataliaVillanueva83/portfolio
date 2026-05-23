export function Projects() {
  return (
    <div className="pf-section">
      <div className="pf-sh">
        <div className="pf-tag">◆ Trabajos</div>
        <h2 className="pf-stitle">Proyectos <span className="pf-cbadge">&lt;Projects /&gt;</span></h2>
      </div>
      <div className="pf-projects">
        
        <div className="pf-card">
          <div className="pf-card-num">01</div>
          <div className="pf-card-title">Catálogo de Películas</div>
          <p className="pf-card-desc">API REST con Spring Boot, autenticación JWT y base de datos relacional. CRUD completo con paginación.</p>
          <div className="pf-tags">
            <span className="pf-tag-pill">Java</span><span className="pf-tag-pill">Spring Boot</span><span className="pf-tag-pill">JPA</span><span className="pf-tag-pill">JWT</span>
          </div>
          <a href="#" className="pf-card-link">GitHub →</a>
        </div>

        {/* ... copiá el resto de las tarjetas del HTML de la misma manera ... */}

      </div>
    </div>
  );
}
