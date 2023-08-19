<template>
  <div class="TextField_Outlined">
    <v-text-field
      outlined
      :placeholder="placeholder ? placeholder : undefined"
      :hide-details="hideDetails ? hideDetails : false"
      :label="label ? label : undefined"
      :type="type ? type : 'text'"
      v-model="value"
      @input="$emit('update', value)"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  props: ['placeholder', 'hideDetails', 'label', 'type', 'modelValue'],
  data() {
    return {
      value: this.modelValue,
    };
  },
};
</script>

<style lang="scss">
.TextField_Outlined {
  .v-input {
    height: 41px !important;
    .v-input__slot {
      height: 41px !important;
      min-height: 41px !important;
      border-radius: 2px !important;
      fieldset {
        border: 1px solid #c7c7c7 !important;
      }
    }
    .v-text-field__slot {
      height: 41px !important;
      input {
        font-size: 0.73rem !important;
        &::placeholder {
          font-size: 0.73rem !important;
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
