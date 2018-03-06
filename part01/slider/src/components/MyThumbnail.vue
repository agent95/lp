<template>
  <div 
    :class="{'current': current, 'inactive':inActive}" 
    @click="toggleThumbActive"
    @dblclick="removeThumbnail"
    class="thumbnail">
    <img :src="slide">
  </div>
</template>

<script>
export default {
  name: 'MyThumbnail',
  props: ['slideData','slide','index','active','current'],
  data(){
    return{
      inActive: false
    }
  },
  methods:{
    toggleThumbActive(){
      if(!this.current){
        let inActive = this.inActive = !this.inActive;
          this.$emit('inactiveListener',{'index':this.index,'inActive':inActive})
      }
    },
    removeThumbnail(){
      this.$emit('remove-thumb',this.index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .thumbnail{
        width:100px;
        height:80px;
        padding: 10px;
    }
    .thumbnail img{
      width:100%;
      height: 100%;
      display: block;
      border:5px solid #fff;
    }
    .thumbnail.inactive > img{
      opacity: 0.5;
    }
    .thumbnail.current > img{
      border:5px solid red;
    }
</style>
