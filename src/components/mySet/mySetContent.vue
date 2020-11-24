<template>
    <div>
    <section class="aui-myOrder-content">
    <div class="aui-product-set">
        <router-link to="/selfInfo" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
            <div class="aui-address-cell-bd">设置头像</div>
            <div class="aui-address-cell-ft"></div>
        </router-link>
        <a  class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
            <div class="aui-address-cell-bd">我的实名认证</div>
            <div class="aui-address-cell-ft"></div>
        </a>
        <router-link to="/address" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
            <div class="aui-address-cell-bd">我的收货地址</div>
            <div class="aui-address-cell-ft"></div>
        </router-link>
        <div class="aui-dri"></div>
        <a href="#" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
            <div class="aui-address-cell-bd">关于我们</div>
            <div class="aui-address-cell-ft">v5.0</div>
        </a>
    </div>
    <div class="aui-out">
        <van-button type="danger" class="outLogin" @click="outLogin" v-if="this.$store.state.people.code==1">退出登录{{$store.state.people.code}}</van-button>
        <van-button type="warning" class="outLogin" @click="toLogin" v-if="this.$store.state.people.code==0">请先登录{{$store.state.people.code}}</van-button>
    </div>
	</section>

    </div>
</template>

<script>
    export default {
        methods:{
            outLogin(){
				this.$store.commit('people/outLogin')
			},
			toLogin(){
				this.$router.push({
					path:"/login"
				})
			}
        }
    }
</script>

<style lang="scss" scoped>
.outLogin{
	position: absolute;
	left:50%;
	margin-left:-75px;
	border-radius: 20px;
	width:150px;
}
</style>