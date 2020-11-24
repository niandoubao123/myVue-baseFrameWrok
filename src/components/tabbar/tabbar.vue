<template>
    <div>
        <footer class="aui-footer-default aui-footer-fixed">
		<router-link to="/index"  class="aui-footer-item ">
			<span class="aui-footer-item-icon aui-icon aui-footer-icon-home"></span>
			<span class="aui-footer-item-text">首页</span>
		</router-link>
		<router-link to="/class"  class="aui-footer-item">
			<span class="aui-footer-item-icon aui-icon aui-footer-icon-class"></span>
			<span class="aui-footer-item-text">分类</span>
		</router-link>
		<router-link to="/show" class="aui-footer-item">
			<span class="aui-footer-item-icon aui-icon aui-footer-icon-find"></span>
			<span class="aui-footer-item-text">发动态</span>
		</router-link>
		<router-link to="/shopCar" class="aui-footer-item">
			<span class="aui-footer-item-icon aui-icon aui-footer-icon-car"></span>
			<span class="aui-footer-item-text">购物车</span>
		</router-link>
		<router-link to="/mine"  class="aui-footer-item">
			<span class="aui-footer-item-icon aui-icon aui-footer-icon-me"></span>
			<span class="aui-footer-item-text">我的</span>
		</router-link>
	</footer>
    </div>
</template>

<script>

    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>