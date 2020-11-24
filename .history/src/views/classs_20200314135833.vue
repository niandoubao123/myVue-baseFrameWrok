<template>
    <div>
    <header class="aui-header-default aui-header-fixed ">
        <a href="javascript:history.back(-1)" class="aui-header-item">
            <i class="aui-icon aui-icon-back"></i>
        </a>
        <div class="aui-header-center aui-header-center-clear">
            <div class="aui-header-search-box">
                <i class="aui-icon aui-icon-small-search"></i>
                <input id="" type="text"  placeholder="iphone8 手机钢化膜" class="aui-header-search" @focus="searchUp">
            </div>
        </div>
        <a href="#" class="aui-header-item-icon">
            <i class="aui-icon aui-icon-packet" @click="$router.push('/invite')"></i>
            <i class="aui-icon aui-icon-member" @click="toast"></i>
        </a>
    </header>
        <classContent></classContent>
        <tabbar></tabbar>
    </div>
</template>

<script>
import {Toast} from 'vant'
import tabbar from '../components/tabbar/tabbar.vue'
import  classContent from '../components/classPage/classContent.vue'
    export default {
        methods:{
            searchUp(){
                this.$router.push({
                    path:"/search"
                })
            },
            toast(){
                Toast('你还没有消息')
            }
        },
        components:{
            tabbar,
            classContent
        }
    }
</script>

<style lang="scss" scoped>

</style>