<template>
  <div
    :class="[
      'line',
      noNeedLine === 'y' ? 'hiddenLine' : '',
      needTopLine === 'y' ? 'needTopLine' : ''
    ]"
    @click="toPage"
  >
    <div class="AAB">
      <span class="req" v-if="req"></span>
      <label :style="{fontWeight:!req?'normal':'bold'}" :class="[noChange === 'y' ? 'noChange' : '',]">
        {{ label }}
      </label>
    </div>
    <div class="slotWrap">
      <slot></slot>
      <span class="numbers" v-if="wordOne">{{ wordOne ? wordOne : "" }}</span>
      <span
        class="numbers"
        v-if="NUMBER"
        >{{ NUMBER !== null ? NUMBER : _placeholder }}</span
      >
      <span class="numbers" v-if="wordTwo">{{ wordTwo ? wordTwo : "" }}</span>
      <u-icon
        v-if="!noNeedIcon"
        name="arrow-right toDetail"
        size="40"
        style="color: rgba(0, 0, 0, 0.3)"
      ></u-icon>
    </div>
  </div>
</template>
<style scoped lang="scss">
.hiddenLine {
  border-bottom: none !important;
}
.needTopLine {
  border-top: 1rpx solid rgba(0, 0, 0, 0.1);
}
.line {
  height: 89rpx;
  color: rgba(0, 0, 0, 1);
  border-bottom: 1rpx solid rgba(0, 0, 0, 0.1);
  position: relative;
  width: 100%;
  box-sizing: content-box;
  label {
    width: auto;
    padding: 0;
    font-size: 30rpx;
    // word-break:keep-all;
    // white-space:nowrap;
    float: left;
  }
  .AAB {
    position: relative;
    float: left;
    height: 89rpx;
    line-height: 89rpx;
    .req {
      width: 8rpx;
      height: 50rpx;
      background: #19D9D7;
      margin-right: 20rpx;
      margin-top: 22rpx;
      border-radius: 10rpx;
      float: left;
    }
    .noChange {
      color: rgba(0, 0, 0, 0.4) !important;
    }
  }
  .slotWrap {
    height: 89rpx;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 30rpx;
    .numbers {
      display: flex;
      min-width: 40rpx;
      height: 40rpx;
      text-align: center;
      align-items: center;
      font-size: 30rpx;
      color:rgba(0,0,0,0.4);
    }
  }
}
</style>
