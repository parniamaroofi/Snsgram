<template>
  <v-card flat class="notifs_component common-card mt-md-5 mt-0 pa-5">
    <!-- Page header -->
    <div class="mb-6">
      <v-icon class="mr-4" @click="$router.go(-1)">mdi-arrow-left</v-icon>
      <b class="grey--text text--darken-1 fs-xxxlarge">Notificaions</b>
    </div>

    <!-- Page loading -->
    <div v-if="pageLoading" class="py-20">
      <loading :color="'#666'" />
    </div>

    <div v-else>
      <!-- Follow requests -->
      <div class="d-flex align-center">
        <v-badge content="20" color="red">
          <img src="/images/user.png" class="rounded-full" width="52" />
        </v-badge>

        <div class="d-flex flex-column ml-4">
          <b>Follow requests</b>
          <span class="fs-small mainFont--text">Approve or ignore requests</span>
        </div>
      </div>

      <v-divider class="my-4"></v-divider>

      <!-- Other notifs -->
      <div
        class="d-flex justify-space-between mb-5"
        v-for="(item, index) in notifs"
        :key="index"
        @click="goToPost(item)"
      >
        <div class="d-flex">
          <!-- Profile Image -->
          <div style="min-width: 45px">
            <img
              :src="item.profileImg ? item.profileImg : '/images/user.png'"
              class="rounded-full"
              width="45"
            />
          </div>
          <!-- Notification text -->
          <div class="notif_text d-flex align-center ml-4">
            <div>
              <span v-html="item.notifContent"></span>
              <span class="grey--text fs-xsmall pl-1">{{ item.publishedTime }}</span>
            </div>
          </div>
        </div>
        <!-- The post that has that notification  -->
        <div class="ml-4">
          <img :src="item.postUrl" class="rounded-md" width="45" style="min-width: 45px" />
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'SnsgramNotifs',

  data() {
    return {
      notifs: [],
      pageLoading: false,
    };
  },

  created() {
    this.getNotifs();
  },

  methods: {
    getNotifs() {
      this.pageLoading = true;
      this.$http
        .get('/static/api/notifs.json', {
          headers: {
            Authorization: 'Bearer: ' + localStorage.getItem('token'),
          },
        })

        .then((res) => {
          if (res.status == 200) {
            this.notifs = res.data;
            setTimeout(() => {
              this.pageLoading = false;
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
          this.toast('Error: ' + err.response.data, 'error');
        });
    },

    goToPost(item) {
      this.$router.push('/post/' + item.postId);
    },
  },
};
</script>

<style lang="scss">
.notifs_component {
  .v-badge__badge {
    transform: translate(-15px, 11px) !important;
  }
  .notif_text {
    span,
    b {
      font-size: 0.79rem !important;
    }
  }
}
</style>
