<template>
  <div class="suggestions_component">
    <div
      class="d-flex justify-space-between mb-3.5 pl-2"
      v-for="(item, index) in data"
      :key="index"
    >
      <div class="d-flex">
        <!-- Profile image -->
        <avatar-skeleton v-if="loading" :size="36" />
        <img
          :src="item.profileImg ? item.profileImg : '/images/user.png'"
          class="rounded-full"
          width="36"
        />

        <!-- Profile username and fullname -->
        <div class="d-flex flex-column justify-center pl-3">
          <b class="fs-small">{{ item.username }}</b>
          <span
            v-if="!item.new && item.mutualFriends.length"
            class="mainGray--text fs-small -translate-y-0.5"
          >
            Followed by {{ item.mutualFriends[0] }}
            <span v-if="item.mutualFriends.length > 1" class="fs-small">
              + {{ item.mutualFriends.length - 1 }} more
            </span>
          </span>
          <span v-else class="mainGray--text fs-small -translate-y-0.5">New to snsgram</span>
        </div>
      </div>

      <div class="d-flex align-center">
        <v-btn text color="primary"><b class="fs-small">Follow</b></v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import AvatarSkeleton from '@/components/microComponents/AvatarSkeleton.vue';
export default {
  components: {
    AvatarSkeleton,
  },

  props: ['data', 'loading'],

  data() {
    return {};
  },

  methods: {
    // getSuggestions() {
    //   this.suggestionLoading = true;
    //   this.$http
    //     .get('/static/api/suggestions.json', {
    //       headers: {
    //         Authorization: 'Bearer: ' + localStorage.getItem('token'),
    //       },
    //     })
    //     .then((res) => {
    //       this.suggestions = res.data;
    //       setTimeout(() => {
    //         this.suggestionLoading = false;
    //       }, 2000);
    //     })
    //     .catch((err) => {
    //       this.suggestionLoading = false;
    //       console.log(err);
    //     });
    // },
  },
};
</script>

<style lang="scss"></style>
