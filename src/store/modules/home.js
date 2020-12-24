export default {
  namespaced: true,
  state: {
    nowShow: "/",
    // navTopList: [{ label: "系统首页", name: "home", path: "/" }],
    navTopList: [],
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
    ]
  },
  mutations: {
    // 接收传递过来的当前显示页
    changeShow(state, name) {
      state.nowShow = name;
    },
    //  添加顶部tag
    addNav(state, path) {
      let a = state.sidebarList.filter(item => item.path === path);
      let index = state.navTopList.findIndex(val => val.path === path);
      if (index === -1) {
        state.navTopList.push(a[0]);
      }
      // console.log(state.navTopList);
    },
    // 清空顶部tag
    remNavTop(state) {
      // console.log(111);
      state.navTopList = [
        {
          path: "/",
          name: "home",
          label: "系统首页"
        }
      ];
    },
    // 关闭其他
    remoElseNav(state) {
      let a = state.navTopList.filter(item => {
        return item.path === state.nowShow;
      });
      state.navTopList = a;
    }
  },
  actions: {}
};
