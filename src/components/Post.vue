<template>
  <div class="post_component">
    <!-- Post content -->
    <div class="post_box mb-4">
      <!-- Post publisher profile and options icon -->
      <div class="py-2 px-3 d-flex justify-space-between">
        <div class="d-flex align-center">
          <div class="publisher_profile cursor-pointer">
            <img :src="post.publisherProfileUrl ? post.publisherProfileUrl : '/images/user.png'" />
          </div>

          <b class="mainFont--text fs-small cursor-pointer ml-2">{{ post.publisherUsername }}</b>
        </div>
        <!-- More options icon -->
        <div class="d-flex align-center">
          <v-icon>mdi-dots-vertical</v-icon>
        </div>
      </div>

      <!-- Post file -->
      <div class="post_image" @click="$router.push(`/post/${post.id}`)">
        <v-img @dblclick="toggleLikePost(post, 'dblclick')" :src="post.postUrl" dark></v-img>
      </div>

      <!-- Post actions -->
      <div class="actions_box d-flex justify-space-between align-center py-2 px-3">
        <div class="d-flex">
          <!-- Like -->
          <div class="mr-5 cursor-pointer" @click="toggleLikePost(post, 'normal')">
            <v-icon v-if="!post.liked">$heart</v-icon>
            <v-icon v-else>$filledHeart</v-icon>
          </div>
          <!-- Comment -->
          <div class="mr-5 cursor-pointer" @click="showPost(post)">
            <v-icon>$chat</v-icon>
          </div>
          <!-- Share -->
          <div class="mr-5 cursor-pointer">
            <v-icon>$share</v-icon>
          </div>
        </div>

        <div class="pt-1 cursor-pointer" @click="toggleSavePost(post)">
          <v-icon v-if="!post.saved">$bookmark</v-icon>
          <v-icon v-else>$filledBookmark</v-icon>
        </div>
      </div>

      <!-- Likes -->
      <div class="fs-small mainFont--text px-3.5" v-if="post.likesNum > 0">
        Liked by <b class="fs-small">{{ post.likedPerson }}</b>
        <span v-if="post.likesNum > 1">
          and
          <b class="fs-small">{{ post.likesNum }} others</b>
        </span>
      </div>

      <!-- Caption -->
      <div v-if="post.caption" class="post_caption px-3.5 mt-1">
        <b class="mainFont--text fs-small cursor-pointer">{{ post.publisherUsername }}</b>

        <!-- Short caption -->
        <div v-if="!showMore" class="fs-medium mainFont--text">
          {{ post.caption.length > 100 ? post.caption.slice(0, 100) + '...' : post.caption }}

          <b
            @click="toggleCaptionLength()"
            v-if="post.caption.length > 100"
            class="primary--text cursor-pointer fs-xsmall"
            >Show more
          </b>
        </div>

        <!-- Long caption -->
        <div v-else class="fs-medium mainFont--text">
          {{ post.caption }}
          <b @click="toggleCaptionLength()" class="primary--text fs-xsmall cursor-pointer"
            >Show less</b
          >
        </div>
      </div>

      <!-- Comments -->
      <div v-if="summary" class="px-3.5 mt-3">
        <b class="mainGray--text fs-small cursor-pointer" v-if="post.commentsNum > 1"
          >View all {{ post.commentsNum }} comments
        </b>

        <div v-if="post.lastComments.length">
          <div v-for="(item, cmIndex) in post.lastComments" :key="cmIndex">
            <b class="fs-small mr-1">{{ item.username }}</b>
            <span class="mainFont--text fs-medium">{{ item.comment }}</span>
          </div>
        </div>
      </div>

      <!-- Add comment field -->
      <div v-if="summary" class="comment_box d-flex align-center px-3.5 mt-1">
        <div class="user-avatar pt-1.5">
          <img width="35" height="35" src="/images/user.png" />
        </div>

        <div class="d-flex ml-2 w-100">
          <v-text-field
            dense
            hide-details
            placeholder="Add a comment..."
            v-model="newComment"
            @keyup.enter="newComment ? submitComment(post) : ''"
          >
          </v-text-field>

          <v-btn
            text
            small
            color="primary"
            class="mt-1 ml-1"
            :disabled="!newComment"
            @click="submitComment()"
          >
            <b class="fs-small">Post</b>
          </v-btn>
        </div>
      </div>

      <!-- Time -->
      <div class="px-3.5 mt-1">
        <span class="fs-xsmall mainGray--text">{{ post.publishedTime }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnsgramPost',

  props: ['data', 'summary'],

  data() {
    return {
      showMore: false,
      newComment: '',
      post: {},
    };
  },

  created() {
    this.post = this.data;
  },

  methods: {
    toggleLikePost(post, method) {
      if (method == 'dblclick') {
        if (!post.liked) {
          post.likesNum++;
        }
        post.liked = true;
      } else {
        if (!post.liked) {
          post.likesNum++;
        } else {
          post.likesNum--;
        }
        post.liked = !post.liked;
      }
    },

    toggleSavePost(post) {
      post.saved = !post.saved;
    },

    submitComment() {
      this.post.lastComments.push({
        username: 'Parnia1106',
        comment: this.newComment,
      });
      this.newComment = '';
    },

    toggleCaptionLength() {
      this.showMore = !this.showMore;
    },
  },
};
</script>

<style lang="scss">
.post_component {
  .post {
    &_image {
      width: 100%;
      min-height: 200px;
      height: fit-content;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .comment_box {
    .v-input__slot {
      &::before {
        border-width: 0px !important;
      }
      &::after {
        border-width: 0px !important;
      }
    }
  }

  .publisher_profile {
    min-width: 35px;
    width: 35px;
    height: 35px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50px;
    }
  }
}
</style>
