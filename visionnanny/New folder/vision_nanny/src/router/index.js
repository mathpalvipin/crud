import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index.js';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    meta: { requiresAuth: false },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/faq',
    name: 'FAQ',
    meta: { requiresAuth: true },
    component: () => import('../views/Faq.vue')
  },
  {
    path: '/privacy',
    name: 'Privacy',
    meta: { requiresAuth: false },
    component: () => import('../views/Privacy.vue')
  },
  {
  path: '/terms',
  name: 'Terms',
  meta: { requiresAuth: false },
  component: () => import('../views/Terms.vue')
},
  {
    path: '/activities',
    name: 'Activities',
    meta: { requiresAuth: true },
    component: () => import('../views/Activities.vue')
  },
  {
    path: '/score',
    name: 'Score',
    meta: { requiresAuth: false },
    component: () => import('../views/Score.vue')
  },

  // All activities are added here
  {
    path: '/activities/salient',
    name: 'salient',
    meta: { requiresAuth: true },
    component: () => import('../views/activities/Salient.vue')
  },
  {
    path: '/activities/movement',
    name: 'movement',
    meta: { requiresAuth: true },
    component: () => import('../views/activities/Movement.vue')
  },
  {
    path: '/activities/bubble',
    name: 'bubble',
    meta: { requiresAuth: true },
    component: () => import('../views/activities/Bubble.vue')
  },
  {
    path: '/activities/fluid',
    name: 'fluid',
    meta: { requiresAuth: true },
    component: () => import('../views/activities/Fluid.vue')
  },
  {
    path: '/activities/complexity',
    name: 'complexity',
    meta: { requiresAuth: true },
    component: () => import('../views/activities/Complexity.vue')
  },
  {
    path: '/activities/dictionary',
    name: 'dictionary',
    meta: { requiresAuth: true },
    component: () => import('../views/activities/Dictionary.vue')
  },
  {
    path: '/activities/dictionary/animals',
    name: 'animals',
    meta: { requiresAuth: true },
    component: () => import('../views/dictionary/Animals.vue')
  },
  {
    path: '/activities/dictionary/birds',
    name: 'birds',
    meta: { requiresAuth: true },
    component: () => import('../views/dictionary/Birds.vue')
  },
  {
    path: '/activities/dictionary/vegetables',
    name: 'vegetables',
    meta: { requiresAuth: true },
    component: () => import('../views/dictionary/Vegetables.vue')
  },
  {
    path: '/activities/dictionary/fruits',
    name: 'fruits',
    meta: { requiresAuth: true },
    component: () => import('../views/dictionary/Fruits.vue')
  },
  {
    path: '/activities/dictionary/shapes',
    name: 'shapes',
    meta: { requiresAuth: true },
    component: () => import('../views/dictionary/Shapes.vue')
  },
  {
    path: '/activities/dictionary/Pilot-animals',
    name: 'Pilot-animals',
    meta: { requiresAuth: true },
    component: () => import('../views/dictionary/PilotAnimals.vue')
  },

  { path: '/:notFound(.*)', component: NotFound }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior () {
    return { top: 0 }
  }
})

router.beforeEach((to, _, next) => {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});


export default router
