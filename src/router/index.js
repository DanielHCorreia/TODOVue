import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Cadastro from '../views/Cadastro.vue'
import Intro from '../views/Intro.vue'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Intro',
    component:Intro
  },
  {
    path: '/cadastro',
    name:'cadastro',
    component:Cadastro

  },
  {
    path:'/login',
    name:'Login',
    component:Login
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
