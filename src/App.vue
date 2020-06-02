<template>
  <div id="app">
    <transition name="frame-transition">
      <TheLogin 
        v-show="frame == 'login'"
        v-on:switch-frame="switchFrame">
      </TheLogin>
    </transition>

    <transition name="frame-transition">
      <TheRegister 
        v-show="frame == 'register'"
        v-on:switch-frame="switchFrame">
      </TheRegister>
    </transition>
  </div>
</template>
<script>
import { testModule, movingBackground } from "JS/functions.js";

import TheLogin from 'Components/TheLogin.vue'
import TheRegister from 'Components/TheRegister.vue'


export default {
  components: {
    TheLogin,
    TheRegister,
  },


  data() {
    return {
      name: "test",
      frame: "login",
    };
  },

  methods: {
    switchFrame(frame) {
      this.frame = frame;
    }
  },
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

.frame-transition-enter-active, .frame-transition-leave-active {
  transition: opacity .5s;
}

.frame-transition-enter, .frame-transition-leave-to {
  opacity: 0;
}
</style>