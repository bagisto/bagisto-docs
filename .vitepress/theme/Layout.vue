<template>
  <Layout>
    <template #nav-bar-content-after>
      <GoogleTranslate />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import GoogleTranslate from './components/GoogleTranslate.vue'

const { Layout } = DefaultTheme
</script>
