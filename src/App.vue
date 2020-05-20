<template>
  <div id="app">
    <h1>My Todo App! {{ name }}</h1>

    <div class="t"> tailwind connection test</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "quenti"
    };
  }
};
</script>

<style lang="scss">
h1 {
  text-align: center;
  color: brown;
}

.t {
  color: theme('colors.mana');
}

</style>