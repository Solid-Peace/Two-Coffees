<template>
    <div class="user-menu-container transparant-container">
        <h2>Menu</h2>
        <TheDeconnection></TheDeconnection>

        <div class="button-bottom">
            <button @click="$emit('switch-frame', 'button-menu')">X</button>
        </div>

    </div>
</template>

<script>
import TheDeconnection from 'Components/TheDeconnection.vue'

export default {

    components: {
        TheDeconnection,
    },

    props: {
        UserInstance: Object,
    }

}
</script>

<style lang="scss" scoped>

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
    

</style>>