-----------

#### 功能

> 获取省份统计情况

#### URL

> GET /api/v1/stat/provinces

#### 返回字段
| 返回字段 | 字段类型 | 说明     |
| :------- | :------- | :------- |
| province | string   | 省份     |
| num      | int      | 所占人数 |

#### 响应
##### 获取成功: 200
JSON
```JSON
[
  {
    "province": "广东",
    "num": 2000
  },
  {
    "province": "江苏",
    "num": 2000
  }
]
```
