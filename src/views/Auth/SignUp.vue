<template>
  <div class="signUp w-screen d-flex align-center justify-center">
    <div class="d-flex flex-column">
      <!-- SignUp card -->
      <div class="signUp-box py-3 px-9 sm:border border-gray-300">
        <!-- Card title -->
        <h3 class="app-logo text-center font-bold mt-3">Snsgram</h3>

        <p class="fs-xlarge mainFont--text text-center font-bold my-2">
          Sign up to see photos and videos from your friends.
        </p>

        <!-- Log in with Google account -->
        <Button
          :color="'primary'"
          :block="true"
          :text="'Log in with Google account'"
          :icon="'mdi-google'"
          class="my-5"
        />

        <!-- Card divider -->
        <div class="d-flex justify-space-between">
          <v-divider class="mt-2"></v-divider>
          <div class="px-3 text-gray-500 fs-medium">OR</div>
          <v-divider class="mt-2"></v-divider>
        </div>

        <!-- Card form  -->
        <div class="mt-4">
          <TextField
            v-model="contactInfo"
            :label="'Phone number or email address'"
            :hideDetails="true"
          />

          <TextField v-model="fullName" :label="'Full Name'" :hideDetails="true" class="mt-3" />

          <TextField v-model="username" :label="'Username'" :hideDetails="true" class="mt-3" />

          <TextField
            v-model="password"
            :label="'Password'"
            :hideDetails="true"
            :type="'password'"
            class="mt-3"
          />

          <p class="fs-small mainFont--text text-center mt-3">
            People who use our service may have uploaded your contact information to Instagram.
          </p>

          <v-btn
            color="primary lighten-2"
            :block="true"
            :disabled="computedDisabled"
            class="mt-3 mb-1 rounded-lg"
            >Sign Up</v-btn
          >
        </div>
      </div>
      <div class="signUp-box py-5 mt-md-3 mt-8 sm:border border-gray-300 text-center">
        <span>Have an account?</span>
        <b class="primary--text cursor-pointer ml-1" @click="$router.push('/login')">Log in</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnsgramSignUp',

  data() {
    return {
      contactInfo: '',
      fullName: '',
      username: '',
      password: '',
    };
  },

  mounted() {},

  methods: {},

  computed: {
    computedDisabled() {
      if (!this.contactInfo || !this.fullName || !this.username || !this.password) {
        return true;
      } else return false;
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: 'Dancing Script';
  src: url('./../../assets/font/DancingScript-Regular.ttf');
}
.signUp {
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
