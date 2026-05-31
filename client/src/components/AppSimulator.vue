<template>
  <section id="simulador" class="simulator-section">
    <div class="container">
      <div class="section-header">
        <span class="tag">Experiencia en Vivo</span>
        <h2>Descubre el Poder de Agricultori</h2>
        <p>Interactúa con nuestro simulador web. Navega por las diferentes funciones para entender por qué somos la herramienta preferida por los exportadores.</p>
      </div>

      <div class="simulator-layout">
        <!-- Selector Menu (Left Side) -->
        <div class="simulator-controls">
          <div 
            v-for="(feature, index) in features" 
            :key="index"
            :class="['control-card', { 'active': activeTab === index }]"
            @click="activeTab = index"
          >
            <div class="control-indicator"></div>
            <div class="control-num">0{{ index + 1 }}</div>
            <div class="control-info">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.desc }}</p>
            </div>
          </div>
          
          <div class="download-teaser">
            <div class="teaser-icon">📲</div>
            <div class="teaser-text">
              <h4>Comienza Ahora</h4>
              <p>Descarga la app completa y lleva el control en tu bolsillo.</p>
            </div>
            <a href="#descargar" class="btn btn-accent btn-sm">Descargar</a>
          </div>
        </div>

        <!-- Premium Phone Mockup Screen (Right Side) -->
        <div class="simulator-display">
          <div class="phone-container">
            <div class="phone-hardware-buttons">
              <div class="hw-btn hw-vol-up"></div>
              <div class="hw-btn hw-vol-down"></div>
              <div class="hw-btn hw-power"></div>
            </div>
            <div class="phone-speaker"></div>
            <div class="phone-inner">
              
              <!-- Screen Top Bar -->
              <div class="phone-screen-header">
                <span class="time-mock">09:41</span>
                <div class="notch-island"></div>
                <div class="status-icons">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor"><path d="M0 10h2V5H0v5zm4 0h2V3H4v7zm4 0h2V0H8v10zm4 0h2V7h-2v3z"/></svg>
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="currentColor"><rect width="14" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="2" y="2" width="10" height="6" rx="1"/><path d="M15 3h1v4h-1V3z"/></svg>
                </div>
              </div>
              
              <!-- App Nav (Fixed) -->
              <div class="app-nav-bar">
                <div class="app-logo-area">
                  <img src="/logo.png" alt="Logo" class="app-logo-img" />
                  <div>
                    <span class="app-name">Agricultori</span>
                    <span class="app-region">MX - EUA</span>
                  </div>
                </div>
                <div class="icon-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                </div>
              </div>

              <!-- Dynamic Screen Body -->
              <div class="app-screen-content">
                
                <transition name="screen-fade" mode="out-in">
                  
                  <!-- SCREEN 1: PRECIOS AL DIA -->
                  <div v-if="activeTab === 0" class="screen-layout" key="screen1">
                    <div class="screen-header-title">
                      <h2>Mercado</h2>
                      <p>Precios de referencia al día</p>
                    </div>
                    
                    <div class="crop-scroll">
                      <button 
                        v-for="crop in crops" 
                        :key="crop.name"
                        :class="['crop-pill', { 'active': selectedCrop.name === crop.name }]"
                        @click="selectedCrop = crop"
                      >
                        {{ crop.icon }} {{ crop.name.split(' ')[0] }}
                      </button>
                    </div>
                    
                    <div class="price-showcase">
                      <div class="price-head">{{ selectedCrop.name }}</div>
                      <div class="price-huge">
                        ${{ selectedCrop.price }} <span class="currency">MXN</span>
                      </div>
                      <div class="price-sub">
                        EUA: <span class="us-val">${{ selectedCrop.usdPrice }} USD/lb</span>
                      </div>
                      
                      <div class="trend-badge" :class="selectedCrop.trendUp ? 'up' : 'down'">
                        {{ selectedCrop.trendUp ? '▲' : '▼' }} {{ selectedCrop.change }}% vs ayer
                      </div>
                    </div>

                    <div class="chart-container">
                      <div class="chart-title">Comportamiento Semanal</div>
                      <svg viewBox="0 0 200 70" class="trend-svg">
                        <!-- Chart Grid -->
                        <line x1="0" y1="15" x2="200" y2="15" stroke="rgba(0,0,0,0.05)" />
                        <line x1="0" y1="35" x2="200" y2="35" stroke="rgba(0,0,0,0.05)" />
                        <line x1="0" y1="55" x2="200" y2="55" stroke="rgba(0,0,0,0.05)" />
                        
                        <path 
                          :d="selectedCrop.svgPath" 
                          fill="none" 
                          stroke="var(--color-primary)" 
                          stroke-width="3" 
                          stroke-linecap="round"
                        />
                        <path 
                          :d="selectedCrop.svgFill" 
                          fill="url(#grad1)" 
                          stroke="none"
                        />
                        <defs>
                          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style="stop-color:var(--color-primary);stop-opacity:0.2" />
                            <stop offset="100%" style="stop-color:var(--color-primary);stop-opacity:0" />
                          </linearGradient>
                        </defs>
                        <circle 
                          v-for="(pt, idx) in selectedCrop.points" 
                          :key="idx"
                          :cx="pt.x" 
                          :cy="pt.y" 
                          r="4" 
                          :fill="idx === 4 ? 'var(--color-accent)' : 'var(--color-primary)'"
                          stroke="white" stroke-width="2"
                        />
                      </svg>
                    </div>
                  </div>

                  <!-- SCREEN 2: PRODUCTOS -->
                  <div v-else-if="activeTab === 1" class="screen-layout" key="screen2">
                    <div class="screen-header-title">
                      <h2>Agroquímicos</h2>
                      <p>Validación de tolerancia EPA/FDA</p>
                    </div>
                    
                    <div class="search-fancy">
                      <svg class="s-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                      <input 
                        type="text" 
                        v-model="chemSearchQuery" 
                        placeholder="Ej. Glifosato, Cobre..."
                      />
                    </div>

                    <div class="tag-cloud">
                      <span v-for="tag in chemSuggestions" :key="tag" @click="chemSearchQuery = tag" class="tag">{{ tag }}</span>
                    </div>

                    <div class="chem-list">
                      <div v-for="chem in filteredChems" :key="chem.name" class="chem-card">
                        <div class="c-head">
                          <h4>{{ chem.name }}</h4>
                          <span :class="['status-dot', chem.status]"></span>
                        </div>
                        <div class="c-tech">{{ chem.tech }}</div>
                        <div class="c-mrl">
                          <span class="lbl">Límite EUA:</span>
                          <span class="val">{{ chem.mrl }}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- SCREEN 3: EMPAQUES -->
                  <div v-else-if="activeTab === 2" class="screen-layout" key="screen3">
                    <div class="screen-header-title">
                      <h2>Empaques</h2>
                      <p>Directorio Certificado Oficial</p>
                    </div>
                    
                    <div class="filter-dropdown">
                      <select v-model="selectedState">
                        <option value="Michoacán">📍 Michoacán (Aguacate)</option>
                        <option value="Jalisco">📍 Jalisco (Berries/Limón)</option>
                        <option value="Colima">📍 Colima (Tomate)</option>
                      </select>
                    </div>

                    <div class="pack-list">
                      <div v-for="pack in filteredPackhouses" :key="pack.name" class="pack-card">
                        <div class="p-title">{{ pack.name }}</div>
                        <div class="p-reg">
                          <span>Registro:</span> <strong>{{ pack.reg }}</strong>
                        </div>
                        <div class="p-tags">
                          <span class="p-tag" v-for="f in pack.fruits" :key="f">{{ f }}</span>
                        </div>
                        <div class="p-verify">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          Verificado USDA
                        </div>
                      </div>
                    </div>
                  </div>

                </transition>

              </div>
              
              <div class="home-indicator-bar">
                <div class="home-line"></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref(0)

const features = [
  {
    title: 'Precios al Día',
    desc: 'Consulta los precios de referencia diarios para el mercado nacional y exportación (USD). Analiza gráficas de tendencia al instante.'
  },
  {
    title: 'Buscador de Agroquímicos',
    desc: 'Verifica qué pesticidas y fertilizantes químicos tienen autorizaciones sanitarias activas ante COFEPRIS y límites autorizados en EUA.'
  },
  {
    title: 'Empaques Certificados',
    desc: 'Evita rechazos en aduana. Accede al listado oficial de empaques validados para exportación de frutas y vegetales.'
  }
]

// Mock Data logic remains identical
const crops = [
  { 
    name: 'Aguacate Hass', icon: '🥑', price: '58.50', usdPrice: '1.60', trendUp: true, change: '4.2', 
    svgPath: 'M 10 55 Q 50 40 100 45 T 190 20',
    svgFill: 'M 10 55 Q 50 40 100 45 T 190 20 L 190 70 L 10 70 Z',
    points: [{x:10, y:55}, {x:55, y:48}, {x:100, y:45}, {x:145, y:32}, {x:190, y:20}]
  },
  { 
    name: 'Limón Persa', icon: '🍋', price: '32.00', usdPrice: '0.88', trendUp: false, change: '1.8', 
    svgPath: 'M 10 20 Q 50 45 100 30 T 190 40',
    svgFill: 'M 10 20 Q 50 45 100 30 T 190 40 L 190 70 L 10 70 Z',
    points: [{x:10, y:20}, {x:55, y:38}, {x:100, y:30}, {x:145, y:25}, {x:190, y:40}]
  },
  { 
    name: 'Tomate Saladette', icon: '🍅', price: '24.00', usdPrice: '0.66', trendUp: true, change: '8.5', 
    svgPath: 'M 10 60 Q 50 50 100 35 T 190 10',
    svgFill: 'M 10 60 Q 50 50 100 35 T 190 10 L 190 70 L 10 70 Z',
    points: [{x:10, y:60}, {x:55, y:52}, {x:100, y:35}, {x:145, y:24}, {x:190, y:10}]
  }
]

const selectedCrop = ref(crops[0])
const chemSearchQuery = ref('')
const chemSuggestions = ['Abamectina', 'Glifosato', 'Cobre']

const chemicals = [
  { name: 'Agrimec 1.8 EC', tech: 'Abamectina', status: 'authorized', mrl: '0.02 ppm' },
  { name: 'Lorsban 50 W', tech: 'Clorpirifos', status: 'prohibited', mrl: '0.00 ppm' },
  { name: 'Cupravit Mix', tech: 'Oxicloruro de Cobre', status: 'authorized', mrl: 'Exento' }
]

const filteredChems = computed(() => {
  if (!chemSearchQuery.value) return chemicals
  return chemicals.filter(chem => chem.tech.toLowerCase().includes(chemSearchQuery.value.toLowerCase()))
})

const selectedState = ref('Michoacán')
const packhouses = [
  { name: 'Empaque Don Aguacato S.A.', reg: 'USDA-MX-2309', state: 'Michoacán', fruits: ['Aguacate'] },
  { name: 'Frutos de Michoacán SPR', reg: 'USDA-MX-4112', state: 'Michoacán', fruits: ['Aguacate', 'Mango'] },
  { name: 'Citricos del Pacífico', reg: 'USDA-MX-8891', state: 'Jalisco', fruits: ['Limón'] },
  { name: 'Empaque Colima Fruits', reg: 'USDA-MX-7704', state: 'Colima', fruits: ['Tomate'] }
]

const filteredPackhouses = computed(() => packhouses.filter(p => p.state === selectedState.value))
</script>

<style scoped>
.simulator-section {
  padding: 8rem 0;
  background-color: var(--color-bg-base);
}

.simulator-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
}

/* Controls */
.simulator-controls {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.control-card {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.75rem;
  background: var(--color-bg-surface);
  border-radius: var(--border-radius-md);
  border: 1px solid rgba(0,0,0,0.05);
  cursor: pointer;
  transition: var(--transition-bounce);
  position: relative;
  overflow: hidden;
}

.control-indicator {
  position: absolute;
  left: 0; top: 0; bottom: 0; width: 6px;
  background: var(--color-primary);
  transform: scaleY(0);
  transition: transform 0.4s ease;
  transform-origin: center;
}

.control-card.active {
  box-shadow: var(--shadow-lg);
  border-color: rgba(0, 67, 44, 0.1);
  transform: translateX(10px);
}

.control-card.active .control-indicator {
  transform: scaleY(1);
}

.control-num {
  font-family: var(--font-title);
  font-size: 2rem;
  font-weight: 800;
  color: rgba(0,0,0,0.1);
  transition: var(--transition-smooth);
}

.control-card.active .control-num {
  color: var(--color-primary);
}

.control-info h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary-dark);
}

.control-info p {
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

/* Teaser */
.download-teaser {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
  padding: 1.5rem;
  background: linear-gradient(to right, rgba(251,134,3,0.1), transparent);
  border-left: 4px solid var(--color-accent);
  border-radius: 0 var(--border-radius-md) var(--border-radius-md) 0;
}

.teaser-icon { font-size: 2.5rem; }
.teaser-text h4 { font-family: var(--font-title); color: var(--color-primary-dark); }
.teaser-text p { font-size: 0.85rem; color: var(--color-text-secondary); }
.btn-sm { padding: 0.6rem 1.2rem; font-size: 0.9rem; margin-left: auto; }

/* Phone Mockup */
.simulator-display {
  display: flex;
  justify-content: center;
}

.phone-container {
  width: 320px;
  height: 660px;
  background-color: #d1d5db;
  border-radius: 54px;
  padding: 8px;
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.25),
    inset 0 0 0 2px #fff,
    inset 0 0 0 6px #e5e7eb;
  position: relative;
}

.phone-hardware-buttons {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  pointer-events: none;
}

.hw-btn {
  position: absolute;
  background: #cbd5e1;
  width: 3px;
  border-radius: 2px;
}

.hw-vol-up { height: 35px; left: -3px; top: 130px; }
.hw-vol-down { height: 35px; left: -3px; top: 180px; }
.hw-power { height: 45px; right: -3px; top: 150px; }

.phone-inner {
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  border-radius: 46px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
}

.phone-screen-header {
  padding: 12px 20px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  color: #111;
  z-index: 10;
}

.notch-island {
  position: absolute;
  top: 8px; left: 50%;
  transform: translateX(-50%);
  width: 90px; height: 26px;
  background: #000;
  border-radius: 20px;
}

.status-icons {
  display: flex; gap: 4px;
}

/* UI Structure */
.app-nav-bar {
  padding: 15px 20px;
  display: flex; justify-content: space-between; align-items: center;
  background: #fff;
  border-bottom: 1px solid #eee;
}

.app-logo-area { display: flex; align-items: center; gap: 10px; }
.app-logo-img { height: 24px; width: auto; object-fit: contain; }
.logo-circle { width: 32px; height: 32px; background: var(--color-primary); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-family: var(--font-title); }
.app-name { display: block; font-weight: 800; font-size: 15px; color: #111; }
.app-region { display: block; font-size: 10px; color: #666; }
.icon-btn { color: #111; }

.app-screen-content {
  flex-grow: 1;
  overflow-y: auto;
  background: #f8f9fa;
  padding: 20px;
}

/* Screen Transitions */
.screen-fade-enter-active, .screen-fade-leave-active {
  transition: all 0.3s ease;
}
.screen-fade-enter-from { opacity: 0; transform: scale(0.98) translateY(10px); }
.screen-fade-leave-to { opacity: 0; transform: scale(0.98) translateY(-10px); }

/* Common UI Elements */
.screen-header-title { margin-bottom: 20px; }
.screen-header-title h2 { font-size: 22px; margin-bottom: 4px; color: #111; }
.screen-header-title p { font-size: 12px; color: #666; }

/* Screen 1 */
.crop-scroll {
  display: flex; gap: 8px; overflow-x: auto; padding-bottom: 10px;
  scrollbar-width: none;
}
.crop-pill {
  flex-shrink: 0;
  padding: 8px 16px;
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  transition: 0.2s;
}
.crop-pill.active {
  background: var(--color-primary);
  color: #fff;
  border-color: var(--color-primary);
}

.price-showcase {
  background: #fff;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
  margin: 15px 0;
  display: flex; flex-direction: column; gap: 5px;
}
.price-head { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #888; font-weight: 700; }
.price-huge { font-size: 36px; font-weight: 900; color: #111; font-family: var(--font-title); letter-spacing: -1px; }
.price-huge .currency { font-size: 14px; color: #888; font-weight: 600; }
.price-sub { font-size: 12px; color: #666; }
.us-val { color: var(--color-success); font-weight: 700; }

.trend-badge {
  align-self: flex-start; margin-top: 10px;
  padding: 4px 10px; border-radius: 12px; font-size: 11px; font-weight: 700;
}
.trend-badge.up { background: rgba(46, 125, 50, 0.1); color: #2E7D32; }
.trend-badge.down { background: rgba(211, 47, 47, 0.1); color: #D32F2F; }

.chart-container {
  background: #fff; border-radius: 20px; padding: 20px;
}
.chart-title { font-size: 11px; font-weight: 700; color: #888; margin-bottom: 15px; text-transform: uppercase; }

/* Screen 2 */
.search-fancy {
  position: relative; margin-bottom: 15px;
}
.s-icon { position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: #888; }
.search-fancy input {
  width: 100%; padding: 14px 14px 14px 40px;
  background: #fff; border: 1px solid #eee; border-radius: 16px;
  font-family: var(--font-body); font-size: 14px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.02);
  outline: none;
}
.tag-cloud { display: flex; gap: 8px; margin-bottom: 20px; }
.tag { font-size: 11px; background: #e0e7e4; color: var(--color-primary); padding: 4px 12px; border-radius: 12px; font-weight: 600; cursor:pointer;}

.chem-card {
  background: #fff; padding: 15px; border-radius: 16px; margin-bottom: 10px; border: 1px solid #f0f0f0;
}
.c-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; }
.c-head h4 { font-size: 14px; color: #111; }
.status-dot { width: 10px; height: 10px; border-radius: 50%; }
.status-dot.authorized { background: #4CAF50; box-shadow: 0 0 8px rgba(76,175,80,0.4); }
.status-dot.prohibited { background: #F44336; }
.c-tech { font-size: 11px; color: #666; margin-bottom: 10px; }
.c-mrl { font-size: 12px; background: #f9f9f9; padding: 8px; border-radius: 8px; display: flex; justify-content: space-between; }
.c-mrl .val { font-weight: 700; color: #111; }

/* Screen 3 */
.filter-dropdown select {
  width: 100%; padding: 14px; background: #fff; border: 1px solid #eee; border-radius: 16px;
  font-family: var(--font-title); font-size: 14px; font-weight: 600; margin-bottom: 20px;
  outline: none;
}

.pack-card {
  background: #fff; padding: 16px; border-radius: 16px; margin-bottom: 12px; border: 1px solid #f0f0f0;
}
.p-title { font-size: 14px; font-weight: 700; color: #111; margin-bottom: 6px; }
.p-reg { font-size: 11px; color: #666; margin-bottom: 12px; }
.p-tags { display: flex; gap: 6px; margin-bottom: 12px; }
.p-tag { font-size: 10px; background: rgba(251,134,3,0.1); color: var(--color-accent-dark); padding: 4px 8px; border-radius: 8px; font-weight: 700;}
.p-verify { display: flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 700; color: #4CAF50; }

.home-indicator-bar {
  padding: 6px 0; background: #fff; display: flex; justify-content: center;
}
.home-line { width: 120px; height: 5px; background: #111; border-radius: 10px; }

@media (max-width: 992px) {
  .simulator-layout { grid-template-columns: 1fr; gap: 4rem; }
  .simulator-controls { order: 2; }
  .simulator-display { order: 1; }
}
@media (max-width: 768px) {
  .control-card { flex-direction: column; gap: 1rem; }
  .download-teaser { flex-direction: column; text-align: center; }
  .btn-sm { margin: 0 auto; }
}
</style>
