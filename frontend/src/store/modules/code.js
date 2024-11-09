import { defineStore } from 'pinia'
import { executeCode } from '@/api/code'

export const useCodeStore = defineStore('code', {
  state: () => ({
    output: '',
    loading: false
  }),
  
  actions: {
    async runCode(code) {
      this.loading = true
      try {
        const result = await executeCode(code)
        this.output = result.output || result.errors
        return result
      } catch (error) {
        throw error
      } finally {
        this.loading = false
      }
    },
    
    clearOutput() {
      this.output = ''
    }
  }
}) 