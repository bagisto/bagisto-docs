<template>
  <Layout>
    <template #layout-top>
      <CloudPromo />
    </template>

    <template #nav-bar-content-after>
      <GoogleTranslate />
    </template>

    <template #aside-outline-after>
      <MarketplacePromo />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import GoogleTranslate from './components/GoogleTranslate.vue'
import CloudPromo from './components/CloudPromo.vue'
import MarketplacePromo from './components/MarketplacePromo.vue'

const { Layout } = DefaultTheme
</script>
