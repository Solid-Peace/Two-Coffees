<template>
    <div class="two-coffees">

        <transition name="frame-transition">
            <TheUserMenu
                v-on:switch-frame="switchFrame"
                v-show="frame == 'user-menu'"
                :UserInstance="UserInstance"
            ></TheUserMenu>
        </transition>

        <transition name="frame-transition">
            <div 
                class="button-bottom"
                v-show="frame == 'button-menu'">
                <button @click="switchFrame('user-menu')">
                    {{UserInstance.username}}
                </button>
            </div>
        </transition>

        <transition name="frame-transition">
            <div 
                class="flex-container-menu-selection" 
                v-show="frame == 'button-menu'">

                <div 
                    class="item-menu-selection" 
                    v-for="(value, key) in UserInstance.TwoCoffees" v-bind:key="key"
                    @click="switchFrame(key)">

                    <div>
                        {{key}}
                        <span>
                            <i class="fas fa-gamepad"></i>
                        </span>
                        <span style="display:none">{{value}}</span>  
                    </div>
                </div>
            </div>
        </transition>

        <transition name="frame-transition">
            <TheBibliotheque
                v-on:switch-frame="switchFrame"
                v-show="frame == 'Bibliotheque'"
                :UserInstance="UserInstance"
            ></TheBibliotheque>
        </transition>

    </div>
</template>

<script>

import TheUserMenu from 'Components/TheUserMenu.vue'
import TheBibliotheque from 'Components/TheBibliotheque.vue'


export default {
    
    components: {
        TheUserMenu,
        TheBibliotheque,
    },

    props: {
        UserInstance: Object,
    },

    data() {
        return {
            frame: "button-menu",
        }
    },

    mounted() {
        this.$root.$on('undisplayMenu', () => {
            this.switchFrame("button-menu");
        });
    },

    methods: {
        switchFrame(newFrame) {
            this.frame = newFrame;
            console.log(this.frame);
        },
    },
}
</script>

<style scoped lang="scss">
    .two-coffees {
        box-sizing: border-box;
        padding: 0;
        margin: 0;

        width: 100%;
        height: 100vh;
        overflow: hidden;
    }

    button {
        text-transform: uppercase;

        font-weight: bold;

        &:after {
            content: ">";
        }
        &::before {
            content: "<";
        }
    }

    .flex-container-menu-selection {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 300px;
        height: 400px;
        transform: translate(-50%, -50%);
        display: flex;
        flex-wrap: wrap;
        overflow: auto;
        justify-content: center;
        margin: auto;
    }

    .item-menu-selection {
        background: rgba(0, 0, 0, 0.5);
        box-sizing: border-box;
        box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
        border-radius: 10px;
        width: 100px;
        height: 100px;
        margin: 10px;
        text-align: center;
        @apply text-mana;
        cursor: pointer;
        transition: all .3s ease;
        padding: 2px;

        display: flex;
        flex-direction: column;
        justify-content: center;

        &:hover {
            text-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4;
            transform: scale(1.1);
        }
    }
</style>