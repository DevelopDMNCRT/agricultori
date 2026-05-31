<script setup>
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import DownloadCTA from '../components/DownloadCTA.vue'

const API_URL = 'http://localhost:3000/api/productos'
const products = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await fetch(API_URL)
    const data = await res.json()
    products.value = data
  } catch (error) {
    console.error('Error fetching productos:', error)
  } finally {
    loading.value = false
  }
})
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
        
        <div v-if="loading" class="text-center py-12">
          <Icon icon="eos-icons:loading" width="48" height="48" class="text-primary mx-auto" style="color: var(--color-primary);" />
          <p class="mt-4" style="color: var(--color-text-secondary); font-weight: 500;">Cargando catálogo de productos...</p>
        </div>

        <div v-else-if="products.length === 0" class="text-center py-12">
          <Icon icon="ph:package-duotone" width="64" height="64" class="mx-auto" style="color: #a0b0a8; margin-bottom: 1rem;" />
          <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem; color: var(--color-primary-dark);">Catálogo en preparación</h2>
          <p style="color: var(--color-text-secondary);">Próximamente agregaremos nuestros productos a esta sección.</p>
        </div>

        <div v-else class="product-list">
          <!-- Card 2-Columns -->
          <article v-for="product in products" :key="product.id" class="product-card">
            
            <!-- Columna Izquierda: Imagen -->
            <div class="product-image-col">
              <div class="image-wrapper">
                <img :src="product.foto_url || '/logo.png'" :alt="product.nombre" class="product-img" loading="lazy" />
              </div>
            </div>

            <!-- Columna Derecha: Descripción Técnica -->
            <div class="product-info-col">
              <h2 class="product-title">{{ product.nombre }}</h2>
              <div class="product-specs">
                <span v-for="tag in product.tags" :key="tag" class="spec-badge">{{ tag }}</span>
              </div>
              <p class="product-desc">{{ product.descripcion }}</p>
              
              <div class="product-divider"></div>
              
              <ul class="technical-list">
                <li v-if="product.material"><strong>Material:</strong> {{ product.material }}</li>
                <li v-if="product.resistencia"><strong>Resistencia:</strong> {{ product.resistencia }}</li>
                <li v-if="product.certificacion"><strong>Certificación:</strong> {{ product.certificacion }}</li>
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
