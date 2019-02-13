import Vue from 'vue'
import Router from 'vue-router'
import Shopping from "./views/shopping.vue"
import Clothing from "./views/clothing.vue"
import Listing from "./views/listing.vue"
import Detail from "./views/detail.vue"
import Today from "./views/shopping/today.vue"
import Last from './views/shopping/last.vue'
import Mom from './views/shopping/mom.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes: [
    {
      path:"/shopping",
      component:Shopping,
      children:[
        {
          path:'today', // /film/
          component:Today
        },
        {
          path:'last',
          component:Last
        },
         {
          path:'mom',
          component:Mom
        },
        {
          path:'',
          redirect:'/shopping/today'
        }
      ]
    },
    {
      path:"/clothing/:myid",
      component:Clothing ,
    },
    {
      path:"/listing/:listid",
      component:Listing
    },
    {
      path:"/detail/:detailid",
      component:Detail
    },
      {
      path: '*',
      redirect: '/shopping'
    }

  ]
})
