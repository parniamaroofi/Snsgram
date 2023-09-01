import Vue from 'vue';

import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import store from './store/index';

// to use axios globally
import Axios from 'axios';
Vue.prototype.$http = Axios;

// Common Components
const TextField = () => import('@/components/microComponents/TextField.vue');
const Button = () => import('@/components/microComponents/Button.vue');
const Loading = () => import('@/components/Loading.vue');

Vue.mixin({
  components: {
    TextField,
    Button,
    Loading,
  },
});

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
