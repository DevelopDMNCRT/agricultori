<script setup>
import { ref } from 'vue'
import AppSimulator from '../components/AppSimulator.vue'
import DownloadCTA from '../components/DownloadCTA.vue'
import VideoModal from '../components/VideoModal.vue'
import MisionVision from '../components/MisionVision.vue'
import NuestraAppFeature from '../components/NuestraAppFeature.vue'

const videoModal = ref(null)

function reopenVideo() {
  videoModal.value?.openModal()
}
</script>

<template>
  <div class="page-padding">
    <!-- Video intro modal — se abre automáticamente -->
    <VideoModal ref="videoModal" video-id="Ef2FK61T0dI" :auto-open="true" />

    <!-- Banner re-open button -->
    <div class="app-section-intro">
      <button class="btn-watch-again" @click="reopenVideo" id="btn-ver-video-app">
        <span class="watch-icon">▶</span>
        Ver presentación de Agricultori
      </button>
    </div>

    <MisionVision />
    <NuestraAppFeature />

    <AppSimulator />
    <DownloadCTA />
  </div>
</template>

<style scoped>
.page-padding {
  padding-top: 130px; /* Accounts for fixed top-bar + header height */
}

.app-section-intro {
  display: flex;
  justify-content: center;
  padding: 2rem 0 0;
}

.btn-watch-again {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  background: transparent;
  border: 1.5px solid rgba(0, 67, 44, 0.2);
  color: var(--color-primary);
  font-family: var(--font-title);
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.65rem 1.5rem;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  letter-spacing: 0.2px;
}

.btn-watch-again:hover {
  background: var(--color-primary);
  color: #fff;
  border-color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 67, 44, 0.2);
}

.watch-icon {
  font-size: 0.75rem;
  background: rgba(251, 134, 3, 0.15);
  color: var(--color-accent);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  flex-shrink: 0;
}

.btn-watch-again:hover .watch-icon {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}
</style>
