<template>
  <div ref="pieChart" id="pieChart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "pieChart",
  mounted() {
    var mypieChart = echarts.init(document.getElementById("pieChart"));
    var optionPie = {
      title: {
        text: "服装品类销售饼状图",
        left: "center"
      },
      tooltip: {
        trigger: "item"
      },
      series: [
        {
          type: "pie",

          data: [
            { value: "334", name: "T恤" },
            { value: "278", name: "牛仔裤" },
            { value: "190", name: "连衣裙" },
            { value: "235", name: "毛衣" },
            { value: "260", name: "七分裤" },
            { value: "200", name: "短裙" },
            { value: "141", name: "羽绒服" }
          ],
          legendHoverLink: true, //是否启用图例 hover 时的联动高亮
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ],
      legend: {
        orient: "vertical", //图例列表的布局朝向horizontal  vertical
        left: "left",
        data: ["T恤", "牛仔裤", "连衣裙", "毛衣", "七分裤", "短裙", "羽绒服"]
      }
    };
    mypieChart.setOption(optionPie);
  }
};
</script>

<style></style>
