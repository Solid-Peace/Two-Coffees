<template>


  <div class="bibliotheque">
    <transition name="addGameBox">
      <AddGameForm
        v-show="frame == 'addGameForm'"
        :UserInstance='UserInstance'
        @rebuiltComponent="rebuiltComponent"
        @switchFrame='switchFrame'
        :key="AddGameComponentKey"
      />
    </transition>

    <transition name="gameListBox">
      <GameList 
        v-show="frame == 'gameList'"
        :Bibliotheque="Bibliotheque"
      />
    </transition>
  </div>
</template>

<script>
import axios from 'axios'
import UpdateRequest from "JS/requests/Update.js"
import AddGameForm from 'Components/TheAddGameForm.vue'
import GameList from 'Components/TheGameList.vue'


export default {

	components: {
		AddGameForm,
    GameList,
	},

	props: {
		UserInstance: Object,
	},

	data() {
		return {
			AddGameComponentKey: 0,
      frame: 'addGameForm',
      Bibliotheque: this.getUserInstance(),
		}
	},

	methods: {

    getUserInstance() {
      console.log('In Get User', this.UserInstance);
      return this.UserInstance;
    },

		switchFrame(frame) {
			this.frame = frame;
		},

		// Allow to rebuilt a component after modification
        rebuiltComponent() {
            this.AddGameComponentKey += 1;
        },
	}
}
</script>

<style lang="scss" scoped>

.label {
  color: white;
}

.input-radio:checked + label {
  @apply text-mana;
}

.form-box {
  position: relative;
  margin: 15px;
}

.form-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

.form-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.form-box input:focus ~ label,
.form-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

form a {
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
}

a:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 100px #03e9f4;
}

a span {
  position: absolute;
  display: block;
}

a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}

</style>