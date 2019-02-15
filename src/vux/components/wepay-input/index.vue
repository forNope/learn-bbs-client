<template>
  <div>
    <div class="weui-wepay-pay">
      <div class="weui-wepay-pay__bd">
        <div class="weui-wepay-pay__inner">
            <h1 class="weui-wepay-pay__title" v-html="title"></h1>
            <div class="weui-wepay-pay__inputs"> <strong class="weui-wepay-pay__strong" v-html="label || '￥'"></strong>
                <input type="number" class="weui-wepay-pay__input" :placeholder="placeholder" v-model="currentValue" number></div>
            <div class="weui-wepay-pay__intro">
              <slot name="description"><div v-html="description"></div></slot>
            </div>
        </div>
      </div>
      <div class="weui-wepay-pay__ft">
        <p class="weui-wepay-pay__info" v-html="info"></p>
        <div class="weui-wepay-pay__btn">
          <slot name="button"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wepay-input',
  props: ['title', 'description', 'placeholder', 'info', 'label', 'value'],
  created () {
    this.currentValue = this.value
  },
  data () {
    return {
      currentValue: ''
    }
  },
  watch: {
    value (newVal) {
      this.currentValue = newVal
    },
    currentValue (newVal) {
      this.$emit('input', newVal)
    }
  }
}
</script>

<style lang="less">
.weui-wepay-pay-wrap {
  background-color: #fbf9fe;
}

.weui-msg {
  position: relative;
  z-index: 1;
}

.weui-wepay-pay {
  position: relative;
  z-index: 1;
  padding: 15px;
}

.weui-wepay-pay__inner {
  position: relative;
  z-index: 0;
  padding: 16px;
  background-color: #fff;
}

.weui-wepay-pay__inner::after {
  position: absolute;
  transform: scale(0.5);
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  border: 1px solid #ddd;
  content: ' ';
  transform-origin: 0 0;
  box-sizing: border-box;
}

.weui-wepay-pay__title {
  font-size: 12px;
  font-weight: normal;
  color: #333;
}

.weui-wepay-pay__inputs {
  position: relative;
  z-index: 2;
  margin-top: 12px;
  padding-bottom: 18px;
  color: #333;
}

.weui-wepay-pay__inputs::after {
  position: absolute;
  transform: scaleY(0.5);
  right: 0;
  bottom: 0;
  left: 0;
  height: 1px;
  border-bottom: 1px solid #ddd;
  color: #ddd;
  content: ' ';
  transform-origin: 0 100%;
}

.weui-wepay-pay__strong {
  position: absolute;
  top: -3px;
  left: -6px;
  font-size: 28px;
  font-weight: normal;
  line-height: 1;
  color: #000;
}

.weui-wepay-pay__input {
  width: 100%;
  height: 40px;
  padding-left: 28px;
  border: none;
  outline: 0;
  font-size: 40px;
  line-height: 40px;
  box-sizing: border-box;
}

.weui-wepay-pay__input::-webkit-textfield-decoration-container {
  background-color: transparent;
}

.weui-wepay-pay__input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.weui-wepay-pay__input::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

.weui-wepay-pay__input::-webkit-input-placeholder {
  color: #eee;
}

.weui-wepay-pay__intro {
  margin-top: 14px;
  font-size: 12px;
  color: #9e9e9e;
}

.weui-wepay-pay__info {
  margin-top: 16px;
  font-size: 12px;
  text-align: center;
  color: #9e9e9e;
}

.weui-wepay-pay__btn {
  margin-top: 12px;
}

.weui-wepay-logo-default {
  font-size: 16px;
}
</style>