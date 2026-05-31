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

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      <!-- Lado Izquierdo: Formulario -->
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

      <!-- Lado Derecho: Subir Foto -->
      <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03] flex flex-col">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Fotografía de la Ubicación</h3>
        
        <div 
          class="flex-1 flex flex-col items-center justify-center min-h-[300px] border-2 border-dashed rounded-lg transition-colors"
          :class="[
            isDragging && !isViewing ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/10' : 'border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-800', 
            previewUrl ? 'p-2' : 'p-6',
            isViewing ? 'cursor-default opacity-80' : 'cursor-pointer'
          ]"
          @dragover.prevent="!isViewing && (isDragging = true)"
          @dragleave.prevent="!isViewing && (isDragging = false)"
          @drop.prevent="!isViewing && handleDrop($event)"
          @click="!isViewing && triggerFileInput()"
        >
          <input 
            type="file" 
            ref="fileInput" 
            class="hidden" 
            accept="image/*"
            :disabled="isViewing"
            @change="handleFileSelected"
          >
          
          <template v-if="previewUrl">
            <div class="relative w-full h-full min-h-[300px] group">
              <img :src="previewUrl" alt="Previsualización" class="w-full h-full object-cover rounded-md" />
              <div v-if="!isViewing" class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                <span class="text-white font-medium">Clic para cambiar foto</span>
              </div>
            </div>
          </template>
          
          <template v-else>
            <div class="text-center">
              <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div class="mt-4 flex text-sm text-gray-600 dark:text-gray-400 justify-center">
                <span v-if="!isViewing" class="relative font-medium text-brand-500 hover:text-brand-600 focus-within:outline-none">
                  Subir un archivo
                </span>
                <span v-else>Sin imagen cargada</span>
                <p class="pl-1" v-if="!isViewing">o arrastrar y soltar</p>
              </div>
              <p v-if="!isViewing" class="text-xs text-gray-500 dark:text-gray-400 mt-2">
                PNG, JPG, GIF hasta 5MB
              </p>
            </div>
          </template>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AdminLayout from '@/components/layout/AdminLayout.vue';

const route = useRoute();
const router = useRouter();
const API_URL = 'http://localhost:3000/api/distribuidoras';

const isEditing = computed(() => route.path.includes('/editar/'));
const isViewing = computed(() => route.path.includes('/ver/'));
const distribuidoraId = computed(() => route.params.id);

const form = ref({
  nombre: '',
  estado: '',
  ciudad: '',
  domicilio: '',
  telefono: '',
});

// Mock de estados y ciudades para México
const locationData: Record<string, string[]> = {
  "Jalisco": ["Guadalajara", "Zapopan", "Tlaquepaque", "Tonalá"],
  "Nuevo León": ["Monterrey", "San Pedro Garza García", "Guadalupe", "San Nicolás"],
  "Ciudad de México": ["Cuauhtémoc", "Miguel Hidalgo", "Benito Juárez", "Coyoacán"],
  "Michoacán": ["Morelia", "Uruapan", "Zamora", "Pátzcuaro"],
  "Sinaloa": ["Culiacán", "Mazatlán", "Los Mochis", "Guasave"],
  "Sonora": ["Hermosillo", "Obregón", "Nogales", "Guaymas"],
  "Baja California": ["Tijuana", "Mexicali", "Ensenada"],
};

const estados = Object.keys(locationData).sort();
const ciudadesDisponibles = ref<string[]>([]);

const handleEstadoChange = () => {
  ciudadesDisponibles.value = locationData[form.value.estado] || [];
  form.value.ciudad = '';
};

const apiError = ref('');
const saving = ref(false);

// Drag & Drop logic
const isDragging = ref(false);
const fileInput = ref<HTMLInputElement | null>(null);
const selectedFile = ref<File | null>(null);
const previewUrl = ref<string | null>(null);

const triggerFileInput = () => {
  fileInput.value?.click();
};

const handleFileSelected = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    processFile(target.files[0]);
  }
};

const handleDrop = (event: DragEvent) => {
  isDragging.value = false;
  if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
    processFile(event.dataTransfer.files[0]);
  }
};

const processFile = (file: File) => {
  if (!file.type.startsWith('image/')) {
    apiError.value = 'Por favor selecciona un archivo de imagen válido.';
    return;
  }
  selectedFile.value = file;
  previewUrl.value = URL.createObjectURL(file);
};

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
    form.value.telefono = data.telefono;
    
    if (data.foto_url) {
      previewUrl.value = data.foto_url;
    }
  } catch (e: any) {
    apiError.value = e.message;
  }
};

const handleSubmit = async () => {
  apiError.value = '';
  saving.value = true;
  
  const formData = new FormData();
  formData.append('nombre', form.value.nombre);
  formData.append('estado', form.value.estado);
  formData.append('ciudad', form.value.ciudad);
  formData.append('domicilio', form.value.domicilio);
  formData.append('telefono', form.value.telefono);
  
  if (selectedFile.value) {
    formData.append('foto', selectedFile.value);
  }

  try {
    let res;
    if (isEditing.value) {
      res = await fetch(`${API_URL}/${distribuidoraId.value}`, {
        method: 'PUT',
        body: formData,
      });
    } else {
      res = await fetch(API_URL, {
        method: 'POST',
        body: formData,
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
