import happlyaxios from "../../myaxios/happlyaxios";
export default {
  namespaced: true,
  state: {
    basicList: []
  },
  mutations: {
    // 将请求来的数据赋值给basicList
    addBasicList(state, list) {
      //   console.log(list);
      list.map(item => {
        let aa = Math.random() > 0.5 ? "成功" : "失败";
        item.tag = aa;
      });
      state.basicList = list;
    }
  },
  actions: {
    getBasicTableList(context) {
      // http://rap2api.taobao.org/app/mock/data/1832192
      happlyaxios
        .get("from")
        .then(res => {
          // console.log(res.data);
          context.commit("addBasicList", res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
