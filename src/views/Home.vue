<template>
  <div class="home">
    <div class="carousel">
      <!-- <carousel :scrollPerPage="true" autoplay :perPage="1" :paginationEnabled="false">
        <slide v-for="item in imgArray" :key="item">
          <img :src="item"/>
        </slide>
      </carousel> -->
      <el-carousel :interval="1000" indicator-position="none" height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="content">
      Future, reloaded.  Contemporary and memory, sartorial craftsmanship and augmented reality, public and private: antithetical realities are organically overlapping in Club Unseen, the new project created for the 2018 Salone del Mobile.
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        imgArray: ['http://c.hiphotos.baidu.com/image/pic/item/ac6eddc451da81cb63f7c4a15f66d0160924314c.jpg',
        'http://f.hiphotos.baidu.com/image/pic/item/1f178a82b9014a9043b931d1a4773912b21beed3.jpg',
        'http://e.hiphotos.baidu.com/image/pic/item/6159252dd42a2834e087716756b5c9ea15cebfbd.jpg']
      }
    }
  }
</script>
<style scoped>
.home{
  width: 80%;
  margin: 20px auto 0;
}
.carousel{
  height: 150px;
  width: 100%;
}
.el-carousel__item{
  width: 100%;
}
.content{
  margin: 50px auto 0;
  width: 60%;
  text-align: center;
  font-size: 14px;
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item{
    display: inline-block;
  }
   .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
</style>
