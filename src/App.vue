<template>
  <div id="app">
    <TheLogin></TheLogin>
  </div>
</template>
<script>
import { testModule, movingBackground } from "JS/functions.js";

import TheLogin from 'Components/TheLogin.vue'

export default {
  components: {
    TheLogin,
  },


  data() {
    return {
      name: "test"
    };
  }
};



movingBackground("images/background1.jpg", "#app");
</script>
<style lang="scss">
#app {
  background-image: url(~Images/background1.jpg);
  background-repeat: no-repeat;
  background-position: center;
  transition: background-position ease;

  width: 100%;
  height: 100vh;
}
</style>