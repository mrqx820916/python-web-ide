import request from '@/utils/request'

// 执行代码
export function executeCode(code, input = '') {
  return request({
    url: '/execute',
    method: 'post',
    data: { 
      code,
      input 
    }
  })
}

// 保存代码
export function saveCode(data) {
  return request({
    url: '/code/save',
    method: 'post',
    data
  })
}

// 获取代码列表
export function getCodeList() {
  return request({
    url: '/code/list',
    method: 'get'
  })
} 