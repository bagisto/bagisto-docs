<template>
  <Layout>
    <template #layout-top>
      <CloudPromo />
    </template>

    <template #nav-bar-content-after>
      <GoogleTranslate />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import GoogleTranslate from './components/GoogleTranslate.vue'
import CloudPromo from './components/CloudPromo.vue'

const { Layout } = DefaultTheme
</script>
