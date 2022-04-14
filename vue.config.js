'use strict'
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
const name = '系统名称' // 网页标题
module.exports = {
    publicPath: '',
    productionSourceMap: true,
    configureWebpack: {
        name: name,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
    // css: {
    //     loaderOptions: {
    //         sass: {
    //             prependData: `
    //     @import '@/assets/styles/variable.scss;
    //     @import '@/assets/styles/mixins.scss';
    //     `,
    //         },
    //     },
    // },
    // devServer: {
    //     //服务端地址的配置
    //     proxy: {
    //         //公共接口
    //         // '/api': {
    //         //     target: 'http://10.12.2.244:8180/',
    //         //     changeOrigin: true,
    //         //     pathRewrite: {
    //         //         '/api': ''
    //         //     }
    //         // }
    //     }
    // }
}
