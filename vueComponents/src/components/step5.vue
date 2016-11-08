<template>
  <div class="part5">
    <p>
      Mock.js 简介
    </p>
    <a href="http://mockjs.com/" target="_blank">官方 — API文档</a>
  </div>
</template>
<script>
import Mock from 'mockjs'
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
console.log(JSON.stringify(data, null, 4))
// 挂载
export default {
  name: 'step5'
}
</script>
<style>
.part5 p{
  font-size: 30px;
  font-weight: 900;
  text-align: center;
  margin-top: 20%;
}
.part5 a{
  font-size: 20px;
  display: block;
  text-align: center;
  margin-top: 3%;
}
</style>
