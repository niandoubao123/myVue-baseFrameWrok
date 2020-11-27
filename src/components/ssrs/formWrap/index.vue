<template>
  <div :class="['line',noNeedLine==='y'?'hiddenLine':'',needTopLine==='y'?'needTopLine':'']" :style="{height:slotHeight?slotHeight+'rpx':''}">
    <div class="AAB" :style="{width:WIDTH?WIDTH+'rpx':255+'rpx'}">
      <label :class="[noChange==='y'?'noChange':'']">
        {{label}}
      </label>
      <div class="Toasts" v-if="needTotast==='y'">
        <div class="toasts"  @click.stop="toast">
          <u-icon name="question-circle" class="ques"></u-icon>
          <div :class="['msgBox',toastData.input.isShow===true?'':'hidden']" :style="{left:LEFT?-LEFT+'rpx':-20+'rpx',top:TOP?-TOP+'rpx':50+'rpx',width:WIDTH?WIDTH+'rpx':400+'rpx'}">
            {{toastWord}}
            <span class="topPoint point" v-if="point==='top'&toastData.input.isShow===true"></span>
            <span class="botPoint point" v-if="point==='bot'&toastData.input.isShow===true"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="slotWrap" :style="{height:slotHeight?slotHeight+'rpx':''}">
      <slot></slot>
    </div>
    <!-- 做一个假的盒子用于取消点击 -->
    <div class="mask" @click="hiddenToast" :key="1" v-if="toastData.input.isShow===true"></div>
  </div>
</template>
<style scoped lang="scss">
  .noChange{
    color: rgba(0, 0, 0, 0.4) !important;
  }
  .hiddenLine{
    border-bottom:none !important;
  }
  .needTopLine{
    border-top:1rpx solid rgba(0,0,0,0.1);
  }
  .line{
    height:89rpx;
    color:rgba(0, 0, 0, 1);
    border-bottom:1rpx solid rgba(0,0,0,0.1);
    position: relative;
    width: 100%;
    box-sizing:content-box;
    .mask{
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9999;
    }
    .AAB{
      position: relative;
      float: left;
      height: 89rpx;
      line-height: 89rpx;
      display: flex;
      align-items: center;
      .Toasts{
        float: left;
      }
      .toasts{
        display: flex;
        align-items: center;
        width: 40rpx;
        height: 40rpx;
        position: relative;
        padding-left: 10rpx;
        line-height: 40rpx;
        .ques{
          color: rgba(0,0,0,0.25);
          font-size: 40rpx;
        }
        .hidden{
          display: none;
        }
        .msgBox{
          position: absolute;
          min-width:400rpx;
          padding:28rpx;
          background: #fff;
          border-radius:8rpx;
          box-shadow: 0 5rpx 10rpx 10rpx rgba(0,0,0,0.1);
          z-index: 9999;   
        }
      }
      .point{
        display: block;
        border:25rpx solid #fff;
        border-left-color: transparent;
        position: absolute;
        transform: scaleX(0.5);
      }
      .topPoint{
        border-bottom-color: transparent;
        border-right-color: transparent;
        bottom: -45rpx;
      }
      .botPoint{
        border-top-color: transparent;
        border-right-color: transparent;
        top: -45rpx;
      }
      .rightPoint{
        border-bottom-color: transparent;
        border-top-color: transparent;
        border-right-color: #fff;
        transform: scaleY(0.5);
        bottom:25rpx;
        left:-45rpx;
      }
      label{
        // padding:0 10rpx 0 0;
        font-size: 30rpx;
        float: left;
      }
    }
    .slotWrap{
      height: 89rpx;
      flex:1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 30rpx;
      //预设的一些样式
      input{
        color:rgba(0,0,0,1);
        border: none;
        font-size: 30rpx;
        background-color: transparent;
        height: 96rpx;
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
        text-align: left;
        // padding-right: 10rpx;
      }
      input:active, input:hover, input:focus {
        border: none;
      }
      .disable{
        color: rgba(0, 0, 0, 0.25) ;
      }
      input::-webkit-input-placeholder {
        color:rgba(0,0,0,0.4);
      }
    }
  }
</style>
