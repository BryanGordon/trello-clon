import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/views/Home.vue'
import Board from '../components/views/Board.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home 
  },
  {
    path: '/board/:id',
    name: 'board',
    component: Board,
    props: true
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router