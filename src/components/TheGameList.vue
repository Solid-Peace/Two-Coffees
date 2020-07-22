<template>
    <div class="game-list-container">

        <span class="game-list-title">
            Game List
        </span>

        <div class="platform-choice-container">
            <div class="platform-switch">
                <button 
                    class="left"
                    @click="previousPlatform"
                > 
                    &lt; 
                </button>
                <div class="platform-item-container">
                    <transition 
                        name="platform"
                        :key="platformChoice"
                        @after-leave="leavePlatform"
                    >
                        <div 
                            class="platform-item"
                            v-show="platformChoice"
                            :key="platformChoice"
                        >
                            
                            {{ platformChoice }}
                        </div>
                    </transition>
                </div>
                   
                <button
                    @click="nextPlatform"
                    class="right"
                > 
                    &gt; 
                </button>
            </div>
        </div>

        <div class="transparant-container">
            <transition name="platform">

                <Platform 
                    v-show="platformChoice"
                    :key="platformChoice"
                    :gamesOfPlatform="gamesOfPlatform"
                    class="list-container"
                />
            </transition>
         </div>

         <div class="footer">
             <button @click="$emit('backToAddGame')">Back</button>
             <button @click="$root.$emit('undisplayMenu')">Menu</button>
         </div>
    </div>
</template>

<script>
import Platform from 'Components/ThePlatform.vue'
import {getKeyByValue} from 'JS/functions.js'

export default {

    components: {
        Platform,
    },

    props: {
        Bibliotheque: Object,
    },

    data() {
        return {
            platformChoice: Object.keys(this.Bibliotheque)[0],
        }
    },

    computed: {
        gamesOfPlatform() {

            var platformChoice = this.platformChoice;

            console.log('in gamesOfPlatform', this.Bibliotheque[platformChoice] )
            console.log('in gamesOfPlatform', platformChoice )

            return {
                name: this.platformChoice,
                games: this.Bibliotheque[platformChoice],
            }
        }
    },

    methods: {

        leavePlatform() {
            console.log('platform after leave');
        },
        
        nextPlatform() {

            var listSupport = Object.keys(this.Bibliotheque);

            var actual_index = listSupport.findIndex( value => value == this.platformChoice)

            console.log('in nextPlatform', actual_index)

            var next_index = actual_index + 1;

            if( listSupport[next_index] == undefined)
            {
                next_index = 0;
            }

            this.platformChoice = listSupport[next_index];

        },

        previousPlatform() {

            var listSupport = Object.keys(this.Bibliotheque);

            var actual_index = listSupport.findIndex( value => value == this.platformChoice)

            console.log('in nextPlatform', actual_index)

            var next_index = actual_index - 1;

            if( listSupport[next_index] == undefined)
            {
                next_index = listSupport.length -1;
            }

            this.platformChoice = listSupport[next_index];
        },
    },

}
</script>

<style lang="scss" scoped>

.footer {
    display: flex;
    justify-content: space-between;

    position: absolute;
    bottom: 0%;
    left: 0%;

    width: 100%;

    button {
        padding: 15px;
        font-size: 20px;
        font-weight: bolder;
        text-transform: uppercase;
        text-shadow: 0.5px 0.5px 0.3px rgba(0, 0, 0, 0.4), -0.5px -0.5px 0.3px rgba(255, 255, 255, 0.6);
        color: transparent;
        background-clip: text;

        transition: all .3s ease;

        
        &:hover {
            text-shadow: 0 0 1px #03e9f4;
        }
    }
}

.transparant-container {
    height: 50vh;
    transform: translate(-50%, -35%);
    overflow: auto;
    padding: 10px;
}

.platform-enter-active, .platform-leave-active {
  transition: opacity 1s ease;
}
.platform-enter, .platform-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.platform-choice-container {
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    margin-top: 20px;

    .platform-item-container {
        border-radius: 13px;
        box-shadow: inset 2px 2px 2px #01393c69, inset -2px -2px 2px #03e9f469;
        width: 70%;
        display: flex;
        justify-content: center;
        height: 70%;
        background-color: #00ccfb05;

        .platform-item {
            text-align: center;
            align-self: center;
            padding: 10px;
            text-shadow: 5px 5px 4px #333,
                         0 0 1px #03e9f4;
            color: #00ffffc4;
            font-size: 25px;
            font-weight: bold;
        }
    }



    .platform-switch {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        

        button {
            padding: 10px;
            font-size: 40px;
            font-weight: bolder;
            text-transform: uppercase;
            text-shadow: 0.5px 0.5px 0.3px rgba(0, 0, 0, 0.4), -0.5px -0.5px 0.3px rgba(255, 255, 255, 0.6);
            color: transparent;
            background-clip: text;

            transition: all .3s ease;

           
            &:hover {
                text-shadow: 0 0 1px #03e9f4;
            }
        }
    }
}


.game-list-title {
    display: block;
    width: 100%;
    text-align: center;
    background-image: url(~Images/textur-stone-bg.png);
    margin-top: 10px;

    font-size: 40px;
    letter-spacing: 2px;
    font-weight: bolder;
    text-transform: uppercase;
    text-shadow: -0.5px -0.5px 0.3px rgba(0, 0, 0, 0.4), 0.5px 0.5px 0.3px rgba(255, 255, 255, 0.6);
    color: transparent;
    background-clip: text;
}

.game-list-container {
    background-image: url(~Images/textur-stone-bg.png);
    position: absolute;
    background-color: #333;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.3), inset -2px -2px 2px rgba(255, 255, 255, 0.3);
}



// h2 {
//   @apply text-mana;
//   text-shadow: 2px 2px 3px rgba(255,255,255,0.5);
//   -webkit-background-clip: text;
//      -moz-background-clip: text;
//           background-clip: text;
// }

</style>