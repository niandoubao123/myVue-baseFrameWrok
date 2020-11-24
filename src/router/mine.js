export default[
    {
        path: '/mySet',
        name: "设置",
        component: () => import('../components/mySet/mySet.vue')
    },
    {
        path: '/selfInfo',
        name: "个人信息",
        component: () => import('../components/mySet/mySetSeting/selfInfo.vue')
    },
    {
        path: '/address',
        name: "收货地址",
        component: () => import('../components/mySet/mySetSeting/address.vue')
    },
    {
        path: '/addAddress',
        name: "新增地址",
        component: () => import('../components/mySet/mySetSeting/addAddress.vue')
    },
    {
        path: '/editAddress',
        name: "新增地址",
        component: () => import('../components/mySet/mySetSeting/editAddress.vue')
    },
    {
        path: '/collection',
        name: "我的收藏",
        component: () => import('../components/minePage/collection.vue')
    },
]