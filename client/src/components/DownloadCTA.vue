<script setup>
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'

const qrUrl = ref('https://agricultori.mx/descarga-app')

onMounted(() => {
  if (typeof window !== 'undefined') {
    qrUrl.value = `${window.location.origin}/descarga-app`
  }
})
</script>

<template>
  <section id="descargar" class="download-cta-section dark-section">
    <div class="container">
      <div class="cta-card glass-panel-dark">
        <!-- Visual Accent blobs inside the card -->
        <div class="cta-blob-1"></div>
        <div class="cta-blob-2"></div>
        
        <div class="cta-grid">
          <!-- Text and buttons -->
          <div class="cta-text-content">
            <h2 class="cta-title"> ¡Toma el control hoy mismo!</h2>
            <p class="cta-desc">
              Descarga <b>Agricultori</b> ahora. Sin costos. Sin suscripciones. La herramienta digital agrícola más potente de México, directo en tu bolsillo.
            </p>
            
            <div class="cta-badges">
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
            
            <div class="cta-badges-info">
              <span class="info-tag">✓ IOS</span>
              <span class="info-tag">✓ Android</span>
              <span class="info-tag accent-tag">✓ 100% Gratuito</span>
            </div>
          </div>
          
          <!-- Interactive QR Code Visualizer -->
          <div class="cta-qr-container">
            <div class="qr-glow"></div>
            
            <div class="qr-scanner-frame">
              <!-- Corner Brackets for active scan vibe -->
              <span class="bracket top-left"></span>
              <span class="bracket top-right"></span>
              <span class="bracket bottom-left"></span>
              <span class="bracket bottom-right"></span>
              
              <!-- Scanning Laser Animation Line -->
              <div class="laser-line"></div>
              
              <!-- QR Box with QR Code Image and Centered Brand Icon Overlay -->
              <div class="qr-box">
                <img 
                  :src="`https://api.qrserver.com/v1/create-qr-code/?size=250x250&color=00432c&bgcolor=ffffff&qzone=2&data=${encodeURIComponent(qrUrl)}`" 
                  alt="Código QR Agricultori" 
                  class="qr-code-img"
                />
                <div class="qr-center-logo">
                  <img src="/logo.png" alt="Logo Agricultori" class="qr-logo-img" />
                </div>
              </div>
            </div>
            
            <p class="qr-lbl">Escanea para descargar</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.download-cta-section {
  padding: 5rem 0 8rem;
  background-color: #dae6df;
  background: linear-gradient(135deg, #dae6df 0%, #c2d5cd 100%);
}

.cta-card {
  background: var(--color-bg-surface);
  border-radius: var(--border-radius-lg);
  padding: 5rem;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(0, 67, 44, 0.08);
}

/* Decorative visual blobs inside card */
.cta-blob-1, .cta-blob-2 {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.15;
  pointer-events: none;
}

.cta-blob-1 {
  top: -30%;
  left: -10%;
  width: 400px;
  height: 400px;
  background-color: var(--color-accent);
}

.cta-blob-2 {
  bottom: -30%;
  right: -10%;
  width: 350px;
  height: 350px;
  background-color: var(--color-primary-light);
}

.cta-grid {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  align-items: center;
  gap: 5rem;
  position: relative;
  z-index: 2;
}

.cta-text-content {
  color: var(--color-text-primary);
}

.cta-title {
  font-size: 3.5rem;
  color: var(--color-primary-dark);
  margin-bottom: 1.25rem;
  letter-spacing: -0.03em;
}

.cta-desc {
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-bottom: 3rem;
  max-width: 600px;
}

.cta-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
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

.cta-badges-info {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.info-tag {
  background: rgba(0, 67, 44, 0.05);
  border: 1px solid rgba(0, 67, 44, 0.1);
  padding: 0.4rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-secondary);
}

.accent-tag {
  color: var(--color-accent);
  background: rgba(251, 134, 3, 0.1);
  border-color: rgba(251, 134, 3, 0.2);
}

/* QR Code area styling */
.cta-qr-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  justify-self: center;
  transition: var(--transition-bounce);
  cursor: pointer;
}

.cta-qr-container:hover {
  transform: translateY(-8px) scale(1.03);
}

.cta-qr-container:hover .qr-glow {
  opacity: 0.8;
  transform: scale(1.15);
}

.cta-qr-container:hover .laser-line {
  animation-duration: 1.2s; /* Speed up laser line on hover */
  box-shadow: 0 0 12px var(--color-accent), 0 0 25px var(--color-accent);
}

.qr-glow {
  position: absolute;
  width: 100%; height: 100%;
  background: var(--color-accent);
  filter: blur(45px);
  opacity: 0.25;
  transition: var(--transition-smooth);
  z-index: 0;
}

.qr-scanner-frame {
  position: relative;
  width: 236px;
  height: 236px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.qr-box {
  width: 220px;
  height: 220px;
  z-index: 2;
  position: relative;
  border-radius: 24px;
  box-shadow: var(--shadow-lg);
  background: #ffffff;
  padding: 12px;
  border: 1px solid rgba(0, 67, 44, 0.08);
}

.qr-code-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 12px;
}

/* Center brand badge overlay on QR */
.qr-center-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 44px;
  height: 44px;
  background: #ffffff;
  border-radius: 50%;
  padding: 4px;
  box-shadow: 0 4px 10px rgba(0, 43, 28, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--color-primary-light);
  z-index: 5;
}

.qr-logo-img {
  width: 85%;
  height: auto;
}

/* Scanning laser line */
.laser-line {
  position: absolute;
  left: 12px;
  right: 12px;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--color-accent), transparent);
  box-shadow: 0 0 8px var(--color-accent), 0 0 15px var(--color-accent);
  z-index: 10;
  pointer-events: none;
  animation: scanLaser 2.5s ease-in-out infinite;
}

@keyframes scanLaser {
  0%, 100% { top: 12px; opacity: 0.3; }
  50% { top: 224px; opacity: 1; }
}

/* Corner framing brackets */
.bracket {
  position: absolute;
  width: 16px;
  height: 16px;
  border: 3px solid var(--color-accent);
  z-index: 8;
  transition: var(--transition-smooth);
}

.top-left {
  top: 0; left: 0;
  border-right: none; border-bottom: none;
  border-top-left-radius: 6px;
}

.top-right {
  top: 0; right: 0;
  border-left: none; border-bottom: none;
  border-top-right-radius: 6px;
}

.bottom-left {
  bottom: 0; left: 0;
  border-right: none; border-top: none;
  border-bottom-left-radius: 6px;
}

.bottom-right {
  bottom: 0; right: 0;
  border-left: none; border-top: none;
  border-bottom-right-radius: 6px;
}

.cta-qr-container:hover .bracket {
  border-color: var(--color-primary);
  width: 20px;
  height: 20px;
}

.qr-lbl {
  margin-top: 1.5rem;
  font-family: var(--font-title);
  font-size: 1rem;
  font-weight: 800;
  color: var(--color-primary-dark);
  text-align: center;
  z-index: 1;
  letter-spacing: 1px;
}

/* Responsive Queries */
@media (max-width: 992px) {
  .cta-card {
    padding: 3.5rem 2.5rem;
  }
  
  .cta-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
    text-align: center;
  }
  
  .cta-desc {
    margin: 0 auto 3rem;
  }
  
  .cta-badges {
    justify-content: center;
  }
  
  .cta-badges-info {
    justify-content: center;
  }
  
  .cta-qr-container {
    justify-self: center;
  }
}

@media (max-width: 576px) {
  .cta-card {
    padding: 2.5rem 1.5rem;
  }
  
  .cta-title {
    font-size: 2.5rem;
  }
  
  .store-badge-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
