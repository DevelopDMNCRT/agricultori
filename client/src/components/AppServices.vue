<template>
  <section id="servicios" class="services-section">
    <div class="container">
      <div class="section-header text-center">
        <span class="tag">Servicios Gratuitos</span>
        <h2 class="services-title">La única App en el país que te ofrece los siguientes servicios gratuitos</h2>
      </div>

      <div class="services-grid">
        <!-- Card 1: Productos -->
        <div class="service-card" @mouseenter="hovered = 1" @mouseleave="hovered = 0">
          <div class="card-glow" :class="{ 'active': hovered === 1 }"></div>
          
          <div class="card-content">
            <div class="card-icon-wrapper">
              <Icon icon="lucide:flask-conical" class="card-icon" />
            </div>
            <h3 class="card-title">Productos</h3>
            <p class="card-text">
              Es una sección donde te daremos a conocer los productos agro químicos autorizados para la exportación de su fruta, también para que puedas buscar los productos que tengan el mismo ingrediente activo o técnico.
            </p>
            <div class="card-footer-badge">
              <Icon icon="lucide:smartphone" class="badge-icon" />
              <span>Disponible en la App</span>
            </div>
          </div>
        </div>

        <!-- Card 2: Precios (Highlighted with branding primary colors) -->
        <div class="service-card highlight-card" @mouseenter="hovered = 2" @mouseleave="hovered = 0">
          <div class="card-glow accent" :class="{ 'active': hovered === 2 }"></div>
          
          <div class="card-content">
            <div class="card-icon-wrapper accent">
              <Icon icon="lucide:trending-up" class="card-icon" />
            </div>
            <h3 class="card-title text-white">Precios</h3>
            <p class="card-text text-light">
              En esta sección te informaremos los precios al día, ya que a muchos se nos complica tener esa información a la mano.
            </p>
            <div class="card-footer-badge accent">
              <Icon icon="lucide:smartphone" class="badge-icon" />
              <span>Disponible en la App</span>
            </div>
          </div>
        </div>

        <!-- Card 3: Empaques Certificados -->
        <div class="service-card" @mouseenter="hovered = 3" @mouseleave="hovered = 0">
          <div class="card-glow" :class="{ 'active': hovered === 3 }"></div>
          
          <div class="card-content">
            <div class="card-icon-wrapper">
              <Icon icon="lucide:warehouse" class="card-icon" />
            </div>
            <h3 class="card-title">Empaques Certificados</h3>
            <p class="card-text">
              Es esta sección podrás conocer los empaques que están autorizados para comercializar la fruta en Estados Unidos.
            </p>
            <div class="card-footer-badge">
              <Icon icon="lucide:smartphone" class="badge-icon" />
              <span>Disponible en la App</span>
            </div>
          </div>
        </div>

        <!-- Card 4: Trabajo Diario -->
        <div class="service-card" @mouseenter="hovered = 4" @mouseleave="hovered = 0">
          <div class="card-glow" :class="{ 'active': hovered === 4 }"></div>
          
          <div class="card-content">
            <div class="card-icon-wrapper">
              <Icon icon="lucide:calendar-check" class="card-icon" />
            </div>
            <h3 class="card-title">Trabajo Diario</h3>
            <p class="card-text">
              Aquí podrás tener un apartado de pendientes que tengas que hacer para tu huerta.
            </p>
            <div class="card-footer-badge">
              <Icon icon="lucide:smartphone" class="badge-icon" />
              <span>Disponible en la App</span>
            </div>
          </div>
        </div>

        <!-- Card 5: Requisitos de Certificación (Highlighted for staggered checkerboard effect) -->
        <div class="service-card highlight-card" @mouseenter="hovered = 5" @mouseleave="hovered = 0">
          <div class="card-glow accent" :class="{ 'active': hovered === 5 }"></div>
          
          <div class="card-content">
            <div class="card-icon-wrapper accent">
              <Icon icon="lucide:scroll" class="card-icon" />
            </div>
            <h3 class="card-title text-white">Requisitos de Certificación</h3>
            <p class="card-text text-light">
              Ahora, si es tu deseo certificar tu huerta, te daremos la información necesaria para que puedas registrarlas en global gap y senasica, así como la lista de todos los requisitos que ocupas en tus huertos para iniciar los trámites.
            </p>
            <div class="card-footer-badge accent">
              <Icon icon="lucide:smartphone" class="badge-icon" />
              <span>Disponible en la App</span>
            </div>
          </div>
        </div>

        <!-- Card 6: Bitácoras -->
        <div class="service-card" @mouseenter="hovered = 6" @mouseleave="hovered = 0">
          <div class="card-glow" :class="{ 'active': hovered === 6 }"></div>
          
          <div class="card-content">
            <div class="card-icon-wrapper">
              <Icon icon="lucide:clipboard-list" class="card-icon" />
            </div>
            <h3 class="card-title">Bitácoras</h3>
            <p class="card-text">
              Sabemos lo importante de las bitácoras y llevarlas día a día, por eso en la aplicación Agricultori te daremos las bitácoras que necesitas y ejemplos de cómo se llenan para las dudas que puedan tener en algunas de ellas.
            </p>
            <div class="card-footer-badge">
              <Icon icon="lucide:smartphone" class="badge-icon" />
              <span>Disponible en la App</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const hovered = ref(0)
</script>

<style scoped>
.services-section {
  padding: 8rem 0;
  background-color: var(--color-bg-soft);
  position: relative;
  overflow: hidden;
}

.services-title {
  font-size: 2.6rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: var(--color-primary-dark);
  max-width: 950px;
  margin: 0 auto;
  line-height: 1.2;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.25rem;
  margin-top: 4.5rem;
}

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.75rem;
  }
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.service-card {
  background: #ffffff;
  border: 1px solid rgba(0, 67, 44, 0.05);
  border-radius: var(--border-radius-lg);
  padding: 3rem 2.25rem;
  box-shadow: var(--shadow-md);
  transition: var(--transition-bounce);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(0, 67, 44, 0.15);
}

.highlight-card {
  background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.highlight-card:hover {
  border-color: var(--color-accent);
}

.card-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Icons styling */
.card-icon-wrapper {
  width: 60px;
  height: 60px;
  border-radius: var(--border-radius-md);
  background-color: rgba(0, 67, 44, 0.05);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  transition: var(--transition-bounce);
}

.card-icon-wrapper.accent {
  background-color: rgba(251, 134, 3, 0.15);
  color: var(--color-accent);
}

.service-card:hover .card-icon-wrapper {
  transform: scale(1.1) rotate(-5deg);
  background-color: var(--color-primary);
  color: #ffffff;
}

.highlight-card:hover .card-icon-wrapper {
  background-color: var(--color-accent);
  color: #ffffff;
}

.card-icon {
  font-size: 1.8rem;
}

/* Typography styling */
.card-title {
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 1.25rem;
  color: var(--color-primary-dark);
}

.text-white {
  color: #ffffff !important;
}

.card-text {
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 3rem;
  flex-grow: 1;
}

.text-light {
  color: rgba(255, 255, 255, 0.8) !important;
}

/* Badges Footer styling */
.card-footer-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--color-bg-soft);
  color: var(--color-primary);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-full);
  font-size: 0.8rem;
  font-weight: 700;
  width: fit-content;
  border: 1px solid rgba(0, 67, 44, 0.04);
}

.card-footer-badge.accent {
  background-color: rgba(255, 255, 255, 0.08);
  color: var(--color-accent);
  border-color: rgba(255, 255, 255, 0.1);
}

.badge-icon {
  font-size: 0.95rem;
}

/* Glow effects styling */
.card-glow {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 200%; height: 200%;
  background: radial-gradient(circle, rgba(0, 67, 44, 0.04) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
  z-index: 1;
}

.card-glow.accent {
  background: radial-gradient(circle, rgba(251, 134, 3, 0.12) 0%, transparent 60%);
}

.service-card:hover .card-glow {
  opacity: 1;
}
</style>
