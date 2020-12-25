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
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="表单名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="选择器" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择">
              <el-option label="步步高" value="bbk"></el-option>
              <el-option label="小天才" value="xiaotiancai"></el-option>
              <el-option label="imoo" value="imoo"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="日期时间" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForm.date1"
                  style="width: 100%;"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="ruleForm.date2"
                  style="width: 100%;"
                ></el-time-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="城市级联" prop="city">
            <el-cascader
              :options="options"
              :show-all-levels="false"
              v-model="ruleForm.city"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="选择开关" prop="delivery">
            <el-switch v-model="ruleForm.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="多选框" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="步步高" name="type"></el-checkbox>
              <el-checkbox label="小天才" name="type"></el-checkbox>
              <el-checkbox label="imoo" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="单选框" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="步步高"></el-radio>
              <el-radio label="小天才"></el-radio>
              <el-radio label="imoo"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="文本框" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >立即创建</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
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
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        city: "",
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
      ],
      rules: {
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        region: [{ required: true, message: "请选择", trigger: "change" }],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        city: [{ required: true, message: "请选择", trigger: "change" }],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个",
            trigger: "change"
          }
        ],
        resource: [{ required: true, message: "请选择", trigger: "change" }],
        desc: [{ required: true, message: "请填写", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
.line {
  width: 3.33333%;
  margin-left: 10px;
}
</style>
