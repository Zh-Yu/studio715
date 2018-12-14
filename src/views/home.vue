<template>
  <div class="home">
    <div class="carousel">
      <el-carousel :interval="2000" indicator-position="none" arrow="never">
        <el-carousel-item v-for="(item, index) in imgArray" :key="item">
          <img :src="item" @click="toProject(index)"/>
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
    },
    methods: {
      toProject(index) {
        this.$router.push('/project?index=' + index)
      }
    }
  }
</script>
<style scoped>
.home{
  width: 70%;
  margin: 0 auto;
  min-width: 270px;
}
.el-carousel__item{
  width: 100%;
}
img{
  width: 100%;
}
.content{
  margin: 40px auto 0;
  text-align: center;
  font-size: 12px;
  width: 100%;
  line-height: 18px;
}

</style>
<style>
.el-carousel__container{
  margin: 0 auto;
  width: 600px !important;
  height: 398px !important;
}
@media only screen and (max-width: 414px) {
  .el-carousel__container{
    width: 270px !important;
    height: 179px !important;
  }
}
</style>
