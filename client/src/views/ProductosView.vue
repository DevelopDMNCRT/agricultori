<script setup>
import { ref } from 'vue'
import DownloadCTA from '../components/DownloadCTA.vue'

const products = ref([
  {
    id: 1,
    title: 'Protección Respiratoria Avanzada PRO-X',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum urna eu felis consectetur, in congue turpis tempor. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla posuere est et est commodo, in efficitur tortor rhoncus. Curabitur faucibus ligula ac nunc eleifend, varius vestibulum ex elementum. Etiam quis lacus interdum, bibendum elit eu, malesuada sem.',
    image: '/cubrebocas.png'
  },
  {
    id: 2,
    title: 'Filtros de Alto Rendimiento para Agroquímicos',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vel urna in tortor venenatis iaculis. Nunc eu felis dui. Ut tristique, nisl sit amet euismod vulputate, lectus quam tincidunt neque, nec scelerisque ex sapien non lorem. Proin a ligula eget leo dignissim pellentesque. Vivamus sodales, diam quis aliquet fringilla, turpis magna facilisis arcu, ut laoreet neque est eget ante.',
    image: '/cubrebocas.png'
  },
  {
    id: 3,
    title: 'Equipo de Aislamiento Corporal Completo',
    description: 'Cras vel elit eget turpis euismod vehicula in at nunc. Suspendisse volutpat nulla condimentum, pretium eros id, luctus nulla. Aenean cursus vehicula magna, viverra ultrices nisi pulvinar et. Curabitur vel leo efficitur, dictum ipsum eu, cursus enim. Donec tincidunt justo nec ex congue ullamcorper. Nam ut mi sapien. Phasellus malesuada felis sit amet eros mattis tempus.',
    image: '/cubrebocas.png'
  },
  {
    id: 4,
    title: 'Gafas de Seguridad Anti-empañamiento',
    description: 'Pellentesque id rutrum libero, in volutpat mauris. Integer sit amet justo dolor. Praesent efficitur elementum libero, ut tincidunt nisl dictum fermentum. Suspendisse lobortis quam a enim sagittis dignissim. Sed a nulla ac lorem cursus faucibus id egestas neque. Nunc ut augue id justo lobortis tempus in a tortor. Suspendisse scelerisque felis sit amet tincidunt commodo.',
    image: '/cubrebocas.png'
  }
])
</script>

<template>
  <div class="page-padding">
    <!-- ── Hero Section ──────────────────────────────── -->
    <section class="catalog-hero">
      <div class="container text-center">
        <span class="tag">Catálogo</span>
        <h1>Nuestros Productos</h1>
        <p class="lead">
          Conoce nuestra línea de equipos y tecnología de protección diseñada específicamente para el agricultor moderno y sus exigencias diarias.
        </p>
      </div>
    </section>

    <!-- ── Product Catalog Grid ──────────────────────── -->
    <section class="catalog-section">
      <div class="container">
        <div class="product-list">
          <!-- Card 2-Columns -->
          <article v-for="product in products" :key="product.id" class="product-card">
            
            <!-- Columna Izquierda: Imagen -->
            <div class="product-image-col">
              <div class="image-wrapper">
                <img :src="product.image" :alt="product.title" class="product-img" loading="lazy" />
              </div>
            </div>

            <!-- Columna Derecha: Descripción Técnica -->
            <div class="product-info-col">
              <h2 class="product-title">{{ product.title }}</h2>
              <div class="product-specs">
                <span class="spec-badge">Grado Industrial</span>
                <span class="spec-badge">Protección Agrícola</span>
              </div>
              <p class="product-desc">{{ product.description }}</p>
              
              <div class="product-divider"></div>
              
              <ul class="technical-list">
                <li><strong>Material:</strong> Lorem ipsum dolor sit amet</li>
                <li><strong>Resistencia:</strong> Consectetur adipiscing elit</li>
                <li><strong>Certificación:</strong> Sed do eiusmod tempor</li>
              </ul>
            </div>
            
          </article>
        </div>
      </div>
    </section>

    <DownloadCTA />
  </div>
</template>

<style scoped>
.page-padding { padding-top: 130px; }

/* ── Hero ──────────────────────────────────────────── */
.catalog-hero {
  padding: 5rem 0 4rem;
  background: linear-gradient(135deg, #dae6df 0%, #c2d5cd 100%);
  border-bottom: 1px solid rgba(0,67,44,0.08);
}

.tag {
  display: inline-flex;
  font-family: var(--font-title);
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-accent);
  background-color: rgba(251, 134, 3, 0.12);
  padding: 0.5rem 1.25rem;
  border-radius: var(--border-radius-full);
  margin-bottom: 1.5rem;
  letter-spacing: 1.5px;
  border: 1px solid rgba(251, 134, 3, 0.2);
}

.catalog-hero h1 {
  font-family: var(--font-title);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 900;
  color: var(--color-primary-dark);
  letter-spacing: -0.03em;
  margin-bottom: 1.25rem;
}

.catalog-hero .lead {
  font-family: var(--font-body);
  font-size: 1.15rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  max-width: 650px;
  margin: 0 auto;
}

/* ── Catalog Section ───────────────────────────────── */
.catalog-section {
  padding: 5rem 0 7rem;
  background-color: var(--color-bg-base);
}

.product-list {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.product-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  background: #ffffff;
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 10px 40px rgba(0, 67, 44, 0.05);
  border: 1px solid rgba(0, 67, 44, 0.06);
  transition: box-shadow 0.3s ease;
  align-items: center;
}

.product-card:hover {
  box-shadow: 0 15px 50px rgba(0, 67, 44, 0.1);
}

/* Left Column: Image */
.product-image-col {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-wrapper {
  background: #f8fbf9;
  border-radius: 20px;
  padding: 2rem;
  width: 100%;
  max-width: 450px;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0,67,44,0.04);
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 15px 25px rgba(0,0,0,0.1));
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.product-card:hover .product-img {
  transform: scale(1.05) translateY(-5px);
}

/* Right Column: Info */
.product-info-col {
  display: flex;
  flex-direction: column;
}

.product-title {
  font-family: var(--font-title);
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-primary-dark);
  line-height: 1.2;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.product-specs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.spec-badge {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 0.35rem 0.8rem;
  border-radius: 6px;
  background: rgba(0, 67, 44, 0.06);
  color: var(--color-text-secondary);
}

.product-desc {
  font-family: var(--font-body);
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.product-divider {
  width: 100%;
  height: 1px;
  background: rgba(0,67,44,0.08);
  margin-bottom: 1.5rem;
}

.technical-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.technical-list li {
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.technical-list li::before {
  content: '✓';
  color: var(--color-accent);
  font-weight: bold;
}

.technical-list strong {
  color: var(--color-text-primary);
  font-weight: 600;
}

/* ── Responsive ────────────────────────────────────── */
@media (max-width: 992px) {
  .product-card {
    gap: 2rem;
    padding: 2rem;
  }
  .product-title {
    font-size: 1.75rem;
  }
}

@media (max-width: 768px) {
  .product-card {
    grid-template-columns: 1fr;
  }
  .image-wrapper {
    max-width: 100%;
    aspect-ratio: 4 / 3;
    padding: 1.5rem;
  }
  .product-title {
    font-size: 1.65rem;
  }
}
</style>
