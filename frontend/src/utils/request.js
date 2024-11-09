import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: '/api',
  timeout: 30000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => {
    console.error('请求错误:', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    
    // 请求成功
    if (res.success) {
      return res.data
    }
    
    // 请求失败但有响应
    ElMessage.error(res.error || '请求失败')
    return Promise.reject(new Error(res.error || '请求失败'))
  },
  error => {
    console.error('响应错误:', error)
    if (error.code === 'ECONNABORTED') {
      ElMessage.error('请求超时，请重试')
    } else {
      ElMessage.error(error.response?.data?.error || error.message || '请求失败')
    }
    return Promise.reject(error)
  }
)

export default service 