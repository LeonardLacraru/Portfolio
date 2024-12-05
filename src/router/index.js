import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PortretView from '../views/PortretView.vue'
import IcoaneView from '@/views/IcoaneView.vue'
import LucrariPeLemn from '@/views/LucrariPeLemn.vue'
import PicAnimale from '@/views/PicAnimale.vue'
import PicNatura from '@/views/PicNatura.vue'
import PicPastel from '@/views/PicPastel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/portret',
      name: 'potret',
      component: PortretView,
    },
    {
      path: '/icoane',
      name: 'icoane',
      component: IcoaneView,
    },
    {
      path: '/lucrariPeLemn',
      name: 'LucrariPeLemn',
      component: LucrariPeLemn,
    },
    {
      path: '/animale',
      name: 'animale',
      component: PicAnimale,
    },
    {
      path: '/natura',
      name: 'natura',
      component: PicNatura,
    },
    {
      path: '/pastel',
      name: 'pastel',
      component: PicPastel,
    },
  ],
})

export default router
