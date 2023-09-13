<template>
  <div>
    <v-dialog v-model="dialogValue" :width="width ? width : undefined">
      <v-card class="dialog-card">
        <v-card-title v-if="!hideHeader || hideHeader === undefined" class="d-flex justify-center">
          <slot name="title">
            <span class="mainFont--text fs-xlarge">Title</span>
          </slot>
        </v-card-title>

        <v-divider v-if="!hideHeader || hideHeader === undefined"></v-divider>

        <v-card-text class="pa-0">
          <div>
            <slot name="content"></slot>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'SnsgramDialog',

  props: ['value', 'width', 'hideHeader'],

  data() {
    return {
      dialogValue: false,
    };
  },

  watch: {
    value(val) {
      this.dialogValue = val;
    },
    dialogValue(val) {
      if (!val) {
        this.$emit('input', val);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog-card {
  padding: 0 15px;
  max-height: 550px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #ebebeb;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #bfbbbb;
    border-radius: 5px;
  }
}
.v-dialog {
  max-height: 550px;
}
</style>
