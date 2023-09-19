<template>
  <div class="home_page">
    <!-- Page Header -->
    <Header />
    <!-- Page main content -->
    <v-row class="main_content">
      <v-col lg="7" md="7" cols="12">
        <div>
          <v-card flat class="pa-2 common-card">
            <Stories :data="stories" :loading="pageLoading" />
          </v-card>

          <v-card flat class="mt-sm-2 mt-0 common-card">
            <div v-for="(item, index) in posts" :key="index">
              <Post :data="item" :summary="true" />
            </div>
          </v-card>
        </div>
      </v-col>
      <v-col lg="5" md="5" class="d-sm-block d-none">
        <!-- User Profile -->
        <v-row class="user_profile mt-2">
          <v-col>
            <div class="d-flex">
              <!-- Profile image -->
              <avatar-skeleton v-if="pageLoading" :size="52" />
              <img v-else src="/images/user.png" class="rounded-full" width="52" />

              <!-- Profile username and fullname -->
              <div class="d-flex flex-column justify-center pl-3 w-100">
                <div>
                  <v-skeleton-loader
                    v-if="pageLoading"
                    type="text"
                    class="mb-2"
                  ></v-skeleton-loader>
                  <b v-else class="fs-small pt-0.5">Parnia1106</b>
                </div>

                <div>
                  <v-skeleton-loader v-if="pageLoading" type="text"></v-skeleton-loader>
                  <span v-else class="mainGray--text fs-small -translate-y-0.5">
                    Parnia Maroofi
                  </span>
                </div>
              </div>
            </div>
          </v-col>

          <v-col class="d-flex align-center justify-end">
            <v-btn v-if="!pageLoading" text color="primary"><b class="fs-medium">Switch</b></v-btn>
          </v-col>
        </v-row>

        <!-- Suggestions -->
        <div class="suggestions_box mt-3">
          <div class="d-flex justify-space-between align-center">
            <b class="mainGray--text fs-medium">Suggestions for you</b>

            <v-btn color="black" text><b class="fs-medium">See all</b></v-btn>
          </div>

          <div class="mt-2">
            <Suggestions :data="suggestions" :loading="pageLoading" />
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
const Post = () => import('@/components/Post.vue');
const Header = () => import('@/components/Header.vue');
const Stories = () => import('@/components/Stories.vue');
const Suggestions = () => import('@/components/Suggestions.vue');
const AvatarSkeleton = () => import('@/components/microComponents/AvatarSkeleton.vue');
export default {
  name: 'SnsgramHomePage',

  components: {
    Post,
    Header,
    Stories,
    Suggestions,
    AvatarSkeleton,
  },

  data() {
    return {
      posts: [],
      stories: [],
      suggestions: [],
      pageLoading: false,
      suggestionLoading: false,
    };
  },

  created() {
    this.getData();
  },

  methods: {
    getData() {
      this.pageLoading = true;
      this.$http
        .get('/static/api/homeContent.json', {
          headers: {
            Authorization: 'Bearer: ' + localStorage.getItem('token'),
          },
        })

        .then((res) => {
          this.posts = res.data.posts;
          this.stories = res.data.stories;
          this.suggestions = res.data.suggestions;
          this.pageLoading = false;
        })
        .catch((err) => {
          this.pageLoading = false;
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss">
.home_page {
  min-height: 100dvh;
  .main_content {
    margin-top: 45px;
    @media only screen and (min-width: 1300px) {
      margin-top: 60px;
    }
  }
}
</style>
