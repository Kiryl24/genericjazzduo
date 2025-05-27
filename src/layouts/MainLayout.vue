<template>
  <div>
    <Header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
</script>

<style scoped>
main {
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
}
</style>
