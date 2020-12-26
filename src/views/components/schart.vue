<template>
  <div class="schart page">
    <h1 class="el-icon-setting">schart图表</h1>
    <div class="show">
      <div class="explain">
        vue-schart：vue.js封装sChart.js的图表组件。 访问地址:<a
          href="https://github.com/lin-xin/vue-schart"
          >vue-schart</a
        >
      </div>
      <div class="map">
        <h2>图例</h2>
        <histogram :apiDatas="apiData"></histogram>
        <h2>饼状图</h2>
        <pie-chart></pie-chart>
      </div>
    </div>
  </div>
</template>

<script>
import histogram from "./schart/histogram";
import pieChart from "./schart/pieChart";
import axios from "axios";

//   function getCertainDay (time) {
//     if (!time) {
//       throw Error("传入的时间不能为空");
//     }
//     let date = new Date(time);
//     // 2020-12-19
//     let year = date.getFullYear(); // 2020
//     let month =
//       date.getMonth() + 1 >= 10
//         ? date.getMonth() + 1
//         : "0" + (date.getMonth() + 1); // 11 9
//     let day = date.getDate() >= 10 ? date.getDate() : "0" + date.getDate();
//     return year + "-" + month + "-" + day;
//   };
export default {
  name: "schart",
  components: {
    [histogram.name]: histogram,
    [pieChart.name]: pieChart
  },
  data() {
    return {
      apiData: [[], [], []]
    };
  },

  methods: {
    // sales: function() {
    //   let apiData = [[], [], []];
    // }
  },
  computed: {},
  created() {
    axios
      .get("http://rap2api.taobao.org/app/mock/274183/shopping")
      .then(res => {
        //console.log(res.data.count);
        let obj = res.data.count[0];
        // console.log(arr.arr1);
        for (let item in obj) {
          // let num=0
          // let arr = []
          obj[item].map(data => {
            // console.log(data.num)
            // if(num<5){
            //     num++
            //     arr.push(data.num)
            // }else{
            //     num=0
            // }
            // const num = Math.floor(index /5)

            // console.log(index)
            this.apiData[item].push(data.num);
          });
          // this.apiData.push(arr)
        }
        console.log(this.apiData);
        //    this.apiData = arr
        console.log(1111);
      });
  }
};
</script>

<style lang="scss">
.page {
  padding: 10px;
  box-sizing: border-box;
  //   overflow-x: hidden;
  h1 {
    font-size: 16px;
    line-height: 34px;
  }
  .show {
    width: 95%;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 25px;
  }
  .explain {
    width: 99%;
    height: 70px;
    line-height: 70px;
    font-size: 16px;
    padding-left: 8px;
    a {
      margin-left: 10px;
      color: blue;
      opacity: 0.5;
    }
  }
  .map {
    padding: 20px;
    h2 {
      font-size: 24px;
      font-weight: 400;
      margin-top: 40px;
      margin-bottom: 20px;
    }
    #sellChart {
      width: 600px;
      height: 400px;
    }
    #pieChart {
      width: 600px;
      height: 400px;
    }
  }
}
</style>
