<template>
    <div class="pulls">
      <div class="start" v-if="!isRecord&&!voicePath">
       <div>
           <i class="icon iconfont sound" style="color: #19D9D7"  v-html="'&#xe72e;'"@click="startRecord" ></i>
       </div>
        <div class="start-text">点击按钮录入语音</div>
      </div>
      <div class="start" v-if="isRecord&&!voicePath">
            <div>
                <i class="icon iconfont sound"  v-html="'&#xe72e;'"@click="endRecord" ></i>
            </div>
            <div class="start-text">已录制{{intIntervalTime}}s>>>，结束请点击按钮</div>
        </div>
      <div style="display: flex" v-if="voicePath.length">
          <div class="uploadstatus" v-if="uploadStatus != null" >
              <i v-if="uploadStatus == true" class="icon iconfont" style="color: #00aa00"v-html="'&#xe602;'"></i>
              <i v-else  v-html="'&#xe603;'" class="icon iconfont" style="color: red"></i>
          </div>
          <div class="playbox" v-if="startplay">
              <div class="player" @click="playVoice"><i class="icon iconfont" style="font-size:40rpx;color: #fff" v-html="'&#xe730;'"></i></div>
              <div class="playTime"  @click="playVoice">{{intIntervalTime}}s</div>
              <div class="close" @click="delVoice"><i class="icon iconfont" style="font-size:30rpx;color: #fff" v-html="'&#xe729;'"></i></div>
          </div>
          <div class="playbox" v-if="!startplay">
              <div class="player" @click="stopVoice"><i class="icon iconfont" style="font-size:40rpx;color: #fff" v-html="'&#xe72f;'"></i></div>
              <div class="playTime" @click="stopVoice">{{intIntervalTime}}s</div>
              <div class="close" @click="delVoice"><i class="icon iconfont" style="font-size:30rpx;color: #fff" v-html="'&#xe729;'"></i></div>
          </div>
      </div>
    </div>
</template>
<style scoped lang="scss">
    .pulls{
      background: #fff;
    }
    .start{
        width: 100%;
        text-align: center;
        padding: 40rpx 0;
        border: 1px solid #eee;
        .sound{
            font-size: 100rpx;
        }
    }
    .uploadstatus{
        line-height: 80rpx;
        width: 50rpx;
        text-align: center
    }
    .playbox{
        display: flex;
        width: 100%;
        height: 80rpx;
        line-height: 80rpx;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        background: #19D9D7;
        border-radius: 16rpx;
        color: #fff;

    }
    .player{
        width: 20%;
        margin-left: 20rpx;
        text-align: center;
    }
    .playTime{
        width: 70%;
        text-align: center;
    }
    .close{
        width: 10%;
        margin-right: 20rpx;
        text-align: center;
    }
</style>
