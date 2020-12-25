<template>
  <div class="fileUpload page">
    <el-breadcrumb class="breadcrumb">
      <el-breadcrumb-item> <i class="el-icon-date form"></i> 表单 </el-breadcrumb-item
      >
      <el-breadcrumb-item>文件上传</el-breadcrumb-item
      >
    </el-breadcrumb>
    <div class="main-wrap">
      <h2 class="titleP">支持拖拽</h2>
      <div class="introduce">
        <p>Element UI自带上传组件。 访问地址
          <a href="https://element.eleme.io/#/zh-CN/component/upload">Element UI Upload</a>
        </p>
      </div>
      <el-upload
      class="upload-demo" drag multiple
      :action="base_Url + 'v1/addimg/avatar'">
        <i class="el-icon-upload"></i>
        <div class="el-upload_text">将文件拖到此处，或<em>点击上传</em></div>
        <!-- slot="tip " 提示说明文字 -->
        <div class="el-upload_tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>
  </div>
</template>
<script>
import { base_Url, baseImgPath } from '@src/config/env'
export default {
  name: "fileUpload"
};
</script>
<style lang = 'scss' scope>
  .form {
    padding-right: 5px;
  }
  .breadcrumb {
    margin: 10px 0;
  }
  .fileUpload{
    padding: 10px;
  }
  .main-wrap {
    padding: 10px;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
  .message_tit {
    color: #409eff;
  }
  .titleP{
    font-weight: 400;
    line-height: 50px;
    margin: 10px 0;
    font-size: 22px;
    color: #1f2f3d;
  }
  .introduce{
    background: #eef1f6;
    padding: 20px 10px;
    margin-bottom: 20px;
    font-size: 14px;
    a{
      color:#20a0ff;
    }
  }
</style>
