<template>
  <div class="default_container">
    <Header />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  name: 'SnsgramDefaultContainer',

  components: {
    Header,
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
    margin-top: 56px;

    @media only screen and (min-width: 1300px) {
      margin-top: 86px;
    }
  }
}
</style>
