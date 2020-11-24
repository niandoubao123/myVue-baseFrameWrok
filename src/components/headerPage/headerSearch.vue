<template>
    <div>
        <van-row>
        <van-col span="3" class="searchBack" ><a href="javascript:history.back(-1)" > <span class="back"></span></a></van-col>
        <van-col span="18">
            <van-search
            shape="round"
            background="#4fc08d"
            placeholder="请输入搜索关键词"
            v-model=msg
            />
        </van-col>
        <van-col span="3" class="searchBack" ><a @click="searchHistory">Go</a></van-col>
        </van-row>
       
    </div>
</template>

<script>
    export default {
        data(){
            return{
                msg:""
            }
        },
        methods:{
            searchHistory(){
                this.$store.commit('searchHistory',this.msg)
                this.$axios.get("http://127.0.0.1:3009",{
                    params:{
                        msg:this.msg
                    }
                }).then((res)=>{
                    console.log(res)
                    console.log("响应成功")
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.searchBack{
    background-color: #4fc08d;
    height:54px;
    line-height: 54px;
    text-align: center;
    font-size: 15px;
    color:#fff;
}
.back{
    display: block;
    width:13px;
    height:13px;
    margin-top:20px;
    margin-left:20px;
    border-left:1px solid #fff;
    border-top:1px solid #fff;
    transform: rotate(-45deg);
}
</style>