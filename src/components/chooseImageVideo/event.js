export const  event = {
  changeImage(isChooseImge,data){
    this.$emit('ImageChange',isChooseImge,data);
  },
  uploadSubmit(){
    this.methods('uploadSubmit')
  }
}

export const life = {

}
export const watch = {

}
