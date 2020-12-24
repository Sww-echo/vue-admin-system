export default {
  namespaced: true,
  state: {
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
    ]
  },
  mutations: {
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
    }
  },
  actions: {}
};
