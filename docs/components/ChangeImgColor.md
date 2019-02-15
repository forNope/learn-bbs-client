# ChangeImgColor - 改变图片不透明部分颜色

#### 注意事项
本组件使用投影并改变投影颜色来达成改变图片颜色,如果本体不可见时会导致投影也不可见

#### props(可用属性)
| 属性值 | 类型 | 是否必须 | 默认值 | 说明 |
|:----- |:------|:----- |:------|:------|
| color | string | 否 | pink | 要应用的颜色 |
| src | string | 是 | | 图片地址 |

#### 使用方法
```js
<template>
  <change-img-color
    color="black"
    :src="require('assets/logo-title.svg')"
  />
<template>

<script>
  import {ChangeImgColor} from 'components'

  export default {
    components: {ChangeImgColor}
  }
</script>
```