<template>
  <section class="repertuar page-container">
    <h2>Repertuar</h2>

    <div class="event">
      <img src="@/assets/max.jpg" alt="27 kwietnia" class="event-img" />
      <div class="event-info">
        <h3>24 maja 2025 – Halo Kultura</h3>
        <p>Koncert improwizacyjny Makymiliana Krefta oraz Pawła Osickiego na dwa zestawy perkusyjne w boksie należącym do studia 504. Wstep wolny.</p>
      </div>
    </div>

    <div class="event">
      <img src="@/assets/jekyll.png" alt="24 maja" class="event-img" />
      <div class="event-info">
        <h3> kwietnia 2025 – Halo Kultura</h3>
        <p>Koncert kompozycji sonorycznej na dwa pianina preparowane autorstwa Generic Jazz Duo w klimatycznej pracowni muzycznej w boxie 504 w stwoarzyszeniu Halo Kultura. Wstep wolny.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.repertuar {
  background-color: #ae1f24;
  color: #fcfadb;
  padding: 2rem 1rem;
  border-radius: 12px;
  text-align: center;
}

h2 {
  font-size: 3rem;
  margin-bottom: 8rem;
}

.event {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
}

.event-img {
  max-width: 400px;
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
}

.event-info {
  max-width: 500px;
  text-align: left;
}

.event-info h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.event-info p {
  font-size: 1.25rem;
}

@media (max-width: 768px) {
  .event {
    flex-direction: column;
    text-align: center;
  }
  .event-info {
    text-align: center;
  }
}
</style>
