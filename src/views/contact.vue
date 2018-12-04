<template>
  <div class="contact">
    <div class="img">
      <img src="../assets/office.jpg" alt="">
    </div>
    <div class="connection_methos">
      <div class="name">
        <span>STUDIO 715</span>
        <span>设计工作室</span>
      </div>
      <div class="address_English">Via San Brunone 19, MI 20156, ITALY</div>
      <div class="address_Chinese">中国北京市东 城区草厂十条奋章胡同11号</div>
      <div class="connection">
        <div class="connect_type">设计需求、商务合作、实习机会请联系</div>
        <div class="email">Email: info@studio715.me</div>
        <div class="wechat">微信公众号</div>
        <div class="qscode">
          <img src="../assets/qrCode.jpg" alt="">
        </div>
      </div>
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
  max-width: 600px;
  margin: 0 auto;
  margin: 0 auto;
  .img{
    float: right;
    width: 291px;
    img{
      width: 100%;
    }
  }
  .connection_methos{
    width: 230px;
    margin: 0 auto;
    box-sizing: border-box;
    float: left;
    font-size: 12px;
    .name{
      height: 18px;
      line-height: 18px;
      span:nth-child(1){
        // 字体
      }
      span:nth-child(2){
        // 字体
        margin-left: 5px;
      }
    }
    .address_English{
        height: 18px;
        line-height: 18px;
    }
    .address_Chinese{
        height: 18px;
        line-height: 18px;
    }
    .connection{
      margin-top: 40px;
      div{
        height: 18px;
        line-height: 18px;
      }
      .connect_type{
      }
      .email{

      }
      .wechat{
        margin: 40px auto 18px;
      }
      .qscode{
        width: 160px;
        height: 160px;
        margin: 0 auto;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
@media only screen and (max-width: 414px) {
  .contact{
    width: 270px;
  }
  .img{
    float: none !important;
    margin: 0 auto;
    width: 270px !important;
  }
  .connection_methos{
    float: none !important;
    margin-top: 40px !important;
  }
}
</style>

