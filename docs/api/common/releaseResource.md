-----------
#### 功能

> 发布资源

#### 接口

> POST /api/v1/{category}/posts <br>
> POST /api/v1/posts/{id}/comments <br>
> POST /api/v1/comments/{id}/replies <br>
> POST /api/v1/teasings

#### 请求参数(JSON)

| 参数            | 必选  | 类型    | 默认值 | 说明                                        |
| :-------------- | :---- | :------ | :----- | :------------------------------------------ |
| receiverReplyId | false | string  |        | 要回复的回复id,只有资源为replies时,才有此项 |
| content         | true  | string  |        | 内容                                        |
| anonymous       | false | boolean | false  | 是否匿名                                    |

#### 响应：
##### 发布成功：200
JSON (返回新创建的数据)
```JSON
 {
   //同getResource
 }
```
##### 参数不合法: 400
JSON
```JSON
{
  // content不能为空
  "code": 0,
  "msg": "no null content",
  // 接收者不存在
  "code": 1,
  "msg": "receiver is not exist",
  // 不能自己回复自己
  "code": 2,
  "msg": "cannot reply self",
}
```
##### 未登录: 401
##### 禁止: 403
JSON
```JSON
{
  // 未同意授权
  "code": 0,
  "msg": "no agree protocol",
  // 账户被冻结
  "code": 1,
  "msg": "user is frozen",
  // 无效的token
  "code": 2,
  "msg": "invalid token",
  // 权限不足
  "code": 3,
  "msg": "no permission"
}
```
##### 所属的资源不存在: 404
