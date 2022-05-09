'use strict'
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
const CompressionPlugin = require('compression-webpack-plugin');
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
        },
        plugins: [
            new CompressionPlugin({
                algorithm: 'gzip', // 使用gzip压缩
                test: /\.js$|\.html$|\.css$/, // 匹配文件名
                filename: '[path].gz[query]', // 压缩后的文件名(保持原文件名，后缀加.gz)
                minRatio: 1, // 压缩率小于1才会压缩
                threshold: 10240, // 对超过10k的数据压缩
                deleteOriginalAssets: false, // 是否删除未压缩的源文件，谨慎设置，如果希望提供非gzip的资源，可不设置或者设置为false（比如删除打包后的gz后还可以加载到原始资源文件）
            }),
        ],
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
