<template>
  <div class="wrapper">
    <div class="top_wrapper">
      <div class="top" />
    </div>

    <div class="word_wrapper">
      <router-link class="word" to="/teasings">
        开始定制专属吐槽
      </router-link>
    </div>

    <div class="bottom_wrapper">
      <div class="bottom" />
    </div>
  </div>
</template> 

<script>
  export default {
    name: 'teasing-index'
  }
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #000;

  > div {
    min-height: 0;
  }
}

.top_wrapper {
  flex: 1.8;
  width: 100%;
}

.top {
  .horizon-center;

  position: absolute;
  width: 55%;
  height: 100%;
  background: url(~assets/bottle1-test.png) no-repeat 0 104% / cover;
}

.word_wrapper {
  flex: 1.6;
}

.word {
  .all-center(absolute);

  padding-bottom: 5px;
  border-bottom: 2px solid #00baff;
  font-size: 0.9rem;
  font-weight: bold;
  white-space: nowrap;
  color: #00baff;
}

.bottom_wrapper {
  flex: 6.2;
  width: 100%;
}

.bottom {
  .horizon-center;

  position: absolute;
  width: 55%;
  height: 100%;
  background: url(~assets/bottle2-test.png) no-repeat 0 0 / cover;
  // flex: 6.2;
  // position: absolute;
  // bottom: 0;
  // left: 0;
  // transform: translateX(-0.1rem);
  // width: 100%;
  // height: 70%;

  // background: url(assets/bottle2-test.png) no-repeat 0 0 / cover;
  // background: url(assets/bottle2-test.png) no-repeat 56% 0;
  // background-size: 55% auto;
}
</style>
