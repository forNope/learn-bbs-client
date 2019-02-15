-----------

#### 功能

> 获取举报信息

#### URL

> GET /api/v1/{posts || comments || replies || teasings}/reports/{id} <br>

#### 返回字段
| 返回字段   | 字段类型  | 说明           |
| :--------- | :-------- | :------------- |
| resourceId | int       | 被举报的资源id |
| reason     | string    | 举报原因       |
| createDate | timestamp | 举报时间       |

#### 响应
##### 获取成功: 200
JSON
```JSON
{
 "resouceId": 1,
 "reason": "举报原因",
 "createDate" : 12312321,
}
```
##### 参数不合法: 400
