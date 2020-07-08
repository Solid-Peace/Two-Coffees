<template>
  <div class="deconnection-container">
      <button @click="deconnection">
          X
      </button>
  </div>
</template>

<script>

export default {

    methods: {
        deconnection(){
            this.$root.$emit('deconnexion', 'login');
        },
    },
}
</script>

<style>

</style>