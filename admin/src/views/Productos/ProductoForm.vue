<template>
  <AdminLayout>
    <div class="mb-6 flex items-center gap-4">
      <router-link to="/productos" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
        &larr; Volver
      </router-link>
      <h2 class="text-xl font-bold text-gray-800 dark:text-white/90">
        {{ isViewing ? 'Detalles del Producto' : isEditing ? 'Editar Producto' : 'Nuevo Producto' }}
      </h2>
    </div>

    <div v-if="apiError" class="mb-4 rounded-lg bg-error-50 border border-error-200 p-3 text-sm text-error-700 dark:bg-error-500/10 dark:border-error-500/20 dark:text-error-400">
      {{ apiError }}
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

      <!-- Izquierda: Formulario -->
      <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03]">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Información del Producto</h3>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <!-- Nombre -->
          <div>
            <label class="block mb-1.5 text-sm font-medium text-gray-900 dark:text-white">Nombre <span class="text-error-500">*</span></label>
            <input v-model="form.nombre" type="text" :disabled="isViewing"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:text-white disabled:opacity-50"
              required>
          </div>

          <!-- Tags -->
          <div>
            <label class="block mb-1.5 text-sm font-medium text-gray-900 dark:text-white">Categorías / Tags</label>
            <div v-if="!isViewing" class="flex gap-2 mb-2">
              <input v-model="tagInput" type="text" placeholder="Ej. Grado Industrial"
                @keydown.enter.prevent="addTag"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 flex-1 p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
              <button type="button" @click="addTag"
                class="px-3 py-2 text-sm bg-brand-500 text-white rounded-lg hover:bg-brand-600">
                +
              </button>
            </div>
            <div class="flex flex-wrap gap-2">
              <span v-for="(tag, i) in form.tags" :key="i"
                class="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                {{ tag }}
                <button v-if="!isViewing" type="button" @click="removeTag(i)" class="ml-1 text-brand-400 hover:text-brand-700">&times;</button>
              </span>
              <span v-if="form.tags.length === 0" class="text-gray-400 text-xs">Sin categorías</span>
            </div>
          </div>

          <!-- Descripción -->
          <div>
            <label class="block mb-1.5 text-sm font-medium text-gray-900 dark:text-white">Descripción</label>
            <textarea v-model="form.descripcion" :disabled="isViewing" rows="4"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:text-white disabled:opacity-50 resize-none">
            </textarea>
          </div>

          <!-- Material -->
          <div>
            <label class="block mb-1.5 text-sm font-medium text-gray-900 dark:text-white">Material</label>
            <input v-model="form.material" type="text" :disabled="isViewing"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:text-white disabled:opacity-50">
          </div>

          <!-- Resistencia -->
          <div>
            <label class="block mb-1.5 text-sm font-medium text-gray-900 dark:text-white">Resistencia</label>
            <input v-model="form.resistencia" type="text" :disabled="isViewing"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:text-white disabled:opacity-50">
          </div>

          <!-- Certificación -->
          <div>
            <label class="block mb-1.5 text-sm font-medium text-gray-900 dark:text-white">Certificación</label>
            <input v-model="form.certificacion" type="text" :disabled="isViewing"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:text-white disabled:opacity-50">
          </div>

          <div v-if="!isViewing" class="pt-2 flex justify-end">
            <button type="submit" :disabled="saving"
              class="text-white bg-brand-500 hover:bg-brand-600 focus:ring-4 focus:outline-none focus:ring-brand-300 font-medium rounded-lg text-sm px-5 py-2.5 disabled:opacity-60 w-full sm:w-auto">
              {{ saving ? 'Guardando...' : 'Guardar Producto' }}
            </button>
          </div>
        </form>
      </div>

      <!-- Derecha: Foto -->
      <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-white/[0.03] flex flex-col">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Fotografía del Producto</h3>

        <div
          class="flex-1 flex flex-col items-center justify-center min-h-[350px] border-2 border-dashed rounded-lg transition-colors"
          :class="[
            isDragging && !isViewing ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/10' : 'border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-800',
            previewUrl ? 'p-2' : 'p-6',
            isViewing ? 'cursor-default' : 'cursor-pointer'
          ]"
          @dragover.prevent="!isViewing && (isDragging = true)"
          @dragleave.prevent="!isViewing && (isDragging = false)"
          @drop.prevent="!isViewing && handleDrop($event)"
          @click="!isViewing && triggerFileInput()"
        >
          <input type="file" ref="fileInput" class="hidden" accept="image/*" :disabled="isViewing" @change="handleFileSelected">

          <template v-if="previewUrl">
            <div class="relative w-full h-full min-h-[350px] group">
              <img :src="previewUrl" alt="Preview" class="w-full h-full object-contain rounded-md" />
              <div v-if="!isViewing" class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                <span class="text-white font-medium">Clic para cambiar foto</span>
              </div>
            </div>
          </template>

          <template v-else>
            <div class="text-center">
              <svg class="mx-auto h-14 w-14 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div class="mt-4 flex text-sm text-gray-600 dark:text-gray-400 justify-center">
                <span v-if="!isViewing" class="font-medium text-brand-500 hover:text-brand-600">Subir imagen</span>
                <span v-else>Sin imagen</span>
                <p v-if="!isViewing" class="pl-1">o arrastrar y soltar</p>
              </div>
              <p v-if="!isViewing" class="text-xs text-gray-400 mt-2">PNG, JPG, WEBP hasta 5MB</p>
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
const API_URL = 'http://localhost:3000/api/productos';

const isEditing = computed(() => route.path.includes('/editar/'));
const isViewing = computed(() => route.path.includes('/ver/'));
const productoId = computed(() => route.params.id);

const form = ref({
  nombre: '',
  tags: [] as string[],
  descripcion: '',
  material: '',
  resistencia: '',
  certificacion: '',
});

const tagInput = ref('');
const apiError = ref('');
const saving = ref(false);
const isDragging = ref(false);
const fileInput = ref<HTMLInputElement | null>(null);
const selectedFile = ref<File | null>(null);
const previewUrl = ref<string | null>(null);

const addTag = () => {
  const t = tagInput.value.trim();
  if (t && !form.value.tags.includes(t)) {
    form.value.tags.push(t);
  }
  tagInput.value = '';
};

const removeTag = (i: number) => {
  form.value.tags.splice(i, 1);
};

const triggerFileInput = () => fileInput.value?.click();

const handleFileSelected = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files?.[0]) processFile(target.files[0]);
};

const handleDrop = (event: DragEvent) => {
  isDragging.value = false;
  if (event.dataTransfer?.files?.[0]) processFile(event.dataTransfer.files[0]);
};

const processFile = (file: File) => {
  if (!file.type.startsWith('image/')) {
    apiError.value = 'Selecciona un archivo de imagen válido.';
    return;
  }
  selectedFile.value = file;
  previewUrl.value = URL.createObjectURL(file);
};

const fetchProducto = async () => {
  try {
    const res = await fetch(`${API_URL}/${productoId.value}`);
    if (!res.ok) throw new Error('No se pudo cargar el producto');
    const data = await res.json();

    form.value.nombre = data.nombre;
    form.value.tags = data.tags || [];
    form.value.descripcion = data.descripcion || '';
    form.value.material = data.material || '';
    form.value.resistencia = data.resistencia || '';
    form.value.certificacion = data.certificacion || '';

    if (data.foto_url) previewUrl.value = data.foto_url;
  } catch (e: any) {
    apiError.value = e.message;
  }
};

const handleSubmit = async () => {
  apiError.value = '';
  saving.value = true;

  const formData = new FormData();
  formData.append('nombre', form.value.nombre);
  formData.append('tags', JSON.stringify(form.value.tags));
  formData.append('descripcion', form.value.descripcion);
  formData.append('material', form.value.material);
  formData.append('resistencia', form.value.resistencia);
  formData.append('certificacion', form.value.certificacion);
  if (selectedFile.value) formData.append('foto', selectedFile.value);

  try {
    let res;
    if (isEditing.value) {
      res = await fetch(`${API_URL}/${productoId.value}`, { method: 'PUT', body: formData });
    } else {
      res = await fetch(API_URL, { method: 'POST', body: formData });
    }

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || 'Error al guardar');
    }

    router.push('/productos');
  } catch (e: any) {
    apiError.value = e.message;
  } finally {
    saving.value = false;
  }
};

onMounted(() => {
  if (isEditing.value || isViewing.value) fetchProducto();
});
</script>
