<template>
    <div>
        <div class="aui-me-content-order">
			<router-link to="/orderList/orderAll" class="aui-well aui-fl-arrow">
				<div class="aui-well-bd">我的订单</div>
				<div class="aui-well-ft">查看全部</div>
			</router-link>
		</div>
		<section class="aui-grid-content">
			<div class="aui-grid-row">
				<router-link to="/orderList/orderAll?id=0" class="aui-grid-row-item">
					<i class="aui-icon-large aui-icon-large-sm aui-icon-refund"></i>
					<p class="aui-grid-row-label">全部</p>
				</router-link>
				<router-link to="/orderList/orderPay?id=1" class="aui-grid-row-item">
					<i class="aui-icon-large aui-icon-large-sm aui-icon-wallet"></i>
					<p class="aui-grid-row-label">待付款</p>
				</router-link>
				
				<router-link to="/orderList/orderGoods?id=2" class="aui-grid-row-item">
					<i class="aui-icon-large aui-icon-large-sm aui-icon-receipt"></i>
					<p class="aui-grid-row-label">待收货</p>
				</router-link>
				<router-link to="/orderList/orderEnd?id=3" class="aui-grid-row-item">
					<i class="aui-icon-large aui-icon-large-sm aui-icon-evaluate"></i>
					<p class="aui-grid-row-label">待评价</p>
				</router-link>
			</div>
			<div class="aui-dri"></div>
			<div class="aui-grid-row">
				<router-link to="/invite" class="aui-grid-row-item">
					<i class="aui-icon-large aui-icon-large-sm aui-icon-invitation"></i>
					<p class="aui-grid-row-label">邀请好友</p>
				</router-link>
				<router-link to="/asign" class="aui-grid-row-item">
					<i class="aui-icon-large aui-icon-large-sm aui-icon-signs"></i>
					<p class="aui-grid-row-label">签到领币</p>
				</router-link>
				<router-link to="/coupon" class="aui-grid-row-item">
					<i class="aui-icon-large aui-icon-large-sm aui-icon-coupon"></i>
					<p class="aui-grid-row-label">优惠券</p>
				</router-link>	
				<router-link to="/collection" class="aui-grid-row-item">
					<i class="aui-icon-large aui-icon-large-sm aui-icon-problem"></i>
					<p class="aui-grid-row-label">我的收藏</p>
				</router-link>
				<router-link to="/mySet" class="aui-grid-row-item">
					<i class="aui-icon-large aui-icon-large-sm aui-icon-help"></i>
					<p class="aui-grid-row-label">设置</p>
				</router-link>
			</div>
		</section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.aui-me-content{
	padding-bottom:10px;
}
</style>