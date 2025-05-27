<template>
  <div class="event-gallery">
    <div class="event-header">
      <h3>{{ eventTitle }}</h3>
      <p class="event-date">{{ eventDate }}</p>
      <p class="event-desc">{{ eventDescription }}</p>
    </div>

    <div class="image-wrapper">
      <img
          :src="images[current]"
          :key="images[current]"
          class="gallery-image"
      />
    </div>

    <div class="controls">
      <img src="/assets/scrolll.png" class="arrow" @click="prev($event)" />
      <img src="/assets/scrollr.png" class="arrow" @click="next($event)" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const eventTitle = 'Koncert Jekyll & Hyde'
const eventDate = '27 kwietnia 2025'
const eventDescription = 'Pokaz zdjęć z wydarzenia koncertu kompozycji Jazz Duo na dwa preparowane pianina'

const modules = import.meta.glob('@/assets/gallery/JekyllEvent/*.{jpg,png}', {
  eager: true,
  import: 'default'
})

const images = ref(Object.values(modules))
const current = ref(0)

const next = (event) => {
  event.preventDefault()
  current.value = (current.value + 1) % images.value.length
}

const prev = (event) => {
  event.preventDefault()
  current.value = (current.value - 1 + images.value.length) % images.value.length
}
</script>

<style scoped>
.event-gallery {
  text-align: center;
  margin-bottom: 40px;
}

.event-header {
  margin-bottom: 20px;
}

.event-date {
  font-weight: bold;
}

.event-desc {
  font-style: italic;
  color: #fcfadb;
  margin-bottom: 10px;
}

.image-wrapper {
  margin: 20px auto;
  max-width: 400px;
}

.gallery-image {
  width: 100%;
  border-radius: 12px;
  transition: opacity 0.5s ease;
}

.arrow {
  width: 40px;
  cursor: pointer;
  margin: 0 10px;
}

.controls {
  margin-top: 10px;
}
.image-wrapper {
  margin: 20px auto;
  max-width: 100%;
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.gallery-image {
  height: 100%;
  width: auto;
  object-fit: contain;
  border-radius: 12px;
  transition: opacity 0.5s ease;
}

</style>
