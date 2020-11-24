const recorderManager = uni.getRecorderManager();
const innerAudioContext = uni.createInnerAudioContext();
innerAudioContext.autoplay = true;
export default class {
  // 开始录音
  startRecord(){
    this.voicePath = null
    this.isRecord = true;
    this.intervalTime = 0;
    let _this = this;
    recorderManager.onStart(function (res) {
      console.log(res)
      _this.timer = setInterval(() => {
        _this.intervalTime += 0.5;
    }, 500);
    })
    recorderManager.start({
      format: "mp3"
    });
  }
  // 停止录音
  endRecord() {
    let _this = this
    if (this.intervalTime <= 0.5) {
      console.log("录音太短了!!!");
    }
    clearInterval(this.timer);
    if (this.isRecord) {
      setTimeout(() => {
      recorderManager.onStop(function(res) {
        console.log("录音停止了" + JSON.stringify(res)); //返回录音的临时保存地址, 可用于后面的播放
        _this.voicePath = res.tempFilePath;
      });
      recorderManager.stop();
      recorderManager.onError(function (res) {
        console.log(res);
      });
      this.isRecord = false;
      }, 500); //延迟小段时间停止录音, 更好的体验
    }
  }
  // 播放录音
  playVoice(){
    this.startplay = false
    this.oldintervalTime = this.intervalTime
    console.log("播放录音");
    if (this.voicePath) {
      innerAudioContext.src = this.voicePath;
      innerAudioContext.play();
      this.timer2 = setInterval(() => {
        this.intervalTime -= 0.5;
      if(this.intervalTime == 0){
        setTimeout(() => {
          clearInterval(this.timer2);
          this.startplay = true
          innerAudioContext.stop();
          this.intervalTime = this.oldintervalTime
      },500);
      }
      }, 500);
    }
  }
  // 暂停播放
  stopVoice() {
    clearInterval(this.timer2);
    this.startplay = true
    innerAudioContext.stop();
    this.intervalTime = this.oldintervalTime
  }
  // 删除该段录音
  delVoice() {
    let _this = this
    uni.showModal({
      title: '提示',
      content: '确定删除该段语音吗？',
      success: function (res) {
        if (res.confirm) {
          _this.voicePath = null
          _this.uploadStatus = null
        } else if (res.cancel) {
          console.log('用户点击取消');
        }
      }
    });
  }
  async uploadSubmit(){
    let fileId
    var isRecording
    var _this = this
    if(!this.voicePath){
      isRecording = false
      this.$emit('recording',isRecording,fileIds)
      return
    }
    isRecording = true
    await uni.uploadFile({
      url: this.action, //仅为示例，非真实的接口地址
      filePath: this.voicePath,
      name: 'file',
      //请求参数
      formData: {
        // 'user': 'test'
      }
    }).then((data) => {
      var [error,res]  = data;
      if(res){
        var ret = JSON.parse(res.data)
        console.log(ret);
        if(ret.code == 0){
          fileId = ret.data.fileIds[0]
          _this.uploadStatus = true
        }else{
          _this.uploadStatus = false
        }
        _this.$emit('recording',isRecording,fileId)
      }
      if(error){
        _this.uploadStatus = false
        _this.$emit('recording',isRecording,fileId)
      }
    })
  }
}
