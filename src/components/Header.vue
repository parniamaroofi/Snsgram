<template>
  <div class="header_component d-flex justify-space-around align-center py-1">
    <h3 class="app-logo font-bold">Snsgram</h3>

    <div style="width: 350px" class="d-none d-md-block">
      <Button
        :color="'grey lighten-1'"
        :text="'Search'"
        :icon="'mdi-magnify'"
        :width="350"
        :height="31"
        :outlined="true"
        @click.native="searchModeOn()"
        class="grey lighten-5 rounded-lg"
        v-if="!searchMode"
      />

      <TextField
        :modelValue="search"
        @update="(newVal) => (search = newVal)"
        :prependInner="'mdi-magnify'"
        :placeholder="'Search...'"
        :hideDetails="true"
        :id="'search_field'"
        @blur="!search ? (searchMode = false) : ''"
        v-else
      />
    </div>

    <div>
      <div class="d-flex align-center">
        <span class="mx-3"><v-icon>$home</v-icon></span>
        <span class="mx-3"><v-icon>$heart</v-icon></span>
        <span class="mx-3"><v-icon>$share</v-icon></span>
        <div class="ml-3">
          <img src="/images/user.png" style="aspect-ratio: 1 / 1" class="rounded-full" width="28" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnsgramHeader',

  data() {
    return {
      search: '',
      searchMode: false,
    };
  },

  mounted() {},

  methods: {
    searchModeOn() {
      this.searchMode = true;
      setTimeout(() => {
        document.getElementById('search_field').focus();
      }, 100);
    },
  },
};
</script>

<style lang="scss">
.header_component {
  top: 0;
  width: 100vw;
  z-index: 10;
  position: fixed;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  .app-logo {
    font-family: 'Dancing Script';
    font-size: 2rem !important;
  }

  .v-input {
    height: 31px !important;

    .v-input__slot {
      height: 31px !important;
      min-height: 31px !important;
      border-radius: 8px !important;
      background-color: #fafafa !important;

      .v-input__prepend-inner {
        transform: translateY(-13px);
      }
    }

    .v-text-field__slot {
      height: 31px !important;
    }
  }
}
</style>
