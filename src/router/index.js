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
import Likes from '../views/Likes.vue';

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
          meta: {
            header: true,
          },
        },
        {
          path: '/search',
          name: 'search',
          component: Search,
          meta: {
            header: false,
          },
        },
        {
          path: '/newPost',
          name: 'newPost',
          component: NewPost,
          meta: {
            header: true,
          },
        },
        {
          path: '/profile',
          name: 'profile',
          component: Profile,
          meta: {
            header: true,
          },
        },
        {
          path: '/post/:id',
          name: 'postId',
          component: PostId,
          meta: {
            header: true,
          },
        },
        {
          path: '/likes',
          name: 'likes',
          component: Likes,
          meta: {
            header: true,
          },
        },
      ],
    },
    { path: '/', redirect: '/login' },
  ],
});

export default router;
