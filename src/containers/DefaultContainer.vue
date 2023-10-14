<template>
  <div class="default_container">
    <main class="main">
      <router-view />
    </main>
    <Navigation class="d-md-none d-block" />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
export default {
  name: 'SnsgramDefaultContainer',

  components: {
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
    min-height: 100dvh;
    overflow-y: hidden;
    overflow-x: hidden;

    @media only screen and (max-width: 1300px) {
      margin-bottom: 85px;
    }

    @media only screen and (min-width: 1300px) {
      padding: 0 250px 25px;
    }
  }
}
</style>
