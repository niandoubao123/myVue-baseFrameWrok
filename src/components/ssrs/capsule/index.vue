<!--suppress ALL -->
<template>
    <div class="capsuleWrap">
      <div class="capsules" v-if="capsuleSingle==='y'" :style="{border:borderNone==='y'?'none':''}">
        <div :class="['cap-right','cap-rights',status?'status'+status:'']">
          {{capsuleData | isNone}}
        </div>
      </div>
      <div class="capsule" v-if="capsuleSingle!='y'">
        <div class="cap-left">
          {{capsuleName}}
        </div>
        <!-- 预留出来 status0 status1  我不知道都啥颜色  见42行-->
        <div :class="['cap-right',status?'status'+status:'status0']">
          {{capsuleData | isNone}}
        </div>
      </div>
    </div>
</template>
<style scoped lang="scss">
    .capsuleWrap{
      height: 60rpx;
      display: flex;
      align-items: center;
      .capsules{
        display: flex;
        align-items: center;
        min-width:100rpx;
        font-size: 22rpx;
        height: 35rpx;
        border-radius: 20rpx;
        border:1rpx solid rgba(0,0,0,0.05);
        overflow: hidden;
      }
      .capsule{
        display: flex;
        align-items: center;
        min-width:188rpx;
        font-size: 22rpx;
        height: 35rpx;
        border-radius: 20rpx;
        border:1rpx solid rgba(0,0,0,0.05);
        overflow: hidden;
        .cap-left{
          padding:0 8rpx;
          min-width: 70rpx;
          height: 35rpx;
          line-height: 35rpx;
          text-align: center;
          color: rgba(0,0,0,0.45);
        }
        .cap-right{
          flex: 1;
          // background: rgb(13,175,246);
          color: #fff;
          height: 35rpx;
          line-height: 35rpx;
          text-align: center;
          padding:0 8rpx;
        }
      }
      .cap-rights{
        width: 100%;
        text-align: center;
      }
      .status0,.statusD{
        background: #56acea;
      }
      .status5,.statusC{
        background: #89e68c;
      }
      .status2,.statusB{
        background: #d3d558;
      }
      .status3,.statusA{
        background: #f05e5e;
        color: #fff;
      }
      .status4{
        background: #aeaeae;
      }
      .status1{
        background: #56acea;
        color: #fff;
      }
    }
</style>
