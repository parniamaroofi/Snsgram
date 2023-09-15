<template>
  <div class="default_container">
    <Header v-if="$route.meta.header" />
    <main class="main" :class="$route.meta.header ? 'width_margintop' : ''">
      <router-view />
    </main>
    <Navigation class="d-md-none d-block" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Navigation from '@/components/Navigation.vue';
export default {
  name: 'SnsgramDefaultContainer',

  components: {
    Header,
    Navigation,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.default_container {
  .main {
    width: 100vw;
    overflow-y: hidden;
    overflow-x: hidden;

    &.width_margintop {
      margin-top: 56px;
      @media only screen and (min-width: 1300px) {
        margin-top: 86px;
      }
    }

    @media only screen and (max-width: 1300px) {
      margin-bottom: 85px;
    }

    @media only screen and (min-width: 1300px) {
      padding: 0 250px 25px;
    }
  }
}
</style>
