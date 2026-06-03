<script setup>
import AppServices from '../components/AppServices.vue'
import AppSimulator from '../components/AppSimulator.vue'
import DownloadCTA from '../components/DownloadCTA.vue'
</script>

<template>
  <div class="page-padding">
    <AppServices />
    <AppSimulator />
    <DownloadCTA />
  </div>
</template>

<style scoped>
.page-padding {
  padding-top: 150px; /* Accounts for fixed top-bar + header height */
}
</style>
