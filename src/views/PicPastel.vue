<script setup>
import { ref } from 'vue'

const images = ref([])
const currentIndex = ref(0)

const importAll = async () => {
  const imageModules = import.meta.glob('@/assets/Pastel/*.{png,jpg,jpeg,svg}')
  const imagePaths = await Promise.all(
    Object.keys(imageModules).map(async (path) => {
      const module = await imageModules[path]()
      return module.default
    }),
  )
  images.value = imagePaths
}
importAll()

const nextImage = () => {
  if (currentIndex.value < images.value.length - 1) {
    currentIndex.value++
  }
}

const prevImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}
</script>

<template>
  <div class="video-background">
    <video autoplay muted loop>
      <source src="@/assets/background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  <div class="photo-gallery">
    <h1>Pastel</h1>
    <div class="photo-container">
      <button @click="prevImage" class="nav-button left" :disabled="currentIndex === 0">
        Previous
      </button>
      <div class="photo">
        <img :src="images[currentIndex]" alt="Pastel Photo" />
      </div>
      <button
        @click="nextImage"
        class="nav-button right"
        :disabled="currentIndex === images.length - 1"
      >
        Next
      </button>
    </div>
  </div>
</template>

<style scoped>
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

.photo-gallery {
  text-align: center;
  position: relative;
  z-index: 1; /* Ensure it stays above the background */
  animation: fadeIn 2s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Ensure the gallery takes full height */
}

.photo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.photo {
  max-width: 90%;
  max-height: 90vh;
  margin: 0 1rem; /* Add margin to create space for the buttons */
}

.photo img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.nav-button {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  z-index: 2;
}

.nav-button.left {
  margin-right: 2rem; /* Add margin to create space between button and image */
}

.nav-button.right {
  margin-left: 2rem; /* Add margin to create space between button and image */
}

.nav-button:disabled {
  background-color: rgba(0, 0, 0, 0.2);
  cursor: not-allowed;
}

.nav-button:hover:not(:disabled) {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
