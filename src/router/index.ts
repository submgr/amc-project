import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/sortingguide'
      },
      {
        path: 'home',
        redirect: '/tabs/sortingguide'
      },
      {
        path: 'chat',
        component: () => import('@/views/ChatScreen.vue')
      },
      {
        path: 'recyclingpoints',
        component: () => import('@/views/RecyclingPoints.vue')
      },
      {
        path: 'sortingguide',
        component: () => import('@/views/SortingGuide.vue')
      },
      {
        path: 'ecofootprintquiz',
        component: () => import('@/views/EcoFootprintQuizScreen.vue')
      },
      {
        path: 'creativeideas',
        component: () => import('@/views/CreativeIdeasScreen.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
