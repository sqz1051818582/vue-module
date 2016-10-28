import App from './App'
//定义引用vue-router
import Vue from 'vue';
import Index from './index';
import VueRouter from 'vue-router';
//实例调用
Vue.use(VueRouter);
//引入组件页面
import Hello from './components/hello';
//开启debug模式
Vue.config.debug = true;
// 路由器需要一个根组件。
var Apps = Vue.extend({});
// 创建一个路由器实例
var router = new VueRouter();
router.map({//定义路由映射
    '/index':{//访问地址
        name:'index',//定义路由的名字。方便使用。
        component:Index,//引用的组件名称，对应上面使用`import`导入的组件
        //component:require("components/app.vue")//还可以直接使用这样的方式也是没问题的。不过会没有import集中引入那么直观
    },
    '/hello': {
        name:'hello',
        component: Hello
    },
});
router.start(App, '#app');
