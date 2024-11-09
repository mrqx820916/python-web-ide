import { defineStore } from 'pinia'
import { login, getUserInfo, logout } from '@/api/user'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    userInfo: null
  }),
  
  actions: {
    // 登录
    async login(data) {
      try {
        const result = await login(data)
        this.token = result.token
        this.userInfo = result.user
        localStorage.setItem('token', result.token)
        return result
      } catch (error) {
        console.error('登录失败:', error)
        throw error
      }
    },
    
    // 获取用户信息
    async getUserInfo() {
      try {
        const data = await getUserInfo()
        this.userInfo = data
        return data
      } catch (error) {
        console.error('获取用户信息失败:', error)
        throw error
      }
    },
    
    // 登出
    async logout() {
      try {
        await logout()
        this.token = ''
        this.userInfo = null
        localStorage.removeItem('token')
      } catch (error) {
        console.error('登出失败:', error)
        throw error
      }
    }
  }
}) 