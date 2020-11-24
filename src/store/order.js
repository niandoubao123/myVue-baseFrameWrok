export default{
    namespaced:true,
    state:{
        orderList:[
            
        ],
        typeList: ["全部订单", "待支付", "待收货", "已完成"],
        couponList: [
            {
                available: 1,
                condition: '无使用门槛\n最多优惠12元',
                reason: '',
                value: 150,
                name: '优惠券名称',
                startAt: 1489104000,
                endAt: 1514592000,
                valueDesc: '1.5',
                unitDesc: '元',
                // id:1,
                status:0,
            }, 
            {
                available: 2,
                condition: '无使用门槛\n最多优惠18元',
                reason: '',
                value: 250,
                name: '优惠券名称',
                startAt: 1489104000,
                endAt: 1514592000,
                valueDesc: '2.5',
                unitDesc: '元',
                // id: 2,
                status:0,
            },
        ],
        defaultCoupon:0,
        disabledCoupons:[]
    
    },
    mutations:{
        add(state,obj){
            state.orderList.push(obj);
        },
        edit(state,obj){
            state.orderList = null;
            state.orderList = obj;  //先清空在传过来已经修改的
        },
        // 通过id单独修改数据
        editId(state, obj) {
            for (let i = 0; i < obj.length; i++) {
                for (let j = 0; j < state.orderList.length; j++) {
                    // 状态值为6删除数据  若某一个type=6
                    if (obj[i].orderId == state.orderList[j].orderId && obj[i].type == 6) {
                        state.orderList.splice(j, 1);

                        // 修改数据id等于当前vuex数据id
                    } else if (obj[i].orderId == state.orderList[j].orderId) {
                        state.orderList[j].type = obj[i].type;
                    }
                }
            }

        },
        coupon(state,value){
            state.defaultCoupon = value;
        },
        changeCoupon(state,value){
            console.log(value.defaultCoupon);
            if(value.defaultCoupon==-1){
                return;
            }
            state.disabledCoupons.push(state.couponList[value.defaultCoupon])
            state.couponList.splice(value.defaultCoupon, 1);
            state.defaultCoupon=0;
        }
    },
    getters:{
        sumMoney(state){
            return state.orderList.reduce((total,item)=>{
                if(item.length==0) return total;
                return total+=item.price*item.thingscount
            },0)
        }
    }
}