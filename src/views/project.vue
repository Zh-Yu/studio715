<template>
<div class="project">
  <div class="project_img">
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
  </div>
  <hr class="bottomLine"/>
  <div class="desc">
    <div v-html="description"></div>
    <div v-html="location"></div>
  </div>
</div>
</template>
<script>
const imgNumber = [13, 18, 13, 8, 15]
const desc = [
  {
    description: 'STUDIO 715设计工作室为ILOVEPRETTY设计了全新的店铺空间，<br/>' +
      '以大胆前卫的色彩和空间语言来重新诠释ILOVEPRETTY的时尚魅力。<br/>' +
      '受著名意大利画家Giorgio De Chirico画作的影响，<br/>' +
      '空间中采用了拱形门廊来分割空间，增加空间的层次感。<br/>' +
      '同时空间中大量运用新奇有趣的几何元素，<br/>' +
      '如整面墙的折线形墙板随着人的移动而形成不同的光影效果，<br/>' +
      '具有积木形态的几何中岛，撞色的设计颇具视觉冲击力，<br/>' +
      '仿佛引领人们来到一个奇妙梦幻的游乐场。',
    location:  'LOCATION: 深圳中心城<br/>' +
      'YEAR：2018<br/>' +
      'PHOTOGRAPHY：STUDIO 715'
  },
  {
    description: 'STUDIO 715设计工作室为ThoughtWorks思特沃克·北京设计了全新办公体验的办公空间，<br/>' +
      '用设计语言更好的诠释了ThoughtWorks本身的企业文化。<br/>' +
      'ThoughtWorks鼓励员工之间的沟通交流，活跃的分享，希望拥有一个相对开放、平等、自由的办公环境。<br/>' +
      '我们希望通过对北京办公室1700平米空间的重新思考，打造一个<br/>' +
      '极富通透感的无阻隔的交流空间，提升员工的办公体验，<br/>' +
      '同时传达公司先进的企业文化和管理理念。<br/>',
    location: 'LOCATION: 北京 <br/>' +
      'YEAR：2018 <br/>' +
      'PHOTOGRAPHY：STUDIO 715 <br/>'
  },
  {
    description: 'WF+鞋履配饰集合店 (World Footwear Plus)是一家<br/>' +
      '以意大利手工皮鞋品牌以及高端私人定制为主，<br/>' +
      '融合了时尚服饰、配饰的生活体验馆。<br/>' +
      '空间中结合了中性时尚的水泥灰与纤细优雅的复古黄铜色金属线条，<br/>' +
      '打造一个简约现代的精品形象，<br/>' +
      '凸显产品本身的手工质感以及纯正的色彩。',
    location: 'LOCATION: 北京合生汇 <br/>' +
      'YEAR：2018 <br/>' +
      'PHOTOGRAPHY：STUDIO 715'
  },
  {
    description: 'STUDIO 715为鞋履配饰品牌集合店 WF+ （World Footwear Plus）展厅设计了全新的陈列展示。<br/>' +
      '整体陈列风格以现代感极强的几何色块为主，<br/>' +
      '搭配家具简洁流畅的线条，搭建出几种色彩主题的陈列背景。<br/>' +
      '每个场景利用墙面层板、小沙发、地毯、边桌等软装家具<br/>' +
      '作为鞋履陈列的承载物，<br/>' +
      '色彩明快、主次分明，体现一种现代趣味的生活理念，让鞋、包等配饰在生活场景中鲜明、活泼起来。',
    location: 'LOCATION: 北京 <br/>' +
      'YEAR：2017 <br/>' +
      'PHOTOGRAPHY：STUDIO 715'
  },
  {
    description:'法国品牌让·路易·雪莱Jean-Louis Scherrer诞生于1962年， <br/>' +
    '是一家集时装、配饰、香水等一体的高级品牌。<br/>' +
    '为体现其年轻、时尚、优雅、高级的服装品质，我们采用了<br/>' +
    '来自意大利的Arabescato Corchia（网纹大花白）<br/>' +
    '大理石与经典的黄铜元素相结合，用清爽的石材调和时下最流行的复古金属感。<br/>' +
    '色彩简约，线条利落，体现意式设计的低调奢华。',
    location: 'LOCATION: 广州、苏州 <br/>' +
      'YEAR：2016 <br/>' +
      'PHOTOGRAPHY：STUDIO 715'
  }
]
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
    },
    _readFileName(filePath) {
      console.log(filePath)

      fs.readdir(filePath, (err, files) => {
        files.forEach(filename => {
          this.imgs.push(path.join(filePath, filename))
        });
      })
    }
  },
  created () {
    let projectId = +this.$route.query.index
    this.imgs = new Array(imgNumber[projectId]).fill().map((element, fileIndex) => {
      this.description = desc[projectId].description
      this.location = desc[projectId].location      
      return require('../assets/' + projectId + '/' + (+fileIndex + 1) + '.png')
    });
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
      margin-left: 55px;
      width: 175px;
      text-align: center;
    }
  }
}
.project_img{
  width: 600px;
  margin: 0 auto;
  .project_detail {
    width: 100%;
    margin: 0 auto;
    @keyframes activeCss {
      0% {opacity: 0;}
      40% {opacity: 0.5;}
      100% {opacity: 1;}
    }
    .activeImg {
      height: 398px;
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
}
</style>

