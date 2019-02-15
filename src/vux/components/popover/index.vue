<template>
  <div v-click-outside="onClickedOutside">
    <span ref="trigger" @click="toggle">
      <slot>
      </slot>
    </span>
    <div
      class="vux-popover"
      v-transfer-dom
      ref="popover"
      :style="popoverStyle"
      v-show="show">
        <div :class="arrowClass"></div>
        <div @click="$emit('on-click-content')">
          <slot name="content">
            <div v-html="content"></div>
          </slot>
        </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from '../../directives/click-outside'
import TransferDom from '../../directives/transfer-dom'

export default {
  name: 'popover',
  mounted () {
    this.$nextTick(() => {
      this.init()
      window.addEventListener('resize', this.reset)
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.reset)
  },
  directives: {
    TransferDom,
    ClickOutside
  },
  props: {
    content: String,
    placement: String,
    gutter: {
      type: Number,
      default: 5
    }
  },
  methods: {
    reset () {
      if (this.show) {
        this.init(true)
      }
    },
    init (isReset) {
      const trigger = this.$refs.trigger.children[0]
      const popover = this.$refs.popover
      switch (this.placement) {
        case 'top' :
          this.position.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2
          this.position.top = trigger.getBoundingClientRect().top - popover.offsetHeight - this.gutter
          break
        case 'left':
          this.position.left = trigger.offsetLeft - popover.offsetWidth - this.gutter
          this.position.top = trigger.getBoundingClientRect().top + trigger.offsetHeight / 2 - popover.offsetHeight / 2
          break
        case 'right':
          this.position.left = trigger.offsetLeft + trigger.offsetWidth + this.gutter
          this.position.top = trigger.getBoundingClientRect().top + trigger.offsetHeight / 2 - popover.offsetHeight / 2
          break
        case 'bottom':
          this.position.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2
          this.position.top = trigger.getBoundingClientRect().top + trigger.offsetHeight + this.gutter
          break
        default:
          console.warn('Wrong placement prop')
      }
      if (!isReset) {
        this.show = false
      }

      this.popoverStyle = {
        top: this.position.top + 'px',
        left: this.position.left + 'px',
        display: isReset ? this.popoverStyle.display : 'none'
      }
    },
    onClickedOutside () {
      if (this.show) {
        this.show = false
        this.$emit('on-hide')
      }
    },
    toggle () {
      this.show = !this.show
      if (this.show) {
        this.$nextTick(() => {
          this.init(true)
        })
      }
      this.$emit(`on-${this.show === true ? 'show' : 'hide'}`)
    }
  },
  data () {
    return {
      position: {
        top: 0,
        left: 0
      },
      show: true,
      popoverStyle: {}
    }
  },
  computed: {
    arrowClass () {
      return {
        'vux-popover-arrow': true,
        'vux-popover-arrow-up': this.placement === 'bottom',
        'vux-popover-arrow-right': this.placement === 'left',
        'vux-popover-arrow-left': this.placement === 'right',
        'vux-popover-arrow-down': this.placement === 'top'
      }
    }
  }
}
</script>

<style lang="less">
@import '../../styles/variable.less';

.vux-popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 500;
  color: @popover-font-color;
  background-color: @popover-bg-color;
  border-radius: @popover-border-radius;
}

.vux-popover-arrow {
  position: absolute;
  width: 0;
  height: 0;
}

.vux-popover-arrow-up {
  transform: translateX(-50%);
  top: -@popover-border-width;
  left: 50%;
  border-right: @popover-border-width solid transparent;
  border-bottom: @popover-border-width solid @popover-bg-color;
  border-left: @popover-border-width solid transparent;
}

.vux-popover-arrow-down {
  transform: translateX(-50%);
  bottom: -@popover-border-width;
  left: 50%;
  border-top: @popover-border-width solid @popover-bg-color;
  border-right: @popover-border-width solid transparent;
  border-left: @popover-border-width solid transparent;
}

.vux-popover-arrow-left {
  transform: translateY(-50%);
  top: 50%;
  left: -@popover-border-width;
  border-top: @popover-border-width solid transparent;
  border-right: @popover-border-width solid @popover-bg-color;
  border-bottom: @popover-border-width solid transparent;
}

.vux-popover-arrow-right {
  transform: translateY(-50%);
  top: 50%;
  right: -@popover-border-width;
  border-top: @popover-border-width solid transparent;
  border-bottom: @popover-border-width solid transparent;
  border-left: @popover-border-width solid @popover-bg-color;
}
</style>
