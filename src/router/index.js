import Vue from 'vue';
import VueRouter from 'vue-router';
// PAGES

// Container
import DefaultContainer from '../containers/DefaultContainer.vue';

// Auth
import Login from '../views/Auth/Login.vue';
import SignUp from '../views/Auth/SignUp.vue';
import PassRecovery from '../views/Auth/PassRecovery.vue';

// General
import HomePage from '../views/HomePage.vue';
import NewPost from '../views/NewPost.vue';
import Profile from '../views/Profile.vue';
import Search from '../views/Search.vue';
import PostId from '../views/PostId.vue';
import Notifs from '../views/Notifs.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  base: import.meta.env.BASE_URL,
  routes: [
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
    {
      path: '/home',
      name: 'home',
      component: DefaultContainer,
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomePage,
        },
        {
          path: '/search',
          name: 'search',
          component: Search,
        },
        {
          path: '/newPost',
          name: 'newPost',
          component: NewPost,
        },
        {
          path: '/profile',
          name: 'profile',
          component: Profile,
        },
        {
          path: '/post/:id',
          name: 'postId',
          component: PostId,
        },
        {
          path: '/notifs',
          name: 'notifs',
          component: Notifs,
        },
      ],
    },
    { path: '/', redirect: '/login' },
  ],
});

export default router;
