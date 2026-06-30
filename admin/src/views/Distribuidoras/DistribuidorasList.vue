<template>
  <AdminLayout>
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <h2 class="text-xl font-bold text-gray-800 dark:text-white/90">Distribuidoras</h2>
      <div class="flex items-center gap-3 w-full sm:w-auto">
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="Buscar nombre, estado o ciudad..."
          class="w-full sm:w-64 rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
        <router-link
          to="/distribuidoras/nueva"
          class="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-300 dark:bg-brand-500 dark:hover:bg-brand-600 dark:focus:ring-brand-800 whitespace-nowrap"
        >
          Agregar nuevo
        </router-link>
      </div>
    </div>

    <!-- Error global -->
    <div v-if="apiError" class="mb-4 rounded-lg bg-error-50 border border-error-200 p-3 text-sm text-error-700 dark:bg-error-500/10 dark:border-error-500/20 dark:text-error-400">
      {{ apiError }}
    </div>

    <div v-if="loading" class="p-8 text-center">
      <p class="text-gray-500 text-theme-sm dark:text-gray-400">Cargando distribuidoras...</p>
    </div>

    <div v-else class="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div class="max-w-full overflow-x-auto custom-scrollbar min-w-[800px]">
        <!-- Header -->
        <div class="flex border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 px-5 py-3 sm:px-6">
          <div class="w-1/3 font-medium text-gray-500 text-theme-xs dark:text-gray-400">Distribuidora</div>
          <div class="w-1/4 font-medium text-gray-500 text-theme-xs dark:text-gray-400">Domicilio</div>
          <div class="w-1/5 font-medium text-gray-500 text-theme-xs dark:text-gray-400">Teléfono</div>
          <div class="flex-1 font-medium text-gray-500 text-theme-xs dark:text-gray-400">Acciones</div>
        </div>

        <div v-if="groupedList.length === 0" class="p-8 text-center">
          <p class="text-gray-500 text-theme-sm dark:text-gray-400">No hay distribuidoras registradas</p>
        </div>

        <!-- Draggable States -->
        <draggable 
          v-model="groupedList" 
          item-key="name" 
          handle=".drag-state" 
          @change="saveOrder"
          :disabled="!!searchQuery"
        >
          <template #item="{ element: state }">
            <div>
              <!-- State Row -->
              <div class="flex items-center px-5 py-3 sm:px-6 bg-brand-50/60 border-b border-brand-100/50 hover:bg-brand-50 dark:bg-brand-900/20 dark:border-brand-800/30 dark:hover:bg-brand-900/40 transition-colors">
                <GripVertical v-if="!searchQuery" class="w-4 h-4 text-brand-400 mr-2 cursor-grab drag-state" />
                <div class="flex items-center gap-2 cursor-pointer flex-1" @click="toggleState(state.name)">
                  <ChevronDown v-if="expandedStates.has(state.name)" class="w-5 h-5 text-brand-600 dark:text-brand-400" />
                  <ChevronRight v-else class="w-5 h-5 text-brand-500/70 dark:text-brand-500/70" />
                  <span class="font-semibold text-brand-800 dark:text-brand-300 text-sm">{{ state.name }}</span>
                  <span class="px-2 py-0.5 rounded-full bg-brand-100 dark:bg-brand-800/50 text-xs text-brand-700 dark:text-brand-400 font-medium">
                    {{ state.cities.reduce((acc: number, city: CityGroup) => acc + city.items.length, 0) }} distribuidoras
                  </span>
                </div>
              </div>
              
              <!-- State Content (Cities) -->
              <div v-if="expandedStates.has(state.name)">
                <draggable 
                  v-model="state.cities" 
                  item-key="name" 
                  handle=".drag-city" 
                  @change="saveOrder"
                  :disabled="!!searchQuery"
                >
                  <template #item="{ element: city }">
                    <div>
                      <!-- City Row -->
                      <div class="flex items-center px-5 py-2 sm:px-6 pl-10 border-b border-brand-50/50 bg-white hover:bg-brand-50/30 dark:bg-transparent dark:border-brand-900/10 dark:hover:bg-brand-900/20 transition-colors">
                        <GripVertical v-if="!searchQuery" class="w-4 h-4 text-brand-300/70 mr-2 cursor-grab drag-city" />
                        <div class="flex items-center gap-2 cursor-pointer flex-1" @click="toggleCity(`${state.name}-${city.name}`)">
                          <ChevronDown v-if="expandedCities.has(`${state.name}-${city.name}`)" class="w-4 h-4 text-brand-500" />
                          <ChevronRight v-else class="w-4 h-4 text-brand-400" />
                          <span class="font-medium text-brand-700 dark:text-brand-400 text-sm">{{ city.name }}</span>
                          <span class="text-xs text-brand-500/70 dark:text-brand-500/70">({{ city.items.length }})</span>
                        </div>
                      </div>

                      <!-- City Content (Items) -->
                      <div v-if="expandedCities.has(`${state.name}-${city.name}`)">
                        <draggable 
                          v-model="city.items" 
                          item-key="id" 
                          handle=".drag-item" 
                          @change="saveOrder"
                          :disabled="!!searchQuery"
                        >
                          <template #item="{ element: item }">
                            <div class="flex items-center px-5 py-4 sm:px-6 pl-16 border-b border-gray-50 bg-white hover:bg-gray-50/50 dark:bg-transparent dark:border-gray-800/30 dark:hover:bg-gray-800/20 transition-colors group">
                              <GripVertical v-if="!searchQuery" class="w-4 h-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity mr-2 cursor-grab drag-item" />
                              <div class="w-1/3 pr-4">
                                <p class="text-gray-800 text-theme-sm dark:text-white/90">{{ item.nombre }}</p>
                              </div>
                              <div class="w-1/4 pr-4">
                                <p class="text-gray-500 text-theme-sm dark:text-gray-400 truncate" :title="item.domicilio">{{ item.domicilio }}</p>
                              </div>
                              <div class="w-1/5 pr-4">
                                <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ item.telefono }}</p>
                              </div>
                              <div class="flex-1 flex gap-3">
                                <router-link :to="`/distribuidoras/ver/${item.id}`" class="text-brand-500 hover:text-brand-600" title="Ver detalles">
                                  <Eye class="w-5 h-5" />
                                </router-link>
                                <router-link :to="`/distribuidoras/editar/${item.id}`" class="text-warning-500 hover:text-warning-600" title="Editar">
                                  <Pencil class="w-5 h-5" />
                                </router-link>
                                <button @click="deleteItem(item.id)" class="text-error-500 hover:text-error-600" title="Borrar">
                                  <Trash class="w-5 h-5" />
                                </button>
                              </div>
                            </div>
                          </template>
                        </draggable>
                      </div>
                    </div>
                  </template>
                </draggable>
              </div>
            </div>
          </template>
        </draggable>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import AdminLayout from '@/components/layout/AdminLayout.vue';
import { Eye, Pencil, Trash, ChevronDown, ChevronRight, GripVertical } from 'lucide-vue-next';
import draggable from 'vuedraggable';

const API_URL = `${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api`;

interface Distribuidora {
  id: number;
  nombre: string;
  estado: string;
  ciudad: string;
  domicilio: string;
  telefono: string;
  orden: number;
}

interface CityGroup {
  name: string;
  items: Distribuidora[];
}

interface StateGroup {
  name: string;
  cities: CityGroup[];
}

const distribuidoras = ref<Distribuidora[]>([]);
const groupedList = ref<StateGroup[]>([]);
const loading = ref(false);
const apiError = ref('');

const expandedStates = ref<Set<string>>(new Set());
const expandedCities = ref<Set<string>>(new Set());
const searchQuery = ref('');

let savedSettingsOrder: any = null;

const toggleState = (stateName: string) => {
  if (expandedStates.value.has(stateName)) expandedStates.value.delete(stateName);
  else expandedStates.value.add(stateName);
};

const toggleCity = (cityName: string) => {
  if (expandedCities.value.has(cityName)) expandedCities.value.delete(cityName);
  else expandedCities.value.add(cityName);
};

// Computes the grouped hierarchy from the flat array, applying search filters and custom ordering
const buildHierarchy = () => {
  let filtered = distribuidoras.value;
  
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase();
    filtered = filtered.filter(d => 
      (d.nombre && d.nombre.toLowerCase().includes(q)) ||
      (d.estado && d.estado.toLowerCase().includes(q)) ||
      (d.ciudad && d.ciudad.toLowerCase().includes(q))
    );
  }

  const groups: Record<string, Record<string, Distribuidora[]>> = {};
  filtered.forEach(d => {
    const estado = d.estado || 'Sin Estado';
    const ciudad = d.ciudad || 'Sin Ciudad';
    if (!groups[estado]) groups[estado] = {};
    if (!groups[estado][ciudad]) groups[estado][ciudad] = [];
    groups[estado][ciudad].push(d);
  });

  const stateOrder = savedSettingsOrder?.states || [];
  const cityOrderMap = savedSettingsOrder?.cities || {};

  const result: StateGroup[] = [];

  const getOrderIndex = (arr: string[], val: string) => {
    const idx = arr.indexOf(val);
    return idx === -1 ? 999999 : idx;
  };

  Object.keys(groups).forEach(stateName => {
    const citiesResult: CityGroup[] = [];
    
    Object.keys(groups[stateName]).forEach(cityName => {
      // Items are already sorted by 'orden' from the backend query
      citiesResult.push({
        name: cityName,
        items: groups[stateName][cityName]
      });
    });

    // Sort cities by saved order or alphabetically
    citiesResult.sort((a, b) => {
      const citiesOrder = cityOrderMap[stateName] || [];
      const idxA = getOrderIndex(citiesOrder, a.name);
      const idxB = getOrderIndex(citiesOrder, b.name);
      if (idxA !== idxB) return idxA - idxB;
      return a.name.localeCompare(b.name);
    });

    result.push({
      name: stateName,
      cities: citiesResult
    });
  });

  // Sort states by saved order or alphabetically
  result.sort((a, b) => {
    const idxA = getOrderIndex(stateOrder, a.name);
    const idxB = getOrderIndex(stateOrder, b.name);
    if (idxA !== idxB) return idxA - idxB;
    return a.name.localeCompare(b.name);
  });

  groupedList.value = result;
};

watch(searchQuery, buildHierarchy);

const fetchSettings = async () => {
  try {
    const res = await fetch(`${API_URL}/settings/distribuidoras_order`);
    if (res.ok) {
      savedSettingsOrder = await res.json();
    }
  } catch (e) {
    console.error('No se pudo cargar la configuración de orden');
  }
};

const fetchDistribuidoras = async () => {
  loading.value = true;
  apiError.value = '';
  try {
    await fetchSettings();
    const res = await fetch(`${API_URL}/distribuidoras`);
    if (!res.ok) throw new Error('Error al obtener distribuidoras');
    distribuidoras.value = await res.json();
    buildHierarchy();
  } catch (e: any) {
    apiError.value = e.message;
  } finally {
    loading.value = false;
  }
};

// Fired when dragging ends
const saveOrder = async () => {
  // 1. Save settings (States and Cities order)
  const newOrder = {
    states: groupedList.value.map(s => s.name),
    cities: {} as Record<string, string[]>
  };
  
  let currentItemOrder = 0;
  const itemUpdates: {id: number, orden: number}[] = [];

  groupedList.value.forEach(state => {
    newOrder.cities[state.name] = state.cities.map(c => c.name);
    state.cities.forEach(city => {
      city.items.forEach(item => {
        itemUpdates.push({ id: item.id, orden: currentItemOrder++ });
      });
    });
  });

  savedSettingsOrder = newOrder;

  try {
    // Update settings in background
    fetch(`${API_URL}/settings/distribuidoras_order`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newOrder)
    });

    // Update items orden in background
    fetch(`${API_URL}/distribuidoras/reorder`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(itemUpdates)
    });
    
  } catch (e) {
    console.error('Error al guardar el nuevo orden', e);
  }
};

const deleteItem = async (id: number) => {
  if (!confirm('¿Estás seguro de que deseas borrar esta distribuidora?')) return;
  try {
    const res = await fetch(`${API_URL}/distribuidoras/${id}`, { method: 'DELETE' });
    if (!res.ok) {
      const data = await res.json();
      apiError.value = data.error || 'Error al eliminar';
      return;
    }
    await fetchDistribuidoras();
  } catch (e: any) {
    apiError.value = 'Error de conexión con el servidor.';
  }
};

onMounted(() => {
  fetchDistribuidoras();
});
</script>
