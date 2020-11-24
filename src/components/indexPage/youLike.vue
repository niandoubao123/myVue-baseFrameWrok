<template>
    <div>
        <div class="aui-recommend">
        <img src="../../assets/img/bg/icon-tj1.jpg" alt="">
        <!--<h2>为你推荐</h2>-->
		</div>
		<section class="aui-list-product">
			<div class="aui-list-product-box">
				<a class="aui-list-product-item" v-for="(item,index) in $store.state.thingsList.youlike" :key="index" @click="enterDesyoulike(index)">
					<div class="aui-list-product-item-img">
						<img :src=item.src alt="" style="height:121px;">
					</div>
					<div class="aui-list-product-item-text">
						<h3>{{item.title}}</h3>
						<div class="aui-list-product-mes-box">
							<div>
							<span class="aui-list-product-item-price">
								￥{{item.price1}}
							</span>
								<span class="aui-list-product-item-del-price">
								￥{{item.price2}}
							</span>
							</div>
							<div class="aui-comment">986评论</div>
						</div>
					</div>
				</a>
			</div>
		</section>
    </div>
</template>

<script>
    export default {
        methods:{
			enterDesyoulike(index){
				this.$router.push({
					path:'/des',
					query:{
						src:this.$store.state.thingsList.youlike[index].src,
						title:this.$store.state.thingsList.youlike[index].title,
						price1:this.$store.state.thingsList.youlike[index].price1,
						price2:this.$store.state.thingsList.youlike[index].price2,
						id:this.$store.state.thingsList.youlike[index].id,
						status:this.$store.state.thingsList.youlike[index].status,
					}
				})
			},
			// enterDes2(index){
			// 	this.$router.push({
			// 		path:'/des',
			// 		query:{
			// 			src:this.$store.state.thingsList.thingsTwo2[index].src,
			// 			title:this.$store.state.thingsList.thingsTwo2[index].title,
			// 			price1:this.$store.state.thingsList.thingsTwo2[index].price1,
			// 			price2:this.$store.state.thingsList.thingsTwo2[index].price2,
			// 			collection:this.$store.state.thingsList.thingsTwo2[index].collection,
			// 			id:this.$store.state.thingsList.thingsTwo2[index].id,
			// 			status:this.$store.state.thingsList.thingsTwo2[index].status,
			// 		}
			// 	})
			// },
		}
    }
</script>

<style lang="scss" scoped>

</style>