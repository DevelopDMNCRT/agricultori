<template>
  <section id="contacto" class="contact-section">
    <!-- Decorative background elements -->
    <div class="contact-bg-glow"></div>
    
    <div class="container contact-container">
      <!-- Left Column: Contact info & details -->
      <div class="contact-info-col animate-reveal">
        <span class="tag">Contacto Directo</span>
        <h2 class="contact-title">¿Tienes dudas? <br /><span class="text-accent">Escríbenos hoy mismo</span></h2>
        <p class="contact-subtitle">
          Estamos listos para apoyarte con cualquier pregunta sobre el uso de la aplicación, el directorio de empaques o las tolerancias fitosanitarias de tus cultivos.
        </p>
        
        <div class="info-badges-list">
          <div class="info-badge-item">
            <div class="badge-icon-box">
              <Icon icon="lucide:mail" />
            </div>
            <div class="badge-texts">
              <small>Envíanos un correo</small>
              <a href="mailto:hola@agricultori.mx">hola@agricultori.mx</a>
            </div>
          </div>

          <div class="info-badge-item">
            <div class="badge-icon-box">
              <Icon icon="lucide:phone" />
            </div>
            <div class="badge-texts">
              <small>Llámanos directo</small>
              <a href="tel:3330070631">33 3007 0631</a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Right Column: Glassmorphic Form Card -->
      <div class="contact-form-col">
        <div class="form-card-wrapper">
          <transition name="fade-fast" mode="out-in">
            <!-- Normal Form View -->
            <form v-if="!isSubmitted" @submit.prevent="submitForm" class="contact-form" :key="'form'">
              <div class="form-grid">
                <!-- Nombre -->
                <div class="input-group">
                  <label for="name">Nombre Completo *</label>
                  <div class="input-wrapper">
                    <Icon icon="lucide:user" class="input-icon" />
                    <input 
                      type="text" 
                      id="name" 
                      v-model="form.name" 
                      placeholder="Ej. Juan Pérez" 
                      required 
                    />
                  </div>
                </div>

                <!-- Correo -->
                <div class="input-group">
                  <label for="email">Correo Electrónico *</label>
                  <div class="input-wrapper">
                    <Icon icon="lucide:mail" class="input-icon" />
                    <input 
                      type="email" 
                      id="email" 
                      v-model="form.email" 
                      placeholder="juan@ejemplo.com" 
                      required 
                    />
                  </div>
                </div>

                <!-- Telefono -->
                <div class="input-group">
                  <label for="phone">Teléfono de Contacto</label>
                  <div class="input-wrapper">
                    <Icon icon="lucide:phone" class="input-icon" />
                    <input 
                      type="tel" 
                      id="phone" 
                      v-model="form.phone" 
                      placeholder="33 3007 0631" 
                    />
                  </div>
                </div>

                <!-- Asunto -->
                <div class="input-group">
                  <label for="subject">Asunto *</label>
                  <div class="input-wrapper">
                    <Icon icon="lucide:message-square" class="input-icon" />
                    <input 
                      type="text" 
                      id="subject" 
                      v-model="form.subject" 
                      placeholder="Ej. Duda sobre Empaques" 
                      required 
                    />
                  </div>
                </div>

                <!-- Mensaje -->
                <div class="input-group full-width">
                  <label for="message">Mensaje *</label>
                  <div class="input-wrapper textarea-wrapper">
                    <textarea 
                      id="message" 
                      v-model="form.message" 
                      rows="4" 
                      placeholder="Escribe tu duda o comentarios aquí..." 
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              <button type="submit" class="btn btn-primary btn-submit-form" :disabled="isSubmitting">
                <template v-if="isSubmitting">
                  <Icon icon="lucide:loader" class="icon-spin" />
                  <span>Enviando mensaje...</span>
                </template>
                <template v-else>
                  <Icon icon="lucide:send" />
                  <span>Enviar Mensaje</span>
                </template>
              </button>
            </form>

            <!-- Success State View -->
            <div v-else class="form-success-state" :key="'success'">
              <div class="success-icon-box">
                <Icon icon="lucide:check-circle" class="success-icon" />
              </div>
              <h3>¡Mensaje Enviado con Éxito!</h3>
              <p>
                Muchas gracias por ponerte en contacto, {{ form.name }}. Nuestro equipo revisará tu solicitud y te responderá al correo <strong>{{ form.email }}</strong> en menos de 24 horas hábiles.
              </p>
              <button @click="resetForm" class="btn btn-outline-primary">
                Enviar otro mensaje
              </button>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Icon } from '@iconify/vue'

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  isSubmitting.value = true
  
  // Simulate API post request
  setTimeout(() => {
    isSubmitting.value = false
    isSubmitted.value = true
  }, 1500)
}

const resetForm = () => {
  form.name = ''
  form.email = ''
  form.phone = ''
  form.subject = ''
  form.message = ''
  isSubmitted.value = false
}
</script>

<style scoped>
.contact-section {
  padding: 8rem 0;
  background-color: var(--color-bg-base);
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(0, 67, 44, 0.05);
}

.contact-bg-glow {
  position: absolute;
  top: -10%;
  right: -10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(251, 134, 3, 0.04) 0%, transparent 70%);
  z-index: 1;
  pointer-events: none;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

@media (max-width: 992px) {
  .contact-container {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }
}

/* Left Column Styling */
.contact-info-col {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-title {
  font-size: 3.2rem;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--color-primary-dark);
  font-family: var(--font-title);
  font-weight: 900;
}

.contact-subtitle {
  font-size: 1.15rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  max-width: 540px;
}

.info-badges-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 1rem;
}

.info-badge-item {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.badge-icon-box {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: var(--color-bg-soft);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  border: 1px solid rgba(0, 67, 44, 0.04);
}

.badge-texts {
  display: flex;
  flex-direction: column;
}

.badge-texts small {
  font-size: 0.75rem;
  text-transform: uppercase;
  color: var(--color-text-muted);
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
}

.badge-texts span, .badge-texts a {
  font-weight: 700;
  color: var(--color-primary-dark);
  font-size: 1.05rem;
}

.badge-texts a:hover {
  color: var(--color-accent);
}

/* Right Column (Form Card) Styling */
.form-card-wrapper {
  background: #ffffff;
  border: 1px solid rgba(0, 67, 44, 0.06);
  border-radius: 28px;
  padding: 3rem;
  box-shadow: var(--shadow-md);
  position: relative;
}

@media (max-width: 576px) {
  .form-card-wrapper {
    padding: 2rem 1.5rem;
  }
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

@media (max-width: 576px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-group.full-width {
  grid-column: span 2;
}

@media (max-width: 576px) {
  .input-group.full-width {
    grid-column: span 1;
  }
}

.input-group label {
  font-family: var(--font-title);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--color-primary-dark);
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 14px;
  color: var(--color-text-muted);
  font-size: 1.1rem;
  pointer-events: none;
}

.input-wrapper input {
  width: 100%;
  padding: 0.9rem 1rem 0.9rem 2.75rem;
  border: 1px solid rgba(0, 67, 44, 0.1);
  border-radius: 14px;
  background-color: var(--color-bg-soft);
  color: var(--color-text-primary);
  font-family: var(--font-body);
  font-size: 0.95rem;
  transition: var(--transition-smooth);
}

.input-wrapper input:focus {
  outline: none;
  border-color: var(--color-primary);
  background-color: #ffffff;
  box-shadow: 0 0 0 3px rgba(0, 67, 44, 0.05);
}

.textarea-wrapper textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(0, 67, 44, 0.1);
  border-radius: 14px;
  background-color: var(--color-bg-soft);
  color: var(--color-text-primary);
  font-family: var(--font-body);
  font-size: 0.95rem;
  resize: vertical;
  transition: var(--transition-smooth);
}

.textarea-wrapper textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  background-color: #ffffff;
  box-shadow: 0 0 0 3px rgba(0, 67, 44, 0.05);
}

.btn-submit-form {
  width: 100%;
  padding: 1rem;
  border-radius: 14px;
  justify-content: center;
  border: none;
}

.icon-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Success View Styling */
.form-success-state {
  text-align: center;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

.success-icon-box {
  width: 72px;
  height: 72px;
  background: rgba(46, 125, 50, 0.1);
  color: var(--color-success);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.success-icon {
  font-size: 2.5rem;
}

.form-success-state h3 {
  font-size: 1.75rem;
  color: var(--color-primary-dark);
  font-weight: 800;
}

.form-success-state p {
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  max-width: 360px;
  margin-bottom: 1.5rem;
}
</style>
