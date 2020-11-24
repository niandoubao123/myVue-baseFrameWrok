
export let props = ['action']
export let model = {
  voicePath: null,
  isRecord: false, // 记录状态,录音中或者是未开始
  intervalTime: 0,
  oldintervalTime: 0,
  timer: null,
  startplay: true,
  recorderManager:null,
  innerAudioContext:null,
  startplay:true,
  timer2:null,
  uploadStatus:null
}
export let computed = {
  intIntervalTime() {
    // 用于显示整数的秒数
    console.log(Math.round(this.intervalTime));
    return Math.round(this.intervalTime);
  },
  oldIntervalTime() {
    // 用于显示整数的秒数
    console.log(Math.round(this.oldintervalTime));
    return Math.round(this.oldintervalTime);
  }
}
