<template>
  <el-container>
    <el-aside>
      <el-scrollbar>
        <Menu />
      </el-scrollbar>
    </el-aside>
    <el-main class="global-container"><router-view /></el-main>
  </el-container>
</template>

<script lang="ts" setup>
import Menu from "./components/menu.vue";
</script>

<style lang="less" scoped>
.el-aside {
  width: 240px;
  height: calc(100vh);
}
</style>
