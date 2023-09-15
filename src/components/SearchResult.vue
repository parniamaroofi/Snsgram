<template>
  <div>
    <div class="text-center grey--text fs-small" v-if="!searchResult.length">
      No search history yet.
    </div>

    <div v-else>
      <!-- Loading spinner while searching process  -->
      <div v-if="searching" class="text-center py-1">
        <loading :color="'#666'" />
      </div>
      <!-- Search result -->
      <div v-else>
        <div v-for="(user, index) in searchResult" :key="index" class="pointer">
          <div class="d-flex justify-space-between align-center">
            <div class="d-flex align-center" @click="$router.push(`/user/${user.id}`)">
              <div class="user-avatar me-3">
                <img
                  width="40"
                  height="40"
                  class="rounded-full"
                  :src="user.profileUrl ? user.profileUrl : '/images/user.png'"
                />
              </div>
              <div>
                <p class="fs-small mainFont--text mb-0 font-bold">{{ user.username }}</p>
                <p class="fs-small grey--text mb-0">{{ user.fullName }}</p>
              </div>
            </div>

            <Button :text="'Follow'" :color="'primary'" :small="true" />
          </div>

          <v-divider v-if="index != searchResult.length - 1" class="my-3"></v-divider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnsgramSearchResult',

  props: ['searchValue'],

  data() {
    return {
      interval: '',
      searching: false,
      searchResult: [],
    };
  },

  mounted() {},

  methods: {
    doSearch() {
      if (this.searchValue.length) {
        this.searching = true;
        this.searchResult = [
          {
            id: '123',
            profileUrl:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe-cA9hIA3zIvKFHXQ31mkCRJ5v4iZMA0OQw&usqp=CAU',
            username: 's_____b____r______yt_',
            fullName: 'Saber Yeganetabar',
          },
          {
            id: '456',
            profileUrl: '',
            username: 'Arina_sbz',
            fullName: 'Arina Shahbazi',
          },
        ];

        clearInterval(this.interval);

        this.interval = setInterval(() => {
          this.searching = false;
          clearInterval(this.interval);
        }, 1000);
      } else {
        this.searchResult = [];
      }
    },
  },

  watch: {
    searchValue() {
      this.doSearch();
    },
  },
};
</script>

<style lang="scss" scoped></style>
