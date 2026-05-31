<template>
  <AdminLayout>
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xl font-bold text-gray-800 dark:text-white/90">Usuarios</h2>
      <button
        @click="openModal('add')"
        class="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-300 dark:bg-brand-500 dark:hover:bg-brand-600 dark:focus:ring-brand-800"
      >
        Agregar nuevo
      </button>
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
                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Usuario</p>
              </th>
              <th class="px-5 py-3 text-left sm:px-6">
                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Correo</p>
              </th>
              <th class="px-5 py-3 text-left sm:px-6">
                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Teléfono</p>
              </th>
              <th class="px-5 py-3 text-left sm:px-6">
                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Contraseña</p>
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
                <p class="text-gray-500 text-theme-sm dark:text-gray-400">Cargando usuarios...</p>
              </td>
            </tr>
            <template v-else>
              <tr v-for="user in usersList" :key="user.id" class="border-t border-gray-100 dark:border-gray-800">
                <td class="px-5 py-4 sm:px-6">
                  <p class="text-gray-800 text-theme-sm dark:text-white/90">{{ user.nombre }}</p>
                </td>
                <td class="px-5 py-4 sm:px-6">
                  <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ user.usuario }}</p>
                </td>
                <td class="px-5 py-4 sm:px-6">
                  <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ user.correo }}</p>
                </td>
                <td class="px-5 py-4 sm:px-6">
                  <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ user.telefono }}</p>
                </td>
                <td class="px-5 py-4 sm:px-6">
                  <p class="text-gray-500 text-theme-sm dark:text-gray-400">********</p>
                </td>
                <td class="px-5 py-4 sm:px-6 flex gap-3">
                  <button @click="openModal('view', user)" class="text-brand-500 hover:text-brand-600" title="Ver detalles">
                    <Eye class="w-5 h-5" />
                  </button>
                  <button @click="openModal('edit', user)" class="text-warning-500 hover:text-warning-600" title="Editar">
                    <Pencil class="w-5 h-5" />
                  </button>
                  <button @click="deleteUser(user.id)" class="text-error-500 hover:text-error-600" title="Borrar">
                    <Trash class="w-5 h-5" />
                  </button>
                </td>
              </tr>
              <tr v-if="usersList.length === 0">
                <td colspan="6" class="px-5 py-8 text-center sm:px-6">
                  <p class="text-gray-500 text-theme-sm dark:text-gray-400">No hay usuarios registrados</p>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modal -->
    <Modal v-if="isModalOpen" @close="closeModal" :fullScreenBackdrop="true">
      <template #body>
        <div class="relative w-full max-w-md p-4 mx-auto mt-20 bg-white rounded-xl shadow-lg dark:bg-gray-900 border dark:border-gray-800">
          <div class="flex items-center justify-between p-4 border-b dark:border-gray-800">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ modalMode === 'add' ? 'Agregar Nuevo Usuario' : modalMode === 'edit' ? 'Editar Usuario' : 'Detalles del Usuario' }}
            </h3>
            <button @click="closeModal" class="text-gray-400 hover:text-gray-900 dark:hover:text-white font-bold text-xl">
              &times;
            </button>
          </div>
          <form @submit.prevent="handleSubmit" class="p-4 space-y-4">
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
              <input v-model="form.nombre" type="text" :disabled="modalMode === 'view'" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white disabled:opacity-50" required>
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
              <input v-model="form.usuario" type="text" :disabled="modalMode === 'view'" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white disabled:opacity-50" required>
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
              <input v-model="form.correo" type="email" :disabled="modalMode === 'view'" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white disabled:opacity-50" required>
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teléfono</label>
              <input
                v-model="form.telefono"
                type="text"
                maxlength="10"
                minlength="10"
                @input="form.telefono = form.telefono.replace(/[^0-9]/g, '').slice(0, 10)"
                :disabled="modalMode === 'view'"
                placeholder="Ej. 5512345678"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white disabled:opacity-50"
                required
              >
            </div>

            <!-- View mode: timestamps -->
            <template v-if="modalMode === 'view' && selectedUser">
              <div class="pt-2 border-t dark:border-gray-700 space-y-2">
                <p class="text-xs text-gray-400">
                  <span class="font-medium text-gray-600 dark:text-gray-300">Creado:</span>
                  {{ formatDate(selectedUser.created_at) }}
                </p>
                <p class="text-xs text-gray-400" v-if="selectedUser.edited_at">
                  <span class="font-medium text-gray-600 dark:text-gray-300">Editado:</span>
                  {{ formatDate(selectedUser.edited_at) }}
                </p>
              </div>
            </template>

            <div v-if="modalMode === 'add'">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
              <input v-model="form.contrasena" type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white" required>
            </div>
            <div v-if="modalMode === 'add'">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar Contraseña</label>
              <input v-model="form.confirmarContrasena" type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white" required>
            </div>

            <p v-if="formError" class="text-sm text-error-500 mt-1">{{ formError }}</p>

            <div v-if="modalMode !== 'view'" class="flex justify-end mt-4">
              <button type="submit" :disabled="saving" class="text-white bg-brand-500 hover:bg-brand-600 focus:ring-4 focus:outline-none focus:ring-brand-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-60">
                {{ saving ? 'Guardando...' : (modalMode === 'add' ? 'Guardar' : 'Actualizar') }}
              </button>
            </div>
          </form>
        </div>
      </template>
    </Modal>
  </AdminLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AdminLayout from '@/components/layout/AdminLayout.vue';
import Modal from '@/components/ui/Modal.vue';
import { Eye, Pencil, Trash } from 'lucide-vue-next';

const API_URL = 'http://localhost:3000/api/usuarios';

const isModalOpen = ref(false);
const modalMode = ref<'add' | 'edit' | 'view'>('add');
const selectedUser = ref<any>(null);

const usersList = ref<any[]>([]);
const loading = ref(false);
const saving = ref(false);
const apiError = ref('');
const formError = ref('');

const form = ref({
  nombre: '',
  usuario: '',
  correo: '',
  telefono: '',
  contrasena: '',
  confirmarContrasena: '',
});

const formatDate = (dateStr: string) => {
  if (!dateStr) return '-';
  return new Date(dateStr).toLocaleString('es-MX', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
};

// --- API calls ---
const fetchUsuarios = async () => {
  loading.value = true;
  apiError.value = '';
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Error al obtener usuarios');
    usersList.value = await res.json();
  } catch (e: any) {
    apiError.value = e.message;
  } finally {
    loading.value = false;
  }
};

const openModal = (mode: 'add' | 'edit' | 'view', user?: any) => {
  modalMode.value = mode;
  formError.value = '';
  selectedUser.value = user || null;

  if (mode === 'add') {
    resetForm();
  } else if (user) {
    form.value = {
      nombre: user.nombre,
      usuario: user.usuario,
      correo: user.correo,
      telefono: user.telefono,
      contrasena: '',
      confirmarContrasena: '',
    };
  }

  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  resetForm();
};

const resetForm = () => {
  form.value = {
    nombre: '',
    usuario: '',
    correo: '',
    telefono: '',
    contrasena: '',
    confirmarContrasena: '',
  };
  formError.value = '';
};

const handleSubmit = async () => {
  if (modalMode.value === 'view') return;
  formError.value = '';

  if (modalMode.value === 'add') {
    if (form.value.contrasena !== form.value.confirmarContrasena) {
      formError.value = 'Las contraseñas no coinciden.';
      return;
    }
    if (form.value.contrasena.length < 6) {
      formError.value = 'La contraseña debe tener al menos 6 caracteres.';
      return;
    }
  }

  if (form.value.telefono.length !== 10) {
    formError.value = 'El teléfono debe tener exactamente 10 dígitos.';
    return;
  }

  saving.value = true;
  try {
    let res: Response;
    if (modalMode.value === 'add') {
      res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: form.value.nombre,
          usuario: form.value.usuario,
          correo: form.value.correo,
          telefono: form.value.telefono,
          contrasena: form.value.contrasena,
        }),
      });
    } else {
      res = await fetch(`${API_URL}/${selectedUser.value.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: form.value.nombre,
          usuario: form.value.usuario,
          correo: form.value.correo,
          telefono: form.value.telefono,
        }),
      });
    }

    const data = await res.json();
    if (!res.ok) {
      formError.value = data.error || 'Error desconocido';
      return;
    }

    await fetchUsuarios();
    closeModal();
  } catch (e: any) {
    formError.value = 'Error de conexión con el servidor.';
  } finally {
    saving.value = false;
  }
};

const deleteUser = async (id: number) => {
  if (!confirm('¿Estás seguro de que deseas borrar este usuario?')) return;
  try {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (!res.ok) {
      const data = await res.json();
      apiError.value = data.error || 'Error al eliminar usuario';
      return;
    }
    await fetchUsuarios();
  } catch (e: any) {
    apiError.value = 'Error de conexión con el servidor.';
  }
};

onMounted(() => {
  fetchUsuarios();
});
</script>
