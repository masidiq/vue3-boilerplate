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

const DEFAULT_TITLE = "Opsigo";
router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title + ' - ' + DEFAULT_TITLE;
  } else {
    document.title = DEFAULT_TITLE;
  }

});

export default router
