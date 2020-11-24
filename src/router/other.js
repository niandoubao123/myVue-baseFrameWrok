export default[
    {
        path: '/invite',
        name: "邀请好友",
        component: () => import('../components/other/invite.vue')
    },
    {
        path: '/asign',
        name: "签到",
        component: () => import('../components/other/asign.vue')
    },
    {
        path: '/invitation',
        name: "请帖",
        component: () => import('../components/other/invitation.vue')
    },
    {
        path: '/clothes',
        name: "婚纱礼服",
        component: () => import('../components/other/clothes.vue')
    },
    {
        path: '/house',
        name: "婚房布置",
        component: () => import('../components/other/house.vue')
    },
    {
        path: "/marry",
        name: "结婚登记处",
        component: () => import('../components/other/marry.vue')
    },
    
]