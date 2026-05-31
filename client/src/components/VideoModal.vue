<template>
  <!-- Backdrop -->
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="isOpen"
        class="vm-backdrop"
        @click.self="closeModal"
        role="dialog"
        aria-modal="true"
        aria-label="Video de presentación Agricultori"
      >
        <!-- Modal Panel -->
        <div class="vm-panel" @click.stop>

          <!-- Brand accent ring (decorative) -->
          <div class="vm-accent-ring vm-ring-1"></div>
          <div class="vm-accent-ring vm-ring-2"></div>

          <!-- Header Bar -->
          <div class="vm-header">
            <div class="vm-brand">
              <img src="/logo.png" alt="Agricultori" class="vm-logo" />
              <span class="vm-brand-name">Agricultori</span>
            </div>

            <!-- Close button with hand animation -->
            <div class="vm-close-wrap">
              <!-- Animated hand hint -->
              <div class="vm-close-hint" :class="{ 'hint-fade': hintFaded }">
                <span class="vm-hand">👆</span>
                <span class="vm-hint-text">Cierra para continuar</span>
              </div>

              <button
                class="vm-close-btn"
                @click="closeModal"
                aria-label="Cerrar video"
                id="video-modal-close"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          <!-- YouTube Iframe Container -->
          <div class="vm-video-wrap">
            <div class="vm-video-inner">
              <iframe
                v-if="iframeReady"
                :src="embedUrl"
                title="Agricultori – Video de presentación"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                class="vm-iframe"
              ></iframe>
              <!-- Loading state -->
              <div v-else class="vm-loader">
                <div class="vm-spinner"></div>
              </div>
            </div>

            <!-- Bottom gradient overlay -->
            <div class="vm-video-gradient"></div>
          </div>

          <!-- Footer -->
          <div class="vm-footer">
            <p class="vm-footer-text">
              Conoce la herramienta preferida por los exportadores agrícolas de México
            </p>
            <div class="vm-footer-tags">
              <span class="vm-tag">🇲🇽 Hecho para México</span>
              <span class="vm-tag vm-tag-accent">100% Gratuito</span>
              <span class="vm-tag">iOS &amp; Android</span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  videoId: {
    type: String,
    default: 'Ef2FK61T0dI'
  },
  autoOpen: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['close'])

const isOpen = ref(false)
const iframeReady = ref(false)
const hintFaded = ref(false)

// Build the YouTube embed URL with autoplay + mute=0 (audio on)
// Note: browsers require mute=1 for autoplay to work reliably, but we respect the request.
// We use autoplay=1 & mute=0 — most modern browsers allow this if user has interacted with the page.
const embedUrl = computed(() => {
  const params = new URLSearchParams({
    autoplay: '1',
    mute: '0',
    rel: '0',
    modestbranding: '1',
    controls: '0',        // Hide YouTube controls
    disablekb: '1',       // Disable keyboard controls
    fs: '0',              // Hide fullscreen button
    iv_load_policy: '3',  // Hide annotations
    cc_load_policy: '0',
    playsinline: '1',
    origin: window?.location?.origin || 'https://agricultori.mx'
  })
  return `https://www.youtube-nocookie.com/embed/${props.videoId}?${params.toString()}`
})

function openModal() {
  isOpen.value = true
  document.body.style.overflow = 'hidden'
  // Delay iframe render slightly so the transition looks smooth
  setTimeout(() => {
    iframeReady.value = true
  }, 350)
  // Fade out the hand hint after 3.5 seconds
  setTimeout(() => {
    hintFaded.value = true
  }, 3500)
}

function closeModal() {
  isOpen.value = false
  iframeReady.value = false
  hintFaded.value = false
  document.body.style.overflow = ''
  emit('close')
}

// ESC key closes modal
function onKeyDown(e) {
  if (e.key === 'Escape' && isOpen.value) closeModal()
}

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
  if (props.autoOpen) {
    // Small delay so the page transition completes first
    setTimeout(openModal, 600)
  }
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeyDown)
  document.body.style.overflow = ''
})

// Expose open/close so parent can control manually
defineExpose({ openModal, closeModal })
</script>

<style scoped>
/* ── Backdrop ──────────────────────────────────────── */
.vm-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: rgba(0, 10, 5, 0.88);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* ── Panel ─────────────────────────────────────────── */
.vm-panel {
  position: relative;
  width: 100%;
  max-width: 860px;
  background: linear-gradient(145deg, #021a0e 0%, #00432C 50%, #012b1a 100%);
  border-radius: 28px;
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.08),
    0 40px 80px rgba(0, 0, 0, 0.6),
    0 0 120px rgba(0, 67, 44, 0.35);
  display: flex;
  flex-direction: column;
  transform: translateZ(0);
}

/* ── Decorative rings ──────────────────────────────── */
.vm-accent-ring {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}
.vm-ring-1 {
  width: 500px;
  height: 500px;
  top: -250px;
  right: -180px;
  background: radial-gradient(circle, rgba(251, 134, 3, 0.12) 0%, transparent 70%);
}
.vm-ring-2 {
  width: 400px;
  height: 400px;
  bottom: -200px;
  left: -150px;
  background: radial-gradient(circle, rgba(13, 93, 65, 0.3) 0%, transparent 70%);
}

/* ── Header ────────────────────────────────────────── */
.vm-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem 1rem;
  position: relative;
  z-index: 10;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.vm-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.vm-logo {
  height: 30px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.vm-brand-name {
  font-family: 'Outfit', sans-serif;
  font-weight: 800;
  font-size: 1.1rem;
  color: #ffffff;
  letter-spacing: -0.02em;
}

/* ── Close wrap ────────────────────────────────────── */
.vm-close-wrap {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

/* ── Hand hint ─────────────────────────────────────── */
.vm-close-hint {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(251, 134, 3, 0.12);
  border: 1px solid rgba(251, 134, 3, 0.25);
  border-radius: 999px;
  padding: 0.35rem 0.9rem 0.35rem 0.5rem;
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.vm-close-hint.hint-fade {
  opacity: 0;
  pointer-events: none;
  transform: translateY(-4px);
}

.vm-hand {
  font-size: 1.1rem;
  display: inline-block;
  animation: hand-point 1.4s ease-in-out infinite;
  transform-origin: bottom center;
}

.vm-hint-text {
  font-family: 'Outfit', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  color: rgba(251, 134, 3, 0.9);
  letter-spacing: 0.5px;
  white-space: nowrap;
}

@keyframes hand-point {
  0%, 100% { transform: translateX(0) rotate(-10deg); }
  50%       { transform: translateX(4px) rotate(5deg); }
}

/* ── Close button ──────────────────────────────────── */
.vm-close-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}

.vm-close-btn:hover {
  background: rgba(251, 134, 3, 0.25);
  border-color: rgba(251, 134, 3, 0.5);
  color: #ffffff;
  transform: rotate(90deg) scale(1.1);
  box-shadow: 0 0 20px rgba(251, 134, 3, 0.3);
}

/* ── Video wrap ────────────────────────────────────── */
.vm-video-wrap {
  position: relative;
  z-index: 5;
}

.vm-video-inner {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 */
  background: #000;
}

.vm-iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
}

/* Loading spinner */
.vm-loader {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000b05;
}

.vm-spinner {
  width: 48px;
  height: 48px;
  border: 3px solid rgba(0, 67, 44, 0.3);
  border-top-color: var(--color-accent, #FB8603);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.vm-video-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(to top, #012b1a, transparent);
  pointer-events: none;
  z-index: 6;
}

/* ── Footer ────────────────────────────────────────── */
.vm-footer {
  padding: 1.1rem 1.75rem 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
  z-index: 10;
}

.vm-footer-text {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.4;
}

.vm-footer-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.vm-tag {
  font-family: 'Outfit', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.3rem 0.85rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.75);
  letter-spacing: 0.3px;
}

.vm-tag-accent {
  background: rgba(251, 134, 3, 0.15);
  border-color: rgba(251, 134, 3, 0.35);
  color: #ffb865;
}

/* ── Modal fade transition ─────────────────────────── */
.modal-fade-enter-active {
  transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}
.modal-fade-leave-active {
  transition: all 0.3s ease;
}
.modal-fade-enter-from {
  opacity: 0;
}
.modal-fade-enter-from .vm-panel {
  transform: scale(0.92) translateY(30px);
  opacity: 0;
}
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-leave-to .vm-panel {
  transform: scale(0.95) translateY(20px);
  opacity: 0;
}

/* ── Responsive ────────────────────────────────────── */
@media (max-width: 600px) {
  .vm-backdrop {
    padding: 0;
    align-items: flex-end;
  }
  .vm-panel {
    border-radius: 24px 24px 0 0;
    max-width: 100%;
  }
  .vm-hint-text {
    display: none;
  }
  .vm-footer {
    padding: 1rem;
  }
}
</style>
