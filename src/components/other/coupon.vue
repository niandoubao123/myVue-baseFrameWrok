<template>
    <div>
    <header class="aui-header-default aui-header-fixed">
		<a href="javascript:history.back(-1)" class="aui-header-item">
			<i class="aui-icon aui-icon-back"></i>
		</a>
		<div class="aui-header-center aui-header-center-clear">
			<div class="aui-header-center-logo">
				<div class="">我的优惠券</div>
			</div>
		</div>
		<a href="#" class="aui-header-item-icon"   style="min-width:0">
			<i class="aui-icon aui-icon-search"></i>
		</a>
	</header>
    <section class="aui-myOrder-content" v-if="$store.state.people.code==0">
        <h1 style="text-align:center;font-size:15px;color:#8e8e8e">还没登录哦~</h1>
        <youlike></youlike>
    </section>
	<section class="aui-myOrder-content" v-if="$store.state.people.code==1">
		<div class="m-tab demo-small-pitch" data-ydui-tab>
			<div class="aui-myOrder-fix">
				<ul class="tab-nav">
					<!-- <li :class="['tab-nav-item',index==num?'tab-active':'']" v-for="(item,index) in couponTitle" :key="index" @click="btn(index)"><a href="javascript:;">{{item}}</a></li> -->
					<li class='tab-nav-item tab-active'><a href="javascript:;">优惠券</a></li>
				</ul>
			</div>
			<div class="aui-prompt"><i class="aui-icon aui-prompt-sm"></i>兑换码现已关闭,请使用优惠券</div>
			<div class="tab-panel">
				<!-- <div class='tab-panel-item tab-active' v-for="(item,index) in lists" :key="index" style="height:40px;" @click="onUse(item.id)">
					<div class="aui-coupon-item">
                        <h1 style="width:100px;float:left;">￥{{item.price}} {{item.id}}--{{defaultCoupon}}</h1>
                        <van-checkbox style="float:right" v-model=item.isSelected>复选框1</van-checkbox>                      
					</div>
				</div> -->
                    <!-- 优惠券单元格 -->
                    <van-coupon-cell
                    :coupons="coupons"
                    :chosen-coupon="chosenCoupon"
                    @click="showList = true"
                    />
                    <!-- 优惠券列表 -->
                    <van-popup
                    v-model="showList"
                    round
                    position="bottom"
                    style="height: 90%; padding-top: 4px;"
                    >
                    <van-coupon-list
                        :coupons="coupons"
                        :chosen-coupon="chosenCoupon"
                        :disabled-coupons="disabledCoupons"
                        @change="onChange"
                        @exchange="onExchange"
                    />
                    </van-popup>
			</div>
		</div>
	</section>

    </div>
</template>

<script>
import youlike from '../indexPage/youLike'
    export default {
        data(){
            return{
                couponTitle:[
                    "未使用",
                    "已使用",
                    "已过期",
                ],num:0,
                couponContent:[
                    {
                        src:require('../../assets/img/icon/icon-c1.jpg'),
                    },
                    {
                        src:require('../../assets/img/icon/icon-c3.jpg')
                    },
                    {
                        src:require('../../assets/img/icon/icon-c4.jpg')
                    }
                    
                ],
                defaultCoupon:null,
                bool:false,
                bool2:true,

                chosenCoupon: -1,
                coupons: "",
                disabledCoupons: "",
                showList:false,
            }
        },
        methods:{
            btn(index){
                this.num = index;
            },
            // onUse(index){
            //     // let id = this.$store.state.order.couponList.findIndex(item=>item.id==index);
            //     // console.log(id)
            //     // if(id!=-1){
            //     //     console.log("111")
            //     //    this.$store.state.order.couponList[id].isSelected = !this.$store.state.order.couponList[id].isSelected
            //     // }else{
                   
            //     // }
            //    console.log(index,'这是这里')
            //     if(index!=-1){
            //         let id = this.$store.state.order.couponList.findIndex(item=>item.id==index+1);
            //         this.$store.state.order.couponList[id].isSelected = !this.$store.state.order.couponList[id].isSelected
            //     }else{
            //        this.$store.state.order.couponList[0].isSelected = !this.$store.state.order.couponList[0].isSelected
            //     }
                
            // },


            onChange(index) {
                this.showList = false;
                this.chosenCoupon = index;
                this.$store.commit('order/coupon',index)
                console.log(this.$store.state.order.defaultCoupon);
                if(index == -1){
                    console.log("不使用优惠券")
                }
            },
            onExchange(code) {
                // this.coupons.push(coupon);
                console.log(code)
            }
           
        },
        components:{
            youlike
        },
        created(){
            this.coupons = this.$store.state.order.couponList;
            this.chosenCoupon = this.$store.state.order.defaultCoupon;         
            this.disabledCoupons = this.$store.state.order.disabledCoupons;         
        },
        beforeDestroy(){
            // this.$store.state.order.couponList = this.lists;
        }
    }
</script>

<style lang="scss" scoped>

</style>