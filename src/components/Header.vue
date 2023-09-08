<template>
  <div class="header_component d-flex align-center py-1">
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

      <v-menu v-model="searchMenu" :close-on-click="false" offset-y v-else>
        <template v-slot:activator="{ attrs }">
          <div v-bind="attrs">
            <TextField
              v-model="search"
              :prependInner="'mdi-magnify'"
              :placeholder="'Search...'"
              :hideDetails="true"
              :id="'search_field'"
            />
          </div>
        </template>
        <v-card class="pa-4">
          <search-result :searchValue="search" />
        </v-card>
      </v-menu>
    </div>

    <div>
      <div class="d-flex align-center">
        <span class="mx-3 d-md-block d-none"><v-icon>$home</v-icon></span>
        <span class="mx-3 d-md-block d-none"><v-icon>$heart</v-icon></span>
        <span class="mx-md-3 mx-0"><v-icon>$share</v-icon></span>
        <div class="ml-3 d-md-block d-none">
          <img src="/images/user.png" style="aspect-ratio: 1 / 1" class="rounded-full" width="28" />
        </div>
      </div>
    </div>

    <v-overlay v-if="showOverlay" @click="searchModeOff()"></v-overlay>
  </div>
</template>

<script>
const SearchResult = () => import('@/components/SearchResult.vue');
export default {
  name: 'SnsgramHeader',

  components: { SearchResult },

  data() {
    return {
      search: '',
      searchMenu: false,
      searchMode: false,
      showOverlay: false,
    };
  },

  mounted() {},

  methods: {
    searchModeOn() {
      this.searchMode = true;
      this.showOverlay = true;
      setTimeout(() => {
        this.searchMenu = true;
        document.getElementById('search_field').focus();
      }, 100);
    },
    searchModeOff() {
      this.searchMode = false;
      this.searchMenu = false;
      this.showOverlay = false;
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

  @media only screen and (max-width: 1300px) {
    justify-content: space-between;
    padding: 0 16px;
  }
  @media only screen and (min-width: 1300px) {
    justify-content: space-around;
  }

  .v-overlay {
    top: 57px !important;
  }

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
