<template>
  <AdminLayout>
    <div class="mb-6 flex items-center gap-4">
      <router-link to="/distribuidoras" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
        &larr; Volver
      </router-link>
      <h2 class="text-xl font-bold text-gray-800 dark:text-white/90">
        {{ isViewing ? 'Detalles de Distribuidora' : isEditing ? 'Editar Distribuidora' : 'Nueva Distribuidora' }}
      </h2>
    </div>

    <div v-if="apiError" class="mb-4 rounded-lg bg-error-50 border border-error-200 p-3 text-sm text-error-700 dark:bg-error-500/10 dark:border-error-500/20 dark:text-error-400">
      {{ apiError }}
    </div>

    <div class="max-w-3xl mx-auto">
      
      <!-- Formulario -->
      <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Información General</h3>
        
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
            <input v-model="form.nombre" type="text" :disabled="isViewing" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white disabled:opacity-50" required>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estado</label>
              <select v-model="form.estado" @change="handleEstadoChange" :disabled="isViewing" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white disabled:opacity-50" required>
                <option value="" disabled selected>Selecciona un estado</option>
                <option v-for="estado in estados" :key="estado" :value="estado">{{ estado }}</option>
              </select>
            </div>

            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ciudad</label>
              <select v-model="form.ciudad" :disabled="!form.estado || isViewing" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white disabled:opacity-50" required>
                <option value="" disabled selected>Selecciona una ciudad</option>
                <option v-for="ciudad in ciudadesDisponibles" :key="ciudad" :value="ciudad">{{ ciudad }}</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Domicilio</label>
            <input v-model="form.domicilio" type="text" :disabled="isViewing" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white disabled:opacity-50" required>
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Referencias</label>
            <input v-model="form.referencias" type="text" :disabled="isViewing" placeholder="Ej. Entre calles, frente a un parque, etc." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white disabled:opacity-50">
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teléfono</label>
            <input
              v-model="form.telefono"
              type="text"
              maxlength="10"
              minlength="10"
              @input="form.telefono = form.telefono.replace(/[^0-9]/g, '').slice(0, 10)"
              :disabled="isViewing"
              placeholder="Ej. 5512345678"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white disabled:opacity-50"
              required
            >
          </div>

          <div class="pt-4 flex justify-end" v-if="!isViewing">
            <button type="submit" :disabled="saving" class="text-white bg-brand-500 hover:bg-brand-600 focus:ring-4 focus:outline-none focus:ring-brand-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-60 w-full sm:w-auto">
              {{ saving ? 'Guardando...' : 'Guardar Distribuidora' }}
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AdminLayout from '@/components/layout/AdminLayout.vue';
import mexicoData from '@/data/mexico.json';

const route = useRoute();
const router = useRouter();
const API_URL = `${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api/distribuidoras`;

const isEditing = computed(() => route.path.includes('/editar/'));
const isViewing = computed(() => route.path.includes('/ver/'));
const distribuidoraId = computed(() => route.params.id);

const form = ref({
  nombre: '',
  estado: '',
  ciudad: '',
  domicilio: '',
  referencias: '',
  telefono: '',
});

// Datos de estados y ciudades para México desde el archivo JSON
const locationData: Record<string, string[]> = mexicoData;

const estados = Object.keys(locationData).sort();
const ciudadesDisponibles = ref<string[]>([]);

const handleEstadoChange = () => {
  ciudadesDisponibles.value = locationData[form.value.estado] || [];
  form.value.ciudad = '';
};

const apiError = ref('');
const saving = ref(false);
// Fetch if editing
const fetchDistribuidora = async () => {
  try {
    const res = await fetch(`${API_URL}/${distribuidoraId.value}`);
    if (!res.ok) throw new Error('No se pudo cargar la información');
    const data = await res.json();
    
    form.value.nombre = data.nombre;
    form.value.estado = data.estado;
    // Set allowed cities for fetched state
    ciudadesDisponibles.value = locationData[data.estado] || [];
    // Delay setting ciudad slightly so the options render, although in Vue3 reactivity it's usually instant
    form.value.ciudad = data.ciudad;
    form.value.domicilio = data.domicilio;
    form.value.referencias = data.referencias || '';
    form.value.telefono = data.telefono;
  } catch (e: any) {
    apiError.value = e.message;
  }
};

const handleSubmit = async () => {
  apiError.value = '';
  saving.value = true;
  
  const payload = {
    nombre: form.value.nombre,
    estado: form.value.estado,
    ciudad: form.value.ciudad,
    domicilio: form.value.domicilio,
    referencias: form.value.referencias,
    telefono: form.value.telefono,
  };

  try {
    let res;
    if (isEditing.value) {
      res = await fetch(`${API_URL}/${distribuidoraId.value}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } else {
      res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    }

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || 'Error al guardar distribuidora');
    }
    
    router.push('/distribuidoras');
  } catch (e: any) {
    apiError.value = e.message;
  } finally {
    saving.value = false;
  }
};

onMounted(() => {
  if (isEditing.value || isViewing.value) {
    fetchDistribuidora();
  }
});
</script>
