import Vue from 'vue'
import VueRouter from 'vue-router'

import DemoIndex from "../views/demo/DemoIndex";
Vue.use(VueRouter)
const routes=[
    {
        path: '',
        redirect: '/demo',
        component: DemoIndex,
    },
    {
        path: '/demo',
        name:'demoIndex',
        component: DemoIndex,
    }
]

const router = new VueRouter({
    routes
})
export default router
