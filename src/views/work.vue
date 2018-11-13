<template>
  <div class="work">
    <div class="project" v-for="item in 10">
      <img class="img" src="https://static1.squarespace.com/static/54ec963fe4b0dc5d50429d16/54edb596e4b035a09db262b0/5bc98efeeef1a1a7f494ea12/1539936026493/SPECIAL+PROJECTS.jpg?format=750w">
      <div class="name">RETAIL</div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.work{
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  font-size: 0;
}
.project{
  width: 46%;
  min-width: 270px;
  margin-bottom: 20px;
}

.project:hover{
  .img{
    opacity: 0.5;
  }
}

.img{
  width: 100%;
}
.name{
  font-size: 20px;
  position: relative;
  top: -45%;
}


</style>

