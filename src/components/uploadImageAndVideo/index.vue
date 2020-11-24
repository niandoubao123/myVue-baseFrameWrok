<template>
  <div class="uploadbox">
    <div class="box">
      <ul>
        <div class="imagebox" v-for="(item,index) in imageList">
          <div style="position: relative">
            <div class="delPic" @click="delPic(index)"><i class="icon iconfont" style="font-size: 12px;color: #fff;margin-top: 5px;">&#xe729;</i></div>
            <image  class="ima" v-if="item.fileType=='image'"  :src="item.filePath" alt="加载失败" @click="fullImage(item)" mode="aspectFit"></image>
            <video class="myVideo" id="myVideo" v-if="item.fileType=='video'" :src="item.filePath"></video>
            <div v-if="item.uploadStatus != undefined" class="uploadStatus" :style="item.uploadStatus?'color: #83ec4f;':'color:#ff0000'" >
              <p>{{item.uploadStatus?'上传成功':'上传失败'}}</p>
            </div>
          </div>
        </div>
        <div class="imagebox" v-if="imageList.length < maxCount">
          <div>
            <div class="addpic" @click="addpic" >
              <i class="icon iconfont" style="font-size:80rpx" v-html="'&#xe72c;'"></i>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .uploadStatus{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40rpx;
    font-size: 30rpx;
    line-height: 40rpx;
    text-align: center;
    background: rgba(0,0,0,.45);
    border-bottom-left-radius: 16rpx;
    border-bottom-right-radius: 16rpx;
  }
  box{
    padding: 40rpx 20rpx;
    display: inline-block;
    background: #ff000026;
  }
  ul{
    overflow: hidden;
    width:100%;
    margin-bottom: -30rpx;
    margin-top: 0;
    background: none;
  }
  .imagebox{
    float: left;
    width: 33.3%;/*可以用百分比*/
    height:200rpx;/*可以用百分比*/
    margin-bottom: 20rpx;
    position: relative;
  }
  .imagebox  > div {
    margin: 0 10rpx;
    border-radius: 16rpx;
    text-align: center;
    background:rgba(0,0,0,0.1)
  }
  .ima{
    width: 100%;
    height:193rpx;
    border-radius: 16rpx;
  }
 .myVideo{
    width: 100%;
    height:200rpx;
   border-radius: 16rpx;
 }
.addpic{
  width: 100%;
  height:200rpx;
  line-height: 200rpx;
  background:rgba(0,0,0,0.2);
  border-radius: 16rpx;
}
  .delPic{
    position: absolute;
    top:0rpx;
    right: 10rpx;
    width: 44rpx;
    height: 44rpx;
    background: rgba(0,0,0,0.6);
    z-index:999;
    border-radius: 22rpx;
  }
</style>
