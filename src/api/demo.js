import axios from "../axios/axios";
// demo get请求
export function projectList(query) {
    return axios({
        url: '/demo',
        method: 'get',
        params: query
    })
}

// demo post请求
export function projectListPost(data) {
    return axios({
        url: '/demo',
        method: 'post',
        data: data
    })
}
