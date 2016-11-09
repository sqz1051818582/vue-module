<template>
  <n3-data-table
  key="key"
  :selection="selection"
  :source="source"
  :columns="columns"
  :refresh="refresh"
  ></n3-data-table>
</template>
<script>
export default {
 data(){
   return{
  selection:{
    checkRows:[],
    onSelect(a,b,c){},
    onSelectAll(){},
    getCheckboxProps(record){
      return {
        disabled:false
      }
      // if(record.key == 2){
      //   return {
      //     disabled:true
      //   }
      // }else{
      //   return {
      //     disabled:false
      //   }
      // }
    }
  },
  columns: [{
    title: '姓名',
    dataIndex: 'name',
    sort:true,
    width:'100px'
  }, {
    title: '年龄',
    dataIndex: 'age',
    sort:true,
    sortMethod:function(x,y){return x.age - y.age}, //自定义排序函数，会使sortType失效
    sortType:'DESC',//排序方式
    render: (text, record) => {
      return `<a href="javascript:;">${text}</a>`
    }
  }, {
    title: '部门',
    dataIndex: 'department'
  }, {
    title: '操作',
    dataIndex: '',
    render: (text, record, index) => {
        return `<span class="item">
                <a href="javascript:;" @click="del('${record.key}','${index}')">删除</a>
              </span>`
    }
  }],
  source: [{
    key: '1',
    name: '小白',
    age: 25,
    department: '技术1'
  }, {
    key: '2',
    name: '小黑',
    age: 33,
    department: '技术2'
  }, {
    key: '3',
    name: '小红',
    age: 12,
    department: '技术3'
  },{
    key: '4',
    name: 'v白',
    age: 25,
    department: '技术1'
  }, {
    key: '5',
    name: 'l黑',
    age: 33,
    department: '技术2'
  }, {
    key: '6',
    name: 'i红',
    age: 122,
    department: '技术3'
  },{
    key: '7',
    name: 'y白',
    age: 2,
    department: '技术1'
  }, {
    key: '8',
    name: 'b黑',
    age: 332,
    department: '技术2'
  }, {
    key: '9',
    name: 't红',
    age: 124,
    department: '技术3'
  },{
    key: '10',
    name: 'f白',
    age: 253,
    department: '技术1'
  }, {
    key: '11',
    name: 'a黑',
    age: 31,
    department: '技术2'
  }, {
    key: '12',
    name: 'd红',
    age: 31,
    department: '技术3'
  }]
   }
},
methods:{
  del(key){
    //alert(1);
    for(var i in this.source){
      if(key == this.source[i]['key']){
          this.source.splice(i,1);
      }
    }
  }
}
}
</script>
<style>

</style>
