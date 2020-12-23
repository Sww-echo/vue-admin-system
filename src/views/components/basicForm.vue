<template>
  <div class="basicForm page">
    <div class="formTopBox">
      <i class="el-icon-tickets"></i>
      <el-breadcrumb class="basicFormTop">
        <el-breadcrumb-item>表单</el-breadcrumb-item>
        <el-breadcrumb-item>基本表单</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="containerBox">
        <el-form ref="form" :model="form" label-width="80px" size="small">
          <el-form-item label="表单名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="选择器">
            <el-select v-model="form.region" placeholder="请选择">
              <el-option label="步步高" value="BBk"></el-option>
              <el-option label="小天才" value="xiaotiancai"></el-option>
              <el-option label="imoo" value="imoo"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="日期时间">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-col>
            <el-col class="line" :span="2"> -</el-col>
            <el-col :span="11">
              <el-time-picker
                placeholder="选择时间"
                v-model="form.date2"
                style="width: 100%;"
              ></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="城市级联">
            <el-cascader
              :options="options"
              :show-all-levels="false"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="选择开关">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>

          <el-form-item label="多选框">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="步步高" name="type"></el-checkbox>
              <el-checkbox label="小天才" name="type"></el-checkbox>
              <el-checkbox label="imoo" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="单选框">
            <el-radio-group v-model="form.resource">
              <el-radio label="步步高"></el-radio>
              <el-radio label="小天才"></el-radio>
              <el-radio label="imoo"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="文本框">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交表单</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "basicForm",
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },

      options: [
        {
          value: "gds",
          label: "广东省",
          children: [
            {
              value: "shenzhenshi",
              label: "深圳市",
              children: [
                {
                  value: "baoanqu",
                  label: "宝安区"
                },
                {
                  value: "fankui",
                  label: "南山区"
                },
                {
                  value: "xiaolv",
                  label: "福田区"
                },
                {
                  value: "kekong",
                  label: "光明区"
                }
              ]
            },
            {
              value: "guangzhoushi",
              label: "广州市",
              children: [
                {
                  value: "tianhequ",
                  label: "天河区"
                },
                {
                  value: "yuexiuqu",
                  label: "越秀区"
                }
              ]
            }
          ]
        },
        {
          value: "hunansheng",
          label: "湖南省",
          children: [
            {
              value: "changshashi",
              label: "长沙市",
              children: [
                {
                  value: "yueluqu",
                  label: "岳麓区"
                },
                {
                  value: "furongqu",
                  label: "芙蓉区"
                },
                {
                  value: "tianxinqu",
                  label: "天心区"
                }
              ]
            },
            {
              value: "xiangtanshi",
              label: "湘潭市",
              children: [
                {
                  value: "gaoxinqu",
                  label: "高新区"
                },
                {
                  value: "yuhuqu",
                  label: "雨湖区"
                }
              ]
            },
            {
              value: "huaihuashi",
              label: "怀化市",
              children: [
                {
                  value: "hongjiangqu",
                  label: "洪江区"
                },

                {
                  value: "zhongfangxian",
                  label: "中方县"
                }
              ]
            },
            {
              value: "hengyangshi",
              label: "衡阳市",
              children: [
                {
                  value: "changningshi",
                  label: "常宁市"
                },
                {
                  value: "leiyangshi",
                  label: "耒阳市"
                },
                {
                  value: "nanyuequ",
                  label: "南岳区"
                }
              ]
            }
          ]
        }
        // {
        //   value: "ziyuan",
        //   label: "资源",
        //   children: [
        //     {
        //       value: "axure",
        //       label: "Axure Components"
        //     },
        //     {
        //       value: "sketch",
        //       label: "Sketch Templates"
        //     },
        //     {
        //       value: "jiaohu",
        //       label: "组件交互文档"
        //     }
        //   ]
        // }
      ]
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style>
.formTopBox {
  margin: 10px 0;
}
.basicFormTop {
  display: inline-block;
  color: #606266;
  font-size: 14px;
  font-family: Helvetica, "PingFang SC";
  text-align: center;
}
.el-icon-tickets {
  margin-right: 10px;
  display: inline-block;
  vertical-align: middle;
  margin-top: -5px;
  margin-left: 10px;
}
.container {
  padding: 30px;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  border: 1px solid #eee;
  margin-left: 10px;
}
.containerBox {
  width: 520px;
  background: rgb(255, 255, 255);
}
</style>
