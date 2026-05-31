<template>
  <AdminLayout>
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xl font-bold text-gray-800 dark:text-white/90">Productos</h2>
      <router-link
        to="/productos/nuevo"
        class="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-300 dark:bg-brand-500 dark:hover:bg-brand-600"
      >
        Agregar nuevo
      </router-link>
    </div>

    <div v-if="apiError" class="mb-4 rounded-lg bg-error-50 border border-error-200 p-3 text-sm text-error-700 dark:bg-error-500/10 dark:border-error-500/20 dark:text-error-400">
      {{ apiError }}
    </div>

    <div class="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div class="max-w-full overflow-x-auto custom-scrollbar">
        <table class="min-w-full">
          <thead>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th class="px-5 py-3 text-left sm:px-6"><p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Nombre</p></th>
              <th class="px-5 py-3 text-left sm:px-6"><p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Tags</p></th>
              <th class="px-5 py-3 text-left sm:px-6"><p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Material</p></th>
              <th class="px-5 py-3 text-left sm:px-6"><p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Resistencia</p></th>
              <th class="px-5 py-3 text-left sm:px-6"><p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Certificación</p></th>
              <th class="px-5 py-3 text-left sm:px-6"><p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Acciones</p></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr v-if="loading">
              <td colspan="6" class="px-5 py-8 text-center sm:px-6">
                <p class="text-gray-500 text-theme-sm dark:text-gray-400">Cargando productos...</p>
              </td>
            </tr>
            <template v-else>
              <tr v-for="item in productos" :key="item.id" class="border-t border-gray-100 dark:border-gray-800">
                <td class="px-5 py-4 sm:px-6">
                  <div class="flex items-center gap-3">
                    <img v-if="item.foto_url" :src="item.foto_url" alt="foto" class="w-10 h-10 rounded-md object-cover border border-gray-200 dark:border-gray-700" />
                    <div v-else class="w-10 h-10 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <ImageIcon class="w-5 h-5 text-gray-400" />
                    </div>
                    <p class="text-gray-800 text-theme-sm dark:text-white/90 font-medium">{{ item.nombre }}</p>
                  </div>
                </td>
                <td class="px-5 py-4 sm:px-6">
                  <div class="flex flex-wrap gap-1">
                    <span v-for="tag in item.tags" :key="tag" class="px-2 py-0.5 text-xs rounded-full bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400 font-medium uppercase tracking-wide">
                      {{ tag }}
                    </span>
                    <span v-if="!item.tags || item.tags.length === 0" class="text-gray-400 text-theme-xs">—</span>
                  </div>
                </td>
                <td class="px-5 py-4 sm:px-6">
                  <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ item.material || '—' }}</p>
                </td>
                <td class="px-5 py-4 sm:px-6">
                  <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ item.resistencia || '—' }}</p>
                </td>
                <td class="px-5 py-4 sm:px-6">
                  <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ item.certificacion || '—' }}</p>
                </td>
                <td class="px-5 py-4 sm:px-6 flex gap-3">
                  <router-link :to="`/productos/ver/${item.id}`" class="text-brand-500 hover:text-brand-600" title="Ver detalles">
                    <Eye class="w-5 h-5" />
                  </router-link>
                  <router-link :to="`/productos/editar/${item.id}`" class="text-warning-500 hover:text-warning-600" title="Editar">
                    <Pencil class="w-5 h-5" />
                  </router-link>
                  <button @click="deleteItem(item.id)" class="text-error-500 hover:text-error-600" title="Borrar">
                    <Trash class="w-5 h-5" />
                  </button>
                </td>
              </tr>
              <tr v-if="productos.length === 0">
                <td colspan="6" class="px-5 py-8 text-center sm:px-6">
                  <p class="text-gray-500 text-theme-sm dark:text-gray-400">No hay productos registrados</p>
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
import { Eye, Pencil, Trash, Image as ImageIcon } from 'lucide-vue-next';

const API_URL = 'http://localhost:3000/api/productos';

const productos = ref<any[]>([]);
const loading = ref(false);
const apiError = ref('');

const fetchProductos = async () => {
  loading.value = true;
  apiError.value = '';
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Error al obtener productos');
    productos.value = await res.json();
  } catch (e: any) {
    apiError.value = e.message;
  } finally {
    loading.value = false;
  }
};

const deleteItem = async (id: number) => {
  if (!confirm('¿Estás seguro de que deseas borrar este producto?')) return;
  try {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (!res.ok) {
      const data = await res.json();
      apiError.value = data.error || 'Error al eliminar';
      return;
    }
    await fetchProductos();
  } catch (e: any) {
    apiError.value = 'Error de conexión con el servidor.';
  }
};

onMounted(fetchProductos);
</script>
