<template>
  <div id="app">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: "test"
      };
    }
  };

  import {testModule, movingBackground} from 'JS/functions.js'

  movingBackground('images/background1.jpg', "#app");
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