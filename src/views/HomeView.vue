<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="video-background">
    <video autoplay muted loop>
      <source src="@/assets/background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  <div class="content-container">
    <img src="@/assets/Cristi.jpg" alt="Your Photo" class="header-photo" />
    <div class="description">
      <p>
        Bine ați venit în universul meu artistic, unde culoarea și emoția prind viață pe pânză și
        dincolo de ea. Realizez picturi în ulei și în alte tehnici, explorând atât suprafețele
        tradiționale, cât și obiecte neconvenționale, transformând fiecare lucrare într-o poveste
        vizuală unică. Specialitatea mea este portretul, fie că este vorba despre interpretări
        artistice sau reproduceri fidele după fotografie. De asemenea, creez icoane cu atenție la
        detalii și peisaje ce surprind frumusețea naturii în toate formele sale. Fiecare lucrare
        este realizată cu pasiune și dedicare, oferind nu doar o imagine, ci o experiență artistică
        autentică. Te invit să descoperi colecția și să găsim împreună modalitatea perfectă de a
        aduce arta în viața ta
      </p>
      <p>Pentru mai multe detalii sau comenzi contactează-mă la: 0755-502-017</p>
    </div>
    <div class="menu-container">
      <div class="menu">
        <RouterLink to="/portret" class="menu-item bouton-portret">Portret</RouterLink>
        <RouterLink to="/icoane" class="menu-item bouton-icoane">Icoane</RouterLink>
        <RouterLink to="/lucrariPeLemn" class="menu-item bouton-lemn">Lucrari pe lemn</RouterLink>
        <RouterLink to="/animale" class="menu-item bouton-animale">Animale</RouterLink>
        <RouterLink to="/natura" class="menu-item bouton-natura">Natura</RouterLink>
        <RouterLink to="/pastel" class="menu-item bouton-pastel">Pastel</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1; /* Ensure it stays behind other content */
}

.video-background video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  background-size: cover;
  animation: fadeIn 2s ease-in-out;
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  text-align: center;
  padding: 2rem;
  box-sizing: border-box;
}

.header-photo {
  max-width: clamp(15rem, 5vw, 100rem); /* Adjust the max-width as needed */
  height: auto; /* Maintain aspect ratio */
  margin-top: 2rem; /* Add space between the top of the viewport and the photo */
  margin-bottom: 2rem; /* Adjust margin as needed */
  animation: fadeIn 2s ease-in-out;
}

.description {
  margin-bottom: 2rem;
  font-size: clamp(0.5rem, 2.5vw, 1.2rem); /* Responsive font size */
  color: white;
  animation: fadeIn 2s ease-in-out;
}

.menu-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.menu {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  justify-items: center;
  animation: fadeIn 2s ease-in-out;
}

.menu-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vh;
  height: 15vh;
  background-color: rgba(240, 240, 240, 0.4);
  border: none;
  text-align: center;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease;
  font-size: clamp(1rem, 2.5vw, 1.7rem); /* Responsive font size */
  border: 2px solid transparent;
}

.menu-item:hover {
  background-color: rgba(224, 224, 224, 0.8);
  border-color: blue;
  color: blue;
}

/* Media queries for responsiveness */
@media (max-width: 768px) {
  .menu {
    grid-template-columns: 1fr; /* Single column layout for smaller screens */
  }

  .menu-item {
    width: 80vw; /* Adjust width for smaller screens */
    height: 10vh; /* Adjust height for smaller screens */
  }
}

@media (max-width: 480px) {
  .menu-item {
    width: 90vw; /* Further adjust width for very small screens */
    height: 8vh; /* Further adjust height for very small screens */
    font-size: clamp(0.8rem, 4vw, 1.2rem); /* Adjust font size for very small screens */
  }
}
</style>
