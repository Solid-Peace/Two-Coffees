<template>
    <div class="two-coffees">

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
            <TheUserMenu
                v-on:switch-frame="switchFrame"
                v-show="frame == 'user-menu'"
                :UserInstance="UserInstance"
            ></TheUserMenu>
        </transition>

    </div>
</template>

<script>

import TheUserMenu from 'Components/TheUserMenu.vue'


export default {
    
    components: {
        TheUserMenu
    },

    props: {
        UserInstance: Object,
    },

    data() {
        return {
            frame: "button-menu"
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
</style>