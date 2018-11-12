import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCarousel from 'vue-carousel';
import 'element-ui/lib/theme-chalk/index.css';
import { Carousel, CarouselItem } from 'element-ui';

Vue.config.productionTip = false

Vue.use(VueCarousel)
Vue.use(Carousel)
Vue.use(CarouselItem)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
