<template>
  <div class="platform-wrapper">
    <div class="platform-title">
      <!--<img src="~assets/logo-title.svg">-->
    </div>
    
    <div class="platform-list">
      <div class="platform-item">
        <div class="platform-label">出生日期</div>
        <calendar
          v-model="date"
          class="platform-input"
          title=""
          disableFuture
        />
      </div>
      
      <div class="platform-item">
        <div class="platform-label">
          Age/年龄:
        </div>
        <input v-model="ages" class="platform-input" type="number">
      </div>
      
      <div class="platform-item">
        <div class="platform-label">
          Tel/电话:
        </div>
        <input v-model="phone" class="platform-input" type="number">
      </div>
    </div>
    
    <div class="platform-bottom" @click="next">
      NEXT 下一步
    </div>
  </div>
</template>

<script>
  import Calendar from 'vux/components/calendar'

  export default {
    name: 'index',
    components: {
      Calendar
    },
    data: () => ({
      date: void 0,
      ages: void 0,
      phone: void 0
    }),
    methods: {
      next () {
        window.date = this.date
        this.$service
          .completeUserInfo({
            birthday: new Date(this.date).getTime(),
            ages: +this.ages,
            phone: this.phone
          })
          .allOk(() => {
            this.$router.push('/teasing-protocol')
          })
      }
    }
  }
</script>

<style lang="less" scoped>
  .platform-wrapper {
    width: 100%;
    min-height: 100%;
    background: #eaeaea;
    overflow: hidden;
  }
  
  .platform-title {
    width: 100%;
    height: 8rem;
    background: url(~assets/logo-title.svg) no-repeat 0 0 / contain;
  }
  
  .platform-list {
    width: 100%;
    font-size: 0.8rem;
  }
  
  .platform-item {
    margin-bottom: 25px;
    padding: 0 1rem;
  }
  
  .platform-input {
    margin-top: 10px;
    width: 100%;
    min-height: 1.8rem;
    line-height: 1.8rem;
    font-size: 1rem;
    background: #dcdcdc;
    
    /deep/ .vux-cell-primary {
      text-align: left;
      color: black;
    }
  }
  
  .platform-bottom {
    .horizon-center;
    width: 70%;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    font-size: 1rem;
    color: #777;
    background-color: #f9bac5;
  }
</style>
