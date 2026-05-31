<template>
  <section class="mv-section" aria-label="Misión y Visión">

    <!-- Background decorative elements -->
    <div class="mv-bg-grid" aria-hidden="true"></div>
    <div class="mv-bg-blob mv-blob-tl" aria-hidden="true"></div>
    <div class="mv-bg-blob mv-blob-br" aria-hidden="true"></div>

    <div class="container">

      <!-- Section Label -->
      <div class="mv-label-row">
        <span class="mv-eyebrow">Acerca de Nosotros</span>
        <div class="mv-divider-line" aria-hidden="true"></div>
      </div>

      <!-- Headline -->
      <div class="mv-headline-block">
        <h2 class="mv-headline">
          Construidos para el<br />
          <em class="mv-headline-em">campo mexicano</em>
        </h2>
      </div>

      <!-- Cards Grid -->
      <div class="mv-cards-grid">

        <!-- MISIÓN -->
        <div class="mv-card mv-card-mision" @mouseenter="tilt($event, 'mision')" @mouseleave="resetTilt('mision')" ref="cardMision">
          <!-- Accent line -->
          <div class="mv-card-accent-line" aria-hidden="true"></div>

          <!-- Icon + tag -->
          <div class="mv-card-icon-wrap">
            <div class="mv-card-icon">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
                <circle cx="24" cy="24" r="10" stroke="currentColor" stroke-width="2.5"/>
                <circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3" opacity="0.5"/>
                <path d="M24 4 L24 8M24 40 L24 44M4 24 L8 24M40 24 L44 24" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                <circle cx="24" cy="24" r="3" fill="currentColor"/>
              </svg>
            </div>
            <div class="mv-card-tag">Misión</div>
          </div>

          <p class="mv-card-text">
            Desarrollar herramientas y productos innovadores pensados para el campo, enfocándonos en facilitar el trabajo diario y <strong>proteger a los agricultores</strong> con soluciones prácticas, accesibles y de calidad.
          </p>

          <div class="mv-card-footer">
            <div class="mv-footer-dots"><span></span><span></span><span></span></div>
            <span class="mv-footer-label">Para el productor de hoy</span>
          </div>
        </div>

        <!-- VISIÓN -->
        <div class="mv-card mv-card-vision" @mouseenter="tilt($event, 'vision')" @mouseleave="resetTilt('vision')" ref="cardVision">
          <!-- Accent line -->
          <div class="mv-card-accent-line" aria-hidden="true"></div>

          <!-- Icon + tag -->
          <div class="mv-card-icon-wrap">
            <div class="mv-card-icon mv-icon-accent">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
                <path d="M24 6 L28 18 L42 18 L31 26 L35 38 L24 30 L13 38 L17 26 L6 18 L20 18 Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
                <circle cx="24" cy="24" r="4" fill="currentColor" opacity="0.4"/>
              </svg>
            </div>
            <div class="mv-card-tag mv-tag-accent">Visión</div>
          </div>

          <p class="mv-card-text">
            Convertirnos en una <strong>marca líder en innovación agrícola</strong>, reconocida por crear tecnología y equipo de protección diseñado especialmente para las necesidades reales del agricultor moderno.
          </p>

          <div class="mv-card-footer">
            <div class="mv-footer-dots mv-dots-accent"><span></span><span></span><span></span></div>
            <span class="mv-footer-label">El futuro del campo</span>
          </div>
        </div>

      </div>

      <!-- Bottom stat strip -->
      <div class="mv-stat-strip">
        <div class="mv-stat">
          <span class="mv-stat-num">100<span class="mv-stat-sym">%</span></span>
          <span class="mv-stat-label">Gratuito</span>
        </div>
        <div class="mv-stat-sep" aria-hidden="true"></div>
        <div class="mv-stat">
          <span class="mv-stat-num">1<span class="mv-stat-sym">er</span></span>
          <span class="mv-stat-label">Plataforma binacional agrícola</span>
        </div>
        <div class="mv-stat-sep" aria-hidden="true"></div>
        <div class="mv-stat">
          <span class="mv-stat-num">∞</span>
          <span class="mv-stat-label">Cultivos disponibles</span>
        </div>
      </div>

    </div>

    <!-- ── Ad Banner ─────────────────────────────── -->
    <div class="mv-ad-banner" aria-label="Descarga Agricultori">
      <div class="mv-ad-inner container">

        <!-- Slogan -->
        <p class="mv-ad-slogan">
          <span class="mv-ad-slogan-accent">La única app inteligente</span>
          en el país pensada para el agricultor
        </p>

        <!-- Store buttons -->
        <div class="mv-ad-btns">
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" class="mv-store-btn mv-play" id="banner-google-play">
            <Icon icon="logos:google-play-icon" width="22" height="22" />
            <div class="mv-store-info">
              <span class="mv-store-sub">DISPONIBLE EN</span>
              <span class="mv-store-main">Google Play</span>
            </div>
          </a>
          <a href="https://apple.com/app-store" target="_blank" rel="noopener noreferrer" class="mv-store-btn mv-apple" id="banner-app-store">
            <Icon icon="fa6-brands:apple" width="22" height="22" style="color: white;" />
            <div class="mv-store-info">
              <span class="mv-store-sub">Consíguelo en el</span>
              <span class="mv-store-main">App Store</span>
            </div>
          </a>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const cardMision = ref(null)
const cardVision = ref(null)

function tilt(e, card) {
  const el = card === 'mision' ? cardMision.value : cardVision.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const cx = rect.width / 2
  const cy = rect.height / 2
  const rotX = ((y - cy) / cy) * -6
  const rotY = ((x - cx) / cx) * 6
  el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.025)`
}

function resetTilt(card) {
  const el = card === 'mision' ? cardMision.value : cardVision.value
  if (!el) return
  el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)'
}
</script>

<style scoped>
/* ── Section ───────────────────────────────────────── */
.mv-section {
  position: relative;
  padding: 7rem 0 8rem;
  background-color: var(--color-primary-darkest, #00120b);
  overflow: hidden;
}

/* ── Background decorative ─────────────────────────── */
.mv-bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
  z-index: 0;
}

.mv-bg-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
}

.mv-blob-tl {
  width: 600px;
  height: 600px;
  top: -200px;
  left: -200px;
  background: radial-gradient(circle, rgba(0, 67, 44, 0.45) 0%, transparent 70%);
}

.mv-blob-br {
  width: 500px;
  height: 500px;
  bottom: -150px;
  right: -100px;
  background: radial-gradient(circle, rgba(251, 134, 3, 0.15) 0%, transparent 70%);
}

/* ── Layout ────────────────────────────────────────── */
.container {
  position: relative;
  z-index: 2;
}

/* ── Label row ─────────────────────────────────────── */
.mv-label-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.mv-eyebrow {
  font-family: var(--font-title);
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: rgba(255, 255, 255, 0.35);
  white-space: nowrap;
}

.mv-divider-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, rgba(255,255,255,0.12), transparent);
}

/* ── Headline ──────────────────────────────────────── */
.mv-headline-block {
  margin-bottom: 4rem;
}

.mv-headline {
  font-family: var(--font-title);
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 900;
  color: #ffffff;
  line-height: 1.05;
  letter-spacing: -0.04em;
  max-width: 700px;
}

.mv-headline-em {
  font-style: normal;
  background: linear-gradient(135deg, #FB8603 0%, #ffb865 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ── Cards Grid ────────────────────────────────────── */
.mv-cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
}

/* ── Card ──────────────────────────────────────────── */
.mv-card {
  position: relative;
  padding: 3rem 3rem 2.5rem;
  border-radius: 28px;
  overflow: hidden;
  cursor: default;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  will-change: transform;
}

.mv-card-mision {
  background: linear-gradient(145deg, rgba(0, 67, 44, 0.6) 0%, rgba(1, 43, 26, 0.9) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.06);
}

.mv-card-vision {
  background: linear-gradient(145deg, rgba(18, 12, 0, 0.8) 0%, rgba(35, 20, 0, 0.95) 100%);
  border: 1px solid rgba(251, 134, 3, 0.18);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(251,134,3,0.08);
}

/* ── Image Frame ───────────────────────────────────── */
.mv-img-frame {
  position: relative;
  width: 100%;
  height: 260px;
  overflow: hidden;
  border-radius: 28px 28px 0 0;
  flex-shrink: 0;
}

.mv-img-frame-green {
  background: linear-gradient(180deg, rgba(0,67,44,0.15) 0%, rgba(0,18,11,0.8) 100%);
}

.mv-img-frame-amber {
  background: linear-gradient(180deg, rgba(30,15,0,0.2) 0%, rgba(18,12,0,0.85) 100%);
}

.mv-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  /* Remove white background from images */
  mix-blend-mode: luminosity;
  opacity: 0.92;
}

/* Vision image is a infographic — show it fully centered, slightly smaller */
.mv-img-rotated {
  object-fit: contain;
  object-position: center center;
  padding: 1.25rem;
  mix-blend-mode: normal;
  opacity: 1;
}

.mv-card:hover .mv-img {
  transform: scale(1.04);
}

/* Gradient fade from image into card body */
.mv-img-frame::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 80px;
  pointer-events: none;
}

.mv-img-frame-green::after {
  background: linear-gradient(to top, rgba(1,43,26,1) 0%, transparent 100%);
}

.mv-img-frame-amber::after {
  background: linear-gradient(to top, rgba(25,14,0,1) 0%, transparent 100%);
}

/* Glow behind images */
.mv-img-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.mv-glow-green {
  background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,67,44,0.6) 0%, transparent 70%);
}

.mv-glow-amber {
  background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(251,134,3,0.12) 0%, transparent 70%);
}

/* Floating badge on image */
.mv-img-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 0.45rem;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 999px;
  padding: 0.3rem 0.8rem 0.3rem 0.5rem;
  font-family: var(--font-title);
  font-size: 0.7rem;
  font-weight: 700;
  color: rgba(255,255,255,0.85);
  letter-spacing: 0.3px;
}

.mv-badge-amber {
  border-color: rgba(251,134,3,0.2);
}

.mv-badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
  animation: badge-pulse 2s ease-in-out infinite;
}

.mv-badge-dot-green { background: #4caf50; }
.mv-badge-dot-amber { background: #FB8603; }

@keyframes badge-pulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 currentColor; }
  50% { opacity: 0.7; }
}

/* ── Card text block ───────────────────────────────── */
.mv-card-text-block {
  padding: 2rem 2.5rem 2.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

/* ── Accent line ───────────────────────────────────── */
.mv-card-accent-line {
  position: absolute;
  top: 0; left: 2.5rem; right: 2.5rem;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary-light), transparent);
  border-radius: 0 0 3px 3px;
}

.mv-card-vision .mv-card-accent-line {
  background: linear-gradient(90deg, #FB8603, rgba(251,134,3,0.15), transparent);
}

/* ── Icon wrap ─────────────────────────────────────── */
.mv-card-icon-wrap {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.mv-card-icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: rgba(0, 67, 44, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.mv-card-icon::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.06), transparent);
  border-radius: inherit;
}

.mv-card:hover .mv-card-icon {
  transform: scale(1.08) rotate(-3deg);
}

.mv-icon-accent {
  background: rgba(251, 134, 3, 0.15);
  border-color: rgba(251, 134, 3, 0.2);
  color: #FB8603;
}

.mv-card-tag {
  font-family: var(--font-title);
  font-size: 1rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.5px;
}

.mv-tag-accent {
  color: #FB8603;
}

/* ── Card body ─────────────────────────────────────── */
.mv-card-body {
  flex: 1;
}

.mv-card-text {
  font-family: var(--font-body);
  font-size: 1.1rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.65);
}

.mv-card-text strong {
  color: rgba(255, 255, 255, 0.92);
  font-weight: 700;
}

/* ── Card footer ───────────────────────────────────── */
.mv-card-footer {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.mv-footer-dots {
  display: flex;
  gap: 5px;
}

.mv-footer-dots span {
  display: block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(0, 67, 44, 0.8);
  border: 1px solid rgba(255,255,255,0.12);
}

.mv-footer-dots span:nth-child(2) { opacity: 0.6; }
.mv-footer-dots span:nth-child(3) { opacity: 0.3; }

.mv-dots-accent span { background: rgba(251, 134, 3, 0.7); }

.mv-footer-label {
  font-family: var(--font-title);
  font-size: 0.75rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.25);
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

/* ── Stat strip ────────────────────────────────────── */
.mv-stat-strip {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  padding: 2rem 3rem;
  overflow: hidden;
}

.mv-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  flex: 1;
  text-align: center;
}

.mv-stat-num {
  font-family: var(--font-title);
  font-size: 3rem;
  font-weight: 900;
  color: #ffffff;
  line-height: 1;
  letter-spacing: -0.04em;
}

.mv-stat-sym {
  font-size: 1.4rem;
  color: #FB8603;
  vertical-align: super;
  margin-left: 1px;
}

.mv-stat-label {
  font-family: var(--font-body);
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 500;
  letter-spacing: 0.3px;
}

.mv-stat-sep {
  width: 1px;
  height: 50px;
  background: rgba(255, 255, 255, 0.08);
  flex-shrink: 0;
}

/* ── Responsive ────────────────────────────────────── */
@media (max-width: 900px) {
  .mv-cards-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .mv-headline {
    font-size: clamp(2.2rem, 7vw, 3.5rem);
  }

  .mv-img-frame {
    height: 220px;
  }

  .mv-card-text-block {
    padding: 1.75rem 1.75rem 1.5rem;
  }
}

@media (max-width: 600px) {
  .mv-section { padding: 5rem 0 6rem; }

  .mv-stat-strip {
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem;
  }

  .mv-stat-sep {
    width: 60px;
    height: 1px;
  }

  .mv-stat-num { font-size: 2.5rem; }
}

/* ── Ad Banner ─────────────────────────────────────── */
.mv-ad-banner {
  position: relative;
  background: linear-gradient(100deg, #00432C 0%, #0d5d41 55%, #001c10 100%);
  border-top: 1px solid rgba(255,255,255,0.07);
  overflow: hidden;
  z-index: 2;
}

.mv-ad-banner::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 200% at 100% 50%, rgba(251,134,3,0.12) 0%, transparent 70%),
    radial-gradient(ellipse 40% 200% at 0% 50%,  rgba(0,67,44,0.4) 0%, transparent 70%);
  pointer-events: none;
}

.mv-ad-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  position: relative;
  z-index: 1;
}

.mv-ad-slogan {
  font-family: var(--font-title);
  font-size: clamp(1rem, 2.2vw, 1.35rem);
  font-weight: 800;
  color: rgba(255,255,255,0.82);
  line-height: 1.3;
  letter-spacing: -0.01em;
  max-width: 520px;
  text-transform: uppercase;
}

.mv-ad-slogan-accent {
  color: #FB8603;
}

.mv-ad-btns {
  display: flex;
  gap: 1rem;
  flex-shrink: 0;
}

.mv-store-btn {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.6rem 1.3rem;
  border-radius: 14px;
  font-family: var(--font-title);
  border: 1px solid rgba(255,255,255,0.18);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  text-decoration: none;
  min-width: 148px;
}

.mv-play {
  background: rgba(255,255,255,0.08);
  color: #fff;
  backdrop-filter: blur(8px);
}

.mv-apple {
  background: #fff;
  color: #111;
}

.mv-apple .mv-store-sub { color: rgba(0,0,0,0.5); }
.mv-apple .mv-store-main { color: #000; }

.mv-store-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(0,0,0,0.25);
}

.mv-play:hover {
  background: rgba(255,255,255,0.16);
  border-color: rgba(251,134,3,0.5);
}

.mv-apple:hover {
  background: #f0f0f0;
}

.mv-store-info {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.mv-store-sub {
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.55);
  line-height: 1;
  margin-bottom: 1px;
}

.mv-store-main {
  font-size: 0.9rem;
  font-weight: 800;
  color: #fff;
  line-height: 1.2;
}

@media (max-width: 860px) {
  .mv-ad-inner {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .mv-ad-slogan { max-width: 100%; }
}

@media (max-width: 480px) {
  .mv-ad-btns { flex-direction: column; width: 100%; }
  .mv-store-btn { justify-content: center; min-width: unset; }
}
</style>
