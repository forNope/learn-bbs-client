-----------

#### 功能

> 获取举报信息列表

#### URL

> GET /api/v1/{posts || comments || replies || teasings}/reports <br>
> GET /api/v1/{posts || comments || replies || teasings}/{id}/reports <br>

#### 请求参数(queryString 查询字符串)

| 参数   | 必选  | 类型   | 默认值 | 说明                                     |
| :----- | :---- | :----- | :----- | ---------------------------------------- |
| offset | false | int    | 0      | 从第几个开始获取                         |
| limit  | false | int    | 10     | 获取数量                                 |

#### 返回字段
| 返回字段 | 字段类型         | 说明     |
| :------- | :--------------- | :------- |
| data     | Array\<report> | 资源列表 |
| total    | int              | 资源总数 |

#### 响应
##### 获取成功: 200
JSON
```JSON
{
  "data": [
    {
      "id": 1,
      // 其他数据同getReport
    }
  ],
  "total": 5000
}
```
##### 参数不合法: 400
