<template>
  <div class="pass-recovery w-screen d-flex align-center justify-center">
    <div class="d-flex flex-column">
      <!-- pass-recovery card -->
      <div class="pass-recovery-box py-3 px-9 sm:border border-gray-300">
        <!-- Card image -->
        <div class="d-flex justify-center mt-2">
          <img src="/images/lock-icon.png" />
        </div>

        <p class="fs-xlarge font-bold mainFont--text text-center my-3">Trouble Logging in?</p>

        <p class="fs-medium mainGray--text text-center">
          Enter your email, phone number or username and we'll send you a link to get back into your
          account.
        </p>

        <!-- Card form  -->
        <div class="mt-6">
          <TextField
            :modelValue="contactInfo"
            @update="(newVal) => (contactInfo = newVal)"
            :label="'Phone number, username or email address'"
            :hideDetails="true"
          />

          <Button
            :color="'primary lighten-2'"
            :block="true"
            :text="'Send Login link'"
            :disabled="!contactInfo"
            class="my-4"
          />
        </div>
        <!-- Card divider -->
        <div class="d-flex justify-space-between">
          <v-divider class="mt-2"></v-divider>
          <div class="px-3 text-gray-500 fs-medium">OR</div>
          <v-divider class="mt-2"></v-divider>
        </div>
        <!-- Create new account -->
        <div class="mt-3 mb-10">
          <div class="mainFont--text font-bold fs-medium text-center">
            <span class="ml-1 cursor-pointer" @click="$router.push('/signup')"
              >Create new account</span
            >
          </div>
        </div>
      </div>
      <!-- Back button -->
      <div class="pass-recovery-box py-3 sm:border sm:border-t-0 border-gray-300 text-center">
        <b class="cursor-pointer mainFont--text fs-medium" @click="$router.push('/login')"
          >Back to Login</b
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnsgramPassRecovery',

  data() {
    return {
      contactInfo: '',
    };
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
.pass-recovery {
  height: 100dvh;
  &-box {
    width: 360px;
  }
}
</style>
