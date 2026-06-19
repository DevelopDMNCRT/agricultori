<script setup>
import { Icon } from '@iconify/vue'

const catalogProducts = [
  {
    id: 1,
    nombre: 'Mascarilla con Carbón Activado Agricultori Protect',
    imagen: '/mascarilla.jpg',
    tags: ['Protección Respiratoria', 'Uso Agrícola'],
    descripcion: 'Mascarilla de protección respiratoria con dos capas de carbón activado y válvula de exhalación para una respiración más cómoda. Diseñada para ayudar a reducir la exposición a partículas suspendidas, polvo y olores presentes durante actividades agrícolas y aplicaciones de agroquímicos.',
    caracteristicas: [
      '2 capas de carbón activado',
      'Válvula de exhalación de baja resistencia',
      'Eficiencia de filtración superior al 94%',
    ]
  },
  {
    id: 2,
    nombre: 'Overol Desechable Tipo 5/6 Agricultori Protect',
    imagen: '/traje.jpg',
    tags: ['Protección Química', 'Uso Agrícola'],
    descripcion: 'Diseñado para brindar protección confiable durante aplicaciones agrícolas, manejo de agroquímicos y actividades de campo. Su fabricación con costuras selladas ayuda a reducir la exposición a partículas y salpicaduras, mientras que su diseño ligero permite mayor comodidad durante la jornada de trabajo.',
    caracteristicas: [
      'Material microporoso transpirable',
      'Costuras selladas para mayor protección',
      'Certificación Tipo 5/6 y Categoría III',
    ]
  },
  {
    id: 3,
    nombre: 'Guante de Nitrilo Flockline Agricultori Protect',
    imagen: '/guantes.jpg',
    tags: ['Resistencia Química', 'Uso Profesional'],
    descripcion: 'Guante de nitrilo diseñado para trabajos que requieren protección química y resistencia mecánica. Su acabado interior flocado mejora la comodidad durante jornadas prolongadas, mientras que el relieve antiderrapante proporciona un mejor agarre en ambientes húmedos o secos.',
    caracteristicas: [
      'Nitrilo 100% libre de látex',
      'Espesor de 18 milésimas',
      'Protección química y mecánica certificada',
    ]
  },
]
</script>

<template>
  <div class="page-wrapper">
    <!-- ── Hero Section Boxed ──────────────────────────────── -->
    <div class="hero-container">
      <div class="container">
        <section class="catalog-hero-boxed">
          <div class="hero-overlay"></div>
          <div class="hero-content text-center">
            <span class="tag">Catálogo</span>
            <h1>Nuestros Productos</h1>
            <p class="lead">
              Conoce nuestra línea de equipos y tecnología de protección diseñada específicamente para el agricultor moderno y sus exigencias diarias.
            </p>
          </div>
        </section>
      </div>
    </div>

    <!-- ── Product Catalog Grid ──────────────────────── -->
    <section class="catalog-section">
      <div class="container">

        <div class="product-list">
          <!-- Card 2-Columns -->
          <article
            v-for="(product, index) in catalogProducts"
            :key="product.id"
            class="product-card"
            :class="{ 'reverse': index % 2 !== 0 }"
          >

            <!-- Columna Izquierda: Imagen -->
            <div class="product-image-col">
              <div class="image-wrapper">
                <img :src="product.imagen" :alt="product.nombre" class="product-img" loading="lazy" />
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
                <li v-for="item in product.caracteristicas" :key="item">{{ item }}</li>
              </ul>
            </div>

          </article>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>
.page-wrapper { 
  display: flex;
  flex-direction: column;
  background-color: var(--color-bg-base);
}

.hero-container {
  padding-top: 150px; /* Space for fixed header */
  background-color: var(--color-bg-base);
}

/* ── Hero Boxed ──────────────────────────────────────────── */
.catalog-hero-boxed {
  position: relative;
  margin-top: 15px;
  padding: 6rem 2rem;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  background-image: url('/slide-productos-1.jpg');
  background-size: cover;
  background-position: center;
  box-shadow: var(--shadow-lg);
}

.hero-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(to bottom, rgba(0,25,15,0.3) 0%, rgba(0,67,44,0.85) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.tag {
  display: inline-flex;
  font-family: var(--font-title);
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-accent);
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  padding: 0.5rem 1.25rem;
  border-radius: var(--border-radius-full);
  margin-bottom: 1.5rem;
  letter-spacing: 1.5px;
  border: 1px solid rgba(251, 134, 3, 0.4);
}

.catalog-hero-boxed h1 {
  font-family: var(--font-title);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  color: #ffffff;
  letter-spacing: -0.03em;
  margin-bottom: 1.25rem;
  text-shadow: 0 4px 15px rgba(0,0,0,0.3);
}

.catalog-hero-boxed .lead {
  font-family: var(--font-body);
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  max-width: 650px;
  margin: 0 auto;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
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

/* ── Alternating card layout ──────────────────────── */
.product-card.reverse {
  direction: rtl;
}

.product-card.reverse > * {
  direction: ltr;
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
