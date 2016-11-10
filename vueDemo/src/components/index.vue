<template>
    <div class="vTitle">
      <p>
        复杂性组件Demo
      </p>
      <!-- 导航索引 -->
      <div class="vHref">
        <a v-link="{name:'Panel'}" v-if="showText">表格</a>
        <a v-link="{name:'Imitate'}">树</a>
      </div>
    </div>
    <!-- 内容更新区域 -->
    <div class="vContent">
      <router-view></router-view>
    </div>
</template>
<script>
    export default {
      data(){
          return {
            showText:true
          }
      }
    }
</script>
<style>
.vTitle{
  font-size: 35px;
  text-align: center;
  height: 100px;
  line-height: 100px;
  border-bottom: 5px solid #0088ff;
  text-align: left;
  text-indent: 100px;
}
.vTitle p{
  display: inline-block;
}
.vHref{
  float: right;
  font-size: 20px;
  margin-right: 100px;
}
.vHref a{
  margin-right: 100px;
}
</style>
