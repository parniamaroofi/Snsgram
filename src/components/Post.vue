<template>
  <div class="posts_component">
    <!-- Post content -->
    <div class="post_box mb-4" v-for="(post, index) in posts" :key="index" :id="post.id">
      <!-- Post publisher profile and options icon -->
      <div class="py-2 px-3 d-flex justify-space-between">
        <div class="d-flex align-center">
          <div class="publisher_profile pointer">
            <img :src="post.publisherProfileUrl ? post.publisherProfileUrl : '/images/user.png'" />
          </div>

          <b class="text-gray-600 fs-small pointer ml-2">{{ post.publisherUsername }}</b>
        </div>
        <!-- More options icon -->
        <div class="d-flex align-center">
          <v-icon>mdi-dots-vertical</v-icon>
        </div>
      </div>

      <!-- Post file -->
      <div class="post_image">
        <v-img @dblclick="toggleLikePost(post, 'dblclick')" :src="post.postUrl" dark></v-img>
      </div>

      <!-- Post actions -->
      <div class="actions_box d-flex justify-space-between align-center py-2 px-3">
        <div class="d-flex">
          <!-- Like -->
          <div class="mr-5 pointer" @click="toggleLikePost(post, 'normal')">
            <v-icon v-if="!post.liked">$heart</v-icon>
            <v-icon v-else>$redHeart</v-icon>
          </div>
          <!-- Comment -->
          <div class="mr-5 pointer" @click="showPost(post)">
            <v-icon>$chat</v-icon>
          </div>
          <!-- Share -->
          <div class="mr-5 pointer">
            <v-icon>$share</v-icon>
          </div>
        </div>

        <div>
          <v-icon>$bookmark</v-icon>
        </div>
      </div>

      <!-- <div class="post_caption d-flex pa-4">
        <div class="publisher_profile pointer" @click="showUserProfile(post)">
          <img :src="post.publisherProfileUrl ? post.publisherProfileUrl : '/images/user.png'" />
        </div>

        <span v-show="false">{{ reactivity }}</span>

        <div class="ps-4" style="padding-top: 6px">
          <b class="mainFont--text fs-small pointer" @click="showUserProfile(post)">{{
            post.publisherUsername
          }}</b>
          <div v-if="!showMore[index]" class="fs-xsmall mainFont--text mt-1">
            {{ post.caption.length > 70 ? post.caption.slice(0, 70) + '...' : post.caption }}
            <span
              v-if="post.caption.length > 70"
              @click="changeShowMore(index)"
              class="primary--text pointer fs-xxsmall"
              >مشاهده بیشتر</span
            >
          </div>

          <div v-else class="fs-xsmall mainFont--text mt-1">
            {{ post.caption }}
            <span @click="changeShowMore(index)" class="primary--text fs-xxsmall">مشاهده کمتر</span>
          </div>
        </div>
      </div> -->

      <!-- <div class="d-flex align-center me-4 ms-4">
        <div class="user-avatar me-4">
          <img width="30" height="30" src="/images/user.png" />
        </div>

        <div class="d-flex w-100">
          <v-text-field
            outlined
            dense
            placeholder="نظر خود را بنویسید..."
            hide-details
            v-model="newComment[index]"
            @click:append="submitComment(post)"
            @keyup.enter="newComment[index] ? submitComment(post) : ''"
            :append-icon="newComment[index] ? '$Submit' : ''"
          >
          </v-text-field>
        </div>
      </div> -->

      <!-- <div class="d-flex justify-space-between mt-6 ps-4 pe-4">
        <div class="d-flex align-center">
          <v-icon class="grey-icon pt-1">$Clock</v-icon>
          <div class="fs-xxxsmall grey--text">
            {{ post.publishedTime }}
          </div>
        </div>

        <div @click="showPost(post)" class="mainFont--text fs-xsmall pointer d-flex align-center">
          مشاهده {{ post.commentsNum }} نظر
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnsgramPosts',

  data() {
    return {
      showMore: [],

      newComment: [],
      posts: [
        {
          id: '1',
          postUrl: '/images/socialMedia1.png',
          publisherProfileUrl: '',
          publisherUsername: 'Parnia1106',
          publisherId: '35675',
          caption:
            'هر نفسی که فرو می‌ بریم، مرگی را که مدام به ما دست‌ اندازی می‌کند پس می‌زند. در نهایت این مرگ است که باید پیروز شود، زیرا از هنگام تولد بخشی از سرنوشت ما شده و فقط مدت کوتاهی پیش از بلعیدن طعمه اش، با آن بازی می کند. با این همه، ما تا آنجا که ممکن است، با علاقه فراوان و دلواپسی زیاد به زندگی ادامه می دهیم، همان‌ طور که تا آنجا که ممکن است طولانی‌ تر در یک حباب صابون می‌ دمیم تا بزرگتر شود، گر چه با قطعیتی تمام می‌ دانیم که خواهد ترکید.',
          liked: false,
          likesNum: 100,
          publishedTime: '12 ساعت پیش',
          commentsNum: 4,
        },
        {
          id: '2',
          postUrl: '/images/socialMedia2.png',
          publisherProfileUrl: '',
          publisherUsername: 'A.RE.H',
          publisherId: '35675',
          caption:
            ' مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که مداد رنگی ها تو سیاهی شب گم شده بودند، مداد سفید تا صبح ماه کشید مهتاب کشید و انقدر ستاره کشید که کوچک و کوچکتر شد صبح توی جعبه مداد رنگی جای خالی او با هیچ رنگی  پر نشد، به یاد هم باشیم شاید فردا ما هم در کنار هم نباشیم…',
          liked: false,
          likesNum: 150,
          publishedTime: '15 ساعت پیش',
          commentsNum: 12,
        },
      ],
    };
  },

  created() {
    this.posts.forEach((element) => {
      this.showMore.push(false);
      this.newComment.push('');
    });
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.posts_component {
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

    &_caption {
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
