<template>
  <div class="storis_component pt-1">
    <div class="stories_box d-flex">
      <!-- New story -->
      <div class="story_box">
        <div class="image_box">
          <img src="/images/user.png" />
          <div class="plus_box primary d-flex justify-center align-center rounded-full">
            <v-icon small color="white">mdi-plus</v-icon>
          </div>
        </div>
        <div class="text-gray-600 text-center fs-xxsmall mt-1 font-bold">Your story</div>
      </div>

      <!-- Stories list -->
      <div
        class="story_box cursor-pointer"
        v-for="(item, index) in stories"
        :key="index"
        @click="openStory(item, index)"
      >
        <div class="image_box">
          <img
            :src="item.profileImg ? item.profileImg : '/images/user.png'"
            :class="item.unseen ? 'unseen_story' : ''"
          />
        </div>
        <div class="text-gray-600 text-center fs-xxsmall mt-1 font-bold">{{ item.username }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnsgramStories',

  data() {
    return {
      stories: [
        {
          profileImg: 'https://vixi.cs.uvic.ca/uploads/sarina_bio.jpg',
          story:
            'https://img.freepik.com/free-photo/beautiful-scenery-powerful-waterfall-surrounded-by-rocky-cliffs-trees-canada_181624-40995.jpg?w=2000',
          unseen: true,
          username: 'Sarina.ksj',
          storyTime: '2 ساعت پیش',
        },
        {
          profileImg:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe0Xt_Fi9s-CrYmVzQjBymglwuAvhKnCH_NsJpmBNDD9mT9rB3q0gV1iDJkHKC6lmLrps&usqp=CAU',
          story: 'https://wallpaperaccess.com/full/757572.jpg',
          unseen: true,
          username: 'Romina_ms',
          storyTime: '4 ساعت پیش',
        },
        {
          profileImg: '',
          story: 'https://wallpaperaccess.com/full/530919.jpg',
          unseen: true,
          username: 'nima.taban',
          storyTime: '5 ساعت پیش',
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.storis_component {
  .stories_box {
    overflow-x: auto;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      display: none;
    }

    .story_box {
      .image_box {
        width: 70px;
        height: 70px;
        margin: 0 8px;
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
</style>
