<template>
    <div class="part1">
      <p>
        Vue-Cli 环境搭建
      </p>
      <Row>
        <!-- 布局DIV -->
        <i-col span="24">
          <!-- 折叠模块 -->
          <Collapse accordion>
              <Panel key="1">
                  node环境的搭建
                  <div slot="content" class="model"><i></i><span>node官网：<a href="https://nodejs.org/en/" target="_black"> https://nodejs.org/en/ </a></span></div>
                  <div slot="content" class="model"><i></i><span>允许用户从NPM服务器下载别人编写的第三方包到本地使用。<a href="https://www.npmjs.com/" target="_black">https://www.npmjs.com/</a></span></div>
                  <div slot="content" class="model"><i></i><span>全局安装与本地安装</span></div>
              </Panel>
              <Panel key="2">
                  安装git
                  <div slot="content" class="model"><i></i><span>git下载：<a href="https://www.baidu.com/link?url=4AgMxbqwk6nT-p5VTOD0_SqZmb5NwXJtfK1X0UqOD2LzL6tmHIAo4FfstSENgGTFQXE-3BXBaaTFJ5O7-OTslqHC-ixLOnFFC7sZkfHNYSy&wd=&eqid=ff8a9420000240f80000000358232675">点击下载</a></span></div>
              </Panel>
              <Panel key="3">
                  安装vue-cli
                  <div slot="content" class="model"><span>$ npm install vue</span></div>
                  <div slot="content" class="model"><span># 全局安装 vue-cli</span></div>
                  <div slot="content" class="model"><span>$ npm install --global vue-cli</span></div>
                  <div slot="content" class="model"><span># 创建一个基于 webpack 模板的新项目</span></div>
                  <div slot="content" class="model"><span>$  vue init webpack my-project</span></div>
                  <div slot="content" class="model"><span># 安装依赖，走你</span></div>
                  <div slot="content" class="model"><span>$ cd my-project</span></div>
                  <div slot="content" class="model"><span>$ npm install</span></div>
                  <div slot="content" class="model"><span>$ npm run dev</span></div>
              </Panel>
              <Panel key="4">
                  知识拓展CNPM
                  <div slot="content" class="model"><span>$ npm install -g cnpm --registry=https://registry.npm.taobao.org</span></div>
              </Panel>
          </Collapse>
        </i-col>
    </Row>
    </div>
</template>
<script>
// 挂载
import  { Row, iCol, Collapse , Panel }  from 'iview';
export default {
  name: 'step1',
  components :{ Row , iCol , Collapse , Panel }
}
</script>
<style>
.part1 p{
  font-size: 30px;
  font-weight: 900;
  text-align: center;
  margin-top: 4%;
  margin-bottom: 4%;
}
.part1 img{
  display: block;
  margin: 0 auto;
  margin-top: 50px;
}
.model i{
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 10px;
  border-radius: 50%;
  vertical-align: middle;
  background-color: #000;
}
</style>
