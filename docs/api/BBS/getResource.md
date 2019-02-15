-----------

#### 功能

> 获取指定资源

#### URL

> GET /api/v1/{posts || comments || replies}/{id}

#### 返回字段

| 返回字段      | 字段类型  | 说明                       |
| :------------ | :-------- | :------------------------- |
| author        | object    | 发帖者信息                 |
| replyToAuthor | object    | 被回复者,只有reply资源才有 |
| createDate    | timestamp | 发布日期                   |
| content       | string    | 帖子内容                   |
| agreeNum      | int       | 点赞次数                   |
| disagreeNum   | int       | 踩次数                     |
| commentNum    | int       | 评论次数,reply资源无此项   |
| isAgree       | boolean   | 已经点赞过                 |
| isDisagree    | boolean   | 已经踩过                   |

#### 响应：
##### 获取成功：200
响应格式：JSON
```JSON
{
  "author": {
    "id": 22,
    "nickname": "blab", // 如果匿名,此项固定填写 匿名用户
    "avatar": "fake.png" // 如果匿名,此项固定为匿名图片(如fake.png)
  },
  "replyToAuthor": {}, // 如果为replies的话,加上此项,数据同上
  "createDate": 123213123123,
  "content": "test content",
  "agreeNum": 100,
  "disagreeNum": 200,
  "commentNum": 200, // 如果为reply资源,无此项
  "isAgree": false,
  "isDisagree": true,
}
```
##### 参数不合法: 400
##### 发布者被冻结且权限不足: 403
##### 资源不存在: 404