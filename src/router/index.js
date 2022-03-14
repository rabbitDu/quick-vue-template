import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from "./routers";
import {getToken} from '@/utils/auth'

Vue.use(VueRouter)

const router = new VueRouter({
    routes
})
const whiteList = ['/login']
router.beforeEach((to, from, next) => {
    if (getToken()) {
        next()
    } else {
        // 没有token
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
        }
    }
})


export default router
