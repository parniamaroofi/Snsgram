<template>
  <div class="comments_component d-flex flex-column justify-space-between pa-4">
    <!-- All comments -->
    <div class="comments_box pr-1">
      <div
        class="d-flex"
        :class="index != data.length - 1 ? 'mb-4' : ''"
        v-for="(item, index) in data"
        :key="index"
      >
        <!-- Author profile image -->
        <div>
          <img
            width="30"
            height="30"
            class="rounded-full mt-1 mr-3"
            style="min-width: 30px"
            :src="item.profileImg ? item.profileImg : '/images/user.png'"
          />
        </div>

        <div class="d-flex flex-column">
          <div class="d-flex">
            <!-- Author username -->
            <b class="fs-small mainFont--text">
              {{ item.username }}
            </b>
            <!-- The published time -->
            <span class="fs-xsmall grey--text ml-1.5">{{ item.publishedTime }}</span>
          </div>
          <!-- Content of the comment -->
          <span class="fs-medium mainFont--text" v-html="formattedText(item.comment)"> </span>
          <!-- Reply button -->
          <div
            @click="replyComment(item)"
            class="fs-xsmall grey--text cursor-pointer font-bold mt-1"
          >
            Reply
          </div>
        </div>
      </div>
    </div>

    <!-- The field to write and share a new comment -->
    <div class="mt-4">
      <v-divider></v-divider>
      <div class="d-flex ml-2 mt-2 w-100">
        <v-text-field
          dense
          hide-details
          placeholder="Add a comment..."
          v-model="newComment"
          @keyup.enter="newComment ? submitComment() : ''"
          id="command_field"
          :disabled="sending"
        >
        </v-text-field>

        <!-- Submit button -->
        <v-btn
          text
          small
          color="primary"
          class="mt-1 ml-1"
          :disabled="!newComment"
          @click="submitComment()"
          :loading="sending"
        >
          <b class="fs-small">Post</b>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnsgramComments',

  props: ['data'],

  data() {
    return {
      comments: [],
      newComment: '',
      sending: false,
    };
  },

  created() {
    this.comments = this.data;
  },

  mounted() {
    this.scrollToEnd();
  },

  methods: {
    submitComment() {
      this.sending = true;

      setTimeout(() => {
        this.comments.push({
          username: 'Parnia1106',
          publishedTime: 'Now',
          comment: this.newComment,
        });
        this.newComment = '';
        this.sending = false;
      }, 500);

      setTimeout(() => {
        this.scrollToEnd();
      }, 510);
    },

    scrollToEnd() {
      var container = document.querySelector('.comments_box');
      var scrollHeight = container.scrollHeight;
      container.scrollTop = scrollHeight;
    },

    replyComment(item) {
      this.newComment = `@${item.username} `;
      document.querySelector('#command_field').focus();
    },

    formattedText(str) {
      return str.replace(/(@\S+)/g, '<b class="fs-small primary--text">$1</b>');
    },
  },
};
</script>

<style lang="scss">
.comments_component {
  height: calc(100% - 48px);
  .comments_box {
    overflow-y: auto !important;

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background-color: #ebebeb;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #bfbbbb;
    }
  }
  .v-input__slot {
    &::before {
      border-width: 0px !important;
    }
    &::after {
      border-width: 0px !important;
    }
  }
}
</style>
