<template>
  <div id="app">
    <transition name="frame-transition">
      <TheLogin 
        v-show="frame == 'login'"
        v-on:switch-frame="switchFrame"
        v-on:login-user="loginUser" >
      </TheLogin>
    </transition>

    <transition name="frame-transition">
      <TheRegister 
        v-show="frame == 'register'"
        v-on:switch-frame="switchFrame"
        v-on:register-user="registerUser" >
      </TheRegister>
    </transition>

    <transition name="frame-transition">
      <TheRegister 
        v-show="user != null">




      </TheRegister>
    </transition>


  </div>
</template>


<script>

import { testModule, movingBackground } from "JS/functions.js"
import axios from "axios"

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
      User: null,
    };
  },

  methods: {
    switchFrame(frame) {
      this.frame = frame;
    },

    registerUser(newUser){
      // test if datas income
      console.log(newUser);

      axios.post('/api/auth/register', {
         username: newUser.username,
         email: newUser.email,
         password:  newUser.password,
         test: "true"
      })
      .then(res => {
        console.log(res);
        let user = res.data.msg.ops[0].username;
        alert(`User ${user} has been registered`);
      })
      .catch(error => alert(error)); 
    },



    loginUser(connectUser) {

      console.log(connectUser);

      axios.post('/api/auth/login', {
        email: connectUser.email,
        password: connectUser.password
      }).
      then( res => {


        // Set new header default request
        axios.defaults.headers.common['Authorization'] = res.data.token;

        console.log(res);

        axios.get('/api/user/home')
          .then( res => console.log(res.data.User))
          .catch( err => {
              
            console.log(err)
            
          })
      })
      .catch(err => console.log(err));

    },

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