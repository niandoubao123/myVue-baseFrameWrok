<template>
    <div>
    <header class="aui-header-default aui-header-fixed ">
        <a href="javascript:history.back(-1)" class="aui-header-item">
            <i class="aui-icon aui-icon-back"></i>
        </a>
        <div class="aui-header-center aui-header-center-clear">
            <div class="aui-header-center-logo">
                <div class="" v-if="$store.state.people.code == 1">购物车({{$store.getters['carList/sumCount']}})</div>
                <div class="" v-if="$store.state.people.code == 0">购物车(0)</div>
            </div>
        </div>
        <a href="#" class="aui-header-item-icon"   style="min-width:0">
            <i class="aui-icon aui-icon-member"></i>
        </a>
    </header>
        <shopCarContent></shopCarContent>
    </div>
</template>

<script>
import shopCarContent from '../components/shopCarPage/shopCarContent'
    export default {
        components:{
            shopCarContent
        }
    }
</script>

<style lang="scss" scoped>

</style>