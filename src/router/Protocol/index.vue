<template>
  <div class="pt-wrapper">
    <change-img-color
      :src="require('assets/logo-title.svg')"
      class="logo"
      color="white"
    />
    <div class="protocol">
      <div class="protocol-header">
        <b>?</b>
        <h4 class="title">烦恼论坛特别说明</h4>
      </div>
      <div class="protocol-footer">
        <div class="fixed square cover" />
        <div class="fixed square cover" />
        <div
          class="fixed agreement"
          @touchstart="agreeProtocol"
        >
          <div class="square" />
          <div class="agree-text">
            <p>您已阅读并同意以上协议内容,</p>
            <p>同意遵守上述的协议参与本次活动</p>
          </div>
        </div>
        <div class="fixed square cover" />
        <div class="content">
          <div>
            &nbsp;&nbsp;答案之酒吐槽平台
            致力于提供一个由用户创造高质量内容的问答社区。为了保护用户创造的内容、维护良好的社区氛围，答案之酒吐槽平台团队和答案之酒吐槽平台授权的社区管理员将依据答案之酒吐槽平台协议和本规范中的条款对注册答案之酒吐槽平台的用户和发布在答案之酒吐槽平台的内容进行管理。采取的措施包括但不限于更改或删除用户发布的内容、暂停或终止用户使用答案之酒吐槽平台的权利。
            所有有意的降低内容质量、伤害社区氛围的行为（下称「破坏」）都是不能容忍的。多数情况下社区中的其他用户会优先选择对破坏行为做出劝诫、建议和引导，答案之酒吐槽平台团队也会先发出警告并给予用户改正自己不当行为的机会，但不表示答案之酒吐槽平台团队在采取任何措施前必须首先发出警告。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ChangeImgColor } from 'components'

  export default {
    name: 'protocol',
    components: {ChangeImgColor},
    methods: {
      agreeProtocol () {
        this
          .$service
          .agreeBBSProtocol()
          .allOk(() => {
            this.$router.push('/categories')
          })
          .catch(err => {
            if (err.response && err.response.status === 404) window.logback()
            else this.$msg.error('网络异常')
          })
      }
    }
  }
</script>

<style lang="less" scoped>
  @protocol-radius: 12px;
  
  .pt-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 0.5rem 0;
    background-color: @black;
    flex-direction: column;
    
    > div {
      min-height: 0;
    }
  }
  
  .logo {
    width: 100%;
    height: 5rem;
  }
  
  .protocol {
    display: flex;
    z-index: 10;
    margin: 0.8rem 2rem;
    flex-direction: column;
    flex: 1;
    
    &::after {
      position: absolute;
      top: 8px;
      left: 10px;
      z-index: -1;
      width: 100%;
      height: 100%;
      border: 0.2rem solid @pink;
      content: "";
      border-radius: 15px;
      pointer-events: none;
    }
    
    > div {
      min-height: 0;
    }
  }
  
  .protocol-header {
    width: 100%;
    height: 3.1rem;
    margin: 0 auto;
    text-align: center;
    border-radius: @protocol-radius @protocol-radius 0 0;
    background-color: @pink;
    
    b {
      padding-right: 0.3rem;
      font-size: 2rem;
      line-height: 3.1rem;
    }
    
    .title {
      display: inline-block;
      font-size: 1.1rem;
      font-weight: 900;
      vertical-align: super;
    }
  }
  
  .protocol-footer {
    overflow: hidden;
    margin-top: 0.3rem;
    background-color: @pink;
    flex: 1;
    border-radius: 0 0 @protocol-radius @protocol-radius;
    
    .content {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      padding: 1.8rem 1.8rem 3rem;
      
      > div {
        height: 100%;
        overflow: auto;
        font-size: 0.6rem;
        font-weight: 900;
      }
    }
    
    .agreement {
      cursor: pointer;
      
      div {
        display: inline-block;
        height: 1rem;
      }
      
      p {
        transform: scale(0.9);
        font-size: 0.5rem;
        font-weight: 900;
        color: @black;
      }
      
      .agree-text {
        height: auto;
      }
    }
  }
  
  .square {
    &,
    &::after {
      width: 1rem;
      height: 1rem;
      border: 2px solid black;
    }
    
    &.cover::after {
      position: absolute;
      right: 0.1rem;
      bottom: 0.1rem;
      border: none;
      background-color: black;
      content: "";
    }
  }
  
  .fixed {
    position: absolute;
    z-index: 99;
  }
  
  .fixed:nth-child(1) {
    top: 0.8rem;
    left: 0.5rem;
  }
  
  .fixed:nth-child(2) {
    top: 0.8rem;
    right: 0.5rem;
  }
  
  .fixed:nth-child(3) {
    bottom: 0.8rem;
    left: 0.5rem;
  }
  
  .fixed:nth-child(4) {
    right: 0.5rem;
    bottom: 0.8rem;
  }
</style>
