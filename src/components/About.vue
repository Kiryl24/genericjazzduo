<template>
  <section class="about page-container">
    <div class="about-row">
      <img :src="filipImg" alt="Filip" class="about-img" />
      <div class="about-text">
        <h3>Filip Roman</h3>
        <p>
          Filip to wąsaty człowiek rezonansu, muzyk kompozytor i saksofonista, oraz naczelny sonorysta.
        </p>
      </div>
    </div>

    <div class="about-row">
      <div class="about-text">
        <h3>Jakub Kiryła</h3>
        <p>
          Jakub to pianista oraz kompozytor, ale zamiast wąsa ma łapy jak grabie i palce jak jemioła. Jego kompozycje można usłyszeć na
          <a
            href="https://open.spotify.com/artist/44iBVh9udZSXHI5xPFxK9W?si=O8emlBkGRnKf1ZLarvv1og"
            target="_blank"
            rel="noopener"
            style="color: #fcfadb; text-decoration: underline;"
            >
          Spotify
          </a>
          oraz
          <a
              href="https://soundcloud.com/jakub-kiry-a?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
              target="_blank"
              rel="noopener"
              style="color: #fcfadb; text-decoration: underline;"

              >
            Soundcloudzie.
          </a>



        </p>
      </div>
      <img :src="jakubImg" alt="Jakub" class="about-img" />
    </div>
  </section>
</template>

<script setup>
import filipImg from '@/assets/filip.jpg'
import jakubImg from '@/assets/jakub.jpg'
</script>

<style scoped>
.about {
  background-color: #ae1f24;
  color: #fcfadb;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 5% 2rem;
  width: 100%;
  box-sizing: border-box;
}

.about-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  width: 100%;
}

.about-img {
  flex-grow: 1;
  max-width: 300px;
  width: 100%;
  height: auto;
  border-radius: 12px;
  flex-shrink: 0;
}

.about-text {
  flex-grow: 1;
  min-width: 250px;
  max-width: 600px;
  text-align: left;
}

.about-text h3 {
  font-size: calc(1rem * 2.0);
  margin-bottom: 2rem;
  margin-top: 3rem;
}

.about-text p {
  font-size: calc(1rem * 1.75);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .about-row {
    flex-direction: column !important;
    text-align: center;
  }
  .about-text,
  .about-img {
    max-width: 100%;
  }
}
</style>
