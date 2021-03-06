/*
 * @Description:
 * @Author: 小熊熊
 * @Date: 2020-10-29 18:54:34
 * @LastEditors: 小熊熊
 * @LastEditTime: 2020-10-29 18:54:54
 */
/*
 * axios封装
 * 请求拦截，响应拦截,错误回调统一处理
 */

import axios from 'axios';
import { BaseUrl } from '@/config/axios';
// base地址
axios.defaults.baseURL = BaseUrl;

// 创建axios实例
const instance = axios.create({ timeout: 10000 });
// 在instance上设置post请求头
instance.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

// 响应拦截器
instance.interceptors.response.use(
  response => response,
  error => {
    const { response } = error;
    if (response) {
      // errorHandle(response.status, response.data.message);
    } else {
      // 断网处理
      console.log('请连接网络');
    }
    return error;
  }
);
export default instance;
