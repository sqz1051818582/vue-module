import Vue from 'vue'
import App from './App'
import Index from './components/index'
import Page1 from './components/page1'
import step1 from './components/step1'
import step2 from './components/step2'
import step3 from './components/step3'
import step4 from './components/step4'
import step5 from './components/step5'
//导入vue-router
import VueRouter from 'vue-router'
//引用实例
Vue.use(VueRouter)
var router = new VueRouter({
  mode: 'history',
  history: false,
  base: __dirname
})
// 路由映射关系
router.map({
    //默认指向index
    '/':{
        name:'index',
        component:Index
    },
    '/page1':{
        name:'page1',
        component:Page1,
        //子路由(有页底)
        subRoutes:{
            '/step1':{
                name:'step1',
                component:step1
            },
            '/step2':{
                name:'step2',
                component:step2
            },
            '/step3':{
                name:'step3',
                component:step3
            },
            '/step4':{
                name:'step4',
                component:step4
            },
            '/step5':{
                name:'11',
                component:step5
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
