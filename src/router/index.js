import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/home.vue"
import Services from "../views/services.vue"
import Testimonials from "../views/testimonials.vue"
import About from "../views/about.vue"
import Contact from "../views/contact.vue"

const routes = [
    {path: '/', name: 'Inicio', component: Home},
    {path: '/services', name: 'Servicios', component: Services},
    {path: '/testimonials', name: 'TestiTestimonios', component:Testimonials},
    {path: '/about', name: 'Nosotros', component: About},
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