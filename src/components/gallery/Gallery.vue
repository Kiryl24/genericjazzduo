<template>
  <section class="gallery-page page-container">
    <h1></h1>

    <div class="event-section">
      <h2></h2>
      <MaxEvent />
    </div>

    <div class="event-section">
      <h2></h2>
      <JekyllEvent />
    </div>
  </section>
</template>

<script setup>
import MaxEvent from './MaxEvent/MaxEvent.vue'
import JekyllEvent from './JekyllEvent/JekyllEvent.vue'
</script>

<style scoped>
.page-container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem 2rem;
  box-sizing: border-box;
}

.gallery-page {
  background-color: #ae1f24;
  color: #fcfadb;
}

.event-section {
  margin-bottom: 60px;
}
</style>
