<template>
  <div class="storis_component pt-1">
    <div v-if="loading" class="stories_box d-flex">
      <div class="story_box" v-for="n in 5" :key="n">
        <avatar-skeleton :size="70" />
        <v-skeleton-loader type="text" class="mt-2"></v-skeleton-loader>
      </div>
    </div>

    <div v-else class="stories_box d-flex">
      <!-- New story -->

      <div class="story_box">
        <div class="image_box">
          <img src="/images/user.png" />
          <div class="plus_box primary d-flex justify-center align-center rounded-full">
            <v-icon small color="white">mdi-plus</v-icon>
          </div>
        </div>
        <div class="mainFont--text text-center fs-xxsmall mt-1 font-bold">Your story</div>
      </div>

      <!-- Stories list -->
      <div
        class="story_box cursor-pointer"
        v-for="(item, index) in data"
        :key="index"
        @click="openStory(item, index)"
      >
        <div class="image_box">
          <img
            :src="item.profileImg ? item.profileImg : '/images/user.png'"
            :class="item.unseen ? 'unseen_story' : ''"
          />
        </div>
        <div class="mainFont--text text-center fs-xxsmall mt-1 font-bold">{{ item.username }}</div>
      </div>
    </div>

    <!-- Dialog for story -->
    <v-dialog v-model="storyDialog" fullscreen>
      <v-card class="story_dialog">
        <div class="story_box">
          <!-- Story right action -->
          <div class="right_action absolute right-0 z-10" @click="rightAction()"></div>
          <!-- Story header -->
          <div class="story_header absolute right-0 w-100 d-flex justify-space-between">
            <!-- User info -->
            <div class="user_info d-flex z-10">
              <img
                class="user_image"
                :src="selectedStory.profileImg ? selectedStory.profileImg : '/images/user.png'"
              />

              <div class="d-flex flex-column pt-1.5 ps-3">
                <span class="fs-small white--text font-bold">{{ selectedStory.username }}</span>
                <span class="fs-xxsmall white--text">{{ selectedStory.storyTime }}</span>
              </div>
            </div>

            <!-- Close icon -->
            <div class="cursor-pointer" style="z-index: 11" @click="closeStory()">
              <v-icon class="white-icon">$close</v-icon>
            </div>
          </div>

          <!-- Time progress bar -->
          <v-progress-linear
            v-model="storyProgress"
            v-if="showProgressValue"
            color="white"
            class="progress-bar"
          ></v-progress-linear>

          <!-- Story image -->
          <img v-if="showStory" :src="selectedStory.story" />

          <!-- Left action -->
          <div class="left_action absolute left-0 z-10" @click="leftAction()"></div>

          <div class="story-footer w-100 d-flex justify-space-between">
            <div class="cursor-pointer white-stroke">
              <v-icon>$heart</v-icon>
            </div>

            <div class="cursor-pointer white-fill white-stroke">
              <v-icon>$share</v-icon>
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import AvatarSkeleton from '@/components/microComponents/AvatarSkeleton.vue';
export default {
  name: 'SnsgramStories',

  components: {
    AvatarSkeleton,
  },

  props: ['data', 'loading'],

  data() {
    return {
      stories: [],
      interval: '',
      selectedStory: {},
      selectedIndex: '',
      storyProgress: 0,
      showStory: false,
      storyDialog: false,
      showProgressValue: 0,
    };
  },

  created() {
    setTimeout(() => {
      this.stories = this.data;
    }, 1000);
  },

  methods: {
    openStory(item, index) {
      this.showStory = false;
      this.selectedStory = item;
      this.selectedIndex = index;
      this.storyDialog = true;

      setTimeout(() => {
        this.showStory = true;
        this.storyProgress = 0;
        this.setStoryTimeout(index);
      }, 90);

      setTimeout(() => {
        this.showProgressValue = true;
        this.stories[index].unseen = false;
      }, 100);
    },

    setStoryTimeout(index) {
      this.interval = setInterval(() => {
        if (this.storyProgress <= 100) {
          this.storyProgress += 1;
        } else {
          clearInterval(this.interval);

          if (this.stories[index + 1]) {
            this.showProgressValue = false;
            this.openStory(this.stories[index + 1], index + 1);
          } else {
            this.storyProgress = 0;
            this.storyDialog = false;
          }
        }
      }, 100);
    },

    leftAction() {
      if (this.selectedIndex != 0) {
        clearInterval(this.interval);
        this.openStory(this.stories[this.selectedIndex - 1], this.selectedIndex - 1);
        this.showProgressValue = false;
      }
    },

    rightAction() {
      clearInterval(this.interval);
      if (this.selectedIndex != this.stories.length - 1) {
        this.openStory(this.stories[this.selectedIndex + 1], this.selectedIndex + 1);
      } else if (this.selectedIndex == this.stories.length - 1) {
        this.storyDialog = false;
      }
      this.showProgressValue = false;
    },

    closeStory() {
      this.storyDialog = false;
      this.showProgressValue = false;
      clearInterval(this.interval);
    },
  },
};
</script>

<style lang="scss">
.storis_component {
  .stories_box {
    overflow-x: auto;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      display: none;
    }

    .story_box {
      margin: 0 8px;
      .image_box {
        width: 70px;
        height: 70px;
        min-width: 70px;
        border-radius: 50px;
        position: relative;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50px;
          object-fit: cover;
          border: 3px solid transparent;

          background: linear-gradient(45deg, #9c9c9c, #c9c9c9, #ebebeb, #9c9c9c) border-box;
          @media screen and (min-width: 600px) {
            border: 3px solid transparent;
          }

          &.unseen_story {
            background: linear-gradient(45deg, #ffe600, #ff00b8, #00ffff, #db00ff) border-box;
          }
        }

        .plus_box {
          position: absolute;
          right: 2px;
          bottom: 1px;
          width: 20px;
          aspect-ratio: 1 / 1;
        }
      }
    }
  }
}
.story_dialog {
  .story_box {
    width: 100%;
    height: 100dvh;
    display: flex;
    padding-top: 1px;
    position: relative;
    align-items: center;
    background-color: #1b1b1b;
    @media screen and (min-width: 600px) {
      width: 400px;
      margin: 0 auto;
    }

    .right_action {
      width: 30%;
      height: 100%;
    }

    .left_action {
      width: 30%;
      height: 100%;
    }

    .story_header {
      padding: 0 15px 20px 12px;
      top: 20px;

      .user_info {
        .user_image {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
        }
      }
    }

    .story-footer {
      z-index: 20;
      position: fixed;
      bottom: 0px;
      padding: 12px 20px;
      background-color: rgba($color: #000000, $alpha: 0.5);
      @media screen and (min-width: 600px) {
        width: 400px !important;
        margin: 0 auto;
      }
    }

    .progress-bar {
      width: 100%;
      position: absolute;
      top: 1px;
      left: 0;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
