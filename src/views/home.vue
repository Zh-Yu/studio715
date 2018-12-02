<template>
  <div class="home">
    <div class="carousel">
      <el-carousel :interval="2000" indicator-position="none" arrow="never">
        <el-carousel-item v-for="item in imgArray" :key="item">
          <img :src="item" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="content">
      在任何空间背景下，我们都渴望追求一种不落俗套的艺术氛围，在功能和美之间找到一种共存融洽的平衡。<br/>
      我们的设计注重细节，关注人的感受。<br/>
      我们的设计不是孤立的，而是创造一种人和事物的独特链接。<br/>
    </div>
  </div>
</template>

<script>
import img1 from '../assets/main_img1.png'
import img2 from '../assets/main_img2.png'
import img3 from '../assets/main_img3.png'
  export default {
    data () {
      return {
        imgArray: [img1, img2, img3]
      }
    }
  }
</script>
<style scoped>
.home{
  width: 60%;
  margin: 0 auto;
}
.carousel{
  width: 100%;
}
.el-carousel__item{
  height: 100%;
}
img{
  height: 100%;
}
.content{
  margin: 40px auto 0;
  width: 80%;
  text-align: center;
  font-size: 11px;
}
</style>
<style>
.el-carousel__container{
  height: 398px !important;
  
}
</style>
