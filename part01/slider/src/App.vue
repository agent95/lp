<template>
  <div id="app">
    <my-carousel></my-carousel>
  </div>
</template>

<script>
import MyCarousel from './components/MyCarousel.vue'

export default {
  name: 'app',
  components: {
    MyCarousel
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100%;
  position: relative;
  width: 500px;
  margin: 0 auto;
}
</style>
