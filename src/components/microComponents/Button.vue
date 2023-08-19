<template>
  <div>
    <v-btn
      :color="color ? color : undefined"
      :block="block ? block : false"
      :width="width ? width : undefined"
      :height="height ? height : undefined"
      :disabled="disabled ? disabled : undefined"
      :loading="loading ? loading : undefined"
      :outlined="outlined ? outlined : undefined"
      class="rounded-lg"
      ><v-icon v-if="icon" class="mr-1" small>{{ icon }}</v-icon
      >{{ text }}</v-btn
    >
  </div>
</template>

<script>
export default {
  name: 'SnsgramButton',

  props: ['color', 'block', 'text', 'icon', 'width', 'height', 'disabled', 'loading', 'outlined'],

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
