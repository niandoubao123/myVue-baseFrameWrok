<template>
    <div>
        <div class="aui-list-content">
			<div class="aui-list-item">
				<div class="aui-list-item-img">
					<!-- <img src="../../assets/img/pd/cf-4.jpg" alt="2"> -->
					<img src="../../assets/images/banner9.jpg" style="border-radius:10px;" alt="">
				</div>
				<div class="aui-slide-box">
					<div class="aui-slide-list">
						<ul class="aui-slide-item-list"> 
							<li class="aui-slide-item-item" v-for="(item,index) in $store.state.thingsList.thingsTwo2" :key=index>
								<a  class="v-link" @click="enterDes2(index)" >
									<img class="v-img" :src=item.src style="width:100%;height:100%;">
									<p class="aui-slide-item-title aui-slide-item-f-els">{{item.title}}</p>
									<p class="aui-slide-item-info">
										<span class="aui-slide-item-price">￥{{item.price1}}</span>&nbsp;&nbsp;<span class="aui-slide-item-mrk">￥{{item.price2}}</span>
									</p>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="aui-title-head">
				<img src="../../assets/img/icon/i-i3.png"  alt="3">
			</div>
			<div class="aui-list-item">
				<div class="aui-list-item-img">
					<!-- <img src="../../assets/img/pd/cf-5.jpg" alt=""> -->
					<img src="../../assets/images/banner10.jpg" style="border-radius:10px;" alt="">
				</div>
				<div class="aui-slide-box">
					<div class="aui-slide-list">
						<ul class="aui-slide-item-list">
							<li class="aui-slide-item-item" v-for="(item,index) in $store.state.thingsList.thingsTwo3" :key=index>
								<a  class="v-link" @click="enterDes3(index)">
									<img class="v-img" :src=item.src style="width:100%;height:100%;">
									<p class="aui-slide-item-title aui-slide-item-f-els">{{item.title}}</p>
									<p class="aui-slide-item-info">
										<span class="aui-slide-item-price">￥{{item.price1}}</span>&nbsp;&nbsp;<span class="aui-slide-item-mrk">￥{{item.price2}}</span>
									</p>
								</a>
							</li>
						</ul>
					</div>

				</div>
			</div>
			<div class="aui-title-head">
				<img src="../../assets/img/icon/i-i4.png"  alt="4">
			</div>
			<div class="aui-list-item">
				<div class="aui-list-item-img">
					<!-- <img src="../../assets/img/pd/cf-7.jpg" alt=""> -->
					<img src="../../assets/images/banner7.jpg" style="border-radius:10px;" alt="">
				</div>
				<div class="aui-slide-box">
					<div class="aui-slide-list">
						<ul class="aui-slide-item-list">
							<li class="aui-slide-item-item" v-for="(item,index) in $store.state.thingsList.thingsTwo4" :key=index>
								<a  class="v-link" @click="enterDes4(index)">
									<img class="v-img" :src=item.src style="width:100%;height:100%;">
									<p class="aui-slide-item-title aui-slide-item-f-els">{{item.title}}</p>
									<p class="aui-slide-item-info">
										<span class="aui-slide-item-price">￥{{item.price1}}</span>&nbsp;&nbsp;<span class="aui-slide-item-mrk">￥{{item.price2}}</span>
									</p>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="aui-title-head">
				<img src="../../assets/img/icon/i-i5.png"  alt="">
			</div>
			<div class="aui-list-item">
				<div class="aui-list-item-img">
					<!-- <img src="../../assets/img/pd/cf-8.jpg" alt="5"> -->
					<img src="../../assets/images/zixun.png" style="border-radius:10px;" alt="">
				</div>
				<div class="aui-slide-box">
					<div class="aui-slide-list">
						<ul class="aui-slide-item-list">					
							<li class="aui-slide-item-item" v-for="(item,index) in $store.state.thingsList.thingsTwo5" :key=index>
								<a  class="v-link" @click="enterDes5(index)">
									<img class="v-img" :src=item.src  style="width:100%;height:100%;">
									<p class="aui-slide-item-title aui-slide-item-f-els">{{item.title}}</p>
									<p class="aui-slide-item-info">
										<span class="aui-slide-item-price">￥{{item.price1}}</span>&nbsp;&nbsp;<span class="aui-slide-item-mrk">￥{{item.price2}}</span>
									</p>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
    export default {
        data(){
			return{
				
			}
			
		},
		methods:{
			enterDes2(index){
				this.$router.push({
					path:'/des',
					query:{
						src:this.$store.state.thingsList.thingsTwo2[index].src,
						title:this.$store.state.thingsList.thingsTwo2[index].title,
						price1:this.$store.state.thingsList.thingsTwo2[index].price1,
						price2:this.$store.state.thingsList.thingsTwo2[index].price2,
						collection:this.$store.state.thingsList.thingsTwo2[index].collection,
						id:this.$store.state.thingsList.thingsTwo2[index].id,
						status:this.$store.state.thingsList.thingsTwo2[index].status,
					}
				})
			},
			enterDes3(index){
				this.$router.push({
					path:'/des',
					query:{
						src:this.$store.state.thingsList.thingsTwo3[index].src,
						title:this.$store.state.thingsList.thingsTwo3[index].title,
						price1:this.$store.state.thingsList.thingsTwo3[index].price1,
						price2:this.$store.state.thingsList.thingsTwo3[index].price2,
						collection:this.$store.state.thingsList.thingsTwo3[index].collection,
						id:this.$store.state.thingsList.thingsTwo3[index].id,
						status:this.$store.state.thingsList.thingsTwo3[index].status,
					}
				})
			},
			enterDes4(index){
				this.$router.push({
					path:'/des',
					query:{
						src:this.$store.state.thingsList.thingsTwo4[index].src,
						title:this.$store.state.thingsList.thingsTwo4[index].title,
						price1:this.$store.state.thingsList.thingsTwo4[index].price1,
						price2:this.$store.state.thingsList.thingsTwo4[index].price2,
						collection:this.$store.state.thingsList.thingsTwo4[index].collection,
							id:this.$store.state.thingsList.thingsTwo4[index].id,
						status:this.$store.state.thingsList.thingsTwo4[index].status,
					}
				})
			},
			enterDes5(index){
				this.$router.push({
					path:'/des',
					query:{
						src:this.$store.state.thingsList.thingsTwo5[index].src,
						title:this.$store.state.thingsList.thingsTwo5[index].title,
						price1:this.$store.state.thingsList.thingsTwo5[index].price1,
						price2:this.$store.state.thingsList.thingsTwo5[index].price2,
						collection:this.$store.state.thingsList.thingsTwo5[index].collection,
							id:this.$store.state.thingsList.thingsTwo5[index].id,
						status:this.$store.state.thingsList.thingsTwo5[index].status,
					}
				})
			}
		}
    }
</script>

<style lang="scss" scoped>

</style>