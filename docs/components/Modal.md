# Modal - 模态框
## 继承于BaseModal

#### slot(可用插槽)
|属性值|说明|
|:----- |:------|
| title | 标题 |
| content | 内容 |
| options | 选项 |

#### 使用方法
```js
<template>
	<div>
		<button @click="$refs.modal.show()">显示</button>
	  <modal ref="modal">
      <template slot="title">
      	标题
      </template>
      <template slot="content">
        这是内容
      </template>
      <template slot="options">
        <div data-role="cancel">取消</div>
        <div>匿名发布</div>
        <div>发布</div>
      </template>
    </modal>
	</div>
<template>

<script>
  import {Modal} from 'components'

  export default {
    components: {Modal}
  }
</script>
```