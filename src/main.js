import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Carousel, CarouselItem } from 'element-ui';
import 'element-ui/lib/theme-chalk/carousel.css';
import 'element-ui/lib/theme-chalk/carousel-item.css';


Vue.config.productionTip = false

Vue.use(Carousel)
Vue.use(CarouselItem)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
