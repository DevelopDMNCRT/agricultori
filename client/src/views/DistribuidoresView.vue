<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import DownloadCTA from '../components/DownloadCTA.vue'

const route = useRoute()
const router = useRouter()

const API_URL = `${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api/distribuidoras`
const distribuidores = ref([])
const loading = ref(true)

const selectedEstado = ref('')
const selectedCiudad = ref('')

onMounted(async () => {
  try {
    const res = await fetch(API_URL)
    const data = await res.json()
    distribuidores.value = data
    
    if (distribuidores.value.length > 0) {
      const uniqueEstados = [...new Set(data.map(d => d.estado))].sort()
      if (route.params.estado && uniqueEstados.includes(route.params.estado)) {
        selectedEstado.value = route.params.estado
      } else if (uniqueEstados.length > 0) {
        selectedEstado.value = uniqueEstados[0]
      }
    }
  } catch (error) {
    console.error('Error fetching distribuidores:', error)
  } finally {
    loading.value = false
  }
})

const uniqueEstados = computed(() => {
  return [...new Set(distribuidores.value.map(d => d.estado))].sort()
})

const distribuidoresByEstado = computed(() => {
  return distribuidores.value.filter(d => d.estado === selectedEstado.value)
})

const uniqueCiudades = computed(() => {
  return [...new Set(distribuidoresByEstado.value.map(d => d.ciudad))].sort()
})

watch(
  () => route.params.estado,
  (newEstado) => {
    if (newEstado && uniqueEstados.value.includes(newEstado)) {
      selectedEstado.value = newEstado
      const cities = uniqueCiudades.value
      if (cities.length > 0 && !cities.includes(selectedCiudad.value)) {
        selectedCiudad.value = cities[0]
      }
    }
  },
  { immediate: true }
)

watch(uniqueCiudades, (newCities) => {
  if (newCities.length > 0 && !newCities.includes(selectedCiudad.value)) {
    selectedCiudad.value = newCities[0]
  }
})

const filteredDistribuidores = computed(() => {
  if (!selectedCiudad.value) return distribuidoresByEstado.value
  return distribuidoresByEstado.value.filter(d => d.ciudad === selectedCiudad.value)
})

const getMapUrl = (domicilio) => {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(domicilio)}`
}
</script>

<template>
  <div class="distribuidores-view">
    <div class="container content-container">
      
      <div v-if="loading" class="loading-state">
        <Icon icon="eos-icons:loading" width="48" height="48" class="text-primary" />
        <p>Cargando red de distribuidores...</p>
      </div>

      <div v-else-if="distribuidores.length === 0" class="empty-state">
        <Icon icon="ph:storefront-duotone" width="64" height="64" class="icon-muted" />
        <h2>Aún no hay distribuidores</h2>
        <p>Próximamente agregaremos distribuidores a nuestra red.</p>
      </div>

      <div v-else class="directory-layout">

        <!-- Título Central -->
        <h1 class="state-title">{{ selectedEstado }}</h1>

        <!-- Tabs de Ciudades -->
        <div class="city-tabs">
          <button 
            v-for="ciudad in uniqueCiudades" 
            :key="ciudad"
            class="city-tab"
            :class="{ 'active': selectedCiudad === ciudad }"
            @click="selectedCiudad = ciudad"
          >
            {{ ciudad }}
          </button>
        </div>

        <!-- Grid de Tarjetas -->
        <div class="cards-grid">
          <div v-for="dist in filteredDistribuidores" :key="dist.id" class="dist-card">
            
            <div class="card-logo-container">
              <div class="card-logo">
                <img src="/location-icon.jpg" :alt="dist.nombre" />
              </div>
            </div>
            
            <h3 class="card-title">{{ dist.nombre }}</h3>
            
            <div class="card-info">
              <div class="info-row">
                <Icon icon="ph:map-pin-duotone" class="info-icon" />
                <span>{{ dist.domicilio }}</span>
              </div>
              <div v-if="dist.referencias" class="info-row">
                <Icon icon="ph:info-duotone" class="info-icon" />
                <span class="text-xs text-gray-500">{{ dist.referencias }}</span>
              </div>
              <div class="info-row">
                <Icon icon="ph:phone-call-duotone" class="info-icon" />
                <span>{{ dist.telefono }}</span>
              </div>
            </div>
            
            <a :href="getMapUrl(dist.domicilio)" target="_blank" rel="noopener noreferrer" class="map-btn">
              [ Ver en mapa ]
            </a>
            
          </div>
        </div>
      </div>

    </div>
    <DownloadCTA />
  </div>
</template>

<style scoped>
.distribuidores-view {
  padding-top: 110px;
  background-color: #f7f9f8;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content-container {
  flex-grow: 1;
  padding-bottom: 4rem;
  max-width: 1100px;
}

.loading-state, .empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  text-align: center;
}

.loading-state p {
  margin-top: 1rem;
  color: var(--color-text-secondary);
  font-weight: 500;
}

.icon-muted {
  color: #a0b0a8;
  margin-bottom: 1.5rem;
}

.empty-state h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.empty-state p {
  color: var(--color-text-secondary);
}

.directory-layout {
  width: 100%;
}

/* Título */
.state-title {
  text-align: center;
  font-size: 2.8rem;
  font-weight: 900;
  color: #1a1a1a;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  letter-spacing: 0.05em;
}

/* Tabs */
.city-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 3.5rem;
}

.city-tab {
  background: #e2e8e4;
  color: #4a5568;
  border: none;
  padding: 8px 20px;
  border-radius: 9999px;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.city-tab:hover {
  background: #d1d9d4;
}

.city-tab.active {
  background: var(--color-accent);
  color: white;
  box-shadow: 0 4px 10px rgba(251, 134, 3, 0.3);
}

/* Grid de tarjetas */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.dist-card {
  background: white;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(0,0,0,0.02);
  overflow: hidden;
}

.dist-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.08);
}

.card-logo-container {
  display: block;
  width: 100%;
  margin-bottom: 1.5rem;
}

.card-logo {
  width: 100%;
  height: 200px;
  background: #f9fbf9;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-bottom: 1px solid #f0f4f2;
}

.card-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.fallback-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 2rem;
}

.fallback-logo img {
  opacity: 0.8;
  width: auto;
  max-width: 140px;
  object-fit: contain;
}

.card-title {
  padding: 0 1.5rem;
  font-family: var(--font-title);
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--color-primary-dark);
  margin-bottom: 1.25rem;
  text-transform: uppercase;
  min-height: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.3;
}

.card-info {
  margin-bottom: 1.5rem;
  padding: 0 1.5rem;
  flex-grow: 1;
}

.info-row {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  text-align: left;
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.4;
}

.info-icon {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  color: var(--color-primary);
  margin-top: 2px;
}

.map-btn {
  display: inline-block;
  background: var(--color-accent);
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 10px 0;
  border-radius: 9999px;
  text-decoration: none;
  width: calc(100% - 3rem);
  margin: 0 auto 1.5rem auto;
  transition: background 0.2s ease, transform 0.1s ease;
}

.map-btn:hover {
  background: var(--color-accent-dark);
}

.map-btn:active {
  transform: scale(0.98);
}

@media (max-width: 640px) {
  .state-title {
    font-size: 2.2rem;
  }
  .cards-grid {
    grid-template-columns: 1fr;
    max-width: 350px;
    margin: 0 auto;
  }
}
</style>
