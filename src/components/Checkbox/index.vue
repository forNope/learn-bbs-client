<template>
  <label class="cb-checkbox">
    <slot />
    <input
      ref="checkbox"
      :id="id"
      :value="value"
      type="checkbox"
      @change="checked = $event.target.checked"
    >
    <span class="cb-checkmark" />
  </label>
</template>

<script>
  export default {
    name: 'checkbox',
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      value: {
        type: String,
        default: ''
      },
      id: {
        type: String,
        default: void 0
      },
      defaultChecked: {
        type: Boolean,
        default: false
      }
    },
    data: vm => ({
      checked: vm.defaultChecked
    }),
    methods: {
      getInstance () {
        return this.$refs.checkbox
      }
    }
  }
</script>

<style lang="less" scoped>
@size: 0.8rem;
@checked-color: white;
@checked-size: 3px;

.cb-checkbox {
  display: block;
  position: relative;
  margin-bottom: 0.55rem;
  padding-left: @size + 0.2;
  font-size: @size;
  font-weight: 700;
  line-height: @size;
  cursor: pointer;
  user-select: none;

  input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
  }

  input:checked ~ .cb-checkmark {
    background-color: #2196f3;

    &::after {
      display: block;
    }
  }
}

.cb-checkmark {
  position: absolute;
  top: 0;
  left: 0;
  width: @size;
  height: @size;
  overflow: hidden;
  background-color: #eee;

  &::after {
    display: none;
    position: absolute;
    transform: translate(-50%, -50%) rotate(45deg);
    top: 50%;
    left: 50%;
    width: (@size / 2) - 0.15;
    height: ((@size / 2) - 0.15) * 2;
    border: solid @checked-color;
    border-width: 0 @checked-size @checked-size 0;
    content: "";
  }
}
</style>
