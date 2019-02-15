-----------
#### 功能

> 点赞与踩,agreement为点赞,disagreement为踩

#### 接口

> PUT, DELETE /api/v1/{posts || comments || replies || teasings}/{id}/{agreement || disagreement}

#### 响应：
##### 成功：204
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

