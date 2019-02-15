<template>
  <div id="app" class="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
  import {URLSearchParams} from 'utils'

  export default {
    name: 'app', 
    data: () => ({
      loginComplete: false
    }),
    beforeCreate () { 
      const BBSList = ['#/', '#/welcome', '#/protocol']
      const teasingList = ['#/platform', '#/teasing-index', '#/teasing-protocol']
      
      if (!localStorage.getItem('userInfo')) localStorage.setItem('userInfo', JSON.stringify({}))

      if (location.href.indexOf('code=') === -1) {
        window.logback()
      } else {        
        const params = new URLSearchParams(location.search)
      
        this
          .$service
          .login(params.get('code'))
          .allOk(user => {
            localStorage.setItem('userInfo', JSON.stringify(user))
            this.loginComplete = true
          })
          .complete((res) => {
            axios.post('/api/v1/admins/errorlog', {
              errorMessage: `login compelet, response: ${JSON.stringify(res)}`
            })
            try {
              const user = JSON.parse(localStorage.getItem('userInfo'))
              if (BBSList.indexOf(location.hash) !== -1 && user.isAgreeBBSProtocol) this.$router.push('/categories')
              if (teasingList.indexOf(location.hash) !== -1 && user.isAgreeTeasingsProtocol) this.$router.push('/teasings')
            } catch (e) {}
          })
          .lock()
      }
    }
  }
</script>

<style lang="less" scoped>
.app {
  background-color: black;
  z-index: 1;
}

.route_enter_active,
.route_leave_active {
  transition: transform 0.5s;
}

.route_enter {
  transform: translateX(100%);
}

.route_enter_to {
  transform: translateX(0);
}

.route_leave {
  transform: translateX(0);
}

.route_leave_to {
  transform: translateX(-100%);
}
</style>
