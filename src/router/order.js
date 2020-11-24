export default[
    {
        path: '/orderList',
        name: "我的订单",
        component: () => import('../views/orderList.vue'),
        children:[
            {
                path:"orderAll",
                name:"全部订单",
                component:()=>import('../components/order/myOrder.vue')
            },
            {
                path: "orderPay",
                name: "待支付",
                component: () => import('../components/order/orderPay.vue')
            },
            {
                path: "orderGoods",
                name: "待收货",
                component: () => import('../components/order/orderGoods.vue')
            },
            {
                path: "orderEnd",
                name: "已完成",
                component: () => import('../components/order/orderEnd.vue')
            },
        ]
    },
    {
        path: '/payOrder',
        name: "支付订单",
        component: () => import('../components/order/payOrder.vue')
    },
    {
        path: '/coupon',
        name: "优惠券",
        component: () => import('../components/other/coupon.vue')
    },
]