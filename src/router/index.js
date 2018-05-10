import Vue from 'vue'
import Router from 'vue-router'
import search from '@/components/search'
import VueAlertify from "vue-alertify"

Vue.use(VueAlertify)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'search',
      component: search
    }
  ]
})
