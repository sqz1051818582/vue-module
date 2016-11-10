<template>
    <div class="vTitle">
        <h1>从前端到放弃</h1>
        <h1>vue + webpack 入门篇</h1>
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
  background-color: #0099e5;
  border-color: #0099e5;
  font-weight: bold;
}
.ma-l10{
  margin-left: 10px;
}
</style>
