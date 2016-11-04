<template>
    <div class="vTitle">
        <h1>Web前后端分离开发教程</h1>
        <h2>（ Vue.Js ）</h2>
        <a v-link="{path:'./page1/step1'}">
          <!-- 内部引用button 按钮 -->
          <i-button type="primary" size="large" class="vbutton">
            点击继续<Icon type="arrow-right-c" class="ma-l10"></Icon>
          </i-button>
        </a>
    </div>
</template>
<script>
    import { iButton } from "iview"
    import { Icon } from "iview"
    export default {
        components: { iButton , Icon }
    }
</script>
<style>
.vTitle{
  color: #fff;
  font-size: 25px;
  text-align: center;
  margin-top: 250px;
}
.vbutton{
  margin-top: 20px;
  background-color: #4bd083;
  border-color: #4bd083;
  font-weight: bold;
}
.ma-l10{
  margin-left: 10px;
}
</style>
