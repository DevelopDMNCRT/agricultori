<template>
  <AdminLayout>
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xl font-bold text-gray-800 dark:text-white/90">Distribuidoras</h2>
      <router-link
        to="/distribuidoras/nueva"
        class="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-300 dark:bg-brand-500 dark:hover:bg-brand-600 dark:focus:ring-brand-800"
      >
        Agregar nuevo
      </router-link>
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
              <th class="px-5 py-3 text-left sm:px-6">
                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Nombre</p>
              </th>
              <th class="px-5 py-3 text-left sm:px-6">
                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Estado</p>
              </th>
              <th class="px-5 py-3 text-left sm:px-6">
                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Ciudad</p>
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
              <tr v-for="item in distribuidoras" :key="item.id" class="border-t border-gray-100 dark:border-gray-800">
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
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AdminLayout from '@/components/layout/AdminLayout.vue';
import { Eye, Pencil, Trash } from 'lucide-vue-next';

const API_URL = 'http://localhost:3000/api/distribuidoras';

const distribuidoras = ref<any[]>([]);
const loading = ref(false);
const apiError = ref('');

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
