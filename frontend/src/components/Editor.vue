<template>
  <div class="editor-container">
    <div class="editor-header">
      <el-button type="primary" @click="runCode">运行</el-button>
    </div>
    
    <div class="editor-main" ref="editorContainer"></div>
    
    <div class="output-panel">
      <div class="output-header">
        <span>输出结果</span>
        <el-button link @click="clearOutput">清空</el-button>
      </div>
      
      <div v-if="waitingForInput" class="input-area">
        <div class="input-prompt">{{ currentPrompt }}</div>
        <el-input
          v-model="inputValue"
          :placeholder="currentPrompt || '请输入...'"
          @keyup.enter="submitInput"
          ref="inputRef"
        >
          <template #append>
            <el-button @click="submitInput">确定</el-button>
          </template>
        </el-input>
      </div>
      
      <pre class="output-content" v-html="output"></pre>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import * as monaco from 'monaco-editor'
import { executeCode } from '@/api/code'
import { ElMessage } from 'element-plus'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'

// 配置 Monaco Editor 的 worker
self.MonacoEnvironment = {
  getWorker(_, label) {
    return new editorWorker()
  }
}

const editorContainer = ref(null)
const inputRef = ref(null)
const output = ref('')
const waitingForInput = ref(false)
const inputValue = ref('')
const inputHistory = ref([])  // 存储输入历史
const currentPrompt = ref('')  // 添加提示信息的响应式变量
let editor = null

onMounted(() => {
  // 创建编辑器
  editor = monaco.editor.create(editorContainer.value, {
    value: 'print("Hello, World!")',
    language: 'python',
    theme: 'vs-dark',
    fontSize: 14,
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    automaticLayout: true,
    tabSize: 4,
    insertSpaces: true,
    wordWrap: 'on',
    // 基础功能配置
    lineNumbers: 'on',
    folding: true,
    renderWhitespace: 'none',
    contextmenu: true,
    rulers: [],
    wordBasedSuggestions: true,
    // 禁用一些高级功能
    quickSuggestions: {
      other: false,
      comments: false,
      strings: false
    },
    parameterHints: {
      enabled: false
    },
    codeLens: false,
    lightbulb: {
      enabled: false
    },
    formatOnType: false,
    formatOnPaste: false
  })
})

onBeforeUnmount(() => {
  if (editor) {
    editor.dispose()
  }
})

const extractPrompt = (code) => {
  // 从代码中提取 input 的提示信息
  const matches = code.match(/input\((["'])(.*?)\1\)/);
  return matches ? matches[2] : '';
}

const runCode = async () => {
  try {
    const code = editor.getValue()
    // 重置输入历史和输出
    inputHistory.value = []
    output.value = ''
    
    // 检查是否包含输入
    if (code.includes('input(')){
      waitingForInput.value = true
      currentPrompt.value = extractPrompt(code)  // 提取第一个 input 的提示
      output.value = currentPrompt.value
      nextTick(() => {
        inputRef.value?.input?.focus()
      })
      return
    }
    
    const result = await executeCode(code)
    handleExecuteResult(result)
  } catch (error) {
    handleExecuteError(error)
  }
}

const submitInput = async () => {
  if (!inputValue.value.trim()) {
    ElMessage.warning('请输入内容')
    return
  }
  
  try {
    const code = editor.getValue()
    // 添加到输入历史
    inputHistory.value.push(inputValue.value)
    
    const result = await executeCode(code, inputHistory.value.join('\n'))
    
    // 更新输出，保留之前的输出内容
    if (result.output) {
      output.value = result.output
    }
    
    // 检查是否还需要更多输入
    if (result.needs_input) {
      waitingForInput.value = true
      // 提取下一个 input 的提示
      const allInputs = code.match(/input\((["'])(.*?)\1\)/g) || [];
      if (allInputs[inputHistory.value.length]) {
        currentPrompt.value = extractPrompt(allInputs[inputHistory.value.length])
      }
      nextTick(() => {
        inputRef.value?.input?.focus()
      })
    } else {
      waitingForInput.value = false
      currentPrompt.value = ''
    }
    
    // 清空当前输入
    inputValue.value = ''
  } catch (error) {
    handleExecuteError(error)
  }
}

// 处理执行结果
const handleExecuteResult = (result, append = false) => {
  if (result.output) {
    output.value = append ? output.value + result.output : result.output
    // 检查是否需要更多输入
    if (result.needs_input || result.output.includes('等待输入')) {
      waitingForInput.value = true
      currentPrompt.value = result.prompt || ''  // 设置提示信息
      nextTick(() => {
        inputRef.value?.input?.focus()
      })
    } else {
      waitingForInput.value = false
      currentPrompt.value = ''
    }
  } else if (result.errors) {
    output.value = append ? output.value + result.errors : result.errors
    ElMessage.error('代码执行出错')
    waitingForInput.value = false
    currentPrompt.value = ''
  }
}

// 处理执行错误
const handleExecuteError = (error) => {
  console.error('执行失败:', error)
  const errorMessage = `Error: ${error.message}\n`
  output.value += errorMessage
  ElMessage.error('代码执行失败')
  waitingForInput.value = false
}

const clearOutput = () => {
  output.value = ''
  waitingForInput.value = false
  inputValue.value = ''
  inputHistory.value = []
}
</script>

<style scoped>
.editor-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.editor-header {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.editor-main {
  flex: 1;
  min-height: 300px;
}

.output-panel {
  height: 200px;
  border-top: 1px solid #ddd;
}

.output-header {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f5f5f5;
}

.output-content {
  padding: 10px;
  margin: 0;
  height: calc(100% - 40px);
  overflow: auto;
  font-family: monospace;
  white-space: pre-wrap;
  background: #1e1e1e;
  color: #d4d4d4;
}

.input-area {
  padding: 10px;
  background: #2d2d2d;
  border-bottom: 1px solid #444;
}

.input-prompt {
  color: #d4d4d4;
  margin-bottom: 5px;
  font-family: monospace;
  white-space: pre-wrap;
}
</style> 