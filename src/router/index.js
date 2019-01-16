import Vue from 'vue'
import Router from 'vue-router'
import Menu from '../components/menu.vue'
import Navigation from "../components/navigation.vue";
import Basket from "../components/basket.vue";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'menu',
      component: Menu
    },
    {
      path: '/',
      name: 'navigation',
      component: Navigation
    },
    {
      path: '/',
      name: 'basket',
      component: Basket
    },
  ]
})
