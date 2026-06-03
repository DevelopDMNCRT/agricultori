<script setup>
import MisionVision from '../components/MisionVision.vue'
import DownloadCTA from '../components/DownloadCTA.vue'
</script>

<template>
  <div class="page-padding">
    <MisionVision />
    <DownloadCTA />
  </div>
</template>

<style scoped>
.page-padding {
  padding-top: 130px; /* Accounts for fixed top-bar + header height */
}
</style>
