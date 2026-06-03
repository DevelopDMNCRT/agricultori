<script setup>
import ContactSection from '../components/ContactSection.vue'
import DownloadCTA from '../components/DownloadCTA.vue'
</script>

<template>
  <div class="contacto-page">
    <!-- Render the main stateful contact section component directly -->
    <ContactSection />
    
    <!-- App store downloads call to action -->
    <DownloadCTA />
  </div>
</template>

<style scoped>
.contacto-page {
  padding-top: 150px; /* Accounts for fixed top-bar + header height */
}
</style>
