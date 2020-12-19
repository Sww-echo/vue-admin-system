<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from "./views/Home";
export default {
  components: {
    [Home.name]: Home
  }
};
</script>

<style lang="scss"></style>
