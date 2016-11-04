<!-- 主页通用模块 -->
<template>
    <div class="content">
        <router-view></router-view>
    </div>
</template>
<script>
// 挂载
export default {
  name: 'app'
}
</script>
<style>
@import "../node_modules/iview/dist/styles/iview.css";
*{
    margin:0;
    padding: 0;
}
body{
  background-color: rgb(6, 217, 149);
}
</style>
