<template>
  <div class="TextField_Outlined">
    <v-text-field
      :placeholder="placeholder ? placeholder : 'Placeholder'"
      :hide-details="hideDetails ? hideDetails : false"
      :type="type ? type : 'text'"
      outlined
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'SnsgramTextFieldOutlined',

  props: ['placeholder', 'hideDetails', 'type'],

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss">
.TextField_Outlined {
  .v-input {
    height: 44px !important;
    .v-input__slot {
      height: 44px !important;
      min-height: 44px !important;
      border-radius: 2px !important;
      fieldset {
        border: 1px solid #c7c7c7 !important;
      }
    }
    .v-text-field__slot {
      height: 44px !important;
      input::placeholder {
        font-size: 0.73rem !important;
        color: grey !important;
      }
    }
  }
}
</style>
