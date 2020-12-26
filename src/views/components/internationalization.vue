<template>
  <div class="internationalization page">
    <el-breadcrumb class="breadcrumb">
      <el-breadcrumb-item
        ><i class="el-icon-orange global"></i>国际化产品</el-breadcrumb-item
      >
    </el-breadcrumb>
    <div class="internation-main main-wrap">
      <el-button @click="changeLanguageEn">切换英文</el-button>
      <el-button @click="changeLanguageCh">切换中文</el-button>
      <p class="el-i">
        {{ $t("msg.info") }}
        <a href="https://element.eleme.cn/2.0/#/zh-CN/component/i18n">{{
          $t("msg.value")
        }}</a>
      </p>
<<<<<<< HEAD
        <div >
           <el-carousel :interval="4000" type="card" height="200px">
              <el-carousel-item v-for="(item, key) in $t('text')" v-bind:key="key">
                <h3 class="changeWord">{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
        </div>
=======
      <div v-for="(item, key) in $t('text')" v-bind:key="key">
        <h3 class="changeWord">{{ item }}</h3>
      </div>
>>>>>>> 1ddcba445e29c3ac500f99bfa6ae8bbdbf29a93b
    </div>
  </div>
</template>
<script>
export default {
  name: "internationalization",
  methods: {
    changeLanguageEn: function() {
      if (this.$i18n.locale !== "en") {
        this.$i18n.locale = "en";
      }
    },
    changeLanguageCh: function() {
      if (this.$i18n.locale !== "zh") {
        this.$i18n.locale = "zh";
      }
    }
  }
};
</script>

<style lang="scss">
.internationalization {
  box-sizing: border-box;
  padding: 10px;
}
.breadcrumb {
  margin: 10px 0;
}
.main-wrap {
  padding: 30px;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #ddd;
}
.el-i {
  color: #000;
  margin: 10px 0;
  font-size: 12px;
  a {
    color: slateblue;
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  margin: 0;
  display: flex;
  height: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.changeWord {
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
  margin: 5px 0;
  padding: 10px;
  width: 100%;
  background: rgb(225, 232, 250);
}
</style>
