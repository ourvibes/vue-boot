import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import("@/views/sometable/index.vue") },
  { path: '/some-chart', component: () => import("@/views/somechart/index.vue") },
  { path: '/some-table', component: () => import("@/views/sometable/index.vue") },
  { path: '/some-tool', component: () => import("@/views/sometool/index.vue") },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;