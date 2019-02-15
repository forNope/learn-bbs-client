<template>
  <div class="wrapper">
    <div class="lds_spinner">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
    <x-mask />
  </div>
</template>

<script>
  import { XMask } from 'components'

  export default {
    name: 'loading',
    components: {XMask}
  }
</script>

<style lang="less" scoped>
  @keyframes lds_spinner {

    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
  
  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
  }
  
  .lds_spinner {
    .all-center;

    z-index: 999;
    width: 200px;
    height: 200px;
  }
  
  .text {
    display: inline-block;
    .all-center(absolute);

    margin-top: 100px;
    font-size: 1rem;
    color: white;
  }
  
  .lds_spinner div {
    position: absolute;
    top: 48px;
    left: 94px;
    width: 12px;
    height: 24px;
    background: #fdfdfd;
    -webkit-animation: lds_spinner linear 1s infinite;
    animation: lds_spinner linear 1s infinite;
    border-radius: 40%;
    -webkit-transform-origin: 6px 52px;
    transform-origin: 6px 52px;
  }
  
  .lds_spinner div:nth-child(1) {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-animation-delay: -0.916666666666667s;
    animation-delay: -0.916666666666667s;
  }
  
  .lds_spinner div:nth-child(2) {
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
    -webkit-animation-delay: -0.833333333333333s;
    animation-delay: -0.833333333333333s;
  }
  
  .lds_spinner div:nth-child(3) {
    -webkit-transform: rotate(60deg);
    transform: rotate(60deg);
    -webkit-animation-delay: -0.75s;
    animation-delay: -0.75s;
  }
  
  .lds_spinner div:nth-child(4) {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-animation-delay: -0.666666666666667s;
    animation-delay: -0.666666666666667s;
  }
  
  .lds_spinner div:nth-child(5) {
    -webkit-transform: rotate(120deg);
    transform: rotate(120deg);
    -webkit-animation-delay: -0.583333333333333s;
    animation-delay: -0.583333333333333s;
  }
  
  .lds_spinner div:nth-child(6) {
    -webkit-transform: rotate(150deg);
    transform: rotate(150deg);
    -webkit-animation-delay: -0.5s;
    animation-delay: -0.5s;
  }
  
  .lds_spinner div:nth-child(7) {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    -webkit-animation-delay: -0.416666666666667s;
    animation-delay: -0.416666666666667s;
  }
  
  .lds_spinner div:nth-child(8) {
    -webkit-transform: rotate(210deg);
    transform: rotate(210deg);
    -webkit-animation-delay: -0.333333333333333s;
    animation-delay: -0.333333333333333s;
  }
  
  .lds_spinner div:nth-child(9) {
    -webkit-transform: rotate(240deg);
    transform: rotate(240deg);
    -webkit-animation-delay: -0.25s;
    animation-delay: -0.25s;
  }
  
  .lds_spinner div:nth-child(10) {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
    -webkit-animation-delay: -0.166666666666667s;
    animation-delay: -0.166666666666667s;
  }
  
  .lds_spinner div:nth-child(11) {
    -webkit-transform: rotate(300deg);
    transform: rotate(300deg);
    -webkit-animation-delay: -0.083333333333333s;
    animation-delay: -0.083333333333333s;
  }
  
  .lds_spinner div:nth-child(12) {
    -webkit-transform: rotate(330deg);
    transform: rotate(330deg);
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }
</style>
