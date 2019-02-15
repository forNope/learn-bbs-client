<template>
  <div class="xt-wrapper">
    <pre
      ref="mirror"
      :style="{fontSize, fontWeight}"
      class="xt-mirror"
    >占位</pre>
    <textarea
      ref="input"
      :style="{fontSize, fontWeight}"
      :maxlength="maxlength"
      :placeholder="placeholder"
      class="xt-input"
      @input="syncMirror"
    />
  </div>
</template>

<script>
  export default {
    name: 'x-textarea',
    props: {
      fontSize: {
        type: String,
        default: '0.6rem'
      },
      fontWeight: {
        type: Number,
        default: 400
      },
      maxlength: {
        type: String,
        default: void 0
      },
      placeholder: {
        type: String,
        default: ''
      }
    },
    methods: {
      syncMirror (e) {
        const mirror = this.$refs.mirror
        mirror[mirror.hasOwnProperty('textContent') ? 'textContent' : 'innerText'] = e.target.value || '占位'
      },
      getContent () {
        return this.$refs.input.value
      },
      getInstance () {
        return this.$refs.input
      }
    }
  }
</script>

<style lang="less" scoped>
  .xt-wrapper {
    position: relative;
  }
  
  .xt-mirror, .xt-input {
    white-space: pre-wrap;
    word-break: break-word;
  }
  
  .xt-mirror {
    display: block;
    visibility: hidden;
    width: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
  }
  
  .xt-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    resize: none;
    overflow: hidden;
    
    &::-webkit-input-placeholder {
      text-align: center;
    }
    
    &:-moz-placeholder { /* Firefox 18- */
      text-align: center;
    }
    
    &::-moz-placeholder { /* Firefox 19+ */
      text-align: center;
    }
    
    &:-ms-input-placeholder {
      text-align: center;
    }
  }
</style>
