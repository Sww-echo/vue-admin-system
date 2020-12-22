<template>
  <div id="app">
    <home v-if="isLogin"></home>
    <login v-else></login>
  </div>
</template>

<script>
import Home from "./views/Home";
import login from "@/views/Login";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    [Home.name]: Home,
    [login.name]: login
  },
  computed: {
    ...mapState({
      isLogin: state => state.is_login
    })
  }
};
</script>

<style lang="scss"></style>
