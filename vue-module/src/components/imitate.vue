<template>
  <n3-tree :data="files2" :load-data="loadList"></n3-tree>
</template>
<script>
    export default {
      data() {
        return {
          files2: [
              {
                  label: '根目录',
                  value: 1,
                  children: [],
                  icon: 'folder'
              }
          ],
          loadList(value) {
              return new Promise((resolve, reject) => {
                  setTimeout(() => {
                      var res = [{
                          label: '我的文档' + Math.ceil(Math.random() * 100000),
                          value: Math.ceil(Math.random() * 100000)
                      }, {
                          label: '新建文件夹' + Math.ceil(Math.random() * 100000),
                          value: Math.ceil(Math.random() * 100000),
                          children: [],
                          icon: 'folder'
                      }]
                      resolve(res)
                  }, 1000)
              })
          }
        }
      }
    }
</script>
<style>

</style>
