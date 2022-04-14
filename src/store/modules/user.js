import {login, logout, getInfo} from '../../api/login'
import {getToken, setToken, removeToken} from '../../utils/auth'
import User from "../user";

const user = {
    state: {
        token: getToken(),
        name: '',
        nickName: '',
        roles: [],
        permissions: [],
        user: null //用户整体的信息
    },

    mutations: {
        SET_USER(state, user) {
            state.user = new User(user);
        },
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_NICK_NAME: (state, name) => {
            state.nickName = name
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        },
        SET_PERMISSIONS: (state, permissions) => {
            state.permissions = permissions
        }
    },
    //有异步的方法
    actions: {
        // 登录
        Login({commit}, userInfo) {
            const username = userInfo.username.trim()
            const password = userInfo.password
            return new Promise((resolve, reject) => {
                //调用登录接口
                resolve()
                setToken('dssdsdedffsdfsdfd')
                //todo
                //等到有登录接口时，再打开这段代码就行了
                // login(username, password).then(res => {
                //     setToken(res.token)
                //     commit('SET_TOKEN', res.token)
                //     commit('SET_ROLES', res.user.roles)
                //     commit('SET_USER', res.user)
                //     commit('SET_NAME', res.user.userName)
                //     commit('SET_NICK_NAME', res.user.nickName)
                //     commit('SET_PERMISSIONS', res.permissions)
                //     resolve()
                // }).catch(error => {
                //     reject(error)
                // })
            })
        },

        // 获取用户信息
        GetInfo({commit, state}) {
            return new Promise((resolve, reject) => {
                resolve()
                // getInfo().then(res => {
                //     const user = res.user
                //     if (res.roles && res.roles.length > 0) { // 验证返回的roles是否是一个非空数组
                //         commit('SET_ROLES', user.roles)
                //     } else {
                //         commit('SET_ROLES', ['ROLE_DEFAULT'])
                //     }
                //     commit('SET_USER', user)
                //     commit('SET_NAME', res.user.userName)
                //     commit('SET_NICK_NAME', res.user.nickName)
                //     commit('SET_PERMISSIONS', res.permissions)
                //     resolve(res)
                // }).catch(error => {
                //     reject(error)
                // })
            })
        },

        // 退出系统
        LogOut({commit, state}) {
            commit('SET_TOKEN', '')
            commit('SET_ROLES', [])
            commit('SET_NAME', null)
            commit('SET_NICK_NAME', null)
            commit('SET_PERMISSIONS', [])
            removeToken()
        },

        // 前端 登出
        FedLogOut({commit}) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '')
                removeToken()
                resolve()
            })
        }
    }
}

export default user
