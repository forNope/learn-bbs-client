-----------

#### 功能

> 获取指定资源

#### URL

> GET /api/v1/teasings/{id}

#### 返回字段

| 返回字段   | 字段类型 | 说明       |
| :--------- | :------- | :--------- |
| author | object   | 吐槽者信息 |
| content    | string   | 内容       |
| agreeName  | string   | 点赞者名字 |
| agreeNum | number | 点赞数 |
| createDate  | timestamp   | 发布日期 |

#### 响应：
##### 获取成功：200
响应格式：JSON
```JSON
{
  "author": {
    "id": 1,
    "nickname": "test name",
    "avatar": "avatar.png"
  },
  "content": "test content",
  "agreeName": "test name",
  "agreeNum": 123,
  "createDate": 123213213
}
```
##### 参数错误: 400
##### 资源不存在: 404