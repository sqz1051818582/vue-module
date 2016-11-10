FORMAT: 1A

## 贷后API文档

    这是我的一个demo,主要的功能就是为了给大家演示其功能

# Group 修改日志

### 我修改某某文件
### 我又修改某某文件
### 我怎么老修改呢

# Group 第一次迭代常用API

## 删除 [/api/delete{?id,item,workid}]

### 删除 [GET]

+ Parameters
  + id (number, required) - 订单ID
  + item (number, required) - 人员ID
  + workid (number, required) - 工作ID

+ Response 200 (application/json)

        {
          "hello": "world"
        }

## 新增 [/api/updata]

### 新增 [POST]

+ Response 200 (application/json)

        {
          "hello": "world"
        }
