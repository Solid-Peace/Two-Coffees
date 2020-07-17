<template>

    <div class="transparant-container">
        <h2>Bibliotheque</h2>

        <form>
                <input class="input-radio" type="radio" id="Playstation" value="Playstation" v-model="support" >
                <label for="Playstation">
                   <i class="fab fa-playstation"></i> Playstation
                </label>
                <br>
                <input class="input-radio" type="radio" id="Xbox" value="Xbox" v-model="support">
                <label for="two"> 
                    <i class="fab fa-xbox"></i> Xbox
                </label>
                <br>

            <div class="form-box">

                <input 
                type="text" 
                name 
                required
                v-model="game" />

                <label>Game</label>
            </div>

            <a @click="addGame" href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Add Game
            </a>
        </form>

		<GameAdded v-if="showAddedModal" :game="game" :support="support" @closeGameAdded="closeGameAdded"/>

    </div>
  
</template>

<script>
import axios from 'axios'
import UpdateRequest from "JS/requests/Update.js"
import GameAdded from 'Components/modals/gameAdded.vue'

export default {

	components: {
		GameAdded
	},

    props: {
        UserInstance: Object,
    },

    data() {
        return {
            support: '',
			game: '',
			showAddedModal: false,
        }
    },

    methods: {
        addGame() {

            var newUserInstance = this.UserInstance;

            if(!newUserInstance.TwoCoffees.Bibliotheque[this.support]) {
                newUserInstance.TwoCoffees.Bibliotheque[this.support] = {};
            }

			if(newUserInstance.TwoCoffees.Bibliotheque[this.support][this.game]) {
				alert('Sorry this game already exists in your bibliotheque')
			}else{

				newUserInstance.TwoCoffees.Bibliotheque[this.support][this.game] = {}

                console.log(newUserInstance);

                var request = new UpdateRequest(localStorage.authToken);
                
                request.instance.post('/api/user/updateB', {
                    newUserInstance: newUserInstance
                })
                .then( r => {

					console.log(r);
					

					// We updtate UserInstance to enterly Application from root component
					this.$root.$emit('updateUserInstance', newUserInstance);

					// Then we invok modal window to say at user that his Bibliotheque was updated 
					this.showAddedModal = true;

					// Finaly we rebuilt this component
					

				})
                .catch(error => alert('in client side, addGame', error));
			}
		},
		
		closeGameAdded() {
			console.log('hello from closegameadded');
			this.$emit('rebuiltComponent');
		}
    }
}
</script>

<style lang="scss" scoped>

label {
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