<template>
    <div>
    <header class="aui-header-default aui-header-fixed ">
		<a @click="waitPay" class="aui-header-item">
			<i class="aui-icon aui-icon-back"></i>
		</a>
		<div class="aui-header-center aui-header-center-clear">
			<div class="aui-header-center-logo">
				<div class="">填写订单</div>
			</div>
		</div>
		<a href="#" class="aui-header-item-icon"   style="min-width:0">
			<i class="aui-icon aui-icon-member"></i>
		</a>
	</header>
	<section class="aui-address-content">
		
		<van-contact-card
		type="edit"
		:name="name"
		:tel="tel"
		@click="add"
		/>
		
		<div class="aui-dri"></div>
		<div class="aui-list-product-float-item">
            <div v-for="(item,index) in $store.state.carList.carLists" :key="index">
			<a href="javascript:;" class="aui-list-product-fl-item">
                <div class="aui-list-product-fl-img">
					<img :src=item.src alt="">
				</div>
				<div class="aui-list-product-fl-text">
					<h3 class="aui-list-product-fl-title">{{item.title}}</h3>
					<div class="aui-list-product-fl-mes">
						<div>
							<span class="aui-list-product-item-price">
								<em>¥</em>
								{{item.price}}
							</span>
						</div>
						<div class="aui-btn-purchase">
							<span>x{{item.thingscount}}</span>
						</div>
					</div>
					<div class="aui-list-product-fl-bag">
						<span><img src="../../assets/img/icon/bag1.png" alt=""></span>
						<span><img src="../../assets/img/icon/bag2.png" alt=""></span>
					</div>
				</div>
			</a>
            </div>
		</div>
		<div class="aui-address-well">
		
			<div class="aui-dri"></div>
			<!-- <a href="#" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
				<div class="aui-address-cell-bd">
					运费险
					<p style="color:#888">7天内退货，15天内可换货</p>
				</div>
				<div class="aui-address-cell-ft">￥0.50&nbsp;&nbsp;<input class="aui-switch" type="checkbox" checked="checked"></div>
			</a> -->
			<div class="aui-dri"></div>
			<router-link to="/coupon" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
				<div class="aui-address-cell-bd">优惠券</div>
				<!-- <div class="aui-address-cell-ft">不可用</div> -->
				<!-- 展示优惠券钱数 -->
				<div class="aui-address-cell-ft">-{{valueDesc}}</div>
			</router-link>
			<div class="aui-dri"></div>
			<div class="aui-dri"></div>
		</div>
		<div class="aui-payment-bar">
			<div class="shop-total">	
				<span class="aui-red aui-size">实付款: <em>￥{{$store.getters['carList/sumMoney']-valueDesc}}</em></span>
			</div>
			<a @click="toPay"  class="settlement">去支付</a>
		</div>
	</section>

    </div>
</template>

<script>
    export default {
		data(){
			return{
				name:"",
				tel:"",
				couponPrice:"",
				valueDesc:0
			
			}
		},
        methods:{
			waitPay(){
				let order={
					orderId:new Date().getTime(),
					address:this.address,
					goodsList:this.$store.state.carList.carLists,
					sumMoney:this.$store.getters['carList/sumMoney']-this.valueDesc,
					type:1,
				}
				this.$store.commit('order/add',order);

				this.$store.state.carList.carLists = [];
				this.$store.commit('order/changeCoupon',{
					defaultCoupon: this.$store.state.order.defaultCoupon,
				})
                this.$router.push({
                    path:"/orderList/orderAll"
                })
			},
            toPay(){
				console.log(this.$store.getters['carList/sumMoney']-this.valueDesc)
				let order={
					orderId:new Date().getTime(),
					address:this.address,
					goodsList:this.$store.state.carList.carLists,
					sumMoney:this.$store.getters['carList/sumMoney']-this.valueDesc,
					type:2,
				}
				this.$store.commit('order/add',order);
				// 清空购物车
				this.$store.state.carList.carLists = [];
				this.$store.commit('order/changeCoupon',{
					defaultCoupon: this.$store.state.order.defaultCoupon,
				})

                this.$router.push({
                    path:"/orderList/orderAll"
                })
			},
			add(){
				this.$router.push("/address");
			},
		
		},
		created(){
            // 默认获取地址信息
				let defaultId = this.$store.state.address.defaultId;
				let data = this.$store.state.address.lists;
				this.address = data.find(item=>item.id == defaultId); //默认id匹配数组中id值
				this.name = this.address.name;
				this.tel = this.address.tel;

				//获取默认选中的优惠券
				let defaultCoupon = this.$store.state.order.defaultCoupon; 
				let coupons = this.$store.state.order.couponList;
				//查询优惠券，在订单页显示
				if(this.$store.state.order.defaultCoupon == -1){	
					this.valueDesc = 0;
				}else if(coupons.length==0){
					this.valueDesc = 0;
					
				}else{
					this.valueDesc =coupons[defaultCoupon].valueDesc ;
				}	
		},
		computed:{
		sum(){
			return this.$store.state.carList.carLists.reduce((total,item)=>{
				// 判断选项
				if(!item.isSelect) return total; //false不让计算总价格
				return total + parseInt(item.price) * parseInt(item.thingscount);//总价格
			},0);//总价格默认参数值为0
		}
		}
    }
</script>

<style lang="scss" scoped>

</style>