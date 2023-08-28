<template>
  <div class="avatar_skeleton">
    <v-skeleton-loader :style="setSize()" type="list-item-avatar"></v-skeleton-loader>
  </div>
</template>

<script>
export default {
  name: 'SnsgramAvatarSkeleton',

  props: ['size'],

  data() {
    return {};
  },

  mounted() {},

  methods: {
    setSize() {
      return {
        '--avatar-size': this.size + 'px',
      };
    },
  },
};
</script>

<style lang="scss">
.avatar_skeleton {
  .v-skeleton-loader {
    border-radius: 50% !important;
    &__avatar {
      width: var(--avatar-size) !important;
      height: var(--avatar-size) !important;
      margin: 0 !important;
    }
    &__list-item {
      padding: 0 !important;
      &-avatar {
        padding: 0 !important;
        height: var(--avatar-size) !important;
      }
    }
  }
}
</style>
