export default[
    {
        path: '/guidePage',
        name: "引导页",
        component: () => import('../components/advertise/guidePage.vue')
    },
    {
        path: '/adver',
        name: "广告页",
        component: () => import('../components/advertise/adver.vue'),
        beforeEnter: (to, from, next) => {
            if (localStorage.adver) {
                next();
            } else {
                localStorage.adver = true;
                next('/guidePage')
            }
        }
    },
]