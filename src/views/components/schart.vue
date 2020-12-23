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
        <div id="sellChart"></div>
        <h2>饼状图</h2>
        <div id="pieChart"></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "schart",
  mounted() {
    //挂载完成
    //初始化echarts实例
    var myChart = echarts.init(document.getElementById("sellChart"));
    var mypieChart = echarts.init(document.getElementById("pieChart"));
    //指定图表的配置项和数据
    var option = {
      title: {
        text: "最近一周各品类销售图",
        left: "center",
      },
      legend: {
        data: ["家电", "百货", "食品"],
        left: "center",
        type: "plain",
        top: "8%",
      },
      toolbox: {
        //工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具
        show: true,
        feature: {
          dataView: { title: "数据视图" },
          magicType: {
            type: ["line", "bar", "stack", "tiled"],
          },
          restore: { title: "还原" },
          saveAsImage: {},
        },
      },
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        data: ["周一", "周二", "周三", "周四", "周五"],
        type: "category",
        show: true,
      },
      yAxis: { type: "value" },
      series: [
        {
          name: "家电",
          type: "bar",
          data: [234, 278, 270, 190, 230],
        },
        {
          name: "百货",
          type: "bar",
          data: [164, 178, 190, 135, 160],
        },
        {
          name: "食品",
          type: "bar",
          data: [144, 198, 150, 235, 120],
        },
      ],
    };
    myChart.setOption(option);
    var optionPie = {
        title:{
            text:"服装品类销售饼状图",
            left:"center"
        },
        tooltip:{
            trigger:"item"
        },
        series: [{
            type:"pie",
            
            data:[{value:"334",name:"T恤"},{value:"278",name:"牛仔裤"},{value:"190",name:"连衣裙"},{value:"235",name:"毛衣"},{value:"260",name:"七分裤"},{value:"200",name:"短裙"},{value:"141",name:"羽绒服"}],
            legendHoverLink: true, //是否启用图例 hover 时的联动高亮
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }    
        }],
        legend: {
            orient: "vertical", //图例列表的布局朝向horizontal  vertical
            left: "left",
            data: ["T恤", "牛仔裤", "连衣裙", "毛衣", "七分裤","短裙","羽绒服"]
        },
    };
    mypieChart.setOption(optionPie);
  },
};
</script>

<style lang="scss">
.page {
  padding: 10px;
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
    background-color: #eef1f6;
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
      background-color: #cccccc;
    }
    #pieChart {
      width: 600px;
      height: 400px;
      background-color: #cccccc;
    }
  }
}
</style>
