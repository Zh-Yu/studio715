import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
import about from './views/about.vue'
import work from './views/work.vue'
import contact from './views/contact.vue'
import project from './views/project.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/work',
      name: 'work',
      component: work
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/project',
      name: 'project',
      component: project
    },
  ]
})
