import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

// Icons
import add from '@/components/icons/add.vue';
import home from '@/components/icons/home.vue';
import chat from '@/components/icons/chat.vue';
import share from '@/components/icons/share.vue';
import heart from '@/components/icons/heart.vue';
import close from '@/components/icons/close.vue';
import google from '@/components/icons/google.vue';
import magnify from '@/components/icons/magnify.vue';
import bookmark from '@/components/icons/bookmark.vue';
import filledHeart from '@/components/icons/filledHeart.vue';
import filledBookmark from '@/components/icons/filledBookmark.vue';

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
      add: { component: add },
      home: { component: home },
      chat: { component: chat },
      share: { component: share },
      heart: { component: heart },
      close: { component: close },
      google: { component: google },
      magnify: { component: magnify },
      bookmark: { component: bookmark },
      filledHeart: { component: filledHeart },
      filledBookmark: { component: filledBookmark },
    },
  },
});
