-----------

#### 功能

> 获取指定资源

#### URL

> GET /api/v1/teasings

#### 返回字段

| 返回字段 | 字段类型       | 说明         |
| :------- | :------------- | :----------- |
| data     | Array\<Teasing> | 吐槽信息列表 |
| total    | int            | 数量         |

#### 响应：
##### 获取成功：200
响应格式：JSON
```JSON
{
  "data": [{
    "id": 1
    // 同getResource
  }],
  "total": 1
}
```