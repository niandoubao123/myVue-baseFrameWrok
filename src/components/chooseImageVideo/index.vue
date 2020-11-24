<template>
  <div class="from" >
    <div class="from_title">请拍摄设备故障的视频或照片。</div>
    <div class="from_msg">（照片视频最好能看清楚故障问题。最多可上传9个）</div>
    <base-uploadImageAndVideo ref="uploadImg" :action="action" @changeImage="changeImage" :maxCount="maxCount"></base-uploadImageAndVideo>
  </div>
</template>
<style scoped lang="scss">
.from{
  background: #fff;
  padding: 40rpx 0;
  .from_title{
    margin-top: 10rpx;
    font-size: 30rpx;
  }
  .from_msg{
    margin-bottom: 10rpx;
    color: rgba(0,0,0,.3);
  }
}
</style>

