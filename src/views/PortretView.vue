<script setup>
import { ref } from 'vue'

const images = ref([])
const selectedImage = ref(null)
const showModal = ref(false)

const importAll = async () => {
  const imageModules = import.meta.glob('@/assets/Portret/*.{png,jpg,jpeg,svg}')
  const imagePaths = await Promise.all(
    Object.keys(imageModules).map(async (path) => {
      const module = await imageModules[path]()
      return module.default
    }),
  )
  images.value = imagePaths
}
importAll()

const openModal = (image) => {
  selectedImage.value = image
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  selectedImage.value = null
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
    <h1>Portret</h1>
    <div class="photo-grid">
      <div v-for="(image, index) in images" :key="index" class="photo" @click="openModal(image)">
        <img :src="image" alt="Portret Photo" />
      </div>
    </div>
  </div>

  <div v-if="showModal" class="modal" @click="closeModal">
    <div class="modal-content" @click.stop>
      <span class="close" @click="closeModal">&times;</span>
      <img :src="selectedImage" alt="Selected Portret Photo" />
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
  padding: 2rem;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
}

.photo {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.photo img:hover {
  transform: scale(1.05);
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.modal-content img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
}
@media (max-width: 1024px) {
  .photo-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
}

@media (max-width: 768px) {
  .photo-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
}

@media (max-width: 480px) {
  .photo-grid {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  }
}
</style>
