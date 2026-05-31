<template>
  <section id="cobertura" class="cross-border-section dark-section">
    <div class="container border-container">
      <div class="border-visuals">
        <!-- Visual Map representation of MX and USA connected -->
        <div class="map-connection-wrapper">
          <div class="glow-bg"></div>
          <div class="country-node mx-node">
            <span class="flag">🇲🇽</span>
            <span class="label">MÉXICO</span>
            <span class="sub">Origen</span>
          </div>
          
          <div class="connection-arrow-path">
            <div class="truck-icon-anim">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="truck-svg"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            </div>
            <svg viewBox="0 0 100 20" class="arrow-svg">
              <path d="M 10 10 C 35 -5, 65 -5, 90 10" fill="none" stroke="var(--color-accent)" stroke-width="2" stroke-dasharray="4 4" />
            </svg>
          </div>
          
          <div class="country-node us-node">
            <span class="flag">🇺🇸</span>
            <span class="label">E.U.A.</span>
            <span class="sub">Destino</span>
          </div>
        </div>
        
        <!-- Highlight stats cards -->
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-num">24/7</div>
            <div class="stat-lbl">Alertas Fitonsanitarias</div>
          </div>
          <div class="stat-item">
            <div class="stat-num">100%</div>
            <div class="stat-lbl">Datos Oficiales USDA</div>
          </div>
        </div>
      </div>

      <div class="border-text-content">
        <span class="tag">Expansión Segura</span>
        <h2>Exporta sin Riesgos.<br/>Cumple cada Norma.</h2>
        <p class="intro">
          Cruzar la frontera requiere precisión. Agricultori es el copiloto que valida cada detalle fitosanitario antes de que envíes tu carga, asegurando una comercialización sin rechazos.
        </p>
        
        <div class="benefit-list">
          <div class="benefit-item">
            <div class="benefit-check">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <div>
              <h4>Regulación USDA & FDA Integrada</h4>
              <p>Comprueba los límites máximos de residuos tolerados en las aduanas de Estados Unidos en segundos.</p>
            </div>
          </div>
          <div class="benefit-item">
            <div class="benefit-check">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <div>
              <h4>Cumplimiento SENASICA & COFEPRIS</h4>
              <p>Accede de inmediato a los listados de empaques e ingredientes autorizados por el gobierno mexicano.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cross-border-section {
  padding: 8rem 0;
  background-color: #dae6df;
  background: linear-gradient(135deg, #dae6df 0%, #c2d5cd 100%);
  color: var(--color-text-primary);
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(0, 67, 44, 0.08);
}

.border-container {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 6rem;
  align-items: center;
}

.border-visuals {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.map-connection-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-bg-surface);
  border: 1px solid rgba(0, 67, 44, 0.08);
  border-radius: var(--border-radius-lg);
  padding: 3.5rem 2.5rem;
  position: relative;
  box-shadow: var(--shadow-md);
}

.glow-bg {
  position: absolute;
  top: 50%; left: 50%; transform: translate(-50%, -50%);
  width: 80%; height: 80%;
  background: radial-gradient(circle, rgba(251, 134, 3, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

.country-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 2;
}

.country-node .flag {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));
}

.country-node .label {
  font-family: var(--font-title);
  font-weight: 800;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  color: var(--color-primary-dark);
}

.country-node .sub {
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.connection-arrow-path {
  position: relative;
  flex-grow: 1;
  height: 50px;
  display: flex;
  align-items: center;
  z-index: 2;
}

.arrow-svg {
  width: 100%;
  height: 100%;
}

.truck-icon-anim {
  position: absolute;
  color: var(--color-accent);
  top: -20px;
  animation: drive-across 4s ease-in-out infinite;
}

@keyframes drive-across {
  0% { left: 5%; transform: scaleX(1); opacity: 0; }
  10% { opacity: 1; }
  45% { left: 85%; transform: scaleX(1); opacity: 1; }
  50% { left: 85%; transform: scaleX(-1); opacity: 0; }
  55% { opacity: 1; }
  95% { left: 5%; transform: scaleX(-1); opacity: 1; }
  100% { left: 5%; transform: scaleX(1); opacity: 0; }
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.stat-item {
  background: var(--color-bg-surface);
  border: 1px solid rgba(0, 67, 44, 0.08);
  border-radius: var(--border-radius-md);
  padding: 1.5rem;
  display: flex; flex-direction: column; justify-content: center;
  box-shadow: var(--shadow-sm);
}

.stat-num {
  font-family: var(--font-title);
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-accent);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-lbl {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  line-height: 1.4;
}

/* Text Content Area */
.border-text-content {
  display: flex;
  flex-direction: column;
}

.border-text-content h2 {
  font-size: 3.5rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
  color: var(--color-primary-dark);
}

.border-text-content .tag {
  display: inline-block;
  font-family: var(--font-title);
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-accent-dark);
  background-color: rgba(251, 134, 3, 0.1);
  padding: 0.5rem 1.25rem;
  border-radius: var(--border-radius-full);
  letter-spacing: 1px;
  width: fit-content;
  border: 1px solid rgba(251, 134, 3, 0.2);
}

.intro {
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  margin-bottom: 3rem;
  line-height: 1.6;
}

.benefit-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.benefit-item {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}

.benefit-check {
  width: 32px;
  height: 32px;
  background-color: var(--color-accent);
  color: var(--color-text-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 10px rgba(251,134,3,0.3);
}

.benefit-item h4 {
  font-family: var(--font-title);
  color: var(--color-primary-dark);
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.benefit-item p {
  color: var(--color-text-secondary);
  font-size: 1rem;
  line-height: 1.5;
}

/* Responsive Queries */
@media (max-width: 1024px) {
  .border-container {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
}

@media (max-width: 576px) {
  .border-text-content h2 {
    font-size: 2.5rem;
  }
  
  .map-connection-wrapper {
    padding: 2.5rem 1.5rem;
  }
  
  .connection-arrow-path {
    display: none;
  }
}
</style>
