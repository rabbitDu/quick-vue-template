import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import {routes} from "./routers";
import {getToken} from '../utils/auth'
import {Notification, MessageBox, Message} from 'element-ui'
Vue.use(VueRouter)

const router = new VueRouter({
    routes
})
const whiteList = ['/login']
router.beforeEach((to, from, next) => {
    if (getToken()) {
        /* has token*/
        if (to.path === '/login') {
            next()
        } else {
            if (store.getters.roles.length === 0) {
                // 判断当前用户是否已拉取完user_info信息
                store.dispatch('GetInfo').then(() => {
                    next({...to, replace: true}) // hack方法 确保addRoutes已完成
                    // })
                }).catch(err => {
                    store.dispatch('LogOut').then(() => {
                        Message.error(err)
                        next({path: '/'})
                    })
                })
            } else {
                next()
            }
        }
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
