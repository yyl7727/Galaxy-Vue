import axios from 'axios'
import Element from 'element-ui'
import router from './router'
import store from './store'
axios.defaults.baseURL = "http://127.0.0.1:8081"

//前置拦截
axios.interceptors.request.use(config => {
    return config
})

//后置拦截
axios.interceptors.response.use(response => {
    let res = response.data
    console.log(res)

    if(res.code != '200') {
        Element.Message.error(res.msg, {dutation: 2 * 1000})
        return Promise.reject(res.msg)
    } else {
        return response
    }
},
error =>{
    if(error.response.data) {
        error.message = error.response.data.msg
    }

    if(error.response.status == '401'){
        store.commit("REMOVE_INFO")
        router.push("/login")
    }
    Element.Message.error(error.message, {dutation: 2 * 1000})
    return Promise.reject(error)
})