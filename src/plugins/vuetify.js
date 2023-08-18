import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

// Icons
import google from '@/components/icons/google.vue';

export default new Vuetify({
  theme: {
    themes: {
      light: {},
      dark: {},
    },
  },
  icons: {
    values: {
      google: { component: google },
    },
  },
});
