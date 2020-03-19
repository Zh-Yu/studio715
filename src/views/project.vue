<template>
<div class="project">
  <img class="activeImg" :src="activeImg" v-show="activeImg">
  <div class="project_detail">
    <div class="carouselContainer">
      <div class="leftBtn" @click="pre">
        <img src="../assets/left.png">
      </div>
      <div class="imgs" ref="imgs">
        <img 
          :src="item"
          :class="{'activeItem': index === activeIndex}"
          v-for="(item, index) in imgs"
          @click="clickItem(index)"
          ref="img">
      </div>
      <div class="rightBtn" @click="next">
        <img src="../assets/right.png">
      </div>
    </div>
  </div>
  <hr class="bottomLine"/>
  <div class="desc">
    <div v-html="description"></div>
    <div v-html="location"></div>
  </div>
</div>
</template>
<script>
import { desc, images } from './constant';

export default {
  data() {
    return {
      activeImg: '',
      activeIndex: 0,
      imgs:[],
      description: '',
      location: ''
    }
  },
  methods: {
    clickItem(index, direction) {
      this.activeImg = this.imgs[index]
      if(index > this.activeIndex || direction == 'left') {
        this.activeIndex = index
        this.scroll('left')
      }
      if(index < this.activeIndex || direction == 'right') {
        this.activeIndex = index
        this.scroll('right')
      }
    },
    scroll(direction) {
      let imgLeft = this.$refs.img[this.activeIndex].offsetLeft // 距离imgsContainer的左边的距离==左边图片的和
      let imgWidth = this.$refs.img[this.activeIndex].offsetWidth // 图片自身的宽度
      let imgsWidth = this.$refs.imgs.offsetWidth // container的宽度
      let scrollLeft = this.$refs.imgs.scrollLeft // 向左滚动的宽度-随时变
      if (direction == 'left') {
        if (imgLeft + imgWidth >= imgsWidth) { //左边图片的和 + 当前图片宽度 >= 容器宽度   应该向左滑
          this.$refs.imgs.scrollLeft = scrollLeft + imgWidth
        }
      }
      if (direction == 'right') {
        if (scrollLeft - imgLeft >= 0) { // 左滑的距离 - 左边图片的宽度和 < 当前图片宽度 应该向右滑
          this.$refs.imgs.scrollLeft = scrollLeft - imgWidth
        }
      }
    },
    pre() {
      if(this.activeIndex > 0) {
        this.activeIndex--
      }
      this.clickItem(this.activeIndex, 'right')
    },
    next () {
      if(this.activeIndex < this.imgs.length-1) {
        this.activeIndex++
      }
      this.clickItem(this.activeIndex, 'left')
    }
  },
  created () {
    const projectId = +this.$route.query.index
    const projectDesc = desc.find(it => it.folder === +projectId);
    this.description = projectDesc.description
    this.location = projectDesc.location    
    this.imgs = images[+projectId]
    this.activeImg = this.imgs[0]
  }
}
</script>
<style lang="scss" scoped>
@media screen and (max-width: 414px) {
  .project{
    .activeImg {
      height: 202px !important;
    }
    .project_img{
      width: 270px !important;
    }
    .carouselContainer{
      margin: 0 auto;
    }
    .desc{
      width: 270px !important;
      margin: 0 auto;
      div:nth-child(1){
        width: 270px !important;
      }
      div:nth-last-child(1){
        margin: 20px 0 0 0 !important;
      }
    }
  }
}
.project{
  width: 100%;
  .bottomLine{
    width: 70%;
    margin: 40px auto;
    color:rgba(0,0,0,.15); 
    border-style: none;
    border-width: 0;
    height: 1px;
    background-color: rgba(0,0,0,.15);
    min-width: 270px;
  }
  .desc{
    width: 600px;
    margin: 0 auto;
    div{
      font-size: 12px;
      line-height: 18px;
      display: inline-block;
      box-sizing: border-box;
      vertical-align: top;
      width: 370px;
    }
    div:nth-last-child(1){
      margin-left: 47px;
      width: 183px;
      text-align: center;
      font-family: AvenirNext-Medium;
    }
  }
}
@keyframes activeCss {
  0% {opacity: 0;}
  40% {opacity: 0.5;}
  100% {opacity: 1;}
}
.activeImg {
  height: 398px;
  max-width: 70%;
  animation-name: activeCss;
  animation-duration: 0.5s;
}
.project_detail {
  width: 600px;
  margin: 0 auto;
  .carouselContainer {
    position: relative;
    width: 100%;
    height: 140px;
    margin-top: 25px;
    .leftBtn, .rightBtn {
      position: absolute;
      top: 50px;
      width: 30px;
      height: 30px;
      z-index: 99;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .leftBtn {
      left: 10px;
    }
    .rightBtn {
      right: 10px;
    }
    .imgs {
      width: 100%;
      height: 160px; // 留给滚动条
      display: flex;
      overflow-x: scroll;
      overflow-y: hidden;
      img {
        height: 100%;
        margin-right: 5px;
        flex-shrink: 0;
        position: relative;
        display: inline-block;
        height: 140px;
        opacity: 0.5;
      }
      img:nth-last-child(1) {
        margin-right: 0;
      }
      .activeItem {
        opacity: 1;
      }
    }
    .imgs::-webkit-scrollbar {
      width: 0 !important;
    }
    .imgs {
      -ms-overflow-style: none
    }
  }
}
</style>

