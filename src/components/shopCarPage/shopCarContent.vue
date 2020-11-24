<template>
    <div>
<section class="aui-car-content">
		<div class="aui-dri"></div>
		<div v-if="$store.state.people.code==0"> 
			<h1 style="text-align:center;font-size:15px;color:#8e8e8e">还没登录哦~</h1>
			<youlike></youlike>
		</div>
		<div v-if="$store.state.people.code == 1">
		<div class="aui-car-box" v-for='(item,index) in lists' :key="index">
			<div class="aui-car-box-name">
				<!-- <input type="checkbox" class="check goods-check shopCheck"> -->
				<h3>
					<a href="#">{{item.store}}</a>
				</h3>
				<div class="aui-car-coupons">
					<a href="#">编辑</a>
				</div>
			</div>
			<div class="aui-car-box-list">
				<ul>	
					<li>
						<div class="aui-car-box-list-item">
							<input type="checkbox" class="check goods-check goodsCheck" v-model="item.checked">
							<div class="aui-car-box-list-img">
								<a >
									<img :src=item.src alt="">
								</a>
							</div>
							<div class="aui-car-box-list-text">
								<h4>
									<a >{{item.title}}</a>
								</h4>
								<div class="aui-car-box-list-text-price">
									<div class="aui-car-box-list-text-pri">
										￥<b class="price">{{item.price}}</b>
									</div>
									<div class="aui-car-box-list-text-arithmetic">
										<a href="javascript:;" @click="item.thingscount<=1?1:item.thingscount--">-</a>
										<span class="num">{{item.thingscount}}</span>
										<a href="javascript:;" @click="item.thingscount++">+</a>
									</div>
								</div>
								<a href="" @click.prevent="del(index)"> 删除 </a>
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
	<div class="aui-payment-bar">
		<div class="all-checkbox"><input type="checkbox" class="check goods-check" id="AllCheck" v-model="chooseAll">全选</div>
		<div class="shop-total">
			<strong>合计：<i class="total" id="AllTotal">{{$store.getters['carList/sumMoney']}}元</i></strong>
		</div>
		<a @click="submited" class="settlement" v-if="$store.state.people.code == 1">提交订单</a>
		<router-link to="/login" class="settlement" v-if="$store.state.people.code == 0">请先登录</router-link>
	</div>
    </div>
</template>

<script>
import {Toast} from 'vant'
import youlike from '../indexPage/youLike'
    export default {
        data(){
			return{		
				lists:[]
			}
		},
		methods:{
			del(index){
				this.$store.commit('carList/del',index);
				console.log(this.$store.state.carList.carLists)
			},
			submited(){
				if(this.$store.state.carList.carLists.length==0){
					Toast('您的购物车为空');
					return;
				}
				this.$router.push({
					path:'/payOrder'
				})
			}
		},
		components:{
			youlike
		},
		computed:{	
			chooseAll:{
				get(){		
					return this.$store.state.carList.carLists.every(item=>{
						return item.checked;
					})
				},
				set(value){
					this.$store.state.carList.carLists.forEach(item=>{
						return item.checked=value;
					})
				}
			},
		},
		created(){
			this.lists = this.$store.state.carList.carLists;
		}
    }
</script>

<style lang="scss" scoped>

</style>