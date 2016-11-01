import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from "vue-router"
import Index from './components/index.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
//开启debug模式
Vue.config.debug = true;
//实例引用
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);
console.log(ElementUI);
const routes = [
  { path: '/', redirect: '/Index' },
  { path: '/Index', component: Index }
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
