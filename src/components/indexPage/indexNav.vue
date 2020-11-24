<template>
    <div>
        <section class="aui-grid-content">
			<div class="aui-grid-row aui-grid-row-clears"> <!-- aui-grid-row-clear 清除 a标签 上下的边距 -->
				<router-link to="/asign" class="aui-grid-row-item">
					<i class="aui-icon-large aui-icon-sign"></i>
					<p class="aui-grid-row-label">每日签到</p>
				</router-link>
				<router-link to="/orderList/orderAll" class="aui-grid-row-item">
					<i class="aui-icon-large aui-icon-time"></i>
					<p class="aui-grid-row-label">我的订单</p>
				</router-link>
				<router-link to="/invite" class="aui-grid-row-item">
					<i class="aui-icon-large aui-icon-share"></i>
					<p class="aui-grid-row-label">邀请好友</p>
				</router-link>
				<router-link to="/marry" class="aui-grid-row-item">
					<i class="aui-icon-large aui-icon-supermarket"></i>
					<p class="aui-grid-row-label">结婚登记</p>
				</router-link>
				<router-link to="/mine" class="aui-grid-row-item">
					<i class="aui-icon-large aui-icon-personal"></i>
					<p class="aui-grid-row-label">个人中心</p>
				</router-link>
			</div>
		</section>
		<section class="aui-content-six aui-border-t " style="background-color: #fff;overflow:hidden;">
			<div class="aui-flex-col aui-flex-center aui-border-tb">
				<div class="aui-flex-item-6 aui-flex-row aui-flex-middle aui-padded-10 aui-border-b" @click="toInvitation">
					<h3 class="aui-text-danger">免费电子请帖</h3>
					<p>联系客服，即可获得</p>
					<img src="../../assets/images/banner11.png" style="margin-top:10px;">
				</div>
				<div class="aui-flex-item-6 aui-border-l" >
					<div class="aui-flex-col aui-padded-10 aui-border-b" >
						<div class="aui-flex-item-10" @click="toClothes">
							<div class="aui-flex-item-6 aui-text-right">
								<h1>婚纱礼服</h1>
								<p>Only for You</p>
							</div>
							<div class="aui-flex-item-6 aui-text-right">		
									<img src="../../assets/images/banner15.png">
							</div>
						</div>
					</div>
					<div class="aui-flex-col aui-border-b" @click="toHouse">
						<div class="aui-flex-item-12 aui-padded-10 " style="position: relative;">
							<img src="../../assets/images/banner14.png" >
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- <div class="aui-slide-box aui-slide-box-clear" style="margin:15px 0;">
			<div class="aui-slide-list">
				<ul class="aui-slide-item-list">
					<li class="aui-slide-item-item">
						<a href="#" class="v-link">
							<img class="v-img" src="../../assets/img/ad/tou-6.jpg">
						</a>
					</li>
					<li class="aui-slide-item-item">
						<a href="#" class="v-link">
							<img class="v-img" src="../../assets/img/ad/tou-5.jpg">
						</a>
					</li>
					<li class="aui-slide-item-item">
						<a href="#" class="v-link">
							<img class="v-img" src="../../assets/img/ad/tou-4.jpg">
						</a>
					</li>
					<li class="aui-slide-item-item">
						<a href="#" class="v-link">
							<img class="v-img" src="../../assets/img/ad/tou-3.jpg">
						</a>
					</li>
					<li class="aui-slide-item-item">
						<a href="#" class="v-link">
							<img class="v-img" src="../../assets/img/ad/tou-2.jpg">
						</a>
					</li>
					<li class="aui-slide-item-item">
						<a href="#" class="v-link">
							<img class="v-img" src="../../assets/img/ad/tou-1.jpg">
						</a>
					</li>
				</ul>
			</div>

		</div> -->
    </div>
</template>

<script>
    export default {
        methods:{
			toInvitation(){
				this.$router.push('/invitation')
			},
			toClothes(){
				this.$router.push('/clothes')
			},
			toHouse(){
				this.$router.push('/house')
			},
		},
    }
</script>

<style lang="scss" scoped>
.aui-flex-item-6{
	width:50%;
	img{
		width:100%;
	}
}
.aui-flex-item-6 {
	width:50%;
}
</style>