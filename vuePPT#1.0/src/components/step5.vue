<template>
  <div class="part5">
    <p>
      Mock.js 简介
    </p>
    <Collapse accordion>
        <Panel key="1">
            mock
            <div slot="content" class="model"><a href="http://mockjs.com/" target="_black"> API文档</a></div>
        </Panel>
        <Panel key="2">
            Markdown
            <div slot="content" class="model">Markdown编辑器</div>
        </Panel>
        <Panel key="3">
            mock-server (  json-server  ) ---drakov
        </Panel>
        <Panel key="4">
            aglio
        </Panel>
        <Panel key="5">
            感言(听听大神怎么看Vue的发展)
            <div slot="content" class="model">
              <a href="https://segmentfault.com/a/1190000007297553">点击查看</a>
            </div>
        </Panel>
    </Collapse>
  </div>
</template>
<script>
import  { Collapse , Panel }  from 'iview';
export default {
  name: 'step5',
  components :{ Collapse , Panel }
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
