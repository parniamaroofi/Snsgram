<template>
  <v-card flat class="profile_component common-card mt-md-5 mt-0">
    <!-- Page header -->
    <div class="pa-5 d-flex justify-space-between align-center">
      <!-- Account username -->
      <div>
        <v-icon class="mr-4" @click="$router.go(-1)">mdi-arrow-left</v-icon>
        <b class="fs-xxxlarge mainFont--text"
          ><v-icon class="mr-1">$lock</v-icon>{{ profile.username }}
        </b>
      </div>
      <!-- Menu icon -->
      <div>
        <v-icon>mdi-menu</v-icon>
      </div>
    </div>
    <div class="pa-5 pt-3">
      <!-- Profile image AND posts, followers and following numbers -->
      <v-row>
        <v-col cols="4">
          <img
            :src="profile.profileImg ? profile.profileImg : '/images/user.png'"
            class="rounded-full"
            width="80"
          />
        </v-col>

        <v-col class="pl-0">
          <div class="d-flex justify-space-around align-center" style="height: 100%">
            <div class="d-flex flex-column align-center">
              <b class="fs-xlarge">{{ profile.postsNumber }}</b>
              <span class="fs-small">Posts</span>
            </div>
            <div class="d-flex flex-column align-center">
              <b class="fs-xlarge">{{ profile.followersNumber }}</b>
              <span class="fs-small">Followers</span>
            </div>
            <div class="d-flex flex-column align-center">
              <b class="fs-xlarge">{{ profile.followingNumber }}</b>
              <span class="fs-small">Following</span>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Bio section -->
      <div class="mt-3">
        <b>{{ profile.name }}</b>
        <div class="profile_bio fs-medium mt-1" v-html="profile.bio"></div>
      </div>
    </div>

    <div class="pa-3">
      <v-row class="all-posts">
        <v-col
          md="3"
          cols="4"
          class="pointer"
          style="padding: 1px !important"
          v-for="(post, index) in profile.posts"
          :key="index"
          @click="$router.push(`/post/${post.id}`)"
        >
          <img :src="post.imageUrl" style="aspect-ratio: 1 /1" class="w-100" />
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'SnsgramProfile',

  data() {
    return {
      profile: {},
    };
  },

  created() {
    this.getProfileData();
  },

  methods: {
    getProfileData() {
      this.$http
        .get('/static/api/profile.json', {
          headers: {
            Authorization: 'Bearer: ' + localStorage.getItem('token'),
          },
        })

        .then((res) => {
          this.profile = res.data;
        })
        .catch((err) => {
          console.log(err);
          this.toast('Error: ' + err.response.data, 'error');
        });
    },
  },
};
</script>

<style lang="scss">
.profile_component {
  .profile_bio {
    p {
      margin-bottom: 0;
    }
  }
}
</style>
