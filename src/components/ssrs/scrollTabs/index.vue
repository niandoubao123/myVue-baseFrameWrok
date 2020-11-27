<template>
  <div :class="['main', 'mains']" :style="{height:cancelBottomHeight==='y'?'100vh':''}">
    <!-- 只能有一个根元素 -->
    <div
      class="tabsBgs"
      :style="{ backgroundImage: bgImg ? `url(${bgImg})` : '', backgroundSize: 'cover',}"
    >
      <p
        class="poTitle"
        v-if="bgColor"
        :style="{ height: navBar + 'px', lineHeight: navBar + 'px', top: statusBar + 'px' }"
      >
        {{ title }}
      </p>
      <div class="divider" v-if="bgColor" :style="{height:titleHeight?titleHeight+'rpx':'140rpx'}"></div>
      <div
        class="tabs"
      >
        <div class="tabs-line" v-if="!bgColor"></div>
        <u-tabs
          :bar-width="barWidth ? barWidth : 150"
          :height="Height ? Height : 60"
          :bar-height="barHeight ? barHeight : 6"
          :bar-style="{ background: '#19D9D7', zIndex: 99, borderRadius: 20 + 'rpx' }"
          :bold="true"
          name="name"
          is-scroll="true"
          ref="tabs"
          :bg-color="bgColor ? bgColor : '#fff'"
          @change.stop="change"
          :list="lists"
          :active-color="'rgba(0,0,0,0.8)'"
          :inactive-color="'rgba(0,0,0,0.45)'"
          font-size="28"
          :current="currents"
        ></u-tabs>
      </div>
      <slot v-if="$slots.search" name="search" class="search"></slot>
    </div>
    <div
      @touchstart="handleTouchstart"
      @touchend="handleTouchend"
      class="slotWrap"
    >
      <slot></slot>
    </div>
  </div>
</template>
<style scoped lang="scss">
.mains {
  background: #fff;
}
.main {
  width: 100%;
  overflow: hidden;
  height: calc(100vh - 96rpx);
  position: fixed;
  display: flex;
  flex-direction: column;
  .tabsBgs {
    width: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    .poTitle {
      width: 100%;
      position: absolute;
      left: 0;
      color: rgba(0, 0, 0, 1);
      text-align: center;
      font-size: 30rpx;
    }
    .divider {
      // flex:1;
    } 
    .tabs {
      width: 100%;
      position: relative;
      border-top: 1rpx solid rgba(0, 0, 0, 0.1);
      padding-top: 5rpx;
      .tabs-line {
        width: 100%;
        height: 1px;
        background: rgba(0, 0, 0, 0.1);
        position: absolute;
        bottom: -7rpx;
        left: 0;
      }
    }
    .search {
      height: 30rpx;
    }
  }
  .slotWrap {
    overflow: auto;
    width: 100%;
    height: 100%;
    flex:1;
  }
}
</style>
