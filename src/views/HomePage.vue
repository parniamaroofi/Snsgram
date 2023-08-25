<template>
  <div class="home_page">
    <v-row>
      <v-col lg="7" md="7" cols="12">
        <div>
          <v-card flat class="pa-2 common-card">
            <Stories
              :data="stories"
              @openStoryDialog="storyDialog = true"
              @closeStoryDialog="storyDialog = false"
            />
          </v-card>

          <v-card flat class="mt-sm-4 mt-0 common-card">
            <div v-for="(item, index) in posts" :key="index">
              <Post :data="item" />
            </div>
          </v-card>
        </div>
      </v-col>
      <v-col lg="5" md="5" class="d-sm-block d-none">
        <!-- User Profile -->
        <div class="user_profile d-flex justify-space-between py-4">
          <div class="d-flex">
            <!-- Profile image -->
            <img src="/images/user.png" class="rounded-full" width="52" />

            <!-- Profile username and fullname -->
            <div class="d-flex flex-column justify-center pl-3">
              <b class="fs-small pt-0.5">Parnia1106</b>
              <span class="mainGray--text fs-small -translate-y-0.5">Parnia Maroofi</span>
            </div>
          </div>

          <div class="d-flex align-center">
            <v-btn text color="primary"><b class="fs-medium">Switch</b></v-btn>
          </div>
        </div>

        <!-- Suggestions -->
        <div class="suggestions_box">
          <div class="d-flex justify-space-between align-center">
            <b class="mainGray--text fs-medium">Suggestions for you</b>

            <v-btn color="black" text><b class="fs-medium">See all</b></v-btn>
          </div>

          <div class="mt-2">
            <Suggestions />
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Post from '@/components/Post.vue';
import Stories from '@/components/Stories.vue';
import Suggestions from '@/components/Suggestions.vue';
export default {
  name: 'SnsgramHomePage',

  components: {
    Post,
    Stories,
    Suggestions,
  },

  data() {
    return {
      posts: [],
      stories: [],
      storyDialog: false,
    };
  },

  created() {
    this.getData();
  },

  methods: {
    getData() {
      this.$http
        .get('/static/api/homeContent.json', {
          headers: {
            Authorization: 'Bearer: ' + localStorage.getItem('token'),
          },
        })

        .then((res) => {
          this.posts = res.data.posts;
          this.stories = res.data.stories;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.home_page {
  @media only screen and (min-width: 1300px) {
    padding: 0 250px 25px;
  }
}
</style>
