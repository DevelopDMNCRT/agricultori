<script setup>
import { ref, computed } from 'vue'

const categories = ref([
  {
    id: 'perimetro',
    icon: '🌿',
    title: 'Perímetro y Acceso',
    color: 'green',
    items: [
      { id: 'p1',  text: 'Perímetro cercado bien definido (alambre de púas, malla, pinos o palos)' },
      { id: 'p2',  text: 'Puerta de entrada (falsete, portón o puerta de malla) siempre cerrada con candado' },
      { id: 'p3',  text: 'Letrero: Mantener la puerta cerrada' },
      { id: 'p4',  text: 'Letrero: Prohibido el paso a personas no autorizadas' },
      { id: 'p5',  text: 'Letrero: Reglamento interno de la huerta' },
      { id: 'p6',  text: 'Letrero: Prohibido cazar' },
      { id: 'p7',  text: 'Letrero: Prohibido talar' },
      { id: 'p8',  text: 'Letrero de campo recién fumigado (puede taparse/destapase según el caso)' },
      { id: 'p9',  text: 'Letrero de área de carga (si se carga fruta en la entrada)' },
    ]
  },
  {
    id: 'cargadero',
    icon: '🚜',
    title: 'Cargadero',
    color: 'amber',
    items: [
      { id: 'c1',  text: 'Cargadero de cemento con medidas para tractor/camioneta + fosa para residuos tóxicos' },
      { id: 'c2',  text: 'Base para manguera / tambo o pipa de manera cómoda' },
      { id: 'c3',  text: 'Escoba o cepillo para higiene del cargadero, marcado con plumón o cinta indicando su área' },
      { id: 'c4',  text: 'Letrero grande de cargadero con señalización de: Área de mezcla de agroquímicos' },
      { id: 'c5',  text: 'Señalización: Usa el equipo de protección personal' },
      { id: 'c6',  text: 'Señalización: No comer, no fumar, no beber' },
      { id: 'c7',  text: 'Señalización: Haz triple lavado de envases y repite proceso' },
      { id: 'c8',  text: 'Señalización: Procedimientos en caso de intoxicación' },
      { id: 'c9',  text: 'Señalización: Peligro sustancias tóxicas' },
      { id: 'c10', text: 'Señalización: Eliminación de caldos sobrantes' },
      { id: 'c11', text: 'Señalización: Higiene y desinfección del área de preparación de mezcla de agroquímicos' },
      { id: 'c12', text: 'Señalización: Teléfonos de emergencia del municipio' },
      { id: 'c13', text: 'Señalización: Número de emergencia 911' },
      { id: 'c14', text: 'Jaula de envases vacíos de metal con candado y letrero "Almacén de envases vacíos"' },
      { id: 'c15', text: 'Bote de basura enumerado a un costado del cargadero' },
      { id: 'c16', text: 'Letrero en jaula: Peligro producto tóxico' },
      { id: 'c17', text: 'Tambo o recipiente >40 litros con agua potable y regadera para lavado de ojos' },
      { id: 'c18', text: 'Letrero en tambo/base: Lavajos de emergencia' },
    ]
  },
  {
    id: 'bodega',
    icon: '🧪',
    title: 'Bodega de Agroquímicos',
    color: 'red',
    items: [
      { id: 'b1',  text: 'Base de cemento lavable, cerrada de malla o tabique con candado' },
      { id: 'b2',  text: 'Contorno con tabique (para contener derrames líquidos)' },
      { id: 'b3',  text: 'Techada de lámina o fierro' },
      { id: 'b4',  text: 'Bote lleno de grava y pala para residuos líquidos' },
      { id: 'b5',  text: 'Aparador de plástico de varios niveles para restantes de químicos' },
      { id: 'b6',  text: 'Ratonera enumerada' },
      { id: 'b7',  text: 'Caja de plástico con tapa para equipo de fumigación (etiquetada como peligro tóxico)' },
      { id: 'b8',  text: 'Escoba exclusiva para limpiar el área, marcada como tal' },
      { id: 'b9',  text: 'Letrero: Prohibido el paso a personas no autorizadas' },
      { id: 'b10', text: 'Letrero: Usa el equipo de protección personal' },
      { id: 'b11', text: 'Letrero: Trampa para roedores (con número de ratonera)' },
      { id: 'b12', text: 'Letrero: Almacén de agroquímicos' },
      { id: 'b13', text: 'Letrero: Peligro sustancias tóxicas' },
      { id: 'b14', text: 'Letrero: Material para contener derrames' },
      { id: 'b15', text: 'Letrero: No comer, no beber, no fumar' },
      { id: 'b16', text: 'Letrero: Teléfonos de emergencia del municipio' },
      { id: 'b17', text: 'Letrero: Qué hacer en caso de intoxicación' },
    ]
  },
  {
    id: 'olla',
    icon: '💧',
    title: 'Olla de Almacenamiento de Agua',
    color: 'blue',
    items: [
      { id: 'o1', text: 'Cercada de malla con puerta y candado, siempre cerrada' },
      { id: 'o2', text: 'Letrero en puerta: Prohibido el paso a personas no autorizadas' },
      { id: 'o3', text: 'Letrero en puerta: Entrar siempre acompañado al revisar la olla' },
      { id: 'o4', text: 'Letrero: Olla de almacenamiento de agua' },
      { id: 'o5', text: 'Letrero con número de olla (si hay más de una)' },
      { id: 'o6', text: 'Letrero de soga de auxilio a costado de la puerta + soga física en bote accesible' },
      { id: 'o7', text: 'Flotis en el agua' },
      { id: 'o8', text: 'Chaleco salvavidas al lado de la olla con letrero' },
      { id: 'o9', text: 'Letreros de "Peligro piso resbaloso" visibles (en temporada de llenado con hules)' },
    ]
  },
  {
    id: 'fertilizantes',
    icon: '🌱',
    title: 'Área de Fertilizantes',
    color: 'green',
    items: [
      { id: 'f1', text: 'Bodega cerrada con tabique, piso de grava y base de cemento o metal para fertilizante' },
      { id: 'f2', text: 'Techada de cemento o lámina' },
      { id: 'f3', text: 'Letrero: Área de Fertilizantes' },
      { id: 'f4', text: 'Base de cemento lavable con contorno de tabique (~80–90 cm) y puerta de fierro/malla' },
      { id: 'f5', text: 'Área exterior de la puerta cubierta con grava para contención de líquidos' },
    ]
  },
  {
    id: 'comedor',
    icon: '🍽️',
    title: 'Comedor',
    color: 'amber',
    items: [
      { id: 'co1', text: 'Área cubierta (cemento o lámina) con puerta de fierro/malla cerrada con candado' },
      { id: 'co2', text: 'Bancas con mesa de cemento, madera o fierro para colaboradores' },
      { id: 'co3', text: 'Fogón de cemento con parte superior de fierro para calentar comida' },
      { id: 'co4', text: 'Área de almacenamiento para cepillo de limpieza del fogón' },
      { id: 'co5', text: 'Bote de plástico grande con tapa para productos de limpieza (escrito su contenido)' },
      { id: 'co6', text: 'Escoba y cepillo exclusivos para el área, etiquetados' },
      { id: 'co7', text: 'Botiquín de emergencia' },
      { id: 'co8', text: 'Bote de basura enumerado' },
      { id: 'co9', text: 'Ratonera enumerada' },
      { id: 'co10', text: 'Letrero: Comedor' },
      { id: 'co11', text: 'Letrero: Coloca la basura en su lugar' },
      { id: 'co12', text: 'Letrero: Mantener esta área limpia' },
      { id: 'co13', text: 'Letrero: Procedimiento de primeros auxilios, resucitación y cortadas' },
      { id: 'co14', text: 'Letrero: Teléfonos de emergencia del municipio' },
      { id: 'co15', text: 'Letrero: Botiquín de emergencia' },
      { id: 'co16', text: 'Letrero: Área de descanso' },
      { id: 'co17', text: 'Letrero: Área de registro' },
      { id: 'co18', text: 'Letrero: Objetos personales' },
    ]
  },
  {
    id: 'sanitarios',
    icon: '🚿',
    title: 'Sanitarios',
    color: 'blue',
    items: [
      { id: 's1',  text: 'Un baño por cada 5 hectáreas' },
      { id: 's2',  text: 'Construcción de cemento (bardas y techo de cemento) con puerta de fierro' },
      { id: 's3',  text: 'Coladera y fosa séptica' },
      { id: 's4',  text: 'Tinaco en la parte superior con escalera de acceso' },
      { id: 's5',  text: 'Taza de baño, lavamanos, y regadera de emergencia' },
      { id: 's6',  text: 'Agua potable disponible para lavado de manos' },
      { id: 's7',  text: 'Gel antibacterial' },
      { id: 's8',  text: 'Bote de basura con pedal' },
      { id: 's9',  text: 'Dispensador de toalla de papel para secar manos' },
      { id: 's10', text: 'Bote con tapa para productos de limpieza del baño' },
      { id: 's11', text: 'Escoba y cepillo exclusivos para el área' },
      { id: 's12', text: 'Dispensador de jabón (etiquetado como jabón para manos, neutro y sin olor)' },
      { id: 's13', text: 'Destapacaños y cepillo para taza' },
      { id: 's14', text: 'Pestaña inferior en puerta para retener líquidos dentro del baño' },
      { id: 's15', text: 'Letrero: Sanitarios' },
      { id: 's16', text: 'Letrero: Deposite la basura en el cesto' },
      { id: 's17', text: 'Letrero: Regadera de emergencia' },
      { id: 's18', text: 'Letrero: Lávate las manos antes y después de usar el baño' },
      { id: 's19', text: 'Letrero: Técnica del lavado de manos' },
      { id: 's20', text: 'Letrero: Cuidado con las escaleras' },
    ]
  },
  {
    id: 'herramientas',
    icon: '🔧',
    title: 'Almacén de Herramientas',
    color: 'gray',
    items: [
      { id: 'h1', text: 'Construcción de cemento cerrada con tabique, techo de lámina y puerta de fierro o malla' },
      { id: 'h2', text: 'Ratonera enumerada' },
      { id: 'h3', text: 'Caja de plástico con tapa para productos de limpieza' },
      { id: 'h4', text: 'Escoba exclusiva para limpieza del área' },
      { id: 'h5', text: 'Letrero: Almacén de herramientas' },
      { id: 'h6', text: 'Letrero: Prohibido el paso a personas no autorizadas' },
      { id: 'h7', text: 'Letrero: Prohibido el paso a mujeres embarazadas y personas mayores' },
      { id: 'h8', text: 'Letrero: Artículos de limpieza' },
      { id: 'h9', text: 'Letrero: Uso exclusivo de herramientas para caja' },
      { id: 'h10', text: 'Letrero: Trampa para ratones (con número de ratonera)' },
      { id: 'h11', text: 'Letrero: Coloca la basura en su lugar' },
    ]
  }
])

// Checked state per item id
const checked = ref({})

const toggleItem = (id) => {
  checked.value[id] = !checked.value[id]
}

const catProgress = (cat) => {
  const total = cat.items.length
  const done  = cat.items.filter(i => checked.value[i.id]).length
  return { done, total, pct: Math.round((done / total) * 100) }
}

const totalItems   = computed(() => categories.value.reduce((s, c) => s + c.items.length, 0))
const totalChecked = computed(() => Object.values(checked.value).filter(Boolean).length)
const totalPct     = computed(() => Math.round((totalChecked.value / totalItems.value) * 100))
</script>

<template>
  <div class="page-padding">

    <!-- ── Hero ────────────────────────────────────── -->
    <section class="req-hero">
      <div class="container">
        <div class="req-hero-inner">
          <div class="req-hero-text">
            <span class="req-tag">Herramientas</span>
            <h1 class="req-title">Requisitos de<br /><em class="req-em">Certificación</em></h1>
            <p class="req-lead">
              Cumple cada punto para garantizar las condiciones fitosanitarias, de seguridad y operación de tu huerto. Marca cada requisito conforme lo vayas completando.
            </p>
          </div>

          <!-- Global progress card -->
          <div class="req-progress-card">
            <div class="req-progress-top">
              <span class="req-progress-pct">{{ totalPct }}<span class="req-pct-sym">%</span></span>
              <span class="req-progress-label">Completado</span>
            </div>
            <div class="req-progress-bar-wrap">
              <div class="req-progress-bar" :style="{ width: totalPct + '%' }"></div>
            </div>
            <div class="req-progress-bottom">
              <span>{{ totalChecked }} de {{ totalItems }} requisitos</span>
              <span v-if="totalPct === 100" class="req-complete-badge">✓ ¡Listo!</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Checklist body ──────────────────────────── -->
    <div class="req-body">
      <div class="container">
        <div class="req-grid">

          <div
            v-for="cat in categories"
            :key="cat.id"
            class="req-cat"
            :class="`req-cat--${cat.color}`"
          >
            <!-- Category header -->
            <div class="req-cat-header">
              <span class="req-cat-icon">{{ cat.icon }}</span>
              <div class="req-cat-title-block">
                <h2 class="req-cat-title">{{ cat.title }}</h2>
                <span class="req-cat-count">{{ catProgress(cat).done }}/{{ catProgress(cat).total }}</span>
              </div>
              <!-- Mini progress bar -->
              <div class="req-mini-bar-wrap">
                <div
                  class="req-mini-bar"
                  :style="{ width: catProgress(cat).pct + '%' }"
                ></div>
              </div>
            </div>

            <!-- Items -->
            <ul class="req-list">
              <li
                v-for="item in cat.items"
                :key="item.id"
                class="req-item"
                :class="{ 'req-item--done': checked[item.id] }"
                @click="toggleItem(item.id)"
                role="checkbox"
                :aria-checked="!!checked[item.id]"
                tabindex="0"
                @keydown.space.prevent="toggleItem(item.id)"
                @keydown.enter.prevent="toggleItem(item.id)"
              >
                <!-- Custom checkbox -->
                <span class="req-checkbox" :class="{ 'req-checkbox--checked': checked[item.id] }">
                  <svg v-if="checked[item.id]" viewBox="0 0 16 16" fill="none" width="11" height="11">
                    <polyline points="2.5 8 6.5 12 13.5 4" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <!-- Text -->
                <span class="req-item-text">{{ item.text }}</span>
              </li>
            </ul>

            <!-- Category completion badge -->
            <div v-if="catProgress(cat).pct === 100" class="req-cat-done">
              ✓ Sección completa
            </div>
          </div>

        </div>
        
        <!-- ── Download Section ──────────────────────────── -->
        <div class="req-download-section">
          <div class="req-download-card">
            <div class="req-download-icon">📄</div>
            <div class="req-download-text">
              <h3>Descarga el Checklist Oficial</h3>
              <p>Lleva este formato impreso al huerto para llenarlo en campo, o compártelo con tu equipo.</p>
            </div>
            <a href="/AGRICULTORI_CHECKLIST.pdf" download="Agricultori_Checklist.pdf" class="btn btn-accent req-download-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Descargar PDF
            </a>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
.page-padding { padding-top: 150px; }

/* ── Hero ──────────────────────────────────────────── */
.req-hero {
  background: linear-gradient(135deg, #dae6df 0%, #c2d5cd 100%);
  padding: 5rem 0 4rem;
  border-bottom: 1px solid rgba(0,67,44,0.08);
}

.req-hero-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  flex-wrap: wrap;
}

.req-hero-text { flex: 1; min-width: 280px; }

.req-tag {
  display: inline-flex;
  font-family: var(--font-title);
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--color-accent);
  background-color: rgba(251,134,3,0.12);
  padding: 0.4rem 1.1rem;
  border-radius: 999px;
  margin-bottom: 1.2rem;
  letter-spacing: 1.5px;
  border: 1px solid rgba(251,134,3,0.2);
}

.req-title {
  font-family: var(--font-title);
  font-size: clamp(2.4rem, 5vw, 3.5rem);
  font-weight: 900;
  color: var(--color-primary-dark);
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 1.1rem;
}

.req-em {
  font-style: normal;
  background: linear-gradient(135deg, var(--color-accent) 0%, #ffb865 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.req-lead {
  font-family: var(--font-body);
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  line-height: 1.65;
  max-width: 520px;
}

/* Global progress card */
.req-progress-card {
  background: var(--color-primary-dark);
  border-radius: 24px;
  padding: 2rem 2.5rem;
  min-width: 240px;
  box-shadow: 0 20px 40px rgba(0,38,25,0.25);
  flex-shrink: 0;
}

.req-progress-top {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.req-progress-pct {
  font-family: var(--font-title);
  font-size: 3.5rem;
  font-weight: 900;
  color: #ffffff;
  line-height: 1;
  letter-spacing: -0.04em;
}

.req-pct-sym { font-size: 1.8rem; color: var(--color-accent); }

.req-progress-label {
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: rgba(255,255,255,0.5);
  font-weight: 500;
}

.req-progress-bar-wrap {
  height: 8px;
  background: rgba(255,255,255,0.1);
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: 0.85rem;
}

.req-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--color-accent) 0%, #ffb865 100%);
  border-radius: 999px;
  transition: width 0.5s cubic-bezier(0.16,1,0.3,1);
  min-width: 4px;
}

.req-progress-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-body);
  font-size: 0.78rem;
  color: rgba(255,255,255,0.4);
}

.req-complete-badge {
  background: rgba(251,134,3,0.2);
  color: var(--color-accent);
  font-weight: 700;
  font-family: var(--font-title);
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  font-size: 0.75rem;
}

/* ── Body / Grid ───────────────────────────────────── */
.req-body {
  padding: 4rem 0 6rem;
  background: var(--color-bg-base);
}

.req-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
  gap: 2rem;
}

/* ── Category card ─────────────────────────────────── */
.req-cat {
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(0,67,44,0.07);
  box-shadow: 0 4px 20px rgba(0,67,44,0.06);
  transition: box-shadow 0.3s ease;
}

.req-cat:hover {
  box-shadow: 0 8px 32px rgba(0,67,44,0.1);
}

/* Color accents per category */
.req-cat--green .req-cat-header { background: linear-gradient(135deg, #e8f5e9 0%, #f1f8f2 100%); }
.req-cat--amber .req-cat-header { background: linear-gradient(135deg, #fff3e0 0%, #fffbf5 100%); }
.req-cat--red   .req-cat-header { background: linear-gradient(135deg, #fce4e4 0%, #fff5f5 100%); }
.req-cat--blue  .req-cat-header { background: linear-gradient(135deg, #e3f2fd 0%, #f5faff 100%); }
.req-cat--gray  .req-cat-header { background: linear-gradient(135deg, #f0f4f3 0%, #fafcfb 100%); }

.req-cat--green .req-mini-bar { background: var(--color-primary); }
.req-cat--amber .req-mini-bar { background: var(--color-accent); }
.req-cat--red   .req-mini-bar { background: #e53935; }
.req-cat--blue  .req-mini-bar { background: #1e88e5; }
.req-cat--gray  .req-mini-bar { background: var(--color-primary-light); }

.req-cat--green .req-checkbox--checked { background: var(--color-primary); border-color: var(--color-primary); }
.req-cat--amber .req-checkbox--checked { background: var(--color-accent); border-color: var(--color-accent); }
.req-cat--red   .req-checkbox--checked { background: #e53935; border-color: #e53935; }
.req-cat--blue  .req-checkbox--checked { background: #1e88e5; border-color: #1e88e5; }
.req-cat--gray  .req-checkbox--checked { background: var(--color-primary-light); border-color: var(--color-primary-light); }

/* Category header */
.req-cat-header {
  padding: 1.5rem 1.75rem 1.25rem;
  border-bottom: 1px solid rgba(0,67,44,0.06);
}

.req-cat-icon {
  font-size: 1.75rem;
  display: block;
  margin-bottom: 0.6rem;
  line-height: 1;
}

.req-cat-title-block {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.85rem;
}

.req-cat-title {
  font-family: var(--font-title);
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--color-primary-dark);
  letter-spacing: -0.01em;
  margin: 0;
}

.req-cat-count {
  font-family: var(--font-title);
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--color-text-muted);
  white-space: nowrap;
}

/* Mini progress bar */
.req-mini-bar-wrap {
  height: 5px;
  background: rgba(0,67,44,0.08);
  border-radius: 999px;
  overflow: hidden;
}

.req-mini-bar {
  height: 100%;
  border-radius: 999px;
  transition: width 0.4s cubic-bezier(0.16,1,0.3,1);
  min-width: 3px;
}

/* ── Checklist items ───────────────────────────────── */
.req-list {
  list-style: none;
  padding: 0.75rem 1.75rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.req-item {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  padding: 0.6rem 0.6rem;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.18s ease;
  user-select: none;
  outline: none;
}

.req-item:hover {
  background: var(--color-bg-soft);
}

.req-item:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 1px;
}

/* Custom checkbox */
.req-checkbox {
  width: 20px;
  height: 20px;
  border-radius: 6px;
  border: 2px solid rgba(0,67,44,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;
  transition: all 0.2s cubic-bezier(0.34,1.56,0.64,1);
  background: transparent;
}

.req-checkbox--checked {
  transform: scale(1.1);
}

/* Item text */
.req-item-text {
  font-family: var(--font-body);
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--color-text-secondary);
  transition: color 0.2s ease;
}

.req-item--done .req-item-text {
  color: var(--color-text-muted);
  text-decoration: line-through;
  text-decoration-color: rgba(0,67,44,0.25);
}

/* Cat done badge */
.req-cat-done {
  margin: 0 1.75rem 1.25rem;
  padding: 0.5rem 1rem;
  background: rgba(46, 125, 50, 0.08);
  border: 1px solid rgba(46, 125, 50, 0.2);
  border-radius: 10px;
  font-family: var(--font-title);
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--color-success);
  text-align: center;
}

/* ── Download Section ──────────────────────────────── */
.req-download-section {
  margin-top: 4rem;
}

.req-download-card {
  background: linear-gradient(135deg, var(--color-primary-dark) 0%, #00120b 100%);
  border-radius: 24px;
  padding: 3rem 4rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  box-shadow: 0 20px 40px rgba(0,38,25,0.25);
  position: relative;
  overflow: hidden;
}

.req-download-card::before {
  content: '';
  position: absolute;
  top: 0; right: 0; bottom: 0; width: 40%;
  background: radial-gradient(ellipse at 80% 50%, rgba(251,134,3,0.15) 0%, transparent 70%);
  pointer-events: none;
}

.req-download-icon {
  font-size: 4.5rem;
  line-height: 1;
  filter: drop-shadow(0 10px 10px rgba(0,0,0,0.2));
}

.req-download-text {
  flex: 1;
}

.req-download-text h3 {
  font-family: var(--font-title);
  font-size: 2rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.req-download-text p {
  font-family: var(--font-body);
  font-size: 1.1rem;
  color: rgba(255,255,255,0.7);
  max-width: 500px;
  line-height: 1.5;
}

.req-download-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  border-radius: 999px;
  flex-shrink: 0;
  box-shadow: 0 8px 20px rgba(251,134,3,0.3);
  transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease;
}

.req-download-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(251,134,3,0.4);
}

/* ── Responsive ────────────────────────────────────── */
@media (max-width: 768px) {
  .req-hero-inner { flex-direction: column; }
  .req-progress-card { width: 100%; }
  .req-grid { grid-template-columns: 1fr; }
  
  .req-download-card {
    flex-direction: column;
    text-align: center;
    padding: 2.5rem 2rem;
    gap: 1.5rem;
  }
}

@media (max-width: 520px) {
  .req-body { padding: 2.5rem 0 4rem; }
  .req-list { padding: 0.5rem 1rem 1rem; }
  .req-cat-header { padding: 1.25rem 1.25rem 1rem; }
}
</style>
