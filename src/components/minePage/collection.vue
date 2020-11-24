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
                <i class="aui-icon aui-icon-search"></i>
            </a>
        </header>
        <section class="aui-car-content">
		<div class="aui-dri"></div>
		<div v-if="$store.state.people.code == 1">
			<div v-if="$store.state.collection.lists.length==0">
				<h1 style="text-align:center;font-size:15px;color:#8e8e8e;">还没有收藏哦 <van-button type="primary" to="/index">去逛逛</van-button> </h1>
			</div>
		<div class="aui-car-box" v-for='(item,index) in $store.state.collection.lists' :key="index" @click="collectionDes(index)">
			<div class="aui-car-box-list">
				<ul>	
					<li>
						<div class="aui-car-box-list-item">
							
							<div class="aui-car-box-list-img">
								<a >
									<img :src=item.src alt="" style="width:100%;">
								</a>
							</div>
							<div class="aui-car-box-list-text">
								<h4 style="margin-top:5px;">
									<a >{{item.title}}</a>
								</h4>
								<div class="aui-car-box-list-text-price" >
									<div class="aui-car-box-list-text-pri">
										<b class="price" v-if="item.price">￥{{item.price}}</b>
										<a href="" @click.prevent="del(index)" style="margin-left:160px;font-size:12px;"> 删除 </a>
									</div>
									
								</div>
								
							</div>

						</div>
						<div class="aui-dri"></div>
					</li>
					
				</ul>
			</div>
		</div>
		</div>
		<!-- {{this.$store.state.carList.carLists}} -->
	</section>

    </div>
</template>

<script>
    export default {
		data(){
			return{
				lists:[]
			}
		},
        methods:{
			del(index){
				this.$store.commit('collection/remove',index);
				this.$store.commit('thingsList/edit',{
					status:false,
					id:index+1,
				})
			},
			collectionDes(index){
				if(this.lists.length==0){
					return;
				}
				this.$router.push({
					path:'/des',
					query:{
						src:this.lists[index].src,
						title:this.lists[index].title,
						price1:this.lists[index].price,
						status:this.lists[index].status,
						id:this.lists[index].id,
						key:8,
					}
				})
			}
		},
		created(){
			this.lists = this.$store.state.collection.lists;
		}
    }
</script>

<style lang="scss" scoped>

</style>