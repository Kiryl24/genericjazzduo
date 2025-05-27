<template>
  <section class="repertuar page-container">
    <h2></h2>

    <div class="event">
      <img src="@/assets/max.jpg" alt="24 maja " class="event-img" />
      <div class="event-info">
        <h3>24 maja 2025 – Halo Kultura</h3>
        <p>Koncert improwizacyjny

          <a
              href="https://www.instagram.com/maksymiliankreft?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener"
              style="color: #fcfadb; text-decoration: underline;"

          >
            Maksymiliana Krefta
          </a>

          oraz

          <a
              href="https://www.instagram.com/pawelosicki?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener"
              style="color: #fcfadb; text-decoration: underline;"

          >
            Pawła Osickiego
          </a>

          na dwa zestawy perkusyjne w boksie należącym do studia 504. Wstęp wolny.</p>
      </div>
    </div>

    <div class="event">
      <img src="@/assets/jekyll.png" alt="27 kwietnia" class="event-img" />
      <div class="event-info">
        <h3> 27 kwietnia 2025 – Halo Kultura</h3>
        <p>Koncert kompozycji sonorycznej na dwa pianina preparowane autorstwa Generic Jazz Duo w klimatycznej pracowni muzycznej w boxie 504 w stwoarzyszeniu Halo Kultura. Wstęp wolny.</p>
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
