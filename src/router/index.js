import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/home.vue"
import Contact from "../views/contact.vue"

const routes = [
    {path: '/', name: 'Inicio', component: Home},
    {path: '/contact', name: 'Contacto', component: Contact},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router