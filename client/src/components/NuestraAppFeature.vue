<template>
  <section class="qsf-section" aria-label="Lo que nos define">

    <div class="container">

      <!-- Section label -->
      <div class="qsf-label-row">
        <div class="qsf-label-line" aria-hidden="true"></div>
        <span class="qsf-eyebrow">Lo que nos define</span>
        <div class="qsf-label-line" aria-hidden="true"></div>
      </div>

      <!-- Main grid: two feature blocks -->
      <div class="qsf-grid">

        <!-- ── BLOQUE 1: Comunidad ──────────────────── -->
        <div class="qsf-block qsf-block-left">

          <!-- Image -->
          <div class="qsf-img-wrap">
            <!-- Decorative ring -->
            <div class="qsf-ring qsf-ring-green" aria-hidden="true"></div>

            <div class="qsf-img-card">
              <img
                src="/quienes-1.jpeg"
                alt="Apretón de manos — Comunidad de confianza y apoyo entre agricultores"
                class="qsf-img"
                loading="lazy"
              />
              <!-- Overlay chip -->
              <div class="qsf-chip qsf-chip-green">
                <span class="qsf-chip-dot"></span>
                Comunidad activa
              </div>
            </div>

            <!-- Floating stat card -->
            <div class="qsf-stat-float qsf-stat-left">
              <span class="qsf-stat-num">+</span>
              <div class="qsf-stat-text">
                <span class="qsf-stat-title">Apoyo</span>
                <span class="qsf-stat-sub">entre agricultores</span>
              </div>
            </div>
          </div>

          <!-- Text -->
          <div class="qsf-text">
            <h3 class="qsf-title">
              Comunidad de <em class="qsf-em">confianza</em>
            </h3>
            <p class="qsf-desc">
              Creemos en el poder del campo unido. Agricultori nace del agricultor y para el agricultor, construyendo redes de apoyo que fortalecen a toda la comunidad agrícola nacional.
            </p>
            <ul class="qsf-list">
              <li>
                <span class="qsf-list-dot qsf-dot-green"></span>
                Información accesible para todos
              </li>
              <li>
                <span class="qsf-list-dot qsf-dot-green"></span>
                Conexión productor–exportador
              </li>
              <li>
                <span class="qsf-list-dot qsf-dot-green"></span>
                Soporte sin costo ni suscripciones
              </li>
            </ul>
          </div>

        </div>

        <!-- Vertical divider -->
        <div class="qsf-vdivider" aria-hidden="true">
          <div class="qsf-vline"></div>
          <div class="qsf-vdot"></div>
          <div class="qsf-vline"></div>
        </div>

        <!-- ── BLOQUE 2: Tecnología ─────────────────── -->
        <div class="qsf-block qsf-block-right">

          <!-- Text (left of image on this block) -->
          <div class="qsf-text">
            <h3 class="qsf-title">
              Tecnología para el <em class="qsf-em qsf-em-amber">campo moderno</em>
            </h3>
            <p class="qsf-desc">
              Herramientas inteligentes diseñadas con las necesidades reales del agricultor: desde brújula y altímetro hasta precios del mercado, todo en la palma de su mano.
            </p>
            <ul class="qsf-list">
              <li>
                <span class="qsf-list-dot qsf-dot-amber"></span>
                Brújula y altímetro integrados
              </li>
              <li>
                <span class="qsf-list-dot qsf-dot-amber"></span>
                Precisión GPS ± 5 m
              </li>
              <li>
                <span class="qsf-list-dot qsf-dot-amber"></span>
                Datos guardados sin conexión
              </li>
            </ul>
          </div>

          <!-- Image -->
          <div class="qsf-img-wrap">
            <!-- Decorative ring -->
            <div class="qsf-ring qsf-ring-amber" aria-hidden="true"></div>

            <div class="qsf-img-card qsf-img-card-amber">
              <img
                src="/quienes-2.jpeg"
                alt="Brújula y altímetro — herramientas tecnológicas de Agricultori"
                class="qsf-img qsf-img-contain"
                loading="lazy"
              />
              <!-- Overlay chip -->
              <div class="qsf-chip qsf-chip-amber">
                <span class="qsf-chip-dot qsf-chip-dot-amber"></span>
                Tecnología en campo
              </div>
            </div>

            <!-- Floating stat card -->
            <div class="qsf-stat-float qsf-stat-right">
              <span class="qsf-stat-num qsf-num-amber">±5m</span>
              <div class="qsf-stat-text">
                <span class="qsf-stat-title">Precisión GPS</span>
                <span class="qsf-stat-sub">Altitud y coordenadas</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
// No JS needed — purely visual section
</script>

<style scoped>
/* ── Section ───────────────────────────────────────── */
.qsf-section {
  padding: 6rem 0 7rem;
  background: var(--color-bg-soft, #f1f6f3);
  position: relative;
  overflow: hidden;
}

.qsf-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 50% at 15% 80%, rgba(0, 67, 44, 0.06) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 85% 20%, rgba(251, 134, 3, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

/* ── Label row ─────────────────────────────────────── */
.qsf-label-row {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 4rem;
  justify-content: center;
}

.qsf-label-line {
  flex: 1;
  max-width: 200px;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(0,67,44,0.15));
}

.qsf-label-row .qsf-label-line:last-child {
  background: linear-gradient(to left, transparent, rgba(0,67,44,0.15));
}

.qsf-eyebrow {
  font-family: var(--font-title);
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--color-primary);
  white-space: nowrap;
  opacity: 0.5;
}

/* ── Main grid ─────────────────────────────────────── */
.qsf-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 0;
  align-items: center;
}

/* ── Feature block ─────────────────────────────────── */
.qsf-block {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0 3rem;
}

.qsf-block-left {
  align-items: flex-start;
}

.qsf-block-right {
  align-items: flex-start;
}

/* ── Image wrap ────────────────────────────────────── */
.qsf-img-wrap {
  position: relative;
  width: 100%;
}

/* Decorative ring behind card */
.qsf-ring {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.qsf-ring-green {
  width: 320px;
  height: 320px;
  top: -40px;
  left: -40px;
  background: radial-gradient(circle, rgba(0,67,44,0.08) 0%, transparent 70%);
}

.qsf-ring-amber {
  width: 320px;
  height: 320px;
  top: -40px;
  right: -40px;
  left: auto;
  background: radial-gradient(circle, rgba(251,134,3,0.08) 0%, transparent 70%);
}

/* Image card */
.qsf-img-card {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  background: #ffffff;
  box-shadow:
    0 4px 6px rgba(0,67,44,0.04),
    0 20px 40px rgba(0,67,44,0.1),
    0 0 0 1px rgba(0,67,44,0.06);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease;
}

.qsf-img-card:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow:
    0 8px 12px rgba(0,67,44,0.06),
    0 30px 60px rgba(0,67,44,0.14),
    0 0 0 1px rgba(0,67,44,0.08);
}

.qsf-img-card-amber {
  box-shadow:
    0 4px 6px rgba(251,134,3,0.05),
    0 20px 40px rgba(251,134,3,0.1),
    0 0 0 1px rgba(251,134,3,0.08);
}

.qsf-img-card-amber:hover {
  box-shadow:
    0 8px 12px rgba(251,134,3,0.07),
    0 30px 60px rgba(251,134,3,0.15),
    0 0 0 1px rgba(251,134,3,0.1);
}

.qsf-img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* quienes-2 is an infographic — show full */
.qsf-img-contain {
  object-fit: contain;
  height: 280px;
  padding: 1rem;
  background: #fafafa;
}

/* Overlay chip badge */
.qsf-chip {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 67, 44, 0.12);
  border-radius: 999px;
  padding: 0.3rem 0.85rem 0.3rem 0.5rem;
  font-family: var(--font-title);
  font-size: 0.7rem;
  font-weight: 800;
  color: var(--color-primary-dark);
  letter-spacing: 0.3px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.qsf-chip-amber {
  border-color: rgba(251, 134, 3, 0.2);
  color: var(--color-accent-dark, #d47000);
}

.qsf-chip-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4caf50;
  animation: qsf-pulse 2s ease-in-out infinite;
}

.qsf-chip-dot-amber {
  background: #FB8603;
}

@keyframes qsf-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Floating stat card */
.qsf-stat-float {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: var(--color-primary-dark, #002619);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 0.65rem 1rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
  z-index: 10;
  animation: float-bob 6s ease-in-out infinite;
}

.qsf-stat-left {
  bottom: -1.2rem;
  right: -1.5rem;
  animation-delay: 0s;
}

.qsf-stat-right {
  bottom: -1.2rem;
  left: -1.5rem;
  animation-delay: 1.5s;
}

@keyframes float-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

.qsf-stat-num {
  font-family: var(--font-title);
  font-size: 1.4rem;
  font-weight: 900;
  color: #4caf50;
  line-height: 1;
}

.qsf-num-amber { color: #FB8603; }

.qsf-stat-text {
  display: flex;
  flex-direction: column;
}

.qsf-stat-title {
  font-family: var(--font-title);
  font-size: 0.75rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.1;
}

.qsf-stat-sub {
  font-family: var(--font-body);
  font-size: 0.65rem;
  color: rgba(255,255,255,0.45);
  line-height: 1.2;
}

/* ── Text block ────────────────────────────────────── */
.qsf-text {
  padding-bottom: 1rem;
}

.qsf-title {
  font-family: var(--font-title);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 900;
  color: var(--color-primary-dark);
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
}

.qsf-em {
  font-style: normal;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.qsf-em-amber {
  background: linear-gradient(135deg, #FB8603 0%, #ffb865 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.qsf-desc {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
  max-width: 420px;
}

.qsf-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.qsf-list li {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text-secondary);
}

.qsf-list-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.qsf-dot-green { background: var(--color-primary-light); }
.qsf-dot-amber { background: #FB8603; }

/* ── Vertical divider ──────────────────────────────── */
.qsf-vdivider {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  padding: 0 1rem;
  height: 400px;
}

.qsf-vline {
  flex: 1;
  width: 1px;
  background: linear-gradient(to bottom, transparent, rgba(0,67,44,0.15), transparent);
}

.qsf-vdot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-accent);
  box-shadow: 0 0 12px rgba(251,134,3,0.4);
  flex-shrink: 0;
}

/* ── Responsive ────────────────────────────────────── */
@media (max-width: 1024px) {
  .qsf-block { padding: 0 1.5rem; }
}

@media (max-width: 860px) {
  .qsf-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }

  .qsf-vdivider { display: none; }

  .qsf-block {
    padding: 0;
    gap: 2rem;
  }

  .qsf-block-right {
    flex-direction: column-reverse;
  }

  .qsf-stat-left,
  .qsf-stat-right {
    right: -0.5rem;
    left: auto;
    bottom: -0.8rem;
  }

  .qsf-stat-right {
    left: -0.5rem;
    right: auto;
  }

  .qsf-img { height: 240px; }
  .qsf-img-contain { height: 240px; }
}

@media (max-width: 480px) {
  .qsf-section { padding: 4rem 0 5rem; }
  .qsf-img { height: 200px; }
  .qsf-img-contain { height: 200px; }
  .qsf-stat-float { display: none; }
}
</style>
