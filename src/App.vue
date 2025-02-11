<script setup>

import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

</script>

<template>
  <div class="app">
    <AppHeader />
      <RouterView class="container" />
    <AppFooter />
</div>
</template>

<style scoped>
  .app {
    box-sizing: border-box;
    color: #37474f;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
    margin:  0 auto;
    padding: 0;
  }

  .container {
    padding-bottom: 4rem;
  }
</style>
