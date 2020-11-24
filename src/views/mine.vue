<template>
    <div>
    <header class="aui-header-default aui-header-fixed aui-header-clear-bg " style="background:none; border-bottom:0">   
        <div class="aui-header-center aui-header-center-clear">
            <div class="">

            </div>
        </div>
        <router-link  :class="['aui-header-item-icon',shuzhi>=50?'setting':'']" to="/mySet" >
            <i class="aui-icon aui-icon-Sets"></i>
        </router-link>
    </header>
        <mineContent></mineContent>
        <youLike></youLike>
        <tabbar></tabbar>
    </div>
</template>

<script>
import tabbar from '../components/tabbar/tabbar.vue'
import mineContent from '../components/minePage/mineContent'
import youLike from '../components/indexPage/youLike'
    export default {
        data(){
            return{
                shuzhi:0,
            }
        },
        components:{
            tabbar,
            mineContent,
            youLike,
            
        },
        methods:{
            handleScroll () {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                this.shuzhi=scrollTop;
            },
        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll)
        },
    }
</script>

<style lang="scss" scoped>
.setting{
    display: none;
}
</style>