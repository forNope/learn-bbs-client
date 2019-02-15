<template>
  <div class="weui-wepay-flow" :class="{'weui-wepay-flow_vertical': orientation === 
  'vertical'}">
    <div class="weui-wepay-flow__bd">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'flow',
  props: {
    orientation: {
      type: String,
      default: 'horizontal'
    }
  }
}
</script>

<style lang="less">
@bubbleCorlor:#ff8a00;
.setBubbleCommon(@height,@backgroundColor,@fontSize,@color,@borderRadius) {
  position: relative;
  height: @height;
  padding: 0 6px;
  font-size: @fontSize;
  line-height: @height;
  white-space: nowrap;
  color: @color;
  background-color: @backgroundColor;
  border-radius: @borderRadius;

  &::after {
    display: inline-block;
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
    font-size: 0;
    content: '';
  }
}
.setBubblePrivate(@direction, @backgroundColor) when (@direction = top) {

  &::after {
    transform: translate(-50%, 0);
    bottom: -10px;
    left: 50%;
    border-width: 5px 3px;
    border-style: solid;
    border-color: @backgroundColor transparent transparent transparent;
  }
}
.setBubblePrivate(@direction, @backgroundColor) when (@direction = bottom) {

  &::after {
    transform: translate(-50%, 0);
    top: -10px;
    left: 50%;
    border-width: 5px 3px;
    border-style: dashed dashed solid dashed;
    border-color: transparent transparent @backgroundColor transparent;
  }
}
.setBubblePrivate(@direction, @backgroundColor) when (@direction = left) {

  &::after {
    transform: translate(0, -50%);
    top: 50%;
    right: -10px;
    border-width: 3px 5px;
    border-style: solid;
    border-color: transparent transparent transparent  @backgroundColor;
  }
}
.setBubblePrivate(@direction, @backgroundColor) when (@direction = right) {

  &::after {
    transform: translate(0, -50%);
    top: 50%;
    left: -10px;
    border-width: 3px 5px;
    border-style: solid;
    border-color: transparent @backgroundColor transparent transparent;
  }
}

.weui-wepay-flow,
.weui-wepay-flow-auto {
  padding: 40px;
}

.weui-wepay-flow__bd {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.weui-wepay-flow__li {
  position: relative;
  z-index: 1;
  width: 14px;
  height: 14px;

  .weui-wepay-flow__state {
    position: absolute;
    top: 0;
    left: 0;
    width: 14px;
    height: 14px;
    font-size: 10px;
    line-height: 14px;
    text-align: center;
    color: #fff;
    border-radius: 7px;
    box-sizing: border-box;
  }
}

.weui-wepay-flow__state {
  background-color: #e2e2e2;

  .weui-wepay-flow__li_done & {
    background-color: #09bb07;
  }
}

[class^='weui-wepay-flow__title-'],[class*=' weui-wepay-flow__title-'] {
  position: absolute;
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  color: #999;
}

.weui-wepay-flow__title-top {
  transform: translate(-50%, 0);
  bottom: 20px;
  left: 50%;

  .weui-wepay-flow__li_done & {
    color: #333;
  }
}

.weui-wepay-flow__title-bottom {
  transform: translate(-50%, 0);
  top: 20px;
  left: 50%;

  .weui-wepay-flow__li_done & {
    color: #333;
  }
}

.weui-wepay-flow__title-left {
  transform: translate(0, -50%);
  top: 50%;
  right: 30px;
  text-align: right;

  .weui-wepay-flow__li_done & {
    color: #333;
  }
}

.weui-wepay-flow__title-right {
  transform: translate(0, -50%);
  top: 50%;
  left: 30px;
  text-align: left;

  .weui-wepay-flow__li_done & {
    color: #333;
  }
}

[class^='weui-wepay-flow__intro-'],[class*=' weui-wepay-flow__intro-'] {
  .setBubbleCommon(20px,@bubbleCorlor,10px,#FFF,4px);
}

.weui-wepay-flow__intro-top {
  position: absolute;
  transform: translate(-50%, 0);
  bottom: 25px;
  left: 50%;
  .setBubblePrivate(top,@bubbleCorlor);
}

.weui-wepay-flow__intro-bottom {
  position: absolute;
  transform: translate(-50%, 0);
  top: 25px;
  left: 50%;
  .setBubblePrivate(bottom,@bubbleCorlor);
}

.weui-wepay-flow__intro-right {
  position: absolute;
  transform: translate(0, -50%);
  top: 50%;
  left: 36px;
  .setBubblePrivate(right,@bubbleCorlor);
}

.weui-wepay-flow__intro-left {
  position: absolute;
  transform: translate(0, -50%);
  top: 50%;
  right: 36px;
  .setBubblePrivate(left,@bubbleCorlor);
}

[class^='weui-wepay-flow__info-'] {
  position: absolute;
  .setBubbleCommon(14px,#09bb07,10px,#FFF,2px);

  .weui-wepay-flow__line_ing & {
    display: block;
  }
}

.weui-wepay-flow__info-top {
  display: none;
  transform: translate(-50%, 0);
  bottom: 11px;
  left: 50%;

  .weui-wepay-flow__line_ing & {
    display: block;
  }
  .setBubblePrivate(top,#09bb07);
}

.weui-wepay-flow__info-bottom {
  display: none;
  transform: translate(-50%, 0);
  top: 11px;
  left: 50%;

  .weui-wepay-flow__line_ing & {
    display: block;
  }
  .setBubblePrivate(bottom,#09bb07);
}

.weui-wepay-flow__info-left {
  display: none;
  transform: translate(0, -50%);
  top: 50%;
  right: 12px;

  .weui-wepay-flow__line_ing & {
    display: block;
  }
  .setBubblePrivate(left,#09bb07);
}

.weui-wepay-flow__info-right {
  display: none;
  transform: translate(0, -50%);
  top: 50%;
  left: 12px;

  .weui-wepay-flow__line_ing & {
    display: block;
  }
  .setBubblePrivate(right,#09bb07);
}

.weui-wepay-flow__line {
  position: relative;
  height: 3px;
  background-color: #e2e2e2;
  flex: 1;
}

.weui-wepay-flow__title {
  font-size: 14px;
  font-weight: normal;
  color: #999;
}

.weui-wepay-flow__info {
  font-size: 12px;
  color: #999;
}

.weui-wepay-flow__process {
  display: none;
  position: relative;
  height: 3px;
  background-color: #09bb07;

  .weui-wepay-flow__line_ing & {
    display: block;
    width: 50%;
  }

  .weui-wepay-flow__line_done & {
    display: block;
  }
}

.weui-wepay-flow_custom {

  .weui-wepay-flow__bd {
    justify-content: flex-start;
  }

  .weui-wepay-flow__line {
    flex: none;
    width: 100px;
  }
}

.weui-wepay-flow_vertical {

  .weui-wepay-flow__bd {
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
  }

  .weui-wepay-flow__line {
    width: 3px;
    height: auto;
  }

  .weui-wepay-flow__line_ing {

    .weui-wepay-flow__process {
      height: 50%;
    }
  }

  .weui-wepay-flow__process {
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
  }

  .weui-wepay-flow__line_done {

    .weui-wepay-flow__process {
      height: 100%;
    }
  }
}

.weui-wepay-flow_vertical-custom {

  .weui-wepay-flow__bd {
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
  }

  .weui-wepay-flow__line {
    width: 3px;
    flex: none;
  }

  .weui-wepay-flow__line_ing {

    .weui-wepay-flow__process {
      height: 50%;
    }
  }

  .weui-wepay-flow__process {
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
  }

  .weui-wepay-flow__line_done {

    .weui-wepay-flow__process {
      height: 100%;
    }
  }
}

.weui-wepay-flow-auto {
  position: relative;
}

.weui-wepay-flow-auto__bd {
  position: relative;
}

.weui-wepay-flow-auto__state {
  position: absolute;
  top: 4px;
  left: 0;
  z-index: 2;
  width: 14px;
  height: 14px;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  color: #fff;
  background-color: #e2e2e2;
  border-radius: 7px;
}

.weui-wepay-flow-auto__state_on {
  background-color: #09bb07;
}

.weui-wepay-flow-auto__line {
  position: absolute;
  top: 10px;
  bottom: -4px;
  left: 6px;
  z-index: 1;
  z-index: 1;
  width: 2px;
  background-color: #ddd;
}

.weui-wepay-flow-auto__line_on {
  background-color: #09bb07;
}

.weui-wepay-flow-auto__li {
  position: relative;
  padding-bottom: 20px;
  padding-left: 30px;
}

.weui-wepay-flow-auto__title {
  font-size: 14px;
  font-weight: normal;
  color: #999;
}

.weui-wepay-flow-auto__info {
  font-size: 12px;
  color: #999;
}
</style>