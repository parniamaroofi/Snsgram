<template>
  <div class="TextField_component">
    <v-text-field
      outlined
      :prepend-inner-icon="prependInner ? prependInner : undefined"
      :placeholder="placeholder ? placeholder : undefined"
      :append-icon="appendIcon ? appendIcon : undefined"
      :hide-details="hideDetails ? hideDetails : false"
      :filled="filled ? filled : undefined"
      :label="label ? label : undefined"
      :type="type ? type : 'text'"
      :id="id ? id : undefined"
      @blur="doBlurFunction()"
      @input="updateValue"
      @keyup.enter="$emit('enter')"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  props: [
    'id',
    'type',
    'label',
    'filled',
    'appendIcon',
    'placeholder',
    'hideDetails',
    'prependInner',
  ],
  data() {
    return {};
  },
  methods: {
    doBlurFunction() {
      this.$emit('blur');
    },
    updateValue(event) {
      this.$emit('input', event);
    },
  },
};
</script>

<style lang="scss">
.TextField_component {
  .v-input {
    height: 40px !important;

    .v-input__slot {
      height: 40px !important;
      min-height: 40px !important;
      border-radius: 8px !important;

      fieldset {
        border: 1px solid #d4d4d4 !important;
        border-radius: 8px !important;
      }

      .v-input__prepend-inner {
        transform: translateY(-8px);
        padding-right: 15px !important;
      }
    }

    .v-text-field__slot {
      height: 40px !important;

      input {
        font-size: 0.82rem !important;
        &::placeholder {
          font-size: 0.82rem !important;
          color: grey !important;
        }
      }
    }

    .v-label:not(.v-label--active) {
      transform: translateY(-5px) scale(0.75);
      max-width: none !important;
    }
  }
}
</style>
