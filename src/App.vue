<!-- 主页通用模块 -->
<template>
    <div class="body">
      <!-- 通用头部 -->
      <div class="head">
      </div>
      <div class="content">
        <el-row>
          <el-col :span="4">
            <div class="grid-content bg-purple border">
            </div>
          </el-col>
          <el-col :span="20">
            <div class="grid-content bg-purple-light" id="app">
              <!-- 路由匹配到的组件将渲染在这里 -->
              <router-view></router-view>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style>
*{ 
    margin:0;
    padding: 0;
}
.head{
    height: 240px;
    background-color: rgb(6, 217, 149);
}
.border{
  border:1px solid red;
}
</style>
