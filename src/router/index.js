import { createRouter, createWebHistory } from 'vue-router';
import DisplayCategories from '../views/DisplayCategories.vue';
import MaterialCards from '../views/MaterialCards.vue';

// User will be navigated to Categories page on page refresh on any page.
function beforeRouteEnter(to, from, next) {
  if(!from.name) {
    next('/display-categories');
  } else {
    next();
  }
}

const routes = [
  {
    path: '/display-categories',
    name: 'DisplayCategories',
    component: DisplayCategories,
  },
  {
    path: '/material-cards',
    name: 'MaterialCards',
    component: MaterialCards,
    beforeEnter: beforeRouteEnter,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/display-categories',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router;
