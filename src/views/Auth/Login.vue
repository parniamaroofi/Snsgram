<template>
  <div class="login h-screen w-screen d-flex align-center justify-center">
    <div class="d-flex flex-column">
      <!-- Login card -->
      <div class="login-box py-3 px-9 sm:border border-gray-300">
        <!-- Card title -->
        <h3 class="brand-title text-center font-bold mt-4">Snsgram</h3>
        <!-- Card form  -->
        <div class="mt-10">
          <TextField :placeholder="'Phone number, username or email address'" :hideDetails="true" />

          <TextField
            :placeholder="'Password'"
            :hideDetails="true"
            :type="'password'"
            class="mt-4"
          />

          <v-btn color="primary lighten-2" block class="my-6 rounded-lg">Log in</v-btn>
        </div>
        <!-- Card divider -->
        <div class="d-flex justify-space-between">
          <v-divider class="mt-2"></v-divider>
          <div class="px-3 text-gray-500 fs-medium">OR</div>
          <v-divider class="mt-2"></v-divider>
        </div>
        <!-- Google account log in -->
        <div class="mt-5">
          <div class="text-gray-600 font-bold fs-medium text-center">
            <v-icon small class="mr-1">$google</v-icon
            ><span class="ml-1">Log in with Google account</span>
          </div>
        </div>
        <!-- Password recovery -->
        <div class="mt-5">
          <p class="text-center fs-small mb-3 text-gray-600">Forgotten your password?</p>
        </div>
      </div>
      <!-- Sign up card -->
      <div class="login-box py-5 mt-md-3 mt-8 sm:border border-gray-300 text-center">
        <span>Don't have an account?</span> <b class="primary--text">Sign up</b>
      </div>
    </div>
  </div>
</template>

<script>
import TextField from '@/components/TextField.vue';
export default {
  name: 'SnsgramLogin',

  components: {
    TextField,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss">
@font-face {
  font-family: 'Dancing Script';
  src: url('./../../assets/font/DancingScript-Regular.ttf');
}
.login {
  &-box {
    width: 360px;

    .brand-title {
      font-family: 'Dancing Script';
      font-size: 3rem !important;
    }
  }
}
</style>
