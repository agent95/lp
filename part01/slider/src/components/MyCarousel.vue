<template>
  <div class="myCarousel" v-on:paste="pasteHandler">
    <div class="mainDisplay" 
    :class="{'paused':isPaused}">
        <span v-if="slidesData.length === 0" class="emptySlider">No Images Available</span>
        <my-slide
            v-if="slidesData.length > 0"
            :currentImage="getCurrentImage()"
            @pauseslider="pauseSlider"
        >
        </my-slide>
    </div>
    <div class="thumbnailWrapper">
        <my-thumbnail
            v-for = "(slide, index) in slidesData"
            :slide = "slide"
            :index = "index"
            :key = "index"
            @inactiveListener="updateInactive"
            @remove-thumb="removeThumbItem" 
            :current="index === currentIndex"
        >
        </my-thumbnail>
    </div>
  </div>
</template>

<script>
import MySlide from './MySlide.vue';
import MyThumbnail from './MyThumbnail.vue';
import vueinterval from 'vue-interval/dist/VueInterval.common';

export default {
  name: 'MyCarousel',
  components:{
      MySlide,
      MyThumbnail
  },
  data (){
      return{
          slidesData:[],
          activeIndex: null,
          currentIndex: 0,
          isPaused: false,
          inactiveSlides:[]
      }
  },
  mixins:[vueinterval],
  methods:{
      pauseSlider(){
          this.isPaused = !this.isPaused;
      },
      getCurrentImage(){
          let currentIndex = this.currentIndex;
            return this.slidesData.length > 0 ? this.slidesData[currentIndex]: false;
      },
      pasteHandler(event){
          if(event.clipboardData){
              let clipboardItems = event.clipboardData.items,
              item,
              itemType,
              imageSource;
            
            for(let i = 0; i < clipboardItems.length; i++){
                item = clipboardItems[i];
                itemType = item.type;

                if(typeof item === 'object' && itemType.indexOf('image') !== -1){
                    // convert blob to url source
                    imageSource = window.URL.createObjectURL(item.getAsFile());
                    this.slidesData.unshift(imageSource);
                }
            }

          }
      },
      //vue-interval mixin
      INTERVAL__2000$(){ 
        if(this.slidesData.length > 1 && !this.isPaused){
            this.nextSlide();
        }
      },
      isInactive(index){
         return (this.inactiveSlides.includes(index)) ? true : false; 
      },
      nextSlide(){
        
        if(this.currentIndex !== this.slidesData.length - 1){
            this.currentIndex ++ ;
        }else{
            this.currentIndex = 0;
        }

        //skip inactive items
        if(this.isInactive(this.currentIndex)){
            this.nextSlide();
        }

      },
      removeThumbItem(index){
            this.slidesData.splice(index, 1);
            this.currentIndex = 0;
      },
       updateInactive(obj){
           let inactive = obj.inActive;
           let index = obj.index;

           if(inactive){
               this.inactiveSlides.push(index);
           }else{
               let i = this.inactiveSlides.indexOf(index);
               if (i > -1){
                   this.inactiveSlides.splice(i,1);
               }
           }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .myCarousel{
        height:100%;
        margin: 0 auto;
        min-height: 200px;
        overflow: hidden;
        width: 500px;
    }

    .thumbnailWrapper{
        background: #fff;
        display:inline-block;
        margin: 0 auto;
        overflow-x:auto;
        overflow-y:hidden;
        white-space: nowrap;
        width: 500px;
    }
    .thumbnailWrapper > * {
        vertical-align: baseline;
        display: inline-block;
        background: #fff;
        
    }
    .thumbnail{
        cursor:pointer;
    }
    .emptySlider{
        bottom:0;
        content:'No Images Available';
        display: inline;
        line-height: 200px;
        text-align: center;
        vertical-align: middle;
    }
    .mainDisplay{
        text-align: center;
        height:calc(100% - 120px);
        position: relative;
    }
</style>