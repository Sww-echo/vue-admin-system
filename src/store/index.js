import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    is_login: false,
    unread: [
      {
        message: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
        time: "2020-12-21 12:00:00"
      },
      {
        message: "今晚12点整发大红包，先到先得",
        time: "2020-12-21 12:00:00"
      }
    ],
    readed: [
      {
        message: "【系统通知】你的红包已过期",
        time: "2020-12-21 12:00:00"
      }
    ],
    recycle: [
      {
        message: "【系统通知】今晚抽大奖，赶紧预约吧",
        time: "2020-12-21 12:00:00"
      }
    ],
    navTopList: [{ label: "系统首页", name: "home", path: "/" }],
    sidebarList: [
      {
        path: "/",
        name: "home",
        label: "系统首页"
      },
      {
        path: "/basictable",
        name: "basictable",
        label: "基础表格"
      },
      {
        path: "/taboption",
        name: "taboption",
        label: "tab选项"
      },
      {
        path: "/basicform",
        name: "basicform",
        label: "基本表单"
      },
      {
        path: "/richtext",
        name: "richtext",
        label: "富文本编辑器"
      },
      {
        path: "/markdown",
        name: "markdown",
        label: "markdown编辑器"
      },
      {
        path: "/fileupload",
        name: "fileupload",
        label: "文件上传"
      },
      {
        path: "/customicon",
        name: "customicon",
        label: "自定义图标"
      },
      {
        path: "/schart",
        name: "schart",
        label: "schart图表"
      },
      {
        path: "/droplist",
        name: "droplist",
        label: "拖拽列表"
      },
      {
        path: "/popup",
        name: "popup",
        label: "拖拽弹框"
      },
      {
        path: "/internationalization",
        name: "internationalization",
        label: "国际化功能"
      }
    ],
    nowShow: "/"
  },
  mutations: {
    changeLogin(state, flag) {
      state.is_login = flag;
    },
    // 标记为已读
    markReaded: function(state, scope) {
      state.readed.push(state.unread[scope.$index]);
      state.unread.splice([scope.$index], 1);
    },
    // 标记全部
    allMarkReaded: function(state) {
      state.readed = state.readed.concat(state.unread);
      state.unread = [];
    },
    // 删除已读
    deleteHandle: function(state, scope) {
      state.recycle.push(state.readed[scope.$index]);
      state.readed.splice(scope.$index, 1);
    },
    // 删除全部
    allDeleteHandle: function(state) {
      state.recycle = state.recycle.concat(state.readed);
      state.readed = [];
    },
    // 清空回收站
    emptyAll: function(state) {
      state.recycle = [];
    },
    // 回收站还原
    restore: function(state, scope) {
      state.readed = state.readed.concat(state.recycle[scope.$index]);
      state.recycle.splice(scope.$index, 1);
    },

    // 清空某个数组从而清空整个组件一部分
    empty: function(state, com) {
      state[com] = [];
    },
    //  添加顶部tag
    addNav(state, path) {
      // console.log(111);
      let a = state.sidebarList.filter(item => item.path === path);
      let index = state.navTopList.findIndex(val => val.path === path);
      if (index === -1) {
        state.navTopList.push(a[0]);
      }
    },
    // 清空顶部tag
    remNavTop(state) {
      console.log(111);
      state.navTopList = [
        {
          path: "/",
          name: "home",
          label: "系统首页"
        }
      ];
    },
    // 接收传递过来的当前显示页
    changeShow(state, name) {
      state.nowShow = name;
    },
    // 关闭其他
    remoElseNav(state) {
      let a = state.navTopList.filter(item => {
        return item.path === state.nowShow;
      });
      state.navTopList = a;
    }
  },
  // actions: {
  //   markReadedA(store,data){
  //     store.commit('markReaded',data)
  //   },
  //   allMarkReadedA(store,data){
  //     store.commit('allMarkReaded',data)
  //   },
  //   deleteHandleA(store,data){
  //     store.commit('deleteHandle',data)
  //   },
  //   allDeleteHandleA(store,data){
  //     store.commit('allDeleteHandle',data)
  //   },
  //   emptyAllA(store,data){
  //     store.commit('emptyAll',data)
  //   },
  //   restoreA(store,data){
  //     store.commit('restore',data)
  //   },
  // },
  modules: {}
});
