<template>
  <div>
    <!-- swipe modal -->
    <div v-if="value" @click="closeModal" class="back_drop">&nbsp;</div>
    <div class="container_box" :class="{ hasTransition: hasTransition, active: value }">
      <div class="relative box1">
        <div class="swipe_modal w-screen">
          <!-- Close Modal Icon -->
          <div class="relative box2">
            <div class="icon_box" @click="closeModal">
              <v-icon large>mdi-chevron-down</v-icon>
            </div>
          </div>
          <!-- Modal Content -->
          <slot name="content"></slot>
        </div>
      </div>
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
.container_box {
  position: fixed;
  bottom: -100%;
  right: 0;
  z-index: 21;
  width: 100%;
  height: 100dvh;
  overflow: hidden;

  &.active {
    bottom: 0 !important;
  }
  &.hasTransition {
    transition: all 0.2s ease-in-out;
  }

  .box1 {
    top: 0;
    left: 0;
    height: 100dvh;

    .swipe_modal {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 22;
      height: 90dvh;
      background-color: #fff;
      border-radius: 15px 15px 0 0;
      box-shadow: 0 0 6px 0 rgba(126, 34, 34, 0.16) !important;

      .box2 {
        .icon_box {
          position: absolute;
          top: -3px;
          left: 50%;
          width: 55px;
          height: 55px;
          border: none;
          display: flex;
          z-index: 23;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: white;
          transform: translate(-50%, -30px);

          &::before {
            content: '';
            width: 30px;
            height: 30px;
            position: absolute;
            border-radius: 50%;
            top: 0.15rem;
            left: -29px;
            background: transparent;
            box-shadow: 15px 18px #fff;
          }
          &::after {
            content: '';
            width: 30px;
            height: 30px;
            position: absolute;
            border-radius: 50%;
            top: 0.15rem;
            right: -28px;
            background: transparent;
            box-shadow: -15px 18px #fff;
          }
        }
      }
    }
  }
}

.back_drop {
  top: 0;
  left: 0;
  z-index: 20;
  width: 100vw;
  height: 100dvh;
  position: fixed;
  background-color: #0000009c;
}
</style>
