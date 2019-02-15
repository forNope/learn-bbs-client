<template>
  <div class="vux-button-group">
    <slot></slot>
  </div>
</template>

<script>
import { parentMixin } from '../../mixins/multi-items'

export default {
  name: 'button-tab',
  mixins: [parentMixin],
  props: {
    height: Number
  }
}
</script>

<style lang="less">
@import '../../styles/variable.less';
@import '../../styles/reddot.less';
@import '../../styles/1px.less';

.setLineWithoutRight(@c: #C7C7C7) {
  position: absolute;
  transform: scale(0.5);
  top: 0;
  left: 0;
  z-index: 1;
  width: 200%;
  height: 1px;
  height: 200%;
  border-top: 1px solid @c;
  border-bottom: 1px solid @c;
  border-left: 1px solid @c;
  color: @c;
  content: ' ';
  transform-origin: left top;
}

.setLineWithoutLeft(@c: #C7C7C7) {
  position: absolute;
  transform: scale(0.5);
  top: 0;
  left: 0;

  /* #2322 */
  z-index: 1;
  width: 200%;
  height: 1px;
  height: 200%;
  border-top: 1px solid @c;
  border-right: 1px solid @c;
  border-bottom: 1px solid @c;
  border-left: none;
  color: @c;
  content: ' ';
  transform-origin: left top;
}

.setLineMiddle(@c: #C7C7C7) {
  position: absolute;
  transform: scale(0.5);
  top: 0;
  left: 0;
  z-index: 1;
  width: 200%;
  height: 1px;
  height: 200%;
  border-top: 1px solid @c;
  border-right: 1px solid @c;
  border-bottom: 1px solid @c;
  border-left: none;
  color: @c;
  content: ' ';
  transform-origin: left top;
}

.vux-button-group {
  -webkit-touch-callout: none;

  & {
    display: box;
    display: flex;
  }

  & > a.vux-button-tab-item-last {
    border-top-right-radius: @button-tab-border-radius * 2;
    border-bottom-right-radius: @button-tab-border-radius * 2;

    &::after {
      border-top-right-radius: @button-tab-border-radius * 2;
      border-bottom-right-radius: @button-tab-border-radius * 2;
      .setLineWithoutLeft(@button-tab-default-border-color);
    }
  }

  & > a.vux-button-tab-item-first {
    border-top-left-radius: @button-tab-border-radius * 2;
    border-bottom-left-radius: @button-tab-border-radius * 2;

    &::after {
      border-top-left-radius: @button-tab-border-radius * 2;
      border-bottom-left-radius: @button-tab-border-radius * 2;
      .setLine(@button-tab-default-border-color);
    }
  }

  & > a.vux-button-tab-item-middle {

    &::after {
      .setLineWithoutLeft(@button-tab-default-border-color);
    }
  }

  & > a {
    display: block;
    position: relative;
    width: 100%;
    height: @button-tab-height;
    padding: 0;
    font-size: 14px;
    line-height: @button-tab-line-height;
    text-align: center;
    white-space: nowrap;
    color: @button-tab-default-text-color;
    background: @button-tab-default-background-color;
    flex: 1;
    -webkit-tap-highlight-color: rgba(255, 0, 0, 0);

    &::after {
      background-clip: padding-box;
      box-sizing: border-box;
    }
  }

  & > a.vux-button-group-current {
    color: @button-tab-active-text-color;
    background: @button-tab-active-background-color;
  }

  & > a.vux-button-group-current:disabled,
  & > a:disabled {
    border-color: #cdcdcd;
    color: #aaa;
    background: #e5e5e5;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);
  }
}

</style>
