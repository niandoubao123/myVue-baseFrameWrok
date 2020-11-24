<template>
    <div>
        
        <van-nav-bar
        :title="$route.name"
        left-text="返回"
        left-arrow
        @click-left="$router.push('/mine')"
        />
        <div :route='routeboo'>
        <van-tabs v-model="active"  @change="onadd" >
            <van-tab title="全部订单" >
            </van-tab>
            <van-tab title="待支付">
            </van-tab>
            <van-tab title="待收货">
            </van-tab>
            <van-tab title="已完成">
            </van-tab>
        </van-tabs>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    
    export default {
        data(){
            return {
                active: 0,
                routeboo:true
            }
        },
        methods:{
           onadd(index){
            //    console.log(index);
                if(index == 0){
                    this.$router.push("/orderList/orderAll");
                }else if(index == 1){
                    this.$router.push("/orderList/orderPay");
                }else if(index == 2){
                    this.$router.push("/orderList/orderGoods");
                }else if(index == 3){
                    this.$router.push("/orderList/orderEnd");
                }
            }
        },
        components:{
    
        },
        created(){
            // console.log(this.$route.query.id);
            // this.active = this.$route.query.id;
        //     if(this.$route.query.id == 0){
        //             this.$router.push("/orderList/orderAll");
        //         }else if(this.$route.query.id == 1){
        //             this.$router.push("/orderList/orderPay");
        //         }else if(this.$route.query.id == 2){
        //             this.$router.push("/orderList/orderGoods");
        //         }else if(this.$route.query.id == 3){
        //             this.$router.push("/orderList/orderEnd");
        //         }
        }
    }
</script>

<style lang="scss" scoped>
</style>