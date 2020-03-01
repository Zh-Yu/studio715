<template>
  <div class="work">
    <div class="project" v-for="item in imgs" @click="toProject(item.folder)">
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
import { desc } from './constant';

export default {
  data() {
    return {
      imgs: Object.freeze(desc)
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
  cursor: pointer;
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
      font-size: 18px;
      height: 18px;
      font-family: AvenirNext-Medium;
      font-weight: bold;
    }

    .sub_title{
      margin-top: 14px;
      font-size: 18px;
      height: 18px;
      font-family: AvenirNext-Medium;
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

