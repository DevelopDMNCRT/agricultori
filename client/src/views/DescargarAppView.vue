<template>
  <div class="redirect-page">
    <div class="radial-glow-1"></div>
    <div class="radial-glow-2"></div>
    
    <div class="redirect-card glass-panel">
      <!-- App Logo -->
      <div class="logo-container">
        <img src="/logo.png" alt="Agricultori Logo" class="app-logo" />
      </div>
      
      <h1 class="redirect-title">Cargando Agricultori</h1>
      
      <!-- Loading animation -->
      <div class="loading-wrapper">
        <div class="scanning-laser"></div>
        <div class="loading-spinner"></div>
      </div>
      
      <p class="redirect-status">{{ statusMessage }}</p>
      
      <!-- Fallback manual links -->
      <div class="fallback-links">
        <p class="fallback-text">Si no eres redirigido automáticamente, selecciona tu tienda:</p>
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
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'

const statusMessage = ref('Detectando tu dispositivo móvil...')

onMounted(() => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera
  
  // Detection logic
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream
  const isAndroid = /android/i.test(userAgent)
  
  setTimeout(() => {
    if (isIOS) {
      statusMessage.value = 'Redirigiendo a App Store...'
      window.location.href = 'https://apps.apple.com/mx/app/agricultori/id1606230336'
    } else if (isAndroid) {
      statusMessage.value = 'Redirigiendo a Google Play...'
      window.location.href = 'https://play.google.com'
    } else {
      statusMessage.value = 'Elige la tienda para descargar la aplicación'
    }
  }, 1200)
})
</script>

<style scoped>
.redirect-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f7f4;
  background: linear-gradient(135deg, #f3f7f4 0%, #dae7df 100%);
  position: relative;
  overflow: hidden;
  padding: 2rem;
  font-family: var(--font-body);
}

.radial-glow-1, .radial-glow-2 {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.25;
  pointer-events: none;
}

.radial-glow-1 {
  top: -10%;
  left: -10%;
  width: 500px;
  height: 500px;
  background-color: var(--color-accent);
}

.radial-glow-2 {
  bottom: -10%;
  right: -10%;
  width: 500px;
  height: 500px;
  background-color: var(--color-primary-light);
}

.redirect-card {
  width: 100%;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 30px 60px rgba(0, 43, 28, 0.12);
  border-radius: 28px;
  padding: 3.5rem 2.5rem;
  text-align: center;
  backdrop-filter: blur(20px);
  position: relative;
  z-index: 5;
}

.logo-container {
  margin-bottom: 2rem;
}

.app-logo {
  width: 150px;
  height: auto;
  filter: drop-shadow(0 8px 16px rgba(0, 67, 44, 0.08));
}

.redirect-title {
  font-family: var(--font-title);
  font-size: 2.2rem;
  font-weight: 900;
  color: var(--color-primary-dark);
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

/* Loading design with laser bar */
.loading-wrapper {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-spinner {
  width: 80px;
  height: 80px;
  border: 4px solid rgba(0, 67, 44, 0.08);
  border-left-color: var(--color-primary);
  border-right-color: var(--color-accent);
  border-radius: 50%;
  animation: spin 1.5s cubic-bezier(0.53, 0.21, 0.29, 0.67) infinite;
}

.scanning-laser {
  position: absolute;
  width: 90px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-accent), transparent);
  box-shadow: 0 0 10px var(--color-accent);
  animation: laserMove 2s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes laserMove {
  0%, 100% {
    top: 15px;
  }
  50% {
    top: 85px;
  }
}

.redirect-status {
  font-size: 1.15rem;
  color: var(--color-text-secondary);
  font-weight: 600;
  margin-bottom: 3rem;
}

.fallback-links {
  border-top: 1px solid rgba(0, 67, 44, 0.08);
  padding-top: 2rem;
}

.fallback-text {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin-bottom: 1.5rem;
}

/* App Download Badges Grid */
.app-download-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
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
  text-decoration: none;
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

@media (max-width: 576px) {
  .redirect-card {
    padding: 2.5rem 1.5rem;
  }
  
  .store-badge-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
