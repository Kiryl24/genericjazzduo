<template>
  <section class="home page-container">
    <div class="photo-container">
      <img src="@/assets/contact.jpg" alt="Studio 504" class="photo" />
    </div>

    <div class="description-box">opis opis opis</div>

    <p class="description">
      Kontakt
    </p>
  </section>
</template>


<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #fcfadb;
  background-color: #ae1f24;
  border-radius: 12px;
  padding: 2rem 1rem;
}

.photo-container {
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
}

.photo {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 0;
}

.description-box {
  max-width: 600px;
  width: 100%;
  padding: 1rem 1.5rem;
  margin-bottom: 2.5rem;
  background-color: transparent;
  border-radius: 10px;
  font-size: calc(1.5rem * 1.75);
  color: #fcfadb;
  font-style: italic;
  box-shadow: none;
}

.description {
  margin-top: 2rem;
  font-size: calc(1.25rem * 1.75);
  max-width: 600px;
  width: 100%;
}



</style>
