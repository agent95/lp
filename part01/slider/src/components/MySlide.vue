<template>
  <div class="slide"
    @click="pauseEmit">
    <img :src="currentImage">
  </div>
</template>

<script>
export default {
  name: 'MySlide',
  props:['currentImage'],
  methods:{
    pauseEmit(){
      this.$emit('pauseslider')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .slide{
        max-width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
    }
    .slide > img{
      width: 100%;
    }
    .paused > .slide:before{
      content: "||";
      display: inline;
      color:#fff;
      font-size: 10em;
      margin: auto;
      position: absolute;
      left: 0; 
      bottom: 20px; 
      right: 0;
      color: rgba(255,255,255,0.7)
    }
</style>
