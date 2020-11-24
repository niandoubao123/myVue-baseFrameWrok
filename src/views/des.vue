<template>
    <div>
	<header class="aui-header-default aui-header-fixed " style="background-color:transparent; border-color:transparent;">
		<a href="javascript:history.back(-1)" class="aui-header-item">
			<i class="back"><img src="../assets/images/fanhui.svg" alt="" style="width:80%;position:absolute;top:50%;left:50%;margin-top:-12px;margin-left:-13px;"></i>
		</a>
		<div class="aui-header-center aui-header-center-clear">	
		</div>
		<a href="javascript:;" class="aui-header-item-icon select"    style="min-width:0;">
		</a>
	</header>
	<p></p>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" v-if="$store.state.classes.code==0">
        <van-swipe-item><img :src=this.$route.query.src alt=""></van-swipe-item>
        <van-swipe-item><img :src=this.$route.query.src alt=""></van-swipe-item>
        <van-swipe-item><img :src=this.$route.query.src alt=""></van-swipe-item>
        <van-swipe-item><img :src=this.$route.query.src alt=""></van-swipe-item>
        </van-swipe>
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" v-if="$store.state.classes.code==1">
        <van-swipe-item><img :src=$store.state.classes.classDes.src alt=""></van-swipe-item>
        <van-swipe-item><img :src=$store.state.classes.classDes.src alt=""></van-swipe-item>
        <van-swipe-item><img :src=$store.state.classes.classDes.src alt=""></van-swipe-item>
        <van-swipe-item><img :src=$store.state.classes.classDes.src alt=""></van-swipe-item>
        </van-swipe>
        <div class="aui-product-content">
		<div class="aui-real-price clearfix">
			<span>
				<i>￥</i>{{this.$route.query.price1}}
			</span>
			<del><span class="aui-font-num">￥{{this.$route.query.price2}}</span></del>
			<div class="aui-settle-choice">
				<span>促销价</span>
			</div>
		</div>
		<div class="aui-product-title">
			<h2>
				{{this.$route.query.title}}
				{{$store.state.classes.classDes.title}}
			</h2>
			<p>
				原封未拆，厂商授权！【服务】顺丰配送，7天无理由退货！
			</p>
		</div>
		<div class="aui-product-boutique clearfix">
			<img src="../assets/img/icon/icon-usa.png" alt="">
			<span class="aui-product-tag-text">美国品牌</span>
			<img src="../assets/img/icon/icon-sj.png" alt="">
			<span class="aui-product-tag-text">精选商家</span>
		</div>
			<div class="aui-product-coupon">
			<a href="#" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
				<div class="aui-address-cell-bd">选择</div>
				<div class="aui-address-cell-ft">颜色分类</div>
			</a>
			<a href="#" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear" id="J_ShowActionSheet">
				<div class="aui-address-cell-bd">领券</div>
				<div class="aui-address-cell-ft">
					<span>满159减10券</span>
					<span>满299减30券</span>
				</div>
			</a>
			<a href="#" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
				<div class="aui-address-cell-bd">配送</div>
				<div class="aui-address-cell-ft">
					<input class="aui-Address-box-input" type="text" readonly="" id="J_Address"   placeholder="所在地区" style="height:auto; border-bottom:none; padding-left:0; margin-bottom:0;">
				</div>
			</a>
			<a href="#" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
				<div class="aui-address-cell-bd">运费</div>
				<div class="aui-address-cell-ft">免运费</div>
			</a>
			<a href="#" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
				<div class="aui-address-cell-bd">说明</div>
				<div class="aui-address-cell-ft">假一赔十 7天无忧退货</div>
			</a>
		</div>
		<div class="aui-dri"></div>
		<div class="aui-product-evaluate">
			<a href="#" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
				<div class="aui-address-cell-bd">商品评价   <em>(3290)</em></div>
				<div class="aui-address-cell-ft">
					<span>好评 100%</span>
				</div>
			</a>
		</div>
		<div class="aui-dri"></div>
		<div class="aui-product-evaluate">
			<a href="#" class="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
				<div class="aui-address-cell-bd">
					<div class="clearfix">
						<div class="aui-product-shop-img">
							<img src="../assets/img/user/user10.png" alt="">
						</div>
						<div class="aui-product-shop-text">
							<h3>Versace官方旗舰店</h3>
							<p>精选商家  服务保障</p>
							<p>在售商品2390件</p>
						</div>
					</div>
				</div>
				<div class="aui-address-cell-ft">
					<span>进店看看</span>
				</div>
			</a>
		</div>
		<div class="aui-dri"></div>
		<div class="aui-product-pages">
			<div class="aui-product-pages-title">
				<h2>图文详情</h2>
			</div>
			<div class="aui-product-pages-img" v-if="$store.state.classes.code==0">
				<img :src=this.$route.query.src alt="">
				<img :src=this.$route.query.src alt="">
			</div>
			<div class="aui-product-pages-img" v-if="$store.state.classes.code==1">
				<img :src=$store.state.classes.classDes.src alt="">
				<img :src=$store.state.classes.classDes.src alt="">
			</div>
		</div>
        </div>
        
        <footer class="aui-footer-product">
		<div class="aui-footer-product-fixed">
			<div class="aui-footer-product-concern-cart">
				<router-link to="/shopCar">
					<span class="aui-f-p-icon"><img src="../assets/img/icon/icon-kf.png" alt=""></span>
					<span class="aui-f-p-focus-info">购物车</span>
				</router-link>
				<div v-if="this.$store.state.people.code==0">
					<a href="#" v-if="des.status==false" >
						<span class="aui-f-p-icon"><img src="../assets/img/icon/icon-sc.png" alt="" ></span>
						<span class="aui-f-p-focus-info">收藏</span>
					</a>
					<a href="#" v-if="des.status!=false" >
						<span class="aui-f-p-icon"><img src="../assets/img/icon/shoucang.svg" alt="" ></span>
						<span class="aui-f-p-focus-info">收藏</span>
					</a>
					
					<a href="#">
						<span class="aui-f-p-icon"><img src="../assets/img/icon/icon-dp.png" alt=""></span>
						<span class="aui-f-p-focus-info">店铺</span>
					</a>
				</div>
				<div v-if="this.$store.state.people.code==1">
					<a href="#" v-if="des.status==false" @click="addCollection">
						<span class="aui-f-p-icon"><img src="../assets/img/icon/icon-sc.png" alt="" ></span>
						<span class="aui-f-p-focus-info">收藏</span>
					</a>
					<a href="#" v-if="des.status!=false" @click="delCollection">
						<span class="aui-f-p-icon"><img src="../assets/img/icon/shoucang.svg" alt="" ></span>
						<span class="aui-f-p-focus-info">收藏</span>
					</a>
					<a href="#">
						<span class="aui-f-p-icon"><img src="../assets/img/icon/icon-dp.png" alt=""></span>
						<span class="aui-f-p-focus-info">店铺</span>
					</a>
				</div>
				
				
				
			</div>
			<div class="aui-footer-product-action-list" v-if="this.$route.query.key!=8">
				<a  class="yellow-color" @click="toLogin" v-if="this.$store.state.people.code==0">您还未登录</a>
				<a  class="yellow-color" @click="addCar"  v-if="this.$store.state.people.code==1">加入购物车</a>
				<a  class="red-color" v-if="this.$store.state.people.code==0" @click="toLogin">请先登录</a>
				<a  class="red-color" v-if="this.$store.state.people.code==1">立即购买</a>
			</div>
			<div class="aui-footer-product-action-list" v-if="this.$route.query.key==8">
				<a  class="yellow-color" @click="toLogin" v-if="this.$store.state.people.code==0">您还未登录</a>
				<a  class="yellow-color" @click="invitationDes"  v-if="this.$store.state.people.code==1">联系客服</a>
				<a  class="red-color" v-if="this.$store.state.people.code==0" @click="toLogin">请先登录</a>
				<a  class="red-color" v-if="this.$store.state.people.code==1">立即拥有</a>
			</div>
			<div class="WXbox" v-if="show==true">
				<img src="../assets/images/WX.jpg" alt="" class="WX">
				<van-button type="primary" class="choose" @click="choose">加微信免费获取</van-button>
			</div>
		</div>
	</footer>
    </div>
</template>

<script>
import { Toast } from 'vant';

    export default {
        data(){
            return{
				src:"",
				bool:true,
				key:"",
				show:false,
				des:"",
				status:""
            }
        },
        methods:{
			addCar(){
				this.$store.commit('carList/addCar',{
					name:this.$store.state.people.obj.name,
					title:this.$route.query.title,
					src:this.$route.query.src,
					price:this.$route.query.price1,
					thingscount:1,
					checked:false,
					id:1
				}),
				Toast('已经在购物车等您');
				this.$router.query={};	
			},
			toLogin(){
				this.$router.push({
					path:"/login"
				})
			},
			//添加收藏
			addCollection(){
				this.$store.commit('thingsList/edit',{
					status:true,
					id:this.$route.query.id,
				}),
				this.$store.commit('collection/add',{
					id:this.$route.query.id,
					title:this.$route.query.title,
					src:this.$route.query.src,
					price:this.$route.query.price1,
					thingscount:1,
					checked:false,
				});	
			},
			//取消i收藏
			delCollection(){
				this.$store.commit('collection/del',{
					id:this.$route.query.id,
					bool:this.bool,
				});
				this.$store.commit('thingsList/edit',{
					status:false,
					id:this.$route.query.id,
				})
			},
			invitationDes(){
               this.show = true;
            },
            choose(){
                this.show = false;
            }
        },
        created(){
			this.key = this.$route.query.key;
			let id = this.$route.query.id;
			let data = this.$store.state.thingsList.thingsTwo2;
			this.des = data.find(item=>item.id==id);
			//获取目标订单收藏状态用于控制页面显示收藏或者已收藏  默认为false 未收藏
			this.status = this.des.status;
        },
        components:{
           
		},
		beforeDestroy(){
			// console.log(this.des)
			// this.$store.state.thingsList.thingsTwo2[this.$route.query.id] = this.des;
		},
		destroyed(){
			this.$store.state.classes.code = 0;     
		},
    }
</script>

<style lang="scss" scoped>
.back{
	width:30px;
	background-color: rgba(0,0,0,.6);
	height:30px;
	border-radius: 50%;
	position: relative;
}
.aui-header-default:after{
	border-bottom-color: transparent;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 300px;
  text-align: center;
  background-color: #39a9ed;
}
.my-swipe .van-swipe-item img{
    width:100%;
    height:100%;
}
.WXbox{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color: rgba(0,0,0,.8);
}
.WX{
    position: absolute;
    width:150px;
    height:150px;
    top:50%;
    left:50%;
    margin-left:-75px;
    margin-top:-75px;
}
.choose{
    position: absolute;
    top:70%;
    left:50%;
    margin-left:-65px;
    margin-top:-20px;
}
</style>