<template>
  <div class="contact">
    <div class="img">
      <img src="https://static1.squarespace.com/static/54ec963fe4b0dc5d50429d16/t/5b1fc876575d1ff60056395b/1528809613535/Studiopepe_ph.AndreaFerrari.jpg?format=750w" alt="">
    </div>
    <div class="connection_methos">
      <div class="type">Studiopepe</div>
      <div class="method">Viale Abruzzi, 2020131 Milano(+39) 02 36505993</div>
      <div class="type">general enquiries:</div>
      <div class="method">info@studiopepe.info</div>
      <div class="type">work with us:</div>
      <div class="method">apply@studiopepe.info</div>
    </div>
    <div style="clear:both"></div>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>
<style lang="scss" scoped>
.contact{
  width: 60%;
  margin: 0 auto;
  min-width: 270px;
  .img{
    float: right;
    min-width: 270px;
    width: 50%;
    img{
      width: 100%;
    }
  }
  .connection_methos{
    min-width: 270px;
    width: 45%;
    box-sizing: border-box;
    // padding-right: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    .type{
      font-weight: bold;
      margin-top: 25%;
    }
  }
}
</style>

