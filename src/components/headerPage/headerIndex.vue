<template>
    <div>
        <header :class="['aui-header-default','aui-header-fixed','aui-header-clear-bg',shuzhi>=50?'xianshi':'']"> <!-- aui-header-clear-bg 清除背景色 -->
            <a href="#" class="aui-header-item">
               <img src="../../assets/images/logo.png" alt="" style="width:33px;height:33px;margin-left:-8px;margin-top:1px;">
            </a>
            <div class="aui-header-center aui-header-center-clear"  style="margin-right:10%;">
                <div class="aui-header-search-box" style="background-color:#fff">
                    <i class="aui-icon aui-icon-small-search"></i>
                    <input id="" type="text"  placeholder="手机狂欢节 抢 iPhone X" class="aui-header-search" @focus="searchUp">
                </div>
            </div>
            <a href="#" class="aui-header-item-icon" style="position:absolute; right:-12%; top:0;" @click="toast">
                <i class="aui-icon aui-icon-member-1"></i>
            </a>
            <div id="scrollBg"></div>
        </header>
    </div>
</template>

<script>
import {Toast} from 'vant'
    export default {
        data(){
            return {
                shuzhi:""
            }
        },
        methods:{
            handleScroll () {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                this.shuzhi=scrollTop;
            },
            searchUp(){
                this.$router.push({
                    path:"/search"
                })
            },
            toast(){
                Toast('没有任何消息')
            }
        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll)
         },
    }
</script>

<style lang="scss" scoped>
.xianshi{
    background-color: #ff6767;
}
</style>