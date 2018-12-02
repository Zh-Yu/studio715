<template>
<div class="project">
  <div class="project_detail">
    <img class="activeImg" :src="activeImg" v-show="activeImg">
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
  <hr class="bottomLine" style="width: 100%;"/>
  <div class="desc">
    <div>
      Alysi opens its first boutique in Milan in the historic Brera district. The store is located in a XVII century building. 
      The store’s interior creates a sophisticated and contemporary atmosphere with a palette of half-tones and natural tints, which enhance
      the reading of the collection without overwhelming it. The boutique is conceived as a sequence of spaces, each with an
      individual character and distinguished by combinations of materials and colours that accompany the client
      along a chromatic and perspective path.
      </div>
    <div>
      LOCATION: via Ponte Vetero, 6 | Milan<br/>
      YEAR: 2018<br/>
      PHOTOGRAPHY: Silvia Rivoltella
    </div>
  </div>
</div>
  
</template>
<script>
export default {
  data() {
    return {
      activeImg: 'https://static1.squarespace.com/static/54ec963fe4b0dc5d50429d16/5accf522352f53a44f52fb15/5bcdd8ff652dead937c9a9b5/1540217090678/%40Studiopepe-Alysi-PH.SilviaRivoltella+%2820%29.jpg?format=300w',
      activeIndex: 0,
      imgs:[
        'https://static1.squarespace.com/static/54ec963fe4b0dc5d50429d16/5accf522352f53a44f52fb15/5bcdd8ff652dead937c9a9b5/1540217090678/%40Studiopepe-Alysi-PH.SilviaRivoltella+%2820%29.jpg?format=300w',
        'https://static1.squarespace.com/static/54ec963fe4b0dc5d50429d16/5accf522352f53a44f52fb15/5bcdd8f3f9619a83694a4353/1540217078901/%40Studiopepe-Alysi-PH.SilviaRivoltella+%283%29.jpg?format=500w',
        'https://static1.squarespace.com/static/54ec963fe4b0dc5d50429d16/5accf522352f53a44f52fb15/5bcdd8f2c830250ce98efea5/1540217079328/%40Studiopepe-Alysi-PH.SilviaRivoltella+%282%29.jpg?format=500w',
        'https://static1.squarespace.com/static/54ec963fe4b0dc5d50429d16/5accf522352f53a44f52fb15/5bcdd8f553450a8374e746e6/1540217080139/%40Studiopepe-Alysi-PH.SilviaRivoltella+%284%29.jpg?format=300w',
        'https://static1.squarespace.com/static/54ec963fe4b0dc5d50429d16/5accf522352f53a44f52fb15/5bcdd8f553450a8374e746e6/1540217080139/%40Studiopepe-Alysi-PH.SilviaRivoltella+%284%29.jpg?format=300w',
        'https://static1.squarespace.com/static/54ec963fe4b0dc5d50429d16/5accf522352f53a44f52fb15/5bcdd8f3f9619a83694a4353/1540217078901/%40Studiopepe-Alysi-PH.SilviaRivoltella+%283%29.jpg?format=500w',
      ]
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
    },
  },
  created () {
    console.log(this.$route.query.index)
  }
}
</script>
<style lang="scss" scoped>
@media screen and (max-width: 414px) {
  .activeImg {
    height: 300px !important;
  }
}
.project{
  width: 70%;
  min-width: 270px;
  margin: 0 auto;
  .project_detail {
    width: 95%;
    margin: 0 auto;
    @keyframes activeCss {
      0% {opacity: 0;}
      40% {opacity: 0.5;}
      100% {opacity: 1;}
    }
    .activeImg {
      height: 510px;
      max-width: 100%;
      animation-name: activeCss;
      animation-duration: 0.5s;
    }
    .carouselContainer {
      position: relative;
      width: 100%;
      height: 140px;
      margin-top: 25px;
      .leftBtn, .rightBtn {
        position: absolute;
        top: 50%;
        width: 20px;
        height: 20px;
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
        height: 160px;
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
        img {
          height: 100%;
          margin-right: 2px;
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
    .bottomLine{
      margin: 40px 0;
      color:rgba(0,0,0,.15); 
      border-style: none;
      border-width: 0;
      height: 1px;
      background-color: rgba(0,0,0,.15);
      min-width: 270px;
    }
  }
  .desc{
    margin-top: 50px;
    div{
      display: inline-block;
      width: 50%;
      padding:17px;
      box-sizing: border-box;
      vertical-align: top;
      min-width: 270px;
    }
  }
}
</style>

