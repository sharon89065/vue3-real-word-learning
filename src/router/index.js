import { createRouter, createWebHistory } from 'vue-router'
import Eventlist from '../views/Eventlist.vue'
import EventDetails from '@/views/EventDetails.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Eventlist',
    component: Eventlist,
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
