<template>
    <div>
        <!-- 订单遍历 -->
        <section class="aui-myOrder-content" v-if="$store.state.people.code==0">
            <h1 style="text-align:center;font-size:15px;color:#8e8e8e">还没登录哦~</h1>
            <youlike></youlike>
        </section>
        <div v-if="$store.state.people.code==1">
            <div v-for="(item,index) in lists" :key="index">
                <van-panel :title="'订单：'+item.orderId" :status="typeList[item.type]">
                    <!-- 商品遍历 -->
                    <div v-for="(value,key) in item.goodsList" :key="key">
                        <van-card
                        :num="value.thingscount"
                        :price="value.price"
                        desc="描述信息"
                        :title="value.title"
                        :thumb=value.src
                        />
                    </div>
                    <h1 style="float:left;margin-left:20px;color:#f50;width:150px;height:50px;line-height:50px;">总金额：￥{{item.sumMoney}}</h1>
                    <!-- 待支付 -->
                    <div v-if="item.type == 1" slot="footer" class="van-panel-footer">
                        <van-button size="small" type="danger" @click="del(item.orderId)">删除订单</van-button>
                        <van-button size="small" type="primary" @click="onPay(item.orderId)" >支付订单</van-button>
                    </div>
                    <!-- 待收货 -->
                    <div v-else-if="item.type == 2" slot="footer" class="van-panel-footer">
                        <van-button size="small" >退款申请</van-button>
                        <van-button size="small" @click="onGoods(item.orderId)"  >已收货</van-button>
                    </div>
                    <!-- 评价商品 -->
                    <div v-else-if="item.type == 3" slot="footer" class="van-panel-footer">
                        <van-button size="small"  >商品评价</van-button>
                    </div>
                </van-panel>
            </div>
        </div>
    </div>
</template>

<script>
import youlike from '../indexPage/youLike'
    export default {
        data(){
            return {
                lists:[],
                typeList:[],//订单状态
            }
        },
        methods:{
            onPay(orderId){
                let index = this.lists.findIndex(item=>item.orderId == orderId);
                this.lists[index].type = 2; //切换支付后待收货。调用支付接口
            },
            onGoods(orderId){
                let index = this.lists.findIndex(item=>item.orderId == orderId);
                this.lists[index].type = 3; //切换待收货改已完成。
            },
            del(orderId){
                let id = this.lists.findIndex(item=>item.orderId == orderId);
                this.lists.splice(id,1)
            }
        },
        components:{
            youlike
        },
        created(){
            this.lists = this.$store.state.order.orderList;
            this.typeList = this.$store.state.order.typeList;
        },
        // 在组件销毁之前，
        // 把当前列表数据同步vuex数据中。
        beforeDestroy() {
            if(this.lists.length){
                this.$store.commit("order/edit",this.lists);
            }
        },
    }
</script>

<style lang="scss" scoped>
    .van-panel-footer{
        text-align: right;
    }

</style>