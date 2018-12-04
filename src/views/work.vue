<template>
  <div class="work">
    <div class="project" v-for="(item, index) in imgs" @click="toProject(index)">
      <img class="img" :src="item.img">
      <div class="name">
        <div class="title">{{item.title}}</div>
        <div class="sub_title">{{item.sub_title}}</div>
      </div>
    </div>
    <div class="project" v-if="imgs.length%2===1"></div>
  </div>
</template>
<script>
import img1 from '../assets/work_1.png'
import img2 from '../assets/work_2.png'
import img3 from '../assets/work_3.png'
import img4 from '../assets/work_4.png'
import img5 from '../assets/work_5.png'
export default {
  data() {
    return {
      imgs: [
        {
          img: img1,
          title: 'I LOVE PRETTY',
          sub_title: 'RETAIL'
        }, {
          img: img2,
          title: 'ThoughtWorks BEIJING',
          sub_title: 'OFFICE'
        }, {
          img: img3,
          title: 'WF+ SHOE STORE',
          sub_title: 'RETAIL'
        }, {
          img: img4,
          title: 'WF+ SHOWROOM',
          sub_title: 'RETAIL'
        }, {
          img: img5,
          title: 'JEAN-LOUIS SCHERRER',
          sub_title: 'RETAIL'
     }
      ]
    }
  },
  methods : {
    toProject (index) {
      this.$router.push('/project?index=' + index)
    }
  }
}
</script>
<style lang="scss" scoped>
.work{
  width: 60%;
  margin: 0 auto;
  // display: flex;
  // justify-content: space-around;
  // flex-wrap: wrap;
  font-size: 0;
  min-width: 270px;
}
.project{
  display: inline-block;
  width: 48%;
  min-width: 270px;
  margin-bottom: 20px;
  margin: 0 15px 15px 0;
  position: relative;
  box-sizing: border-box;
  img{
    opacity: 0.5;
    width: 100%;
  }
  .name{
    font-size: 20px;
    position: absolute;
    text-align: center;
    left: 0;
    right: 0;
    top: 40%;

    .title{
      font-weight: bold;
      font-size: 18px;
      height: 18px;
    }

    .sub_title{
      margin-top: 14px;
      font-size: 18px;
      height: 18px;
    }
  }
}
.project:nth-last-child(1), .project:nth-last-child(2){
  margin-bottom: 0
}

.project:hover{
  .img{
    opacity: 0.9;
  }
}


</style>

