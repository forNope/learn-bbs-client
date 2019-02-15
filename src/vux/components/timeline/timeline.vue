<template>
	<div class="vux-timeline">
		<ul>
			<slot></slot>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'timeline',
  props: {
    color: String,
    isShowIcon: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    setChildProps () {
      if (!this.$children) return
      const len = this.$children.length
      this.$children.forEach((child, index) => {
        child.isLast = index === len - 1
        child.isFirst = index === 0
      })
    }
  }
}
</script>

<style lang="less">
@import '../../styles/variable.less';

.vux-timeline {
  padding: 1rem;
}

.vux-timeline > ul > li {
  list-style: none;
}

@vux-timeline: ~'vux-timeline';

.@{vux-timeline} {

  &-item {
    position: relative;
  }

  &-item-content {
    padding: 0 0 1.5rem 1.2rem;
  }

  &-item-head, &-item-head-first {
    position: absolute;
    z-index: 99;
    content: '';
    border-radius: 99px;
  }

  &-item-head {
top: 4px;
    left: 1px;
    width: 10px;
    height: 10px;
  }

  &-item-head-first {
top: 5px;
    left: -4px;
    width: 20px;
    height: 20px;
  }

  &-item-tail {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 2px;
    height: 100%;
    background-color: @timeline-item-bg-color;
    content: '';
  }

  &-item-checked {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    width: 20px;
    height: 20px;

    &.weui-icon-success-no-circle::before {
      position: absolute;
      top: 3px;
      left: 3px;
      margin: 0 !important;
      font-size: 14px;
      color: #fff;
    }
  }
}

.vux-timeline-item-color {
  background-color: @timeline-item-bg-color;
}
</style>
