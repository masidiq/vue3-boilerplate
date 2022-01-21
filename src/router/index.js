import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes'
import { createRouterLayout } from 'vue-router-layout'

const RouterLayout = createRouterLayout(layout => {
  return import('@/layouts/' + layout + '.vue')
})

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: RouterLayout,
      children: routes
    }
  ]
})

export default router
