export default[
    {
        path: "/show",
        name: "动态",
        component: () => import('../views/show.vue')
    },
    {
        path: '/addShow',
        name: "发动态",
        component: () => import('../components/showPage/addShow.vue')
    }
]