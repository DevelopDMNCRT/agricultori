<script setup>
import { Icon } from '@iconify/vue'

const products = [
  {
    id: 1,
    nombre: 'Mascarilla con Carbón Activado',
    marca: 'Agricultori Protect',
    imagen: '/mascarilla.jpg',
    categoria: 'Protección Respiratoria',
    badge: 'Alta Filtración >94%',
    resumen: 'Mascarilla con 2 capas de carbón activado y válvula de exhalación para máxima seguridad contra agroquímicos.',
    caracteristicaDestacada: 'Válvula de baja resistencia'
  },
  {
    id: 2,
    nombre: 'Overol Desechable Tipo 5/6',
    marca: 'Agricultori Protect',
    imagen: '/traje.jpg',
    categoria: 'Protección Corporal',
    badge: 'Certificación Tipo 5/6',
    resumen: 'Diseño ligero y microporoso transpirable con costuras selladas para protección contra salpicaduras.',
    caracteristicaDestacada: 'Costuras termoselladas'
  },
  {
    id: 3,
    nombre: 'Guante de Nitrilo Flockline',
    marca: 'Agricultori Protect',
    imagen: '/guantes.jpg',
    categoria: 'Protección Manual',
    badge: '18 milésimas de espesor',
    resumen: 'Resistencia química y mecánica superior. Acabado flocado para comodidad y relieve antiderrapante.',
    caracteristicaDestacada: '100% libre de látex'
  }
]
</script>

<template>
  <section class="home-products-section">
    <div class="container">
      
      <!-- Section Header -->
      <div class="section-header">
        <span class="tag">
          <Icon icon="lucide:shopping-bag" class="tag-icon" />
          Nuestros Productos
        </span>
        <h2>Equipos de Protección Premium</h2>
        <p>
          Línea especializada para el agricultor de hoy. Seguridad certificada para optimizar tus actividades diarias en el campo y cumplir con las normas de exportación.
        </p>
      </div>

      <!-- Products Grid -->
      <div class="products-grid">
        <article 
          v-for="product in products" 
          :key="product.id"
          class="ecommerce-card"
        >
          <!-- Card Header & Badge -->
          <div class="card-image-wrapper">
            <span class="product-badge">{{ product.badge }}</span>
            <img :src="product.imagen" :alt="product.nombre" class="product-image" loading="lazy" />
          </div>

          <!-- Card Content -->
          <div class="card-content">
            <span class="product-category">{{ product.categoria }}</span>
            <h3 class="product-title">{{ product.nombre }}</h3>
            <span class="product-brand">{{ product.marca }}</span>
            
            <p class="product-summary">{{ product.resumen }}</p>
            
            <div class="product-feature-tag">
              <Icon icon="lucide:shield-check" class="feature-icon" />
              <span>{{ product.caracteristicaDestacada }}</span>
            </div>
            
            <div class="card-footer">
              <div class="status-indicator">
                <span class="status-dot"></span>
                <span class="status-text">Disponible</span>
              </div>
              <router-link to="/productos" class="cta-button-link">
                <span>Ver Detalles</span>
                <Icon icon="lucide:arrow-right" class="arrow-icon" />
              </router-link>
            </div>
          </div>
        </article>
      </div>

      <!-- Section Footer Link -->
      <div class="section-footer">
        <router-link to="/productos" class="btn btn-primary">
          <span>Explorar Catálogo Completo</span>
          <Icon icon="lucide:arrow-right" />
        </router-link>
      </div>

    </div>
  </section>
</template>

<style scoped>
.home-products-section {
  padding: 6rem 0;
  background-color: var(--color-bg-base);
  position: relative;
  overflow: hidden;
}

.home-products-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 10%;
  width: 80%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 67, 44, 0.08), transparent);
}

.tag-icon {
  font-size: 0.95rem;
}

/* Products Grid Layout */
.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-top: 1rem;
}

/* Premium E-commerce Card */
.ecommerce-card {
  background: var(--color-bg-surface);
  border-radius: var(--border-radius-lg);
  border: 1px solid rgba(0, 67, 44, 0.05);
  box-shadow: 0 10px 30px rgba(0, 67, 44, 0.03);
  transition: var(--transition-bounce);
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.ecommerce-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 45px rgba(0, 67, 44, 0.08);
  border-color: rgba(0, 67, 44, 0.12);
}

/* Image Container */
.card-image-wrapper {
  background: #fcfefe;
  padding: 2.5rem;
  position: relative;
  aspect-ratio: 1.1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 67, 44, 0.03);
  overflow: hidden;
}

.product-image {
  width: 85%;
  height: 85%;
  object-fit: contain;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.06));
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.ecommerce-card:hover .product-image {
  transform: scale(1.08) translateY(-4px);
}

/* Badge on Image */
.product-badge {
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  font-family: var(--font-title);
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #ffffff;
  background-color: var(--color-accent);
  padding: 0.4rem 0.9rem;
  border-radius: var(--border-radius-sm);
  letter-spacing: 0.5px;
  box-shadow: 0 4px 10px rgba(251, 134, 3, 0.25);
  z-index: 2;
}

/* Card Content Area */
.card-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.product-category {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-text-muted);
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
}

.product-title {
  font-family: var(--font-title);
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--color-primary-dark);
  line-height: 1.25;
  margin-bottom: 0.25rem;
}

.product-brand {
  font-family: var(--font-body);
  font-size: 0.8rem;
  color: var(--color-primary-light);
  font-weight: 600;
  margin-bottom: 1.25rem;
}

.product-summary {
  font-family: var(--font-body);
  font-size: 0.92rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

/* Feature Badge */
.product-feature-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background-color: rgba(0, 67, 44, 0.04);
  border: 1px solid rgba(0, 67, 44, 0.05);
  padding: 0.5rem 0.9rem;
  border-radius: var(--border-radius-sm);
  margin-bottom: 1.75rem;
  width: fit-content;
}

.product-feature-tag span {
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-primary-light);
}

.feature-icon {
  font-size: 0.95rem;
  color: var(--color-accent);
}

/* Card Footer */
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(0, 67, 44, 0.05);
  padding-top: 1.25rem;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.status-dot {
  width: 7px;
  height: 7px;
  background-color: var(--color-success);
  border-radius: 50%;
  box-shadow: 0 0 6px rgba(46, 125, 50, 0.5);
}

.status-text {
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-text-secondary);
}

.cta-button-link {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-family: var(--font-title);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-accent);
  transition: var(--transition-smooth);
}

.cta-button-link:hover {
  color: var(--color-accent-dark);
}

.arrow-icon {
  font-size: 0.95rem;
  transition: transform 0.3s ease;
}

.cta-button-link:hover .arrow-icon {
  transform: translateX(4px);
}

/* Section Footer CTA */
.section-footer {
  margin-top: 4rem;
  display: flex;
  justify-content: center;
}

.section-footer .btn {
  box-shadow: var(--shadow-md);
}

.section-footer .btn:hover {
  box-shadow: var(--shadow-lg);
}

/* Responsive Styles */
@media (max-width: 992px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.75rem;
  }
}

@media (max-width: 768px) {
  .home-products-section {
    padding: 4rem 0;
  }
  
  .products-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .card-image-wrapper {
    aspect-ratio: 1.3 / 1;
  }
}
</style>
