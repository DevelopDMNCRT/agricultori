<template>
  <section class="hero-section" :class="slides[activeSlide].themeClass">
    <!-- Dynamic Diagonal Backgrounds that Morph on Slide Change -->
    <div class="diagonal-bg"></div>
    <div class="hero-bg-texture"></div>
    
    <!-- Large Background Outline Shapes representing original slide graphics -->
    <div class="bg-outline-container">
      <transition name="fade-slow" mode="out-in">
        <!-- SVG Truck for Slide 0 (Empresas) -->
        <svg v-if="activeSlide === 0" :key="0" class="bg-outline-svg svg-truck" viewBox="0 0 800 600" fill="none">
          <path d="M50 350 H150 V200 H550 V350 H750 V450 H50 Z" stroke="rgba(0,67,44,0.04)" stroke-width="8" stroke-dasharray="10 15" />
          <path d="M550 200 H680 L750 300 V350 H550 Z" stroke="rgba(0,67,44,0.05)" stroke-width="8" />
          <circle cx="200" cy="450" r="60" stroke="rgba(0,67,44,0.04)" stroke-width="8" />
          <circle cx="200" cy="450" r="20" fill="rgba(0,67,44,0.02)" />
          <circle cx="600" cy="450" r="60" stroke="rgba(0,67,44,0.04)" stroke-width="8" />
          <circle cx="600" cy="450" r="20" fill="rgba(0,67,44,0.02)" />
          <line x1="550" y1="280" x2="680" y2="280" stroke="rgba(0,67,44,0.04)" stroke-width="6" />
        </svg>

        <!-- Leaf outlines for Slide 1 (Descarga) -->
        <svg v-else-if="activeSlide === 1" :key="1" class="bg-outline-svg svg-leaves" viewBox="0 0 600 600" fill="none">
          <path d="M100 500 C150 400 300 450 400 300 C450 200 350 100 200 150 C100 200 50 350 100 500 Z" stroke="rgba(0,67,44,0.03)" stroke-width="8" />
          <path d="M100 500 L280 280" stroke="rgba(0,67,44,0.03)" stroke-width="6" stroke-linecap="round" />
          <path d="M180 400 Q250 420 300 380" stroke="rgba(0,67,44,0.03)" stroke-width="4" />
          <path d="M220 320 Q280 300 320 270" stroke="rgba(0,67,44,0.03)" stroke-width="4" />
        </svg>

        <!-- SVG Chemical Bottle for Slide 2 (Químicos) -->
        <svg v-else-if="activeSlide === 2" :key="2" class="bg-outline-svg svg-bottle" viewBox="0 0 600 600" fill="none">
          <!-- Bottle Body -->
          <rect x="200" y="220" width="200" height="280" rx="30" stroke="rgba(0,67,44,0.04)" stroke-width="8" />
          <!-- Bottle Neck & Cap -->
          <path d="M260 220 V160 H340 V220" stroke="rgba(0,67,44,0.04)" stroke-width="8" />
          <rect x="240" y="110" width="120" height="50" rx="10" stroke="rgba(0,67,44,0.05)" stroke-width="8" fill="rgba(0,67,44,0.01)" />
          <!-- Inner labels and leaf badge -->
          <circle cx="300" cy="360" r="45" stroke="rgba(0,67,44,0.03)" stroke-width="6" />
          <path d="M285 365 L295 375 L315 350" stroke="rgba(0,67,44,0.04)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </transition>
    </div>

    <div class="container hero-container">
      <!-- Slide Content Column -->
      <div class="hero-content-wrapper">
        <transition name="slide-fade" mode="out-in">
          <div :key="activeSlide" class="hero-content">
            <div class="badge-mex-usa-dark">
              <div class="glow-dot"></div>
              <span>{{ slides[activeSlide].badge }}</span>
            </div>
            
            <h1 class="hero-title" v-html="slides[activeSlide].titleHTML"></h1>
            
            <p class="hero-description">
              {{ slides[activeSlide].desc }}
            </p>
            
            <div class="hero-actions">
              <div class="app-download-group">
                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" class="store-badge-btn play-store">
                  <Icon icon="logos:google-play-icon" width="26" height="26" />
                  <div class="store-info">
                    <span class="store-sub">DISPONIBLE EN</span>
                    <span class="store-main">Google Play</span>
                  </div>
                </a>
                
                <a href="https://apps.apple.com/mx/app/agricultori/id1606230336" target="_blank" rel="noopener noreferrer" class="store-badge-btn app-store">
                  <Icon icon="fa6-brands:apple" width="26" height="26" style="color: white;" />
                  <div class="store-info">
                    <span class="store-sub">Consíguelo en el</span>
                    <span class="store-main">App Store</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </transition>
      </div>
      
      <!-- Interactive Slide Visual Column -->
      <div class="hero-visual-wrapper">
        <transition name="visual-fade" mode="out-in">
          <div :key="activeSlide" class="visual-content-container">
            
            <!-- WIDGET 1: EMPRESAS DE EMPAQUE (Fulfillment & Packaging Static Tracker) -->
            <div v-if="slides[activeSlide].id === 'empaques'" class="visual-widget empaques-widget">
              <div class="widget-card bento-item">
                <div class="widget-header">
                  <div class="widget-title-area">
                    <span class="status-live">Logística</span>
                    <h4>Empaque & Envío</h4>
                  </div>
                  <span class="cert-count">Fulfillment</span>
                </div>
                
                <!-- Static packaging / cargo checklist card -->
                <div class="fulfillment-box">
                  <div class="fulfillment-step completed">
                    <div class="step-check">✓</div>
                    <div class="step-details">
                      <h5>1. Selección & Clasificación</h5>
                      <p>Aguacate de exportación seleccionado (Calibre 48).</p>
                    </div>
                  </div>
                  <div class="fulfillment-step completed">
                    <div class="step-check">✓</div>
                    <div class="step-details">
                      <h5>2. Empacado & Sanitización</h5>
                      <p>Tratamiento post-cosecha y empaque certificado USDA.</p>
                    </div>
                  </div>
                  <div class="fulfillment-step completed">
                    <div class="step-check">✓</div>
                    <div class="step-details">
                      <h5>3. Inspección</h5>
                      <p>Certificado SENASICA liberado. En tránsito aduanal.</p>
                    </div>
                  </div>
                </div>
                
                <!-- Static cargo icon / graphic representation below -->
                <div class="cargo-illustration-static">
                  <div class="cargo-box-wrapper">
                    <span class="cargo-icon-box">📦</span>
                    <span class="cargo-icon-box">🚛</span>
                    <span class="cargo-icon-box">🛡️</span>
                  </div>
                  <div class="cargo-caption">Cadena de Frío & Cruce Seguro Asegurado</div>
                </div>
              </div>
            </div>
            
            <!-- WIDGET 2: DESCARGA LA APP (Phone mockup with splash screen and smooth hover float) -->
            <div v-else-if="slides[activeSlide].id === 'descarga'" class="visual-widget descarga-widget">
              <div class="premium-phone-mockup">
                <!-- Speaker and Notch area -->
                <div class="phone-notch"></div>
                
                <div class="phone-screen-inner splash-screen-layout">
                  <!-- Phone Top Status Bar -->
                  <div class="phone-status-bar-sim">
                    <span class="status-time">10:42 AM</span>
                    <span class="status-icons">📶 🔋 100%</span>
                  </div>
                  
                  <!-- Splash Center Content (Logo Centered) -->
                  <div class="splash-content">
                    <img src="/logo.png" alt="Agricultori Splash Logo" class="phone-splash-logo" />
                    <span class="splash-tagline">Agricultor Inteligente</span>
                  </div>
                  
                  <!-- Splash Loading Bar -->
                  <div class="splash-loading-bar">
                    <div class="splash-loading-progress"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- WIDGET 3: QUIMICOS AUTORIZADOS (Compliance checker widget) -->
            <div v-else-if="slides[activeSlide].id === 'quimicos'" class="visual-widget quimicos-widget">
              <div class="widget-card bento-item">
                <div class="widget-header">
                  <div class="widget-title-area">
                    <span class="status-live">EPA / FDA</span>
                    <h4>Fitosanitario LMR</h4>
                  </div>
                  <span class="status-live-dot"></span>
                </div>

                <div class="compliance-simulator">
                  <div class="sim-selector-list">
                    <span class="sim-selector-label">Agroquímicos comunes:</span>
                    <div class="selector-pills">
                      <button 
                        v-for="(info, key) in chemicalDatabase" 
                        :key="key" 
                        :class="['chem-pill-btn', { active: selectedChemical === key }]"
                        @click="selectedChemical = key"
                      >
                        {{ key }}
                      </button>
                    </div>
                  </div>

                  <!-- Dynamic result display -->
                  <div class="compliance-result-card" :class="chemicalDatabase[selectedChemical].status">
                    <div class="result-top">
                      <span class="chem-badge-status">{{ chemicalDatabase[selectedChemical].statusText }}</span>
                      <h5>{{ selectedChemical }}</h5>
                    </div>
                    
                    <div class="result-details-grid">
                      <div class="detail-block">
                        <small>Límite LMR</small>
                        <strong>{{ chemicalDatabase[selectedChemical].lmr }}</strong>
                      </div>
                      <div class="detail-block">
                        <small>Categoría</small>
                        <strong>{{ chemicalDatabase[selectedChemical].usage.split(' ')[0] }}</strong>
                      </div>
                    </div>
                    
                    <p class="result-description">{{ chemicalDatabase[selectedChemical].usage }}</p>
                    
                    <div v-if="chemicalDatabase[selectedChemical].alternative !== 'No requiere'" class="alternative-box">
                      <span class="alt-label">Alternativa recomendada:</span>
                      <strong>🌱 {{ chemicalDatabase[selectedChemical].alternative }}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </transition>
      </div>
    </div>
    
    <!-- Slider Navigation Controls -->
    <button class="slider-btn prev-btn" @click="prevSlide" aria-label="Slide anterior">
      <Icon icon="lucide:chevron-left" width="24" height="24" />
    </button>
    <button class="slider-btn next-btn" @click="nextSlide" aria-label="Siguiente slide">
      <Icon icon="lucide:chevron-right" width="24" height="24" />
    </button>
    
    <!-- Slider Dots Indicator -->
    <div class="slider-dots">
      <span 
        v-for="(slide, index) in slides" 
        :key="index" 
        :class="['dot', { 'active': activeSlide === index }]"
        @click="selectSlide(index)"
      ></span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'

const activeSlide = ref(0)
let timer = null

// Chemical compliance database for Slide 2 (Químicos)
const selectedChemical = ref('Glifosato')
const chemicalDatabase = {
  Glifosato: {
    status: 'authorized',
    statusText: 'AUTORIZADO',
    lmr: '0.10 ppm',
    usage: 'Herbicida sistémico de uso común en control de malezas agrícolas.',
    alternative: 'No requiere'
  },
  Clorpirifos: {
    status: 'prohibited',
    statusText: 'PROHIBIDO',
    lmr: '0.00 ppm (Cero Tolerancia)',
    usage: 'Insecticida prohibido por la EPA por su impacto en la salud de polinizadores y acuíferos.',
    alternative: 'Spinosad o extracto biológico de Neem'
  },
  Abamectina: {
    status: 'restricted',
    statusText: 'RESTRINGIDO',
    lmr: '0.02 ppm',
    usage: 'Acaricida. Autorizado solo con tiempo de espera mínimo de 14 días pre-cosecha.',
    alternative: 'Aceite parafínico o Bacillus thuringiensis'
  }
}

const slides = [
  {
    id: "empaques",
    badge: "Empresas Fitosanitarias",
    titleHTML: `<span>Empresas</span><br/><span>de empaques</span>`,
    desc: "Valida al instante los establecimientos autorizados por la USDA / FDA para procesar y exportar fruta a Estados Unidos sin demoras.",
    themeClass: "theme-empaques"
  },
  {
    id: "descarga",
    badge: "Del Campo a tus Manos",
    titleHTML: `<span>¡Del campo</span><br/><span>a tus manos!</span><br/><span>Descarga la App</span>`,
    desc: "Buscador de agroquímicos autorizados, alertas aduanales en vivo y directorios oficiales. 100% gratuito y libre de suscripciones.",
    themeClass: "theme-descarga"
  },
  {
    id: "quimicos",
    badge: "Cumplimiento Regulatorio",
    titleHTML: `<span>Químicos</span><br/><span>autorizados</span><br/><span>para siembra</span>`,
    desc: "Verifica qué pesticidas, herbicidas y técnicos cumplen con los estándares fitosanitarios exigidos por la EPA y FDA en la frontera norte.",
    themeClass: "theme-quimicos"
  }
]

const nextSlide = () => {
  activeSlide.value = (activeSlide.value + 1) % slides.length
  resetTimer()
}

const prevSlide = () => {
  activeSlide.value = (activeSlide.value - 1 + slides.length) % slides.length
  resetTimer()
}

const selectSlide = (index) => {
  activeSlide.value = index
  resetTimer()
}

const resetTimer = () => {
  if (timer) {
    clearInterval(timer)
    timer = setInterval(nextSlide, 8000)
  }
}

onMounted(() => {
  timer = setInterval(nextSlide, 8000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.hero-section {
  position: relative;
  padding: 10rem 0 7rem;
  background-color: var(--color-primary);
  color: #ffffff;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  transition: background-color 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Background diagonal transitions */
.diagonal-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1;
}

.hero-bg-texture {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: radial-gradient(rgba(0, 67, 44, 0.04) 1px, transparent 1px);
  background-size: 32px 32px;
  opacity: 0.5;
  z-index: 2;
  pointer-events: none;
}

/* Background outline SVGs representing visual elements in slides */
.bg-outline-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
}

.bg-outline-svg {
  position: absolute;
  width: 50%;
  height: 90%;
  opacity: 0.65;
  filter: drop-shadow(0 15px 30px rgba(0,0,0,0.05));
}

.svg-truck {
  right: -5%;
  bottom: 0;
}

.svg-leaves {
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
}

.svg-bottle {
  left: 8%;
  bottom: 0;
}

/* Theme background coloring and diagonal splits with solid brand colors */
.theme-empaques {
  background: var(--color-primary); /* Solid green */
}
.theme-empaques .diagonal-bg {
  background: var(--color-accent); /* Solid orange */
  clip-path: polygon(55% 0, 100% 0, 100% 100%, 35% 100%);
}

.theme-descarga {
  background: var(--color-accent); /* Solid orange */
}
.theme-descarga .diagonal-bg {
  background: var(--color-primary); /* Solid green */
  clip-path: polygon(0 0, 42% 0, 28% 100%, 0 100%);
}

.theme-quimicos {
  background: var(--color-accent); /* Solid orange */
}
.theme-quimicos .diagonal-bg {
  background: var(--color-primary); /* Solid green */
  clip-path: polygon(0 0, 40% 0, 52% 100%, 0 100%);
}

/* Content Container & Dynamic Grids */
.hero-container {
  position: relative;
  z-index: 3;
  width: 100%;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  grid-template-areas: "content visual";
  gap: 4rem;
  align-items: center;
}

/* Change grid areas layout order dynamically based on slides themes */
.theme-descarga .hero-container,
.theme-quimicos .hero-container {
  grid-template-areas: "visual content";
  grid-template-columns: 0.85fr 1.15fr;
}

.hero-content-wrapper {
  grid-area: content;
  min-height: 480px;
  display: flex;
  align-items: center;
}

.hero-visual-wrapper {
  grid-area: visual;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 520px;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
}

.badge-mex-usa-dark {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.6rem 1.25rem;
  border-radius: var(--border-radius-full);
  font-family: var(--font-title);
  font-weight: 700;
  font-size: 0.85rem;
  width: fit-content;
  color: #ffffff;
  backdrop-filter: blur(8px);
}

.glow-dot {
  width: 8px;
  height: 8px;
  background-color: var(--color-accent);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--color-accent);
  animation: pulse-dot 2s infinite;
}

@keyframes pulse-dot {
  0% { opacity: 0.4; }
  50% { opacity: 1; }
  100% { opacity: 0.4; }
}

.hero-title {
  font-size: 4.8rem;
  line-height: 1.05;
  letter-spacing: -0.04em;
  font-weight: 900;
  margin-bottom: 0.5rem;
  font-family: var(--font-title);
  text-transform: uppercase;
}

.text-accent {
  color: var(--color-accent);
}

.text-primary-dark {
  color: var(--color-primary-dark);
}

.hero-description {
  font-size: 1.15rem;
  color: #ffffff;
  max-width: 580px;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1.25rem;
  margin-top: 1rem;
  align-items: center;
}

/* App Download Badges Grid */
.app-download-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.store-badge-btn {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background-color: var(--color-primary);
  color: #ffffff;
  padding: 0.75rem 1.6rem;
  border-radius: 16px;
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: var(--transition-bounce);
  min-width: 170px;
}

.store-badge-btn:hover {
  transform: translateY(-4px);
  background-color: var(--color-primary-light);
  border-color: var(--color-accent);
  box-shadow: var(--shadow-lg);
}

.store-info {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.store-sub {
  font-size: 0.6rem;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1;
  margin-bottom: 2px;
}

.store-main {
  font-family: var(--font-title);
  font-weight: 800;
  font-size: 0.95rem;
  line-height: 1.2;
}

.btn-outline-primary {
  background-color: transparent;
  border-color: rgba(0, 67, 44, 0.25);
  color: var(--color-primary);
}
.btn-outline-primary:hover {
  background-color: var(--color-primary);
  color: #ffffff;
  border-color: var(--color-primary);
  transform: translateY(-2px);
}

/* Interactive Widgets Layouts */
.visual-content-container {
  width: 100%;
  max-width: 440px;
  display: flex;
  justify-content: center;
}

.visual-widget {
  width: 100%;
}

.widget-card {
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 28px;
  padding: 2rem;
  box-shadow: 0 30px 60px rgba(0, 43, 28, 0.1);
  backdrop-filter: blur(20px);
  position: relative;
  z-index: 5;
  color: var(--color-text-primary);
}

/* WIDGET 1: EMPRESAS (Fulfillment & Packaging Static Tracker) */
.fulfillment-box {
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
  margin: 1.25rem 0;
}

.fulfillment-step {
  display: flex;
  gap: 0.85rem;
  align-items: flex-start;
  padding: 0.5rem;
  border-radius: var(--border-radius-sm);
}

.fulfillment-step .step-check {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 900;
  flex-shrink: 0;
  margin-top: 3px;
}

.fulfillment-step.completed .step-check {
  background: var(--color-success);
  color: white;
}

.fulfillment-step h5 {
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--color-primary-dark);
  margin-bottom: 1px;
}

.fulfillment-step p {
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  line-height: 1.35;
}

.cargo-illustration-static {
  border-top: 1px solid rgba(0, 67, 44, 0.06);
  padding-top: 1rem;
  text-align: center;
}

.cargo-box-wrapper {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.cargo-icon-box {
  background: var(--color-bg-soft);
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 67, 44, 0.03);
}

.cargo-caption {
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* WIDGET 2: DESCARGA (Phone mockup with splash screen and smooth hover float) */
.descarga-widget {
  display: flex;
  justify-content: center;
  align-items: center;
}

.premium-phone-mockup {
  width: 270px;
  height: 480px;
  background: #000000;
  border: 9px solid #ff781f; /* Orange frame matching user's image */
  border-radius: 38px;
  position: relative;
  box-shadow: 0 12px 30px rgba(0, 43, 28, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transform: translateY(0);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
}

.premium-phone-mockup:hover {
  transform: translateY(-8px); /* Soft vertical translation in its zone */
  box-shadow: 0 20px 40px rgba(0, 43, 28, 0.12);
}

.phone-notch {
  width: 100px;
  height: 16px;
  background: #000000; /* Black notch */
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  z-index: 10;
}

.phone-screen-inner {
  width: 100%;
  height: 100%;
  background: var(--color-bg-base);
  display: flex;
  flex-direction: column;
  padding-top: 14px; /* for status bar */
}

.phone-status-bar-sim {
  display: flex;
  justify-content: space-between;
  padding: 4px 14px;
  font-size: 0.6rem;
  font-weight: 700;
  color: var(--color-text-secondary);
  width: 100%;
  position: absolute;
  top: 14px;
  left: 0;
  z-index: 5;
}

/* Phone Splash Screen Design */
.splash-screen-layout {
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 1.5rem 2.5rem;
  height: 100%;
  position: relative;
}

.splash-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  gap: 1.25rem;
}

.phone-splash-logo {
  width: 130px;
  height: auto;
  filter: drop-shadow(0 6px 12px rgba(0, 67, 44, 0.06));
  animation: splash-pulse 3s infinite ease-in-out;
}

.splash-tagline {
  font-family: var(--font-title);
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--color-primary-light);
  letter-spacing: 0.5px;
}

.splash-loading-bar {
  width: 75px;
  height: 4px;
  background: rgba(0, 67, 44, 0.08);
  border-radius: var(--border-radius-full);
  overflow: hidden;
}

.splash-loading-progress {
  width: 40%;
  height: 100%;
  background: var(--color-accent);
  border-radius: var(--border-radius-full);
  animation: loading-move 1.5s infinite ease-in-out;
}

@keyframes splash-pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.04); }
  100% { transform: scale(1); }
}

@keyframes loading-move {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(250%); }
}

/* WIDGET 3: QUIMICOS (Compliance simulator list) */
.compliance-simulator {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sim-selector-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.sim-selector-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-text-secondary);
}

.selector-pills {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}

.chem-pill-btn {
  padding: 0.35rem 0.75rem;
  border-radius: 8px;
  border: 1px solid rgba(0,67,44,0.06);
  background: var(--color-bg-soft);
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: var(--transition-smooth);
}

.chem-pill-btn:hover {
  background: #eceff1;
}

.chem-pill-btn.active {
  background: var(--color-accent);
  color: #ffffff;
  border-color: var(--color-accent);
}

.compliance-result-card {
  border-radius: var(--border-radius-md);
  padding: 1.25rem;
  transition: all 0.4s ease;
  border: 1px solid rgba(0,67,44,0.04);
}

.compliance-result-card.authorized {
  background: rgba(46, 125, 50, 0.05);
  border-left: 4px solid var(--color-success);
}

.compliance-result-card.prohibited {
  background: rgba(211, 47, 47, 0.05);
  border-left: 4px solid #d32f2f;
}

.compliance-result-card.restricted {
  background: rgba(251, 134, 3, 0.05);
  border-left: 4px solid var(--color-accent);
}

.result-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.result-top h5 {
  font-size: 1.1rem;
  font-weight: 800;
}

.chem-badge-status {
  font-size: 0.65rem;
  font-weight: 900;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}

.authorized .chem-badge-status {
  background: var(--color-success);
  color: #ffffff;
}

.prohibited .chem-badge-status {
  background: #d32f2f;
  color: #ffffff;
}

.restricted .chem-badge-status {
  background: var(--color-accent);
  color: #ffffff;
}

.result-details-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  background: #ffffff;
  padding: 8px 12px;
  border-radius: 8px;
  margin-bottom: 8px;
}

.detail-block {
  display: flex;
  flex-direction: column;
}

.detail-block small {
  font-size: 0.6rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
}

.detail-block strong {
  font-size: 0.85rem;
  color: var(--color-primary-dark);
}

.result-description {
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  line-height: 1.4;
  margin-bottom: 10px;
}

.alternative-box {
  background: #ffffff;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.75rem;
  border: 1px dashed rgba(46, 125, 50, 0.2);
}

.alt-label {
  display: block;
  font-size: 0.65rem;
  color: var(--color-text-secondary);
}

/* Slider Navigation Buttons styling */
.slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(0, 67, 44, 0.1);
  color: var(--color-primary-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition-bounce);
  z-index: 10;
  box-shadow: 0 8px 20px rgba(0,0,0,0.06);
  outline: none;
}

.slider-btn:hover {
  background: var(--color-primary);
  color: #ffffff;
  transform: translateY(-50%) scale(1.1);
}

.prev-btn { left: 2%; }
.next-btn { right: 2%; }

/* Dots Indicator Styling */
.slider-dots {
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.75rem;
  z-index: 10;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(0, 67, 44, 0.15);
  cursor: pointer;
  transition: var(--transition-smooth);
}

.dot.active {
  background: var(--color-primary);
  width: 32px;
  border-radius: 8px;
}

/* Animations and Transitions */
.fade-slow-enter-active,
.fade-slow-leave-active {
  transition: opacity 0.8s ease;
}
.fade-slow-enter-from,
.fade-slow-leave-to {
  opacity: 0;
}

.fade-fast-enter-active,
.fade-fast-leave-active {
  transition: opacity 0.2s ease;
}
.fade-fast-enter-from,
.fade-fast-leave-to {
  opacity: 0;
}

/* Slide Left Column transitions */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Visual Right Column transitions */
.visual-fade-enter-active,
.visual-fade-leave-active {
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
.visual-fade-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}
.visual-fade-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(-20px);
}

/* Responsive Breakpoints */
@media (max-width: 1024px) {
  .hero-container {
    gap: 2rem;
  }
  .hero-title {
    font-size: 3.6rem;
  }
  .bg-outline-svg {
    width: 60%;
  }
}

@media (max-width: 992px) {
  .hero-section {
    padding: 8rem 0 5rem;
    min-height: auto;
  }
  
  .diagonal-bg {
    clip-path: none !important;
    background: linear-gradient(135deg, #f3f7f4 0%, #dae7df 100%) !important;
  }
  
  .theme-descarga, .theme-quimicos {
    background: linear-gradient(135deg, #f3f7f4 0%, #dae7df 100%) !important;
  }
  
  .hero-container {
    grid-template-columns: 1fr !important;
    grid-template-areas: "content" "visual" !important;
    text-align: center;
    gap: 3rem;
  }
  
  .hero-content-wrapper {
    min-height: auto;
  }
  
  .badge-mex-usa-dark {
    margin: 0 auto;
  }
  
  .hero-description {
    margin: 0 auto;
  }
  
  .hero-actions, .app-download-group {
    justify-content: center;
  }
  
  .bg-outline-container {
    display: none;
  }
  
  .prev-btn, .next-btn {
    display: none; /* Swipe & dots only on tablet/mobile */
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.8rem;
  }
  .hero-section {
    padding: 7rem 0 4rem;
  }
  .hero-actions {
    flex-direction: column;
    width: 100%;
  }
  .btn, .store-badge-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
