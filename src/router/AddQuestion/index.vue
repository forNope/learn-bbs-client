<template>
  <div class="bg">
    <div class="head">
      <div class="add">
        <b>添加问题</b>
      </div>
      <div class="release" @click="release">
        发布
      </div>
      <div class="title">
        标题
      </div>
      <div class="teasing">
        吐槽
      </div>
    </div>
    
    <div class="input-box">
      <textarea v-model="content" class="input" placeholder="吐出你想对全世界吐槽的话" />
    </div>
    
    <div class="bottom">
      <checkbox id="anonymous" v-model="anonymous" class="box" />
      <label for="anonymous">匿名发布</label>
    </div>
    
    <bottom-dialog
      ref="dialog"
      :maskClosable="false"
      class="aq-dialog"
    >
      <template slot="dialog">
        <div class="dialog">
          <button class="dialog-close" data-role="cancel">X</button>
          <div class="dialog-title">
            <p>恭喜您的吐槽</p>
            <p>已被答案之酒接收</p>
          </div>
          <div class="dialog-share">
            <p>分享到</p>
            <hr>
            <share>
              <icon class="dialog-icon" type="share-pyq" />
              <icon class="dialog-icon" type="wechat" />
              <icon class="dialog-icon" type="qzone" />
              <icon class="dialog-icon" type="weibo" />
            </share>
          </div>
          <router-link class="dialog-link" to="/teasings">
            查看热门吐槽
          </router-link>
        </div>
      </template>
    </bottom-dialog>
  </div>
</template>

<script>
  import { Share, Checkbox, BottomDialog, Icon } from 'components'
  import { message } from 'utils'

  export default {
    name: 'index',
    components: {Share, Checkbox, BottomDialog, Icon},
    data: () => ({
      content: '',
      anonymous: false
    }),
    methods: {
      release () {
        const content = this.content

        if (!content) {
          message.error('内容不可为空')
          return
        }
        
        this.$service
          .releaseTeasing({
            content,
            anonymous: document.querySelector('#anonymous').checked
          })
          .allOk(() => {
            this.$refs.dialog.show()
            this.content = ''
          })
          .catch(() => {
            message.error('网络异常')
          })
      }
    }
  }
</script>

<style lang="less" scoped>
  .aq-dialog {
    /deep/ [data-role="dialog"] {
      background-color: transparent;
    }
    
    /deep/ .dialog {
      .horizon-center;
      top: 0;
      padding: 1rem 2rem;
      width: 90%;
      border-radius: 1rem 1rem 0 0;
      font-weight: 900;
      color: gray;
      background-color: white;
    }
    
    /deep/ .dialog-close {
      position: absolute;
      top: 10px;
      left: 20px;
      font-size: 0.8rem;
    }
    
    /deep/ .dialog-title {
      margin: 1rem 0;
      letter-spacing: 3px;
      text-align: center;
      font-weight: 900;
      font-size: 1rem;
    }
    
    /deep/ .dialog-share {
      text-align: center;
      font-size: 0.9rem;
    }
    
    /deep/ .dialog-icon {
      margin-right: 0.3rem;
      width: 1.8rem;
      height: 1.8rem;
    }
    
    /deep/ .dialog-link {
      display: block;
      margin-top: 1rem;
      padding: 0.25rem;
      width: 100%;
      border-radius: 0.5rem;
      text-align: center;
      color: white;
      background-color: @pink;
    }
  }
  
  .bg {
    width: 100%;
    height: 100%;
    background: #fff;
    
    .head {
      width: 100%;
      height: 5.5rem;
      background: #f9bac5;
      
      .add,
      .release,
      .title,
      .teasing {
        display: inline-block;
        float: left;
        width: 6rem;
        height: 1.5rem;
        margin-top: 1rem;
        font-size: 1.2rem;
        line-height: 1.5rem;
        text-align: center;
        color: #fff;
      }
      
      .release {
        float: right;
        width: 3rem;
        font-size: 0.7rem;
      }
      
      .title,
      .teasing {
        width: 3rem;
        margin-top: 3.2rem;
        font-size: 0.7rem;
      }
      
      .title {
        margin-left: -6.3rem;
      }
      
      .teasing {
        margin-left: -2.9rem;
      }
    }
    
    .input-box {
      display: inline-block;
      width: 98%;
      height: 18rem;
      margin-top: 1rem;
      .horizon-center;
      
      textarea {
        padding: 0 0.5rem;
        width: 100%;
        height: 100%;
        font-size: 1rem;
      }
    }
    
    .bottom {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 3rem;
      font-size: 1rem;
      line-height: 3rem;
      background: #bfbfbf;
      
      .box {
        display: inline-block;
        float: left;
        width: 1rem;
        height: 1rem;
        margin-top: 1rem;
        margin-left: 1rem;
        background: #bfbfbf;
      }
      
      label {
        float: left;
        margin-left: 0.2rem;
      }
    }
  }
</style>
