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

.menu-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  perspective: 1000px; /* Add perspective for 3D effect */
  border: none; /* Remove border */
  padding: 0; /* Ensure no padding */
  margin: 0; /* Ensure no margin */
  box-shadow: none; /* Ensure no box shadow */
}

.menu {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.2rem; /* Increased gap for better spacing */
  padding: 1rem; /* Increased padding for larger menu area */
  background-color: rgba(255, 255, 255, 0.3); /* Semi-transparent background */
  border: none; /* Ensure no border */
  transition: transform 0.1s ease; /* Smooth transition for 3D effect */
  justify-items: center; /* Center items within the grid */
  transform-style: preserve-3d; /* Preserve 3D transformations */
  animation: fadeIn 2s ease-in-out; /* Apply fade-in animation */
}

.menu-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vh; /* Fixed width for all menu items */
  height: 15vh; /* Fixed height for all menu items */
  background-color: rgba(240, 240, 240, 0.4); /* Semi-transparent button background */
  border: none; /* Ensure no border */
  text-align: center;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease; /* Smooth transition for border color and font color */
  font-size: clamp(1rem, 2.5vw, 1.7rem); /* Responsive font size */
  border: 2px solid transparent; /* Initial border color */
}

.menu-item:hover {
  background-color: rgba(224, 224, 224, 0.8); /* Semi-transparent hover effect */
  border-color: blue; /* Change border color to blue on hover */
  color: blue; /* Change font color to blue on hover */
}
</style>
