<template>
  <div class="work">
    <div class="project" v-for="item in 8">
      <img src="https://static1.squarespace.com/static/54ec963fe4b0dc5d50429d16/54edb596e4b035a09db262b0/5bc98efeeef1a1a7f494ea12/1539936026493/SPECIAL+PROJECTS.jpg?format=750w">
      <div class="name">RETAIL</div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.work{
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 0;
}
.project{
  width: 50%;
  min-width: 268px;
  box-sizing: border-box;

}

</style>

