<template>
  <div id="app">
    <home v-if="is_login === 'true'"></home>
    <login v-else></login>
  </div>
</template>

<script>
import Home from "./views/Home";
import login from "@/views/Login";
export default {
  data() {
    return {
      is_login: false
    };
  },
  components: {
    [Home.name]: Home,
    [login.name]: login
  },
  computed: {},
  methods: {},
  created() {
    this.is_login = localStorage.getItem("is_login");
    console.log(this.is_login);
  }
};
</script>

<style lang="scss"></style>
