<template>
  <div class="search_component pa-5">
    <div>
      <TextField
        v-model="search"
        :prependInner="'mdi-magnify'"
        :placeholder="'Search...'"
        :hideDetails="true"
        style="background-color: #f4f4f4; border-radius: 8px"
      />
    </div>

    <div class="mt-8">
      <search-result :searchValue="search" />
    </div>
  </div>
</template>

<script>
const SearchResult = () => import('@/components/SearchResult.vue');
export default {
  name: 'SnsgramSearch',

  components: {
    SearchResult,
  },

  data() {
    return { search: '' };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
