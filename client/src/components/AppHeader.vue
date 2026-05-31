<template>
  <header :class="['site-header', { 'scrolled': isScrolled }]">
    <!-- Top Header Bar -->
    <div class="top-header-bar">
      <div class="container top-header-container">
        <!-- Contact Info (Left) -->
        <div class="top-bar-contact">
          <a href="mailto:hola@agricultori.mx" class="contact-item">
            <svg class="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <span>hola@agricultori.mx</span>
          </a>
          <a href="tel:3330070631" class="contact-item">
            <svg class="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 7.95 7.95"></path><path d="M14.05 6A5 5 0 0 1 18 9.95"></path></svg>
            <span>33 3007 0631</span>
          </a>
        </div>
        
        <!-- Social Info (Right) -->
        <div class="top-bar-social">
          <a href="#" class="top-social-icon" aria-label="Facebook">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
          </a>
          <a href="#" class="top-social-icon" aria-label="Instagram">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
          <a href="#" class="top-social-icon" aria-label="TikTok">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.99-1.72-.08.65-.06 1.34-.06 2.03 0 3.48-.95 7.15-3.8 9.07-2.45 1.68-5.71 1.98-8.39.81-2.99-1.28-4.9-4.46-4.49-7.79.33-2.97 2.45-5.7 5.37-6.38 1.94-.49 4.11-.1 5.72.99.03-1.79.01-3.59.02-5.38.02-.65.01-1.31.02-1.93zm-3.09 10.37c-.77-.07-1.57.19-2.14.72-.75.69-1.07 1.83-.8 2.82.23.95.96 1.77 1.91 2.05.94.29 2.04-.01 2.68-.78.73-.83.94-2.11.45-3.11-.32-.69-.99-1.24-1.74-1.54-.12-.05-.24-.12-.36-.16z"/></svg>
          </a>
        </div>
      </div>
    </div>
    
    <!-- Main Header Content -->
    <div class="main-header-content">
      <div class="container header-container">
        <router-link to="/" class="logo">
          <img src="/logo.png" alt="Agricultori Logo" class="logo-img" />
        </router-link>

        <!-- Desktop Nav -->
        <nav class="desktop-nav">
          <router-link to="/productos" class="nav-link">Productos</router-link>
          
          <!-- Distribuidores dropdown -->
          <div class="nav-dropdown" @mouseenter="distOpen = true" @mouseleave="distOpen = false">
            <button class="nav-link nav-drop-trigger" :class="{ active: distOpen }" aria-haspopup="true" :aria-expanded="distOpen">
              Distribuidores
              <svg class="drop-chevron" :class="{ rotated: distOpen }" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <Transition name="drop-fade">
              <div v-if="distOpen" class="drop-panel drop-panel-simple" role="menu">
                <router-link v-for="estado in uniqueEstados" :key="estado" :to="`/distribuidores/${estado}`" class="drop-item-simple" role="menuitem" @click="distOpen = false">{{ estado }}</router-link>
              </div>
            </Transition>
          </div>

          <router-link to="/nuestra-app" class="nav-link">Nuestra App</router-link>
          <!-- Herramientas dropdown -->
          <div class="nav-dropdown" @mouseenter="dropOpen = true" @mouseleave="dropOpen = false">
            <button class="nav-link nav-drop-trigger" :class="{ active: dropOpen }" aria-haspopup="true" :aria-expanded="dropOpen">
              Herramientas
              <svg class="drop-chevron" :class="{ rotated: dropOpen }" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <Transition name="drop-fade">
              <div v-if="dropOpen" class="drop-panel" role="menu">
                <router-link to="/herramientas/requisitos" class="drop-item" role="menuitem" @click="dropOpen = false">
                  <span class="drop-icon">📋</span>
                  <div>
                    <span class="drop-label">Requisitos</span>
                    <span class="drop-sub">Normativas y documentación</span>
                  </div>
                </router-link>
                <router-link to="/herramientas/bitacoras" class="drop-item" role="menuitem" @click="dropOpen = false">
                  <span class="drop-icon">📓</span>
                  <div>
                    <span class="drop-label">Bitácoras</span>
                    <span class="drop-sub">Registro de actividades</span>
                  </div>
                </router-link>
              </div>
            </Transition>
          </div>

          <router-link to="/contacto" class="nav-link">Contacto</router-link>
        </nav>

        <div class="header-actions">
          <a href="#descargar" class="btn btn-accent btn-sm-header">Descargar App</a>
          <!-- Mobile Menu Button -->
          <button class="mobile-toggle" @click="toggleMenu" aria-label="Toggle Menu">
            <span :class="['bar', { 'open': isMenuOpen }]"></span>
            <span :class="['bar', { 'open': isMenuOpen }]"></span>
            <span :class="['bar', { 'open': isMenuOpen }]"></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Nav Drawer -->
    <transition name="drawer-fade">
      <div v-if="isMenuOpen" class="mobile-drawer" @click="closeMenu">
        <div class="drawer-content" @click.stop>
          <nav class="mobile-nav">
            <router-link to="/productos" class="mobile-link" @click="closeMenu">Productos</router-link>
            
            <!-- Distribuidores acordeón mobile -->
            <div class="mobile-accordion">
              <button class="mobile-link mobile-acc-trigger" @click="mobileDistOpen = !mobileDistOpen" :aria-expanded="mobileDistOpen">
                Distribuidores
                <svg class="drop-chevron" :class="{ rotated: mobileDistOpen }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <Transition name="acc-slide">
                <div v-if="mobileDistOpen" class="mobile-submenu">
                  <router-link v-for="estado in uniqueEstados" :key="estado" :to="`/distribuidores/${estado}`" class="mobile-sublink" @click="closeMenu(); mobileDistOpen = false">📍 {{ estado }}</router-link>
                </div>
              </Transition>
            </div>

            <router-link to="/nuestra-app" class="mobile-link" @click="closeMenu">Nuestra App</router-link>
            <!-- Herramientas acordeón mobile -->
            <div class="mobile-accordion">
              <button class="mobile-link mobile-acc-trigger" @click="mobileDropOpen = !mobileDropOpen" :aria-expanded="mobileDropOpen">
                Herramientas
                <svg class="drop-chevron" :class="{ rotated: mobileDropOpen }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <Transition name="acc-slide">
                <div v-if="mobileDropOpen" class="mobile-submenu">
                  <router-link to="/herramientas/requisitos" class="mobile-sublink" @click="closeMenu(); mobileDropOpen = false">📋 Requisitos</router-link>
                  <router-link to="/herramientas/bitacoras" class="mobile-sublink" @click="closeMenu(); mobileDropOpen = false">📓 Bitácoras</router-link>
                </div>
              </Transition>
            </div>

            <router-link to="/contacto" class="mobile-link" @click="closeMenu">Contacto</router-link>
            <a href="#descargar" class="btn btn-accent mobile-cta" @click="closeMenu">Descargar Gratis</a>
          </nav>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const dropOpen = ref(false)
const mobileDropOpen = ref(false)
const distOpen = ref(false)
const mobileDistOpen = ref(false)
const distribuidores = ref([])

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const fetchDistribuidores = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api/distribuidoras`)
    const data = await res.json()
    distribuidores.value = data
  } catch (err) {
    console.error('Error fetching distribuidores:', err)
  }
}

const uniqueEstados = computed(() => {
  return [...new Set(distribuidores.value.map(d => d.estado))].sort()
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  fetchDistribuidores()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: var(--transition-smooth);
  border-bottom: 1px solid transparent;
  background-color: transparent;
}

.site-header.scrolled {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 67, 44, 0.08);
  box-shadow: var(--shadow-sm);
}

.top-header-bar {
  background-color: var(--color-accent);
  height: 40px;
  display: flex;
  align-items: center;
  transition: var(--transition-smooth);
  overflow: hidden;
  font-size: 0.85rem;
  color: #ffffff;
}

.site-header.scrolled .top-header-bar {
  height: 0;
  opacity: 0;
  pointer-events: none;
}

.top-header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.top-bar-contact {
  display: flex;
  gap: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--transition-smooth);
  font-weight: 500;
  color: #ffffff;
}

.contact-item:hover {
  opacity: 0.85;
}

.contact-icon {
  color: #ffffff;
  flex-shrink: 0;
}

.top-bar-social {
  display: flex;
  gap: 1rem;
}

.top-social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  transition: var(--transition-bounce);
}

.top-social-icon:hover {
  transform: scale(1.1);
  background-color: #ffffff;
  color: var(--color-accent);
}

.main-header-content {
  height: 90px;
  display: flex;
  align-items: center;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-img {
  height: 70px;
  width: auto;
  object-fit: contain;
  transition: var(--transition-smooth);
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

/* ── Dropdown ──────────────────────────────────────── */
.nav-dropdown {
  position: relative;
}

.nav-drop-trigger {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.25rem 0;
}

.drop-chevron {
  transition: transform 0.3s ease;
  color: var(--color-text-secondary);
  flex-shrink: 0;
}

.drop-chevron.rotated { transform: rotate(180deg); }

.nav-drop-trigger.active {
  color: var(--color-primary);
}

.drop-panel {
  position: absolute;
  top: calc(100% + 0.85rem);
  left: 50%;
  transform: translateX(-50%);
  min-width: 220px;
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid rgba(0, 67, 44, 0.08);
  box-shadow: 0 8px 30px rgba(0, 67, 44, 0.12), 0 2px 8px rgba(0,0,0,0.06);
  overflow: hidden;
  padding: 0.5rem;
  z-index: 200;
}

/* Arrow pointer */
.drop-panel::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 12px;
  height: 12px;
  background: #ffffff;
  border-left: 1px solid rgba(0,67,44,0.08);
  border-top: 1px solid rgba(0,67,44,0.08);
}

.drop-panel-simple {
  min-width: 180px;
  padding: 0.5rem;
}

.drop-item-simple {
  display: block;
  padding: 0.65rem 1rem;
  border-radius: 8px;
  transition: background 0.2s ease;
  text-decoration: none;
  font-family: var(--font-title);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-text-secondary);
}

.drop-item-simple:hover {
  background: var(--color-bg-soft);
  color: var(--color-primary);
}

.drop-item {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  transition: background 0.2s ease;
  text-decoration: none;
  color: var(--color-text-primary);
}

.drop-item:hover {
  background: var(--color-bg-soft);
}

.drop-icon {
  font-size: 1.2rem;
  line-height: 1;
  flex-shrink: 0;
}

.drop-label {
  display: block;
  font-family: var(--font-title);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-primary-dark);
  line-height: 1.2;
}

.drop-sub {
  display: block;
  font-size: 0.72rem;
  color: var(--color-text-secondary);
  margin-top: 1px;
}

/* Dropdown transition */
.drop-fade-enter-active { transition: all 0.2s cubic-bezier(0.16,1,0.3,1); }
.drop-fade-leave-active { transition: all 0.15s ease; }
.drop-fade-enter-from  { opacity: 0; transform: translateX(-50%) translateY(-8px) scale(0.97); }
.drop-fade-leave-to    { opacity: 0; transform: translateX(-50%) translateY(-4px) scale(0.98); }

.nav-link {
  font-family: var(--font-title);
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  transition: var(--transition-smooth);
  position: relative;
  padding: 0.25rem 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-accent);
  transition: var(--transition-smooth);
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link:hover::after {
  width: 100%;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-sm-header {
  padding: 0.5rem 1.25rem;
  font-size: 0.9rem;
}

/* Mobile toggle button */
.mobile-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  flex-direction: column;
  gap: 5px;
  z-index: 1100;
}

.bar {
  display: block;
  width: 22px;
  height: 2px;
  background-color: var(--color-primary-dark);
  transition: var(--transition-smooth);
}

.bar.open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.bar.open:nth-child(2) {
  opacity: 0;
}

.bar.open:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Drawer styles */
.mobile-drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 43, 25, 0.4);
  backdrop-filter: blur(8px);
  z-index: 1050;
  display: flex;
  justify-content: flex-end;
}

.drawer-content {
  width: 280px;
  height: 100%;
  background: var(--color-bg-base);
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
  padding: 8rem 2rem 2rem;
  display: flex;
  flex-direction: column;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mobile-link {
  font-family: var(--font-title);
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--color-text-primary);
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-bg-soft);
  transition: var(--transition-smooth);
}

.mobile-link:hover {
  color: var(--color-accent);
  padding-left: 5px;
}

/* Mobile accordion */
.mobile-accordion {
  display: flex;
  flex-direction: column;
}

.mobile-acc-trigger {
  background: none;
  border: none;
  border-bottom: 1px solid var(--color-bg-soft);
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.mobile-submenu {
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0 0.5rem 1rem;
  gap: 0.25rem;
  overflow: hidden;
}

.mobile-sublink {
  font-family: var(--font-title);
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  padding: 0.45rem 0.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.mobile-sublink:hover {
  color: var(--color-primary);
  background: var(--color-bg-soft);
  padding-left: 1rem;
}

/* Accordion slide transition */
.acc-slide-enter-active { transition: all 0.3s cubic-bezier(0.16,1,0.3,1); }
.acc-slide-leave-active { transition: all 0.2s ease; }
.acc-slide-enter-from  { opacity: 0; transform: translateY(-8px); }
.acc-slide-leave-to    { opacity: 0; transform: translateY(-4px); }

.mobile-cta {
  margin-top: 1rem;
  text-align: center;
}

/* Transitions */
.drawer-fade-enter-active,
.drawer-fade-leave-active {
  transition: opacity 0.3s ease;
}

.drawer-fade-enter-from,
.drawer-fade-leave-to {
  opacity: 0;
}

.drawer-fade-enter-active .drawer-content,
.drawer-fade-leave-active .drawer-content {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.drawer-fade-enter-from .drawer-content {
  transform: translateX(100%);
}

.drawer-fade-leave-to .drawer-content {
  transform: translateX(100%);
}

/* Responsive queries */
@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  
  .mobile-toggle {
    display: flex;
  }
  
  .btn-sm-header {
    display: none;
  }
}
</style>
