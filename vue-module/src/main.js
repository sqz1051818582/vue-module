import Vue from 'vue'
import App from './App'
import N3Components from 'N3-components'
import Index from './components/index'
import Imitate from './components/imitate'
import Panel from './components/panel'
//导入vue-router
import VueRouter from 'vue-router'
//引用实例
Vue.use(VueRouter)
Vue.use(N3Components)
var router = new VueRouter({
  mode: 'history',
  base: __dirname
})
// 路由映射关系
router.map({
    //默认指向index
    '/':{
        name:'index',
        component:Index,
        subRoutes:{
          '/Panel':{
            name:'Panel',
            component: Panel
          },
          '/Imitate':{
            name:'Imitate',
            component: Imitate
          }
        }
    }
})
//重定向到home
router.redirect({
    '*':'index'
})
//启动一个启用了路由的应用
router.start(App,'#bodyContent')
