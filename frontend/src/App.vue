<script setup>
import { ElConfigProvider } from 'element-plus'
</script>

<template>
  <el-config-provider>
    <router-view />
  </el-config-provider>
</template>

<style>
@import '@/styles/index.scss';
</style>
