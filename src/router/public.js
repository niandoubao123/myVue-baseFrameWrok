export default[
    {
        path: "/des",
        name: "详情页",
        component: () => import('../views/des.vue')
    }, {
        path: '/login',
        name: "登录",
        component: () => import('../components/public/login.vue')
    }, {
        path: '/register',
        name: "注册",
        component: () => import('../components/public/register.vue')
    }, {
        path: '/search',
        name: "搜索",
        component: () => import('../views/search.vue')
    },
]