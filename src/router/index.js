import Layout from '@/components/Layout.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import CareersView from '@/views/CareersView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import HomeView from '@/views/HomeView.vue'
import ServiceView from '@/views/ServiceView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'about-us',
          name: 'about-us',
          component: AboutUsView
        },
        {
          path: 'services/:serviceName',
          name: 'services',
          component: ServiceView
        },
        {
          path: 'careers',
          name: 'careers',
          component: CareersView
        },
        {
          path: 'contact-us',
          name: 'contact-us',
          component: ContactUsView
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }; // Scrolls to the top of the page on route change
  }
})

export default router
