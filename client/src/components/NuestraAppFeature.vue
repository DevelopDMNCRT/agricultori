<template>
  <section class="qsf-section" aria-label="Lo que nos define">
    <div class="container">
      <!-- Section label -->
      <div class="qsf-label-row">
        <div class="qsf-label-line" aria-hidden="true"></div>
        <span class="qsf-eyebrow">La única app en el país que te ofrece los siguientes servicios gratuitos</span>
        <div class="qsf-label-line" aria-hidden="true"></div>
      </div>

      <!-- Main grid -->
      <div class="qsf-grid">
        <template v-for="(pair, index) in featurePairs" :key="index">
          
          <!-- Left Block -->
          <div class="qsf-block qsf-block-left">
            <!-- Image -->
            <div class="qsf-img-wrap">
              <div :class="['qsf-ring', `qsf-ring-${pair[0].theme}`]" aria-hidden="true"></div>
              <div :class="['qsf-img-card', pair[0].theme === 'amber' ? 'qsf-img-card-amber' : '']">
                <img :src="pair[0].image" :alt="pair[0].imageAlt" class="qsf-img" loading="lazy" />
                <div :class="['qsf-chip', `qsf-chip-${pair[0].theme}`]">
                  <span :class="['qsf-chip-dot', pair[0].theme === 'amber' ? 'qsf-chip-dot-amber' : '']"></span>
                  {{ pair[0].chip }}
                </div>
              </div>
              <div class="qsf-stat-float qsf-stat-left">
                <span :class="['qsf-stat-num', pair[0].theme === 'amber' ? 'qsf-num-amber' : '']">{{ pair[0].statNum }}</span>
                <div class="qsf-stat-text">
                  <span class="qsf-stat-title">{{ pair[0].statTitle }}</span>
                  <span class="qsf-stat-sub">{{ pair[0].statSub }}</span>
                </div>
              </div>
            </div>

            <!-- Text -->
            <div class="qsf-text">
              <h3 class="qsf-title" v-html="pair[0].title"></h3>
              <p class="qsf-desc">{{ pair[0].desc }}</p>
              <ul class="qsf-list">
                <li v-for="bullet in pair[0].bullets" :key="bullet">
                  <span :class="['qsf-list-dot', `qsf-dot-${pair[0].theme}`]"></span>
                  {{ bullet }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Vertical divider -->
          <div class="qsf-vdivider" aria-hidden="true">
            <div class="qsf-vline"></div>
            <div class="qsf-vdot"></div>
            <div class="qsf-vline"></div>
          </div>

          <!-- Right Block -->
          <div class="qsf-block qsf-block-right" v-if="pair[1]">
            <!-- Text (left of image on this block) -->
            <div class="qsf-text">
              <h3 class="qsf-title" v-html="pair[1].title"></h3>
              <p class="qsf-desc">{{ pair[1].desc }}</p>
              <ul class="qsf-list">
                <li v-for="bullet in pair[1].bullets" :key="bullet">
                  <span :class="['qsf-list-dot', `qsf-dot-${pair[1].theme}`]"></span>
                  {{ bullet }}
                </li>
              </ul>
            </div>

            <!-- Image -->
            <div class="qsf-img-wrap">
              <div :class="['qsf-ring', `qsf-ring-${pair[1].theme}`]" aria-hidden="true"></div>
              <div :class="['qsf-img-card', pair[1].theme === 'amber' ? 'qsf-img-card-amber' : '']">
                <!-- Using qsf-img instead of qsf-img-contain here for consistency across all generic photos -->
                <img :src="pair[1].image" :alt="pair[1].imageAlt" class="qsf-img" loading="lazy" />
                <div :class="['qsf-chip', `qsf-chip-${pair[1].theme}`]">
                  <span :class="['qsf-chip-dot', pair[1].theme === 'amber' ? 'qsf-chip-dot-amber' : '']"></span>
                  {{ pair[1].chip }}
                </div>
              </div>
              <div class="qsf-stat-float qsf-stat-right">
                <span :class="['qsf-stat-num', pair[1].theme === 'amber' ? 'qsf-num-amber' : '']">{{ pair[1].statNum }}</span>
                <div class="qsf-stat-text">
                  <span class="qsf-stat-title">{{ pair[1].statTitle }}</span>
                  <span class="qsf-stat-sub">{{ pair[1].statSub }}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="qsf-block" v-else></div>

        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const features = ref([
  {
    title: 'Productos <em class="qsf-em">Autorizados</em>',
    desc: 'Es una sección donde te daremos a conocer los productos agroquímicos autorizados para la exportación de tu fruta, también para que puedas buscar los productos que tengan el mismo ingrediente activo o técnico.',
    image: '/01.jpeg',
    imageAlt: 'Productos Agroquímicos',
    theme: 'green',
    chip: 'Agroquímicos',
    statNum: 'LMR',
    statTitle: 'Límites',
    statSub: 'FDA / EPA / Senasica',
    bullets: ['Ingredientes activos', 'Búsqueda por técnico', 'Filtros de exportación']
  },
  {
    title: 'Precios al <em class="qsf-em qsf-em-amber">Día</em>',
    desc: 'En esta sección te informaremos los precios al día, ya que a muchos se nos complica tener esa información de comercialización a la mano.',
    image: '/02.jpeg',
    imageAlt: 'Precios de Mercado',
    theme: 'amber',
    chip: 'Mercado',
    statNum: '$',
    statTitle: 'Precios',
    statSub: 'al día en tu huerta',
    bullets: ['Precios en origen', 'Tendencias de mercado', 'Transparencia total']
  },
  {
    title: 'Empaques <em class="qsf-em">Certificados</em>',
    desc: 'En esta sección podrás conocer los empaques que están autorizados para procesar y comercializar la fruta hacia los Estados Unidos sin demoras.',
    image: '/03.jpeg',
    imageAlt: 'Empaques de Exportación',
    theme: 'green',
    chip: 'Exportación',
    statNum: 'USDA',
    statTitle: 'Acreditados',
    statSub: 'Cruce internacional',
    bullets: ['Directorio USDA/FDA', 'Empaques validados', 'Ubicación y contacto']
  },
  {
    title: 'Trabajo <em class="qsf-em qsf-em-amber">Diario</em>',
    desc: 'Mantén una organización impecable con el apartado de pendientes y tareas programadas que tienes que hacer para tu huerta.',
    image: '/04.jpeg',
    imageAlt: 'Trabajo Diario',
    theme: 'amber',
    chip: 'Organización',
    statNum: '✓',
    statTitle: 'Bitácora',
    statSub: 'de actividades',
    bullets: ['Lista de tareas', 'Control de huerta', 'Alertas y pendientes']
  },
  {
    title: 'Requisitos de <em class="qsf-em">Certificación</em>',
    desc: 'Si deseas certificar tu huerta, te daremos la información necesaria para registrarla en Global GAP y SENASICA, así como los requisitos indispensables para iniciar tus trámites.',
    image: '/05.jpeg',
    imageAlt: 'Certificación Agrícola',
    theme: 'green',
    chip: 'Normativa',
    statNum: 'GAP',
    statTitle: 'Global GAP',
    statSub: 'y SENASICA',
    bullets: ['Guía de trámites', 'Requisitos de infraestructura', 'Checklist de auditoría']
  },
  {
    title: 'Bitácoras de <em class="qsf-em qsf-em-amber">Control</em>',
    desc: 'Sabemos lo importante que es llevar tus bitácoras al día. Te facilitamos las plantillas que necesitas y ejemplos prácticos sobre cómo llenarlas correctamente.',
    image: '/06.jpeg',
    imageAlt: 'Bitácoras de Control',
    theme: 'amber',
    chip: 'Registros',
    statNum: 'DOC',
    statTitle: 'Plantillas',
    statSub: 'fáciles de llenar',
    bullets: ['Ejemplos prácticos', 'Formatos oficiales', 'Historial organizado']
  },
  {
    title: 'Brújula y <em class="qsf-em">Altímetro</em>',
    desc: 'Utiliza las herramientas de orientación y altitud sobre el nivel del mar en tiempo real para planificar y estructurar el trazo de tus huertas con precisión GPS.',
    image: '/brujula.jpeg',
    imageAlt: 'Brújula y Altímetro',
    theme: 'green',
    chip: 'Navegación',
    statNum: 'GPS',
    statTitle: 'Altitud',
    statSub: 'precisión satelital',
    bullets: ['Medición en metros (msnm)', 'Orientación de surcos', 'Guardado de coordenadas']
  },
  {
    title: 'Agricomercio <em class="qsf-em qsf-em-amber">Directo</em>',
    desc: 'Conecta con compradores y proveedores de insumos del campo, eliminando intermediarios para conseguir mejores precios en semillas, fertilizantes, cosechas y más.',
    image: '/agricomercio.jpeg',
    imageAlt: 'Agricomercio',
    theme: 'amber',
    chip: 'Agricomercio',
    statNum: '1to1',
    statTitle: 'Trato directo',
    statSub: 'sin intermediarios',
    bullets: ['Precios competitivos', 'Directorio de proveedores', 'Negociación directa']
  }
])

const featurePairs = computed(() => {
  const pairs = []
  for (let i = 0; i < features.value.length; i += 2) {
    pairs.push([features.value[i], features.value[i + 1]])
  }
  return pairs
})
</script>

<style scoped>
/* ── Section ───────────────────────────────────────── */
.qsf-section {
  padding: 6rem 0 7rem;
  background: var(--color-bg-soft, #f1f6f3);
  position: relative;
  overflow: hidden;
}

.qsf-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 50% at 15% 80%, rgba(0, 67, 44, 0.06) 0%, transparent 70%),
    radial-gradient(ellipse 50% 60% at 85% 20%, rgba(251, 134, 3, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

/* ── Label row ─────────────────────────────────────── */
.qsf-label-row {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 4rem;
  justify-content: center;
}

.qsf-label-line {
  flex: 1;
  max-width: 200px;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(0,67,44,0.15));
}

.qsf-label-row .qsf-label-line:last-child {
  background: linear-gradient(to left, transparent, rgba(0,67,44,0.15));
}

.qsf-eyebrow {
  font-family: var(--font-title);
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--color-primary);
  white-space: nowrap;
  opacity: 0.5;
}

/* ── Main grid ─────────────────────────────────────── */
.qsf-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  row-gap: 160px;
  column-gap: 0;
  align-items: center;
}

/* ── Feature block ─────────────────────────────────── */
.qsf-block {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0 3rem;
}

.qsf-block-left {
  align-items: flex-start;
}

.qsf-block-right {
  align-items: flex-start;
}

/* ── Image wrap ────────────────────────────────────── */
.qsf-img-wrap {
  position: relative;
  width: 100%;
}

/* Decorative ring behind card */
.qsf-ring {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.qsf-ring-green {
  width: 320px;
  height: 320px;
  top: -40px;
  left: -40px;
  background: radial-gradient(circle, rgba(0,67,44,0.08) 0%, transparent 70%);
}

.qsf-ring-amber {
  width: 320px;
  height: 320px;
  top: -40px;
  right: -40px;
  left: auto;
  background: radial-gradient(circle, rgba(251,134,3,0.08) 0%, transparent 70%);
}

/* Image card */
.qsf-img-card {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  background: #ffffff;
  box-shadow:
    0 4px 6px rgba(0,67,44,0.04),
    0 20px 40px rgba(0,67,44,0.1),
    0 0 0 1px rgba(0,67,44,0.06);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease;
}

.qsf-img-card:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow:
    0 8px 12px rgba(0,67,44,0.06),
    0 30px 60px rgba(0,67,44,0.14),
    0 0 0 1px rgba(0,67,44,0.08);
}

.qsf-img-card-amber {
  box-shadow:
    0 4px 6px rgba(251,134,3,0.05),
    0 20px 40px rgba(251,134,3,0.1),
    0 0 0 1px rgba(251,134,3,0.08);
}

.qsf-img-card-amber:hover {
  box-shadow:
    0 8px 12px rgba(251,134,3,0.07),
    0 30px 60px rgba(251,134,3,0.15),
    0 0 0 1px rgba(251,134,3,0.1);
}

.qsf-img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* quienes-2 is an infographic — show full */
.qsf-img-contain {
  object-fit: contain;
  height: 280px;
  padding: 1rem;
  background: #fafafa;
}

/* Overlay chip badge */
.qsf-chip {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 67, 44, 0.12);
  border-radius: 999px;
  padding: 0.3rem 0.85rem 0.3rem 0.5rem;
  font-family: var(--font-title);
  font-size: 0.7rem;
  font-weight: 800;
  color: var(--color-primary-dark);
  letter-spacing: 0.3px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.qsf-chip-amber {
  border-color: rgba(251, 134, 3, 0.2);
  color: var(--color-accent-dark, #d47000);
}

.qsf-chip-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4caf50;
  animation: qsf-pulse 2s ease-in-out infinite;
}

.qsf-chip-dot-amber {
  background: #FB8603;
}

@keyframes qsf-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Floating stat card */
.qsf-stat-float {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: var(--color-primary-dark, #002619);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 0.65rem 1rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
  z-index: 10;
  animation: float-bob 6s ease-in-out infinite;
}

.qsf-stat-left {
  bottom: -1.2rem;
  right: -1.5rem;
  animation-delay: 0s;
}

.qsf-stat-right {
  bottom: -1.2rem;
  left: -1.5rem;
  animation-delay: 1.5s;
}

@keyframes float-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

.qsf-stat-num {
  font-family: var(--font-title);
  font-size: 1.4rem;
  font-weight: 900;
  color: #4caf50;
  line-height: 1;
}

.qsf-num-amber { color: #FB8603; }

.qsf-stat-text {
  display: flex;
  flex-direction: column;
}

.qsf-stat-title {
  font-family: var(--font-title);
  font-size: 0.75rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.1;
}

.qsf-stat-sub {
  font-family: var(--font-body);
  font-size: 0.65rem;
  color: rgba(255,255,255,0.45);
  line-height: 1.2;
}

/* ── Text block ────────────────────────────────────── */
.qsf-text {
  padding-bottom: 1rem;
}

.qsf-title {
  font-family: var(--font-title);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 900;
  color: var(--color-primary-dark);
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
}

.qsf-em {
  font-style: normal;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.qsf-em-amber {
  background: linear-gradient(135deg, #FB8603 0%, #ffb865 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.qsf-desc {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
  max-width: 420px;
}

.qsf-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.qsf-list li {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text-secondary);
}

.qsf-list-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.qsf-dot-green { background: var(--color-primary-light); }
.qsf-dot-amber { background: #FB8603; }

/* ── Vertical divider ──────────────────────────────── */
.qsf-vdivider {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  padding: 0 1rem;
  height: 400px;
}

.qsf-vline {
  flex: 1;
  width: 1px;
  background: linear-gradient(to bottom, transparent, rgba(0,67,44,0.15), transparent);
}

.qsf-vdot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-accent);
  box-shadow: 0 0 12px rgba(251,134,3,0.4);
  flex-shrink: 0;
}

/* ── Responsive ────────────────────────────────────── */
@media (max-width: 1024px) {
  .qsf-block { padding: 0 1.5rem; }
}

@media (max-width: 860px) {
  .qsf-grid {
    grid-template-columns: 1fr;
    gap: 4rem;
  }

  .qsf-vdivider { display: none; }

  .qsf-block {
    padding: 0;
    gap: 2rem;
  }

  .qsf-block-right {
    flex-direction: column-reverse;
  }

  .qsf-stat-left,
  .qsf-stat-right {
    right: -0.5rem;
    left: auto;
    bottom: -0.8rem;
  }

  .qsf-stat-right {
    left: -0.5rem;
    right: auto;
  }

  .qsf-img { height: 240px; }
  .qsf-img-contain { height: 240px; }
}

@media (max-width: 480px) {
  .qsf-section { padding: 4rem 0 5rem; }
  .qsf-img { height: 200px; }
  .qsf-img-contain { height: 200px; }
  .qsf-stat-float { display: none; }
}
</style>
