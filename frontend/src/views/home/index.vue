<template>
  <div class="home-container">
    <div class="file-tree">
      <!-- 文件树组件 TODO -->
    </div>
    
    <div class="editor-wrapper">
      <Editor />
    </div>
  </div>
</template>

<script setup>
import Editor from '@/components/Editor.vue'
</script>

<style scoped lang="scss">
.home-container {
  height: 100%;
  display: flex;
}

.file-tree {
  width: 250px;
  border-right: 1px solid #ddd;
}

.editor-wrapper {
  flex: 1;
  overflow: hidden;
}
</style> 