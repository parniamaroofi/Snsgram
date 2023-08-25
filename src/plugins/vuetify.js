import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

// Icons
import home from '@/components/icons/home.vue';
import chat from '@/components/icons/chat.vue';
import share from '@/components/icons/share.vue';
import heart from '@/components/icons/heart.vue';
import google from '@/components/icons/google.vue';
import bookmark from '@/components/icons/bookmark.vue';
import filledHeart from '@/components/icons/filledHeart.vue';

export default new Vuetify({
  theme: {
    themes: {
      light: {
        mainFont: '#4b5563',
        mainGray: '#838890',
      },
      dark: {},
    },
  },
  icons: {
    values: {
      home: { component: home },
      chat: { component: chat },
      share: { component: share },
      heart: { component: heart },
      google: { component: google },
      bookmark: { component: bookmark },
      filledHeart: { component: filledHeart },
    },
  },
});
