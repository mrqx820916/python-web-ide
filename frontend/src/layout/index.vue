<template>
  <div class="layout">
    <!-- 顶部导航栏 -->
    <header class="header">
      <div class="logo">Python Web IDE</div>
      <div class="user-info">
        <el-dropdown>
          <span class="el-dropdown-link">
            {{ username }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </header>

    <!-- 主要内容区 -->
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowDown } from '@element-plus/icons-vue'

const router = useRouter()
const username = ref('User')

const handleLogout = () => {
  // TODO: 处理登出逻辑
  router.push('/login')
}
</script>

<style scoped lang="scss">
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  height: 60px;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  .logo {
    font-size: 20px;
    font-weight: bold;
  }

  .user-info {
    cursor: pointer;
  }
}

.main {
  flex: 1;
  overflow: hidden;
  padding: 20px;
  background-color: #f0f2f5;
}
</style> 