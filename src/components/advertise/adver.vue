<template>
    <div>
        <div class="box">
            <span>{{num}}</span>
            <h1> <img src="../../assets/img/bg/1.jpg" alt=""> 豆包婚礼</h1>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                num:3,
                timer:null
            }
        },
        created(){
            this.timer = setInterval(() => {
                if(this.num==0){
                    this.$router.push('/index')
                }else{
                    this.num--;
                }
            }, 1000);
        },
        beforeDestroy(){
            clearInterval(this.timer)
        }
    }
</script>

<style lang="scss" scoped>
.van-button{
    width:50px;
}
.box{
    width:100%;
    height:667px;
    background-image: url('../../assets/img/guide/shu1.jpg');
    background-size:100% 667px;
    overflow: hidden;
}
span{
    display: block;
    position: absolute;
    top:10px;
    right:10px;
    color:#fff;
    border:1px solid #fff;
    width:30px;
    height:30px;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    font-size: 20px;
    background-color: rgba(0,0,0,.8);
}
h1{
    width:100px;
    height:50px;
    border-radius: 20px;
    background:rgba(0,0,0,.7);
    line-height: 50px;
    text-align: center;
    position: absolute;
    bottom: 300px;
    left:50%;
    margin-left:-50px;
    font-size: 20px;
    color:hsl(0, 79%, 39%);
    text-shadow:0px 0px 20px #fff;
    img{
        width:50px;
        height:50px;
        position: absolute;
        left:-50px;
        border-radius: 50%;
    }

}
</style>