import axios from "../axios/axios";
import formDataAxios from "../axios/formDataAxios";
// demo get请求(json)
export function projectList(query) {
    return axios({
        url: '/demo',
        method: 'get',
        params: query
    })
}

// demo post请求(json)
export function projectListPost(data) {
    return axios({
        url: '/demo',
        method: 'post',
        data: data
    })
}
// demo put请求(json)
export function projectListPut(data) {
    return axios({
        url: '/demo',
        method: 'put',
        data: data
    })
}


// demo post(multipart/form-data)
export function projectListFormData(data) {
    return formDataAxios({
        url: '/demo',
        method: 'put',
        data: data
    })
}
