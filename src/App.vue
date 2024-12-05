<script setup>
import { onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'

const handleMouseMove = (event) => {
  const menu = document.querySelector('.menu')
  const { clientX: mouseX, clientY: mouseY } = event
  const { innerWidth: width, innerHeight: height } = window

  const rotateX = -(mouseY / height) * 30 + 15 // Invert rotation on X-axis
  const rotateY = (mouseX / width) * 30 - 15 // Invert rotation on Y-axis

  menu.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<template>
  <RouterView />
</template>
