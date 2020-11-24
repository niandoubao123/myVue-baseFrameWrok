export default class {
  resetImgList(){
    this.imageList = []
  }
  addpic() {
    var _this = this
    var countNum = this.maxCount ? this.maxCount : 9
    uni.chooseMedia({
      count: countNum - _this.imageList.length,
      mediaType: ['image', 'video'],
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      success(res) {
        res.tempFiles.forEach((item, index) => {
          var data = {
            id: index,
            filePath: item.tempFilePath,
            fileType: res.type,
            uploadStatus: undefined
          }
          _this.imageList.push(data)
        })
        // _this.$emit('changeImage',_this.imageList);
      }
    })
  }
  
  fullImage(item) {
    var fileList = []
    fileList.push(item.filePath)
    uni.previewImage({
      urls: fileList
    })
  }
  
  delPic(index) {
    var _this = this
    uni.showModal({
      title: '提示',
      content: '确定删除该项吗？',
      success: function (res) {
        if (res.confirm) {
          _this.imageList.splice(index, 1)
          // _this.$emit('changeImage',_this.imageList);
        } else if (res.cancel) {
          console.log('用户点击取消');
        }
      }
    });
    
  }
  
  async uploads() {
    var _this = this
    let fileIds = []
    var isChooseImge
    if (_this.imageList.length == 0) {
      isChooseImge = false
      this.$emit('changeImage', isChooseImge, fileIds)
      return
    }
    let PostIndex = []
    _this.imageList.forEach(i => {
      PostIndex.push(this.methods('uploadFile', i))
    })
    await Promise.all(PostIndex).then(values => {
      let lists = []
      values.forEach(i => {
        if (i && i.length) {
          lists.push(i)
        }
      })
      isChooseImge = true
      this.$emit('changeImage', isChooseImge, lists)
    })
    
  }
  
  async uploadFile(i) {
    let fileId
    await uni.uploadFile({
      url: this.action, //仅为示例，非真实的接口地址
      filePath: i.filePath,
      header: {
        sessionId: uni.getStorageSync('sessionId')
      },
      name: 'file',
      //请求参数
      formData: {
        // 'user': 'test'
      }
      // success: (uploadFileRes) => {
      //   var ret = JSON.parse(uploadFileRes.data)
      //   console.log(JSON.parse(uploadFileRes.data));
      //   if(ret.code == 0){
      //     fileId = ret.data.fileIds[0]
      //     console.log(fileId);
      //     i.uploadStatus = true
      //   }else {
      //     i.uploadStatus = false
      //   }
      //   // if(index == _this.imageList.length - 1){
      //   //   this.$emit('changeImage',fileIds)
      //   // }
      // },
      // fail:(res)=>{
      //   i.uploadStatus = false
      // }
    }).then((data) => {
      console.log('看一下上传')
      console.log(data)
      var [error, res] = data;
      if (res) {
        var ret = JSON.parse(res.data)
        console.log(ret);
        if (ret.code == 0) {
          fileId = ret.data.fileIds[0]
          i.uploadStatus = true
        } else {
          i.uploadStatus = false
        }
      }
      if (error) {
        i.uploadStatus = false
      }
    })
    console.log(fileId);
    return fileId
  }
}
