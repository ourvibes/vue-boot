<template>
  <el-aside>
    <el-scrollbar>
      <el-menu>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><Location /></el-icon>
            <span>基本布局</span>
          </template>
          <el-menu-item-group title="图表类">
            <router-link to="/some-table" class="link">
              <el-menu-item index="1-1">表格</el-menu-item>
            </router-link>

            <router-link to="/some-chart" class="link">
              <el-menu-item index="1-2">echarts</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="2">
          <template #title>
            <el-icon><Compass /></el-icon>
            <span>帮助</span>
          </template>
          <el-menu-item-group title="基础">
            <router-link to="/some-tool" class="link">
              <el-menu-item index="2-1">工具类</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script lang="ts" setup>
import { Location, Compass } from "@element-plus/icons-vue";
</script>

<style lang="less" scoped>
.link {
  text-decoration: none !important;
  color: #bbb;
}
.el-aside {
  width: 240px;
  color: var(--el-text-color-primary);
  background: #fff !important;
  border-right: solid 1px #e6e6e6;
  box-sizing: border-box;
  height: calc(100vh);
}
</style>
