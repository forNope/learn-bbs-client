-----------

#### 功能

> 创建用户信息

#### URL

> POST /api/v1/wx/sessions/{code}

#### 响应：
##### 成功：200
JSON
```js
{
  "id": "uid",
  "nickname": "名字",
  "avatar": "avatar.png"
}
```
##### 用户不存在: 404
