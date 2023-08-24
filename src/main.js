import Vue from 'vue';

import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

// to use axios globally
import Axios from 'axios';
Vue.prototype.$http = Axios;

// Common Components
import TextField from '@/components/microComponents/TextField.vue';
import Button from '@/components/microComponents/Button.vue';

Vue.mixin({
  components: {
    TextField,
    Button,
  },
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
