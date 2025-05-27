<template>
  <header class="header">
    <router-link to="/" class="logo-link">
      <h1 class="logo">Studio 504</h1>
    </router-link>
    <nav class="nav-center">
      <router-link to="/gallery">Galeria</router-link>
      <router-link to="/about">O nas</router-link>
      <router-link to="/contact">Kontakt</router-link>
      <router-link to="/repertuar">Repertuar</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: rgba(176, 30, 35, 0.7);

  color: #fcfadb;
  padding: 20px;

  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
}


.logo-link {
  text-decoration: none;
  color: inherit;
}

.logo {
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
}

.nav-center {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  gap: 20rem;
}

nav a {
  color: #fcfadb;
  text-decoration: none;
  font-size: 1.60rem;
  font-weight: 600;
  transition: transform 0.3s ease;
}

nav a:hover {
  transform: scale(1.2);
}

.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .nav-center {
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  nav a {
    font-size: 18px;
  }

  .logo {
    font-size: 24px;
  }
}


</style>
