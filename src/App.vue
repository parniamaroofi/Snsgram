<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<style lang="scss">
@import './assets/scss/main.scss';
#app {
  padding-top: 5px;
  @media only screen and (min-width: 1300px) {
    background-color: #f4f4f4;
  }
}
</style>
