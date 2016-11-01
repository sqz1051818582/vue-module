<template>
  <div id="app">
    <router-view>
    <img src="./assets/logo.png">
    <!-- <hello></hello> -->
    <maqunDemo></maqunDemo>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
    <router-link to="/secondcomponent">Go to Bar3</router-link>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    </router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
import maqunDemo from './components/maqunDemo.vue';
export default {
  name: 'app',
  components: {
    Hello,
    maqunDemo
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
