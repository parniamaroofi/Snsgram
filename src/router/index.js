import Vue from 'vue';
import VueRouter from 'vue-router';
// PAGES

// Auth
import Login from '../views/Auth/Login.vue';
import SignUp from '../views/Auth/SignUp.vue';
import PassRecovery from '../views/Auth/PassRecovery.vue';

// General
import HomePage from '../views/HomePage.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/homePage',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
    {
      path: '/passRecovery',
      name: 'passRecovery',
      component: PassRecovery,
    },
    { path: '/', redirect: '/login' },
  ],
});

export default router;
