-----------

#### 功能

> 获取资源列表

#### URL

> GET /api/v1/{posts || comments || replies} <br>
> GET /api/v1/{category}/posts <br>
> GET /api/v1/posts/{id}/comments <br>
> GET /api/v1/comments/{id}/replies <br>
> GET /api/v1/{userId}/{posts || comments || replies} <br>

#### 请求参数(queryString 查询字符串)

| 参数   | 必选  | 类型   | 默认值 | 说明                                     |
| :----- | :---- | :----- | :----- | ---------------------------------------- |
| sort   | false | string | hot    | 排序方式, 'date' 日期排序, 'hot'热门排序 |
| offset | false | int    | 0      | 从第几个开始获取                         |
| limit  | false | int    | 10     | 获取数量                                 |

#### 返回字段
| 返回字段 | 字段类型         | 说明     |
| :------- | :--------------- | :------- |
| data     | Array\<resource> | 资源列表 |
| total    | int              | 资源总数 |

#### 响应
##### 获取成功: 200
JSON
```JSON
{
  "data": [
    {
      "id": 1,
      // 其他数据同getResource
    }
  ],
  "total": 5000
}
```
##### 参数不合法: 400
