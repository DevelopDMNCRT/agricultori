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

    <!-- Table -->
    <div class="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div class="max-w-full overflow-x-auto custom-scrollbar">
        <table class="min-w-full">
          <thead>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th class="px-5 py-3 text-left sm:px-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 group" @click="toggleSort('nombre')">
                <div class="flex items-center gap-2">
                  <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Nombre</p>
                  <ChevronUp v-if="sortColumn === 'nombre' && sortDirection === 'asc'" class="w-4 h-4 text-brand-500" />
                  <ChevronDown v-else-if="sortColumn === 'nombre' && sortDirection === 'desc'" class="w-4 h-4 text-brand-500" />
                  <ChevronDown v-else class="w-4 h-4 text-gray-300 dark:text-gray-600 opacity-0 group-hover:opacity-100" />
                </div>
              </th>
              <th class="px-5 py-3 text-left sm:px-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 group" @click="toggleSort('estado')">
                <div class="flex items-center gap-2">
                  <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Estado</p>
                  <ChevronUp v-if="sortColumn === 'estado' && sortDirection === 'asc'" class="w-4 h-4 text-brand-500" />
                  <ChevronDown v-else-if="sortColumn === 'estado' && sortDirection === 'desc'" class="w-4 h-4 text-brand-500" />
                  <ChevronDown v-else class="w-4 h-4 text-gray-300 dark:text-gray-600 opacity-0 group-hover:opacity-100" />
                </div>
              </th>
              <th class="px-5 py-3 text-left sm:px-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 group" @click="toggleSort('ciudad')">
                <div class="flex items-center gap-2">
                  <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Ciudad</p>
                  <ChevronUp v-if="sortColumn === 'ciudad' && sortDirection === 'asc'" class="w-4 h-4 text-brand-500" />
                  <ChevronDown v-else-if="sortColumn === 'ciudad' && sortDirection === 'desc'" class="w-4 h-4 text-brand-500" />
                  <ChevronDown v-else class="w-4 h-4 text-gray-300 dark:text-gray-600 opacity-0 group-hover:opacity-100" />
                </div>
              </th>
              <th class="px-5 py-3 text-left sm:px-6">
                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Domicilio</p>
              </th>
              <th class="px-5 py-3 text-left sm:px-6">
                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Teléfono</p>
              </th>
              <th class="px-5 py-3 text-left sm:px-6">
                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Acciones</p>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <!-- Loading state -->
            <tr v-if="loading">
              <td colspan="6" class="px-5 py-8 text-center sm:px-6">
                <p class="text-gray-500 text-theme-sm dark:text-gray-400">Cargando distribuidoras...</p>
              </td>
            </tr>
            <template v-else>
              <tr v-for="item in paginatedDistribuidoras" :key="item.id" class="border-t border-gray-100 dark:border-gray-800">
                <td class="px-5 py-4 sm:px-6">
                  <p class="text-gray-800 text-theme-sm dark:text-white/90">{{ item.nombre }}</p>
                </td>
                <td class="px-5 py-4 sm:px-6">
                  <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ item.estado }}</p>
                </td>
                <td class="px-5 py-4 sm:px-6">
                  <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ item.ciudad }}</p>
                </td>
                <td class="px-5 py-4 sm:px-6 max-w-xs truncate" :title="item.domicilio">
                  <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ item.domicilio }}</p>
                </td>
                <td class="px-5 py-4 sm:px-6">
                  <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ item.telefono }}</p>
                </td>
                <td class="px-5 py-4 sm:px-6 flex gap-3">
                  <router-link :to="`/distribuidoras/ver/${item.id}`" class="text-brand-500 hover:text-brand-600" title="Ver detalles">
                    <Eye class="w-5 h-5" />
                  </router-link>
                  <router-link :to="`/distribuidoras/editar/${item.id}`" class="text-warning-500 hover:text-warning-600" title="Editar">
                    <Pencil class="w-5 h-5" />
                  </router-link>
                  <button @click="deleteItem(item.id)" class="text-error-500 hover:text-error-600" title="Borrar">
                    <Trash class="w-5 h-5" />
                  </button>
                </td>
              </tr>
              <tr v-if="distribuidoras.length === 0">
                <td colspan="6" class="px-5 py-8 text-center sm:px-6">
                  <p class="text-gray-500 text-theme-sm dark:text-gray-400">No hay distribuidoras registradas</p>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>

      <!-- Pagination Controls -->
      <div v-if="totalPages > 1" class="flex items-center justify-between px-5 py-4 border-t border-gray-200 dark:border-gray-800">
        <span class="text-sm text-gray-500 dark:text-gray-400">
          Mostrando página {{ currentPage }} de {{ totalPages }}
        </span>
        <div class="flex gap-2">
          <button 
            @click="prevPage" 
            :disabled="currentPage === 1"
            class="px-3 py-1 rounded border border-gray-200 dark:border-gray-700 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 dark:text-gray-300"
          >
            Anterior
          </button>
          <button 
            @click="nextPage" 
            :disabled="currentPage === totalPages"
            class="px-3 py-1 rounded border border-gray-200 dark:border-gray-700 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 dark:text-gray-300"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import AdminLayout from '@/components/layout/AdminLayout.vue';
import { Eye, Pencil, Trash, ChevronUp, ChevronDown } from 'lucide-vue-next';

const API_URL = `${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api/distribuidoras`;

const distribuidoras = ref<any[]>([]);
const loading = ref(false);
const apiError = ref('');

const currentPage = ref(1);
const itemsPerPage = 10;
const searchQuery = ref('');

const filteredDistribuidoras = computed(() => {
  if (!searchQuery.value) return distribuidoras.value;
  const lowerQuery = searchQuery.value.toLowerCase();
  return distribuidoras.value.filter((d: any) => 
    (d.nombre && d.nombre.toLowerCase().includes(lowerQuery)) ||
    (d.estado && d.estado.toLowerCase().includes(lowerQuery)) ||
    (d.ciudad && d.ciudad.toLowerCase().includes(lowerQuery))
  );
});

const sortColumn = ref('nombre');
const sortDirection = ref('asc');

const toggleSort = (column: string) => {
  if (sortColumn.value === column) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortColumn.value = column;
    sortDirection.value = 'asc';
  }
};

const sortedDistribuidoras = computed(() => {
  const result = [...filteredDistribuidoras.value];
  result.sort((a, b) => {
    const valA = (a[sortColumn.value] || '').toLowerCase();
    const valB = (b[sortColumn.value] || '').toLowerCase();
    if (valA < valB) return sortDirection.value === 'asc' ? -1 : 1;
    if (valA > valB) return sortDirection.value === 'asc' ? 1 : -1;
    return 0;
  });
  return result;
});

watch(searchQuery, () => {
  currentPage.value = 1;
});

const totalPages = computed(() => Math.ceil(sortedDistribuidoras.value.length / itemsPerPage));

const paginatedDistribuidoras = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return sortedDistribuidoras.value.slice(start, end);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const fetchDistribuidoras = async () => {
  loading.value = true;
  apiError.value = '';
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Error al obtener distribuidoras');
    distribuidoras.value = await res.json();
  } catch (e: any) {
    apiError.value = e.message;
  } finally {
    loading.value = false;
  }
};

const deleteItem = async (id: number) => {
  if (!confirm('¿Estás seguro de que deseas borrar esta distribuidora?')) return;
  try {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
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
