<template>
  <div
    :class="[
      'cardWrap',
      needShadow === 'n' ? 'cardWrapLine' : 'cardWrapShadow',
      needLine === 'n' ? 'noNeedLine' : '',
    ]"
    :style="{ marginBottom: noNeedMB === 'y' ? 0 + 'rpx' : 20 + 'rpx' }"
  >
    <div :class="['left', showLeft === 'off' ? 'hidden' : '']">
      <!-- 左侧图标 -->
      <span class="iicon">
        <slot name="leftCom"></slot>
      </span>
    </div>
    <div class="right" @click="showDetail(itemData)">
      <!-- 这是上方标题位置显示的东西 目前是针对了几种情况-->
      <div class="bigTitle">
        <i class="icon iconfont" v-html="iconData" style="font-size: 40rpx"></i>
        <span class="dataNumber">{{ dataNumber }}</span>
        <div class="titleCapsule">
          <slot name="capsule"></slot>
        </div>
        <div class="titleButton">
          <slot name="button"></slot>
        </div>
      </div>
      <!-- 这里面用于存放一行行的表单 -->
      <div
        :class="needBackground === 'y' ? 'needBackground' : ''"
      >
        <slot></slot>
      </div>
    </div>
    <!-- 是否展示去详情页的小箭头 isShow  on/off -->
    <div
      class="toDetail"
      v-if="isShow === 'on'"
      :style="{ top: TOP === 'y' ? '30rpx' : '50%' }"
    >
      <u-icon
        name="arrow-right"
        size="40"
        style="color: rgba(0, 0, 0, 0.3)"
      ></u-icon>
    </div>
  </div>
</template>
<style scoped lang="scss" scoped>
.noNeedLine {
  border-bottom: none !important;
}
.hidden {
  display: none;
}
.cardWrapShadow {
  box-shadow: 0 4rpx 10rpx rgba(0, 0, 0, 0.2);
}
.cardWrapLine {
  border-bottom: 1rpx solid rgba(0, 0, 0, 0.25);
}
.cardWrap {
  padding:10rpx 40rpx 20rpx 40rpx;
  background: #fff;
  overflow: hidden;
  display: flex;
  position: relative;
  border-radius: 8rpx;
  .left {
    width: 50rpx;
    font-size: 40rpx;
    margin-right: 28rpx;
    text-align: center;
    .iicon {
      display: block;
      width: 80rpx;
      height: 100%;
      border-radius: 50%;
      color: #19d9d7;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 80rpx;
        color: #19d9d7;
      }
    }
  }
  .right {
    flex: 1;
    position: relative;
    .needBackground {
      background: rgba(0, 0, 0, 0.05);
      padding:15rpx 20rpx 10rpx 20rpx;
      margin: 0 0 15rpx 0;
    }
    .bigTitle {
      height: 76rpx;
      line-height: 76rpx;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 36rpx;
      margin-bottom: 12rpx;
      border-bottom: 1rpx solid rgba(0, 0, 0, 0.1);
      position: relative;
      i {
        color: #19d9d7;
        float: left;
      }
      .dataNumber {
        max-width: 380rpx;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 30rpx;
        font-weight: bold;
        margin-left: 10rpx;
        float: left;
      }
      .titleCapsule {
        position: absolute;
        top: 10rpx;
        right: 40rpx;
      }
      .titleButton{
        position: absolute;
        top: 13rpx;
        right: 0rpx;
      }
    }
    .special {
      padding: 0 68rpx 0 0;
    }
  }
  .line {
    width: calc(100% - 56rpx);
    height: 2rpx;
    background: rgba(0, 0, 0, 0.1);
    position: absolute;
    left: 28rpx;
    bottom: 0;
    left: 28rpx;
  }
  .toDetail {
    width: 40rpx;
    height: 40rpx;
    text-align: center;
    line-height: 40rpx;
    color: rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 50%;
    right: 28rpx;
  }
}
</style>
