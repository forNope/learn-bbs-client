-----------

#### 功能

> 举报指定资源

#### URL

> POST api/v1/{posts || comments || replies || teasings}/{id}/reports

#### 请求参数(JSON)

| 参数   | 必选 | 类型   | 说明     |
| :----- | :--- | :----- | -------- |
| reason | true | string | 举报原因 |

#### 响应
##### 举报成功: 204
##### 参数不合法: 400
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
##### 资源不存在: 404

