# BaseModal - 基础模态框

#### props(可用属性)

|属性|类型|默认值|说明|
|:----- |:------|:----------------------------- |:----------------------------- |
| onShow | function | () => {} | 模态框显示时的回调函数 |
| onHide | function | () => {} |模态框隐藏时的回调函数 |
| dialogTransition | object | undefined | 对话框的显示隐藏过渡效果,具体属性见vue内置组件transition |
| maskTransition | object | undefined | 模态框显示隐藏过渡效果 |
| wrapperStyle | object | undefined | 根元素style |
| dialogStyle | object | undefined | 对话框style |
| maskStyle | object | undefined | 遮罩层style |
| wrapperClass | string | "" | 根元素class |
| dialogClass | string | "" | 对话框class |
| maskClass | string | "" | 遮罩层class |
| showMask | boolean | true | 是否显示遮罩层 |
| maskClosable | boolean | true | 点击遮罩层是否关闭模态框 |
| zIndex | number | 999 | 模态框的z-index |

#### methods(可用方法)
|属性值|说明|
|:----- |:------|
| show | 显示模态框 |
| hide | 隐藏模态框 |

#### slot(可用插槽)
|属性值|说明|
|:----- |:------|
| dialog | 模态框内容 |
| mask | 遮罩层内容 |

#### 使用方法
```js
<template>
  <base-modal
    ref="modal"
    :dialogClass="$style.dialog"
    :dialogTransition="{
      enterClass: $style.popup_enter,
      enterActiveClass: $style.popup_enter_active,
      enterToClass: $style.popup_enter_to
    }"
    :showMask="false"
    :maskClosable="false"
    onShow="handleShow"
  >
    <template slot="dialog">
    	<p>这是对话框</p>
    	<!-- 当data-role=cancel时,点击此元素会关闭模态框 -->
    	<button data-role="cancel">关闭</button>
    </template>
    <template slot="mask">
      这是遮罩层
    </template>
  </base-modal>
<template>

<script>
  import {BaseModal} from 'components'
  export default {
    components: {BaseModal},
    methods: {
      showModal() { this.$refs.modal.show() }
      hideModal() { this.$refs.modal.hide() }
      handleShow() { console.log('modal show') }
    }
  }
</script>

<style lang="less" module>
	.dialog {
	 // dialog class
	}

	.popup_enter {}

	.popup_enter_active {}

	.popup_enter_to {}
</style>
```