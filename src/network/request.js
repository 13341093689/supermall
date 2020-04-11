import axios from 'axios';

export function request(config) {
  // 1. 创建axios 实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: '5000'
  })

  // 2.axios 拦截器
  axios.interceptors.request.use(config => {
    // 1.比如config中的一些信息不符合服务器的要求
    // 2 .比如每次发送请求的时候，希望在界面上显示一个等待的logo
    // 3. 某些网络请求（比如登录的时候携带token），携带一些特殊信息
    return config;
  }, err => {
    return err;
  })
  axios.interceptors.response.use(res => {
    return res
  }, err => {
    return err;
  })


  // 3.发送真正的网络请求
  return instance(config)
}