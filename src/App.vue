<template>
  <div id="app">
    <home v-if="is_login === 'true'"></home>
    <login v-else></login>
  </div>
</template>

<script>
import Home from "./views/Home";
import login from "@/views/Login";
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      is_login: false,
      list: []
    };
  },
  components: {
    [Home.name]: Home,
    [login.name]: login
  },
  computed: {},
  methods: {
    ...mapMutations({
      addList: "addBasicList"
    })
  },
  async created() {
    this.is_login = localStorage.getItem("is_login");
    console.log(this.is_login);
    for (let i = 0; i < 50; i++) {
      // http://rap2api.taobao.org/app/mock/data/1832192
      await axios
        .get("/app/mock/data/1832192")
        .then(res => {
          this.list.push(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
    this.addList(this.list);
    console.log(this.list);
  }
};
</script>

<style lang="scss"></style>
