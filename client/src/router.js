import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ProductosView from './views/ProductosView.vue'
import DistribuidoresView from './views/DistribuidoresView.vue'
import NuestraAppView from './views/NuestraAppView.vue'
import HerramientasView from './views/HerramientasView.vue'
import ContactoView from './views/ContactoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'productos',
    component: ProductosView
  },
  {
    path: '/distribuidores/:estado?',
    name: 'distribuidores',
    component: DistribuidoresView
  },
  {
    path: '/nuestra-app',
    name: 'nuestra-app',
    component: NuestraAppView
  },
  {
    path: '/herramientas/requisitos',
    name: 'requisitos',
    component: () => import('./views/RequisitosView.vue')
  },
  {
    path: '/herramientas/bitacoras',
    name: 'bitacoras',
    component: () => import('./views/BitacorasView.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactoView
  },
  {
    path: '/descarga-app',
    name: 'descarga-app',
    component: () => import('./views/DescargarAppView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
