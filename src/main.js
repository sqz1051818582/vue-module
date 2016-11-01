import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from "vue-router"
import secondcomponent from './components/secondcomponent.vue'
//开启debug模式
Vue.config.debug = true;
//实例引用
Vue.use(VueRouter);
Vue.use(VueResource);

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/', redirect: '/secondcomponent' },
  { path: '/secondcomponent', component: secondcomponent }
]
// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes:routes
})
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
