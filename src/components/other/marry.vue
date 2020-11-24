<template>
    <div>
        <header class="aui-header-default aui-header-fixed ">
            <a href="javascript:history.back(-1)" class="aui-header-item">
                <i class="aui-icon aui-icon-back"></i>
            </a>
            <div class="aui-header-center aui-header-center-clear">
                <div class="aui-header-center-logo">
                    <div class="">{{$route.name}}</div>
                </div>
            </div>
            <a href="#" class="aui-header-item-icon"   style="min-width:0">
                <!-- <i class="aui-icon aui-icon-search"></i> -->
            </a>
        </header>
         <img src="../../assets/images/banner8.jpg" alt="" style="margin-top:50px;width:100%;">
        <div >
            <h1>南宁市民政局</h1>
        </div>
        <iframe width="375" height="736" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://j.map.baidu.com/s/9uqIFb"></iframe>
       
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
h1{
    height:50px;
    line-height: 50px;
    border-left:5px solid #ff6767;
    color:#ff6767;
    text-align: left;
    padding:0 10px;
    font-size: 18px;
}
</style>