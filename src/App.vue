<template>
  <div id="app">
    <div id="nav">
      <img src="./assets/logo.jpg" class="logo">
      <router-link to="/about" class="link">about</router-link> |
      <router-link to="/work" class="link">work</router-link> |
      <router-link to="/contact" class="link">contact</router-link>
      <hr class="topLine" />
    </div>
    <router-view/>
    <hr class="bottomLine" />
    <div class="bottom">Arianna Lelli Mami & Chiara Di Pinto<br/>
    Copyright © 2006-2018 Studiopepe. All rights reserved.</div>
  </div>
</template>

<style>
.logo{
  margin: 0 auto 50px;
  display: block;
  width: 200px;

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  animation-name: titleEasing;
  animation-duration: 1s;
}

@keyframes titleEasing {
  0% {opacity: 0;}
  40% {opacity: 0;}
  100% {opacity: 1;}
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.topLine, .bottomLine{
  width: 80%;
  margin-top: 50px;
  color:rgba(0,0,0,.15); 
  border-style: none;
  border-width: 0;
  height: 1px;
  background-color: rgba(0,0,0,.15);
}

.link{
  padding: 0 10px;
  text-decoration: none;
  font-weight: bold;
  color: rgba(26,26,26,.4);
}
.link:hover{
  color: black;
}
.bottomLine{
  margin-top: 50px;
}
.bottom{
  margin-top: 50px;
  font-size: 12px;
}
</style>
