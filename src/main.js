import Vue from 'vue'
import App from './App.vue'
import ECharts from 'vue-echarts/components/ECharts.vue'
import router from './router'
import store from './store'
import './assets/styles/index.css' // global css
import 'font-awesome/css/font-awesome.min.css'
// css样式还是需要全部引入
import 'element-ui/lib/theme-chalk/index.css'
import Element from 'element-ui';

Vue.config.productionTip = false

Vue.component('el-chart', ECharts)

Vue.use(Element)
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
