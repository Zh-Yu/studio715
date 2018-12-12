<template>
  <div id="app">
    <div id="nav">
      <img src="./assets/logo.png" class="logo" @click="toHome">
      <div class="router">
        <router-link to="/about" class="link">About</router-link>|
        <router-link to="/work" class="link">Work</router-link>|
        <router-link to="/contact" class="link">Contact</router-link>
      </div>
    </div>
    <hr class="topLine" />
    <router-view/>
    <hr class="bottomLine" />
    <div class="bottom">
      STUDIO 715
      <br/>
      Copyright © 2014-2019 Studio715. All rights reserved.
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    toHome () {
      this.$router.push('/')
    }
  }
}
</script>


<style>
@font-face {
  font-family: "FuturaLTBold";
  src: url('./assets/FuturaLTBold.ttf');
}
@font-face {
  font-family: "FuturaLTBook";
  src: url('./assets/FuturaLTBook.ttf');
}
@font-face {
  font-family: "FuturaLTBoldOblique";
  src: url('./assets/FuturaLTBoldOblique.ttf');
}
@font-face {
  font-family: "FuturaLTBookOblique";
  src: url('./assets/FuturaLTBookOblique.ttf');
}


.logo{
  margin: 0 auto 55px;
  display: block;
  width: 200px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, STFangsong, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px 30px 40px 30px;
  animation-name: titleEasing;
  animation-duration: 1s;
  color: rgba(26,26,26,.4);
  font-size: 0;
}

@keyframes titleEasing {
  0% {opacity: 0;}
  40% {opacity: 0;}
  100% {opacity: 1;}
}

#nav a.router-link-exact-active {
  color: black;
}

.topLine, .bottomLine{
  width: 70%;
  color:rgba(0,0,0,.15); 
  border-style: none;
  border-width: 0;
  height: 1px;
  background-color: rgba(0,0,0,.15);
  min-width: 270px;
  margin: 0 auto;
}
.topLine{
  margin-bottom: 40px;
}
.bottomLine{
  margin-bottom: 40px;
  margin-top: 40px;
}
.router{
  font-size: 14px;
  height: 14px;
}
.link{
  padding: 0 30px;
  text-decoration: none;
  font-weight: normal;
  color: rgba(26,26,26,.4);
  font-size: 14px;
  height: 14px;
  line-height: 14px;
  display: inline-block;
  font-family: AvenirNext-Medium;
}
.link:hover{
  color: black;
}
.bottom{
  font-family: "FuturaLTBook";
  font-size: 10px;
  line-height: 18px;
  letter-spacing: 1px; 
  /* chrome浏览器默认中文最小12px */
  -webkit-transform : scale(0.84,0.84);
}
@media only screen and (max-width: 414px) {
  .link{
    padding: 0 20px;
  }
}
</style>
