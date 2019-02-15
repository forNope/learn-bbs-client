<template>
  <div class="ts-item-wrapper">
    <div class="ts-item-name">
      <b>{{ author.nickname }}</b> 
    </div>
    <div class="ts-item-content">
      {{ content }}
    </div>
    <div class="ts-item-line" />
    <div class="ts-item-bottom">
      <div :class="['ts-item-lips', active ? 'active' : null]" @click="agree" />
      <span :class="['ts-item-lips_name', active ? 'active' : null]">{{ nextAgreeName }}</span>
      <!-- <span class=ts-item-answer">{{ answerNum }}个回答</span> -->
    </div>
  </div> 
</template>

<script>
  export default {
    name: 'item',
    inheritAttrs: false,
    props: {
      id: {
        type: [Number, String],
        required: true
      },
      author: {
        type: Object,
        required: true
      },
      content: {
        type: String,
        required: true
      },
      agreeName: {
        type: String,
        default: ''
      }
    },
    data: vm => ({
      nextAgreeName: vm.agreeName,
      active: false
    }),
    methods: {
      agree () {
        this.$service.agreeTeasing({ id: this.id }).allOk(() => {
          this.active = true
          this.nextAgreeName = JSON.parse(
            localStorage.getItem('userInfo')
          ).nickname
        })
      }
    }
  }
</script>

<style lang="less" scoped>
.ts-item-wrapper {
  width: 100%;
  padding: 0.4rem;
  margin-bottom: 0.5rem;
  border: 2px solid #bfbfbf;
  border-radius: 0.4rem;
}

.ts-item-line {
  height: 2px;
  margin-top: 0.1rem;
  background: #bfbfbf;
}

.ts-item-content {
  font-size: 0.8rem;
  color: gray;
}

.ts-item-bottom {
  display: flex;
  align-items: center;
}

@keyframes scale {
  from {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
  to {
    transform: scale(1);
  }
}

.ts-item-lips.active,
.ts-item-lips_name.active {
  animation: scale 1s;
}

.ts-item-lips {
  display: inline-block;
  width: 1.5rem;
  height: 2rem;
  background: url(~assets/lips.png) no-repeat 0 0 / cover;
}

.ts-item-name {
  max-width: 100%;
  font-size: 0.8rem;
}

.ts-item-lips_name,
.ts-item-answer {
  max-width: 40%;
}

.ts-item-name,
.ts-item-lips_name,
.ts-item-answer {
  font-size: 0.8rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.ts-item-answer {
  position: absolute;
  right: 0;
  color: gray;
}
</style>
