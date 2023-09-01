<template>
  <div class="comments_component pa-4">
    <div class="d-flex mb-4" v-for="(item, index) in data" :key="index">
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
        <b class="fs-xsmall mainFont--text">
          {{ item.username }}
        </b>

        <span class="fs-medium mainFont--text">
          {{ item.comment }}
        </span>

        <div class="fs-xxsmall grey--text cursor-pointer font-bold mt-1">Reply</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnsgramComments',

  props: ['data'],

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
