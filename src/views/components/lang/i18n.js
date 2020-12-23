// 多语言设置
// Element 兼容 vue-i18n@5.x
import Vue from "vue";
import VueI18n from "vue-i18n";
import enLocale from "element-ui/lib/locale/lang/en";
import zhLocal from "element-ui/lib/locale/lang/zh-CN";
import cnData from "./cn";
import enData from "./en";
const messages = {
  en: {
    ...enLocale,
    ...enData
  },
  zh: {
    ...zhLocal,
    ...cnData
  }
};
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: "zh",
  messages
});
export default i18n;
