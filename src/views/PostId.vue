<template>
  <div class="post_id">
    <v-row v-if="!gettingData">
      <!-- Post card -->
      <v-col lg="7" cols="12">
        <v-card flat class="common-card">
          <Post :data="postDetails" :summary="deviceType == 'desktop' ? false : true" />
        </v-card>
      </v-col>
      <!-- Comments section -->
      <v-col lg="5" class="d-md-block d-none">
        <v-card flat class="common-card commands_card">
          <!-- Header title -->
          <div class="text-center py-3">
            <span class="mainFont--text fs-xlarge">Comments</span>
          </div>
          <v-divider class="mx-3"></v-divider>
          <!-- Comments -->
          <Comments :data="postDetails.comments" />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
const Post = () => import('@/components/Post.vue');
const Comments = () => import('@/components/Comments.vue');
export default {
  name: 'SnsgramPostId',

  components: {
    Post,
    Comments,
  },

  data() {
    return {
      gettingData: true,
      postDetails: {},
    };
  },

  created() {
    this.getPostData();
  },

  methods: {
    getPostData() {
      this.gettingData = true;
      this.$http
        .get('/static/api/posts.json', {
          headers: {
            Authorization: 'Bearer: ' + localStorage.getItem('token'),
          },
        })

        .then((res) => {
          let postData = res.data.filter((x) => x.id == this.$route.params.id)[0];
          if (postData.id) {
            this.postDetails = postData;
          }
          this.gettingData = false;
        })
        .catch((err) => {
          console.log(err);
          this.gettingData = false;
        });
    },
  },
};
</script>

<style lang="scss">
.post_id {
  .commands_card {
    height: calc(100dvh - 115px);
  }
}
</style>
