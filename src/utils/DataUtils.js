export default {
  getToday: function() {
    let date = new Date();
    // 2020-12-19
    let year = date.getFullYear(); // 2020
    let month =
      date.getMonth() + 1 >= 10
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1); // 11 9
    let day = date.getDate() >= 10 ? date.getDate() : "0" + date.getDate();
    return year + "-" + month + "-" + day; // 2020-09-19
  },
  getCertainDay: function(time) {
    if (!time) {
      throw Error("传入的时间不能为空");
    }
    let date = new Date(time);
    // 2020-12-19
    let year = date.getFullYear(); // 2020
    let month =
      date.getMonth() + 1 >= 10
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1); // 11 9
    let day = date.getDate() >= 10 ? date.getDate() : "0" + date.getDate();
    return year + "-" + month + "-" + day;
  }
};
