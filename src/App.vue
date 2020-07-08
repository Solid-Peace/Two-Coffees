<template>
  <div id="app">
    <transition name="frame-transition">
      <TheLogin
        v-show="frame == 'login'"
        v-on:switch-frame="switchFrame"
        v-on:login-user="loginUser"
      ></TheLogin>
    </transition>

    <transition name="frame-transition">
      <TheRegister
        v-show="frame == 'register'"
        v-on:switch-frame="switchFrame"
        v-on:register-user="registerUser"
      ></TheRegister>
    </transition>

    <transition name="frame-transition">
      <TheTwoCoffees 
        v-show="frame == 'userInstance'"
        :UserInstance="UserInstance"
        :frame="frame"
      ></TheTwoCoffees>
    </transition>
  </div>
</template>


<script>
import { testModule, movingBackground } from "JS/functions.js";
import axios from "axios";
import LoginRequest from "JS/requests/Login.js"
import HomeRequest from "JS/requests/Home.js"

import TheLogin from "Components/TheLogin.vue"
import TheRegister from "Components/TheRegister.vue"
import TheTwoCoffees from "Components/TheTwoCoffees.vue"

export default {
  components: {
    TheTwoCoffees,
    TheLogin,
    TheRegister
  },

  watch: {
    "frame": function(){
      console.log('hello frm watcher !!');

      if(this.frame == ('login' || 'register')){
        localStorage.clear();
        this.UserInstance = {};
      }
    },
  },

  mounted(){
    this.$root.$on('deconnexion', (newFrame) => {
      console.log('in deconnexion event App', newFrame);
      this.switchFrame(newFrame);
    })
  },

  created() {
    if(localStorage.authToken) {
      var getUserIntance = new HomeRequest(localStorage.authToken, this);

      var value = getUserIntance.instance.get('/api/user/home').then( result => console.log(result));
      console.log(value);
    }else{
      this.frame = "login";
    }
  },

  data() {
    return {
      name: "test",
      frame: "",
      UserInstance: {},
    }
  },

  methods: {
    switchFrame(frame) {
      this.frame = frame;
    },

    registerUser(newUser) {
      // test if datas income
      console.log(newUser);

      axios
        .post("/api/auth/register", {
          username: newUser.username,
          email: newUser.email,
          password: newUser.password,
          test: "true"
        })
        .then(res => {
          console.log(res);
          let user = res.data.msg.ops[0].username;
          alert(`User ${user} has been registered`);
        })
        .catch(error => alert(error));
    },


    loginUser(user_credentials) {
      var login = new LoginRequest(this);
      login.instance({
        data: {
          email: user_credentials.email,
          password: user_credentials.password,
        }
      }).then( () => {
        var getUserIntance = new HomeRequest(localStorage.authToken, this);
        getUserIntance.instance.get('/api/user/home');
      });
    }
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

.frame-transition-enter-active,
.frame-transition-leave-active {
  transition: opacity 0.5s;
}

.frame-transition-enter,
.frame-transition-leave-to {
  opacity: 0;
}
</style>


