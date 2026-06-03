<script setup>
import { ref } from 'vue'

// Cleanup duplicates and typos from the user list
const bitacoras = ref([
  { id: 1, title: 'Verificación diaria de las buenas prácticas de seguridad e higiene' },
  { id: 2, title: 'Registro de higiene de instalaciones, herramientas y maquinaria' },
  { id: 3, title: 'Verificación de higiene y trampas para roedores en la unidad de producción' },
  { id: 4, title: 'Registro de limpieza y confinamiento de animales en la U.P.' },
  { id: 5, title: 'Acondicionamiento de agua en la unidad de producción' },
  { id: 6, title: 'Registro de riego en la unidad de producción' },
  { id: 7, title: 'Verificación de higiene y cercado perimetral de las fuentes de agua en la unidad de producción' },
  { id: 8, title: 'Registro de aplicación al suelo de fertilizantes orgánicos e inorgánicos' },
  { id: 9, title: 'Registro de aplicación de plaguicidas' },
  { id: 10, title: 'Inventario de productos plaguicidas' },
  { id: 11, title: 'Cosecha y trazabilidad del producto' },
  { id: 12, title: 'Adquisición de insumos (Productos de Limpieza, EPP, Fertilizantes)' },
  { id: 13, title: 'Capacitación del personal' },
  { id: 14, title: 'Acciones correctivas en la unidad de producción' },
  { id: 15, title: 'Verificación y seguimiento de las buenas prácticas de cosecha' },
])

// PDF & Word SVG icons
const pdfIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="doc-icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`
const wordIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="doc-icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M9 12l1.5 5 1.5-5 1.5 5 1.5-5"></path></svg>`
</script>

<template>
  <div class="page-padding">
    
    <!-- ── Hero ────────────────────────────────────── -->
    <section class="bit-hero">
      <div class="container text-center">
        <span class="bit-tag">Herramientas</span>
        <h1 class="bit-title">Bitácoras de Campo</h1>
        <p class="bit-lead">
          Descarga los formatos oficiales para el registro de actividades, higiene y trazabilidad de tu huerto. Disponibles en PDF para imprimir y Word para editar.
        </p>
      </div>
    </section>

    <!-- ── Main Content ────────────────────────────── -->
    <section class="bit-content">
      <div class="container">

        <!-- Destacado: Todas las bitácoras -->
        <div class="bit-featured-card">
          <div class="bit-featured-info">
            <span class="bit-featured-icon">📚</span>
            <div>
              <h3>Descargar Paquete Completo</h3>
              <p>Obtén todas las bitácoras en un solo archivo consolidado y organizado.</p>
            </div>
          </div>
          <div class="bit-featured-actions">
            <a href="#" class="btn-download btn-pdf-solid" @click.prevent>
              <span v-html="pdfIcon"></span>
              PDF Completo
            </a>
            <a href="#" class="btn-download btn-word-solid" @click.prevent>
              <span v-html="wordIcon"></span>
              Word Completo
            </a>
          </div>
        </div>

        <!-- Tabla/Lista de Bitácoras Individuales -->
        <div class="bit-list-container">
          <div class="bit-list-header">
            <div class="bit-col-name">Nombre del Documento</div>
            <div class="bit-col-actions">Formatos de Descarga</div>
          </div>

          <ul class="bit-list">
            <li v-for="doc in bitacoras" :key="doc.id" class="bit-row">
              <div class="bit-col-name">
                <span class="bit-num">{{ doc.id.toString().padStart(2, '0') }}</span>
                <span class="bit-name">{{ doc.title }}</span>
              </div>
              <div class="bit-col-actions">
                <a href="#" class="btn-icon btn-pdf" title="Descargar PDF" @click.prevent>
                  <span v-html="pdfIcon"></span> PDF
                </a>
                <a href="#" class="btn-icon btn-word" title="Descargar Word" @click.prevent>
                  <span v-html="wordIcon"></span> Word
                </a>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>
.page-padding { padding-top: 150px; }

/* ── Hero ──────────────────────────────────────────── */
.bit-hero {
  padding: 5rem 0 4rem;
  background: linear-gradient(135deg, #f0f4f3 0%, #dae6df 100%);
  border-bottom: 1px solid rgba(0,67,44,0.06);
}

.bit-tag {
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

.bit-title {
  font-family: var(--font-title);
  font-size: clamp(2.4rem, 5vw, 3.5rem);
  font-weight: 900;
  color: var(--color-primary-dark);
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 1.2rem;
}

.bit-lead {
  font-family: var(--font-body);
  font-size: 1.15rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  max-width: 680px;
  margin: 0 auto;
}

/* ── Content ───────────────────────────────────────── */
.bit-content {
  padding: 4rem 0 6rem;
  background: var(--color-bg-base);
}

/* Featured Card */
.bit-featured-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background: linear-gradient(145deg, var(--color-primary-dark) 0%, #00120b 100%);
  border-radius: 20px;
  padding: 2.5rem 3rem;
  margin-bottom: 4rem;
  box-shadow: 0 20px 40px rgba(0,38,25,0.25);
  color: #fff;
}

.bit-featured-info {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.bit-featured-icon {
  font-size: 3.5rem;
  line-height: 1;
}

.bit-featured-info h3 {
  font-family: var(--font-title);
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 0.4rem;
}

.bit-featured-info p {
  color: rgba(255,255,255,0.7);
  font-size: 0.95rem;
  max-width: 400px;
  line-height: 1.5;
}

.bit-featured-actions {
  display: flex;
  gap: 1rem;
}

.btn-download {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-title);
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.85rem 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-pdf-solid {
  background: #f40f02;
  color: #fff;
  box-shadow: 0 6px 15px rgba(244,15,2,0.3);
}

.btn-pdf-solid:hover {
  background: #d30d02;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(244,15,2,0.4);
}

.btn-word-solid {
  background: #2b579a;
  color: #fff;
  box-shadow: 0 6px 15px rgba(43,87,154,0.3);
}

.btn-word-solid:hover {
  background: #214378;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(43,87,154,0.4);
}

/* ── List / Table ──────────────────────────────────── */
.bit-list-container {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0,67,44,0.06);
  border: 1px solid rgba(0,67,44,0.08);
  overflow: hidden;
}

.bit-list-header {
  display: flex;
  padding: 1.2rem 2rem;
  background: var(--color-bg-soft);
  border-bottom: 1px solid rgba(0,67,44,0.08);
  font-family: var(--font-title);
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--color-primary-dark);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.bit-col-name {
  flex: 1;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.bit-col-actions {
  display: flex;
  gap: 0.75rem;
  width: 200px;
  justify-content: flex-end;
}

.bit-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.bit-row {
  display: flex;
  padding: 1.25rem 2rem;
  border-bottom: 1px solid rgba(0,67,44,0.06);
  transition: background 0.2s ease;
  align-items: center;
}

.bit-row:hover {
  background: #fafcfb;
}

.bit-row:last-child {
  border-bottom: none;
}

.bit-num {
  font-family: var(--font-title);
  font-weight: 800;
  color: var(--color-primary-light);
  font-size: 1rem;
  opacity: 0.6;
  padding-top: 2px;
}

.bit-name {
  font-family: var(--font-body);
  font-size: 1.05rem;
  color: var(--color-text-primary);
  line-height: 1.4;
  font-weight: 500;
}

/* Secondary Action Buttons */
.btn-icon {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  font-family: var(--font-title);
  font-size: 0.8rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-pdf {
  color: #f40f02;
  background: rgba(244,15,2,0.08);
}
.btn-pdf:hover { background: rgba(244,15,2,0.15); }

.btn-word {
  color: #2b579a;
  background: rgba(43,87,154,0.08);
}
.btn-word:hover { background: rgba(43,87,154,0.15); }

:deep(.doc-icon) {
  width: 16px;
  height: 16px;
}

.btn-download :deep(.doc-icon) {
  width: 20px;
  height: 20px;
}

/* ── Responsive ────────────────────────────────────── */
@media (max-width: 900px) {
  .bit-featured-card {
    flex-direction: column;
    text-align: center;
    padding: 2.5rem 2rem;
  }
  .bit-featured-info {
    flex-direction: column;
    gap: 1rem;
  }
  .bit-featured-actions {
    width: 100%;
    flex-direction: column;
  }
  .btn-download {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .bit-list-header { display: none; }
  .bit-row {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
  }
  .bit-col-actions {
    width: 100%;
    justify-content: flex-start;
    padding-left: 2rem; /* align with text */
  }
}
</style>
