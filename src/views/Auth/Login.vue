<template>
  <div class="login w-screen d-flex align-center justify-center">
    <div class="d-flex flex-column">
      <!-- Login card -->
      <div class="login-box py-3 px-9 sm:border border-gray-300">
        <!-- Card title -->
        <h3 class="app-logo font-bold text-center mt-3">Snsgram</h3>
        <!-- Card form  -->
        <div class="mt-10">
          <TextField
            :modelValue="username"
            @update="(newVal) => (username = newVal)"
            :label="'Phone number, username or email address'"
            :hideDetails="true"
          />
          <TextField
            :modelValue="password"
            @update="(newVal) => (password = newVal)"
            :label="'Password'"
            :hideDetails="true"
            :type="'password'"
            class="mt-3"
          />

          <Button
            :color="'primary lighten-2'"
            :block="true"
            :text="'Log in'"
            :disabled="!username || !password"
            :loading="loading"
            @click.native="doLogin()"
            class="my-6"
          />
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
          <p
            class="text-center fs-small mb-3 text-gray-600 cursor-pointer"
            @click="$router.push('/passRecovery')"
          >
            Forgotten your password?
          </p>
        </div>
      </div>
      <!-- Sign up card -->
      <div class="login-box py-5 mt-md-3 mt-8 sm:border border-gray-300 text-center">
        <span>Don't have an account?</span>
        <b class="primary--text cursor-pointer ml-1" @click="$router.push('/signup')">Sign up</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnsgramLogin',

  data() {
    return {
      username: '',
      password: '',
      loading: false,
    };
  },

  mounted() {},

  methods: {
    doLogin() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: 'Dancing Script';
  src: url('./../../assets/font/DancingScript-Regular.ttf');
}
.login {
  height: 100dvh;
  &-box {
    width: 360px;

    .app-logo {
      font-family: 'Dancing Script';
      font-size: 3rem !important;
    }
  }
}
</style>
