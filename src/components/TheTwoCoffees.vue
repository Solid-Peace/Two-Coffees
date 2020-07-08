<template>
    <div class="two-coffees">
        <h1>Welcom to {{UserInstance.username}}</h1>

        <TheDeconnection></TheDeconnection>
    </div>
</template>

<script>
import TheDeconnection from 'Components/TheDeconnection.vue'

export default {
    components: {
        TheDeconnection
    },

    props: {
        UserInstance: Object,
    },

    methods: {
    },
}
</script>

<style>

</style>