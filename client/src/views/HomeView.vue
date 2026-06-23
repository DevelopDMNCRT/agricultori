<script setup>
import AppHero from '../components/AppHero.vue'
import HomeProducts from '../components/HomeProducts.vue'
import AppServices from '../components/AppServices.vue'
import DownloadCTA from '../components/DownloadCTA.vue'
import ContactSection from '../components/ContactSection.vue'
</script>

<template>
  <div>
    <AppHero />
    <HomeProducts />
    <AppServices :limit="3" />
    <DownloadCTA />
    <ContactSection />
  </div>
</template>
