<template>
  <div>
    <!-- swipe modal -->
    <div v-if="value" @click="closeModal" class="back_drop">&nbsp;</div>
    <div class="swipe_modal w-screen" :class="{ hasTransition: hasTransition, active: value }">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnsgramSwipeModal',

  props: ['value'],

  data() {
    return {
      hasTransition: false,
    };
  },

  methods: {
    closeModal() {
      this.$emit('input', false);
    },
  },

  watch: {
    value() {
      this.hasTransition = true;
      setTimeout(() => {
        this.hasTransition = false;
      }, 500);
    },
  },
};
</script>

<style lang="scss">
// Swipe modal
.swipe_modal {
  position: fixed;
  bottom: -100%;
  right: 0;
  z-index: 50;
  height: 95dvh;
  overflow: hidden;
  background-color: #fff;
  border-radius: 15px 15px 0 0;
  box-shadow: 0 0 6px 0 rgba(126, 34, 34, 0.16) !important;
  &.active {
    bottom: 0 !important;
  }
  &.hasTransition {
    transition: all 0.15s ease-in-out;
  }
}
.back_drop {
  top: 0;
  left: 0;
  z-index: 40;
  width: 100vw;
  height: 100dvh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.61);
}
</style>
