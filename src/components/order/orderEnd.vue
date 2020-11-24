<template>
    <div>
        <section class="aui-myOrder-content" v-if="$store.state.people.code==0">
            <h1 style="text-align:center;font-size:15px;color:#8e8e8e">还没登录哦~</h1>
            <youlike></youlike>
        </section>
        <!-- 订单遍历 -->
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
                <!-- 评价商品 -->
                <div  slot="footer" class="van-panel-footer">
                    <h1 style="float:left;margin-left:-20px;color:#f50;width:150px;height:35px;line-height:35px;">总金额：￥{{item.sumMoney}}</h1>
                    <van-button size="small"  >商品评价</van-button>
                </div>
            </van-panel>
        </div>
    </div>
</template>

<script>
import youlike from '../indexPage/youLike'
    export default {
        data(){
            return {
                lists:[],
                typeList:[]
            }
        },
        components:{
            youlike
        },
        created(){
            this.typeList = this.$store.state.order.typeList;
            let dataList = this.$store.state.order.orderList;
            this.lists = dataList.filter(item=>item.type == 3);
        },
        // 在组件销毁之前，
        // 把当前列表数据同步vuex数据中。
        beforeDestroy() {
            if(this.lists.length){
                console.log(this.lists);
                this.$store.commit("order/editId",this.lists);
            }
        },
    }
</script>

<style lang="scss" scoped>
    .van-panel-footer{
        text-align: right;
    }

</style>