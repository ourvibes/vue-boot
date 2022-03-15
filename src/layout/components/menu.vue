<template>
  <el-aside>
    <el-scrollbar>
      <el-menu router :default-active="route.path">
        <el-sub-menu index="1">
          <template #title>
            <el-icon><Location /></el-icon>
            <span>基本布局</span>
          </template>
          <el-menu-item-group title="图表类">
            <el-menu-item index="/some-table">表格</el-menu-item>

            <el-menu-item index="/some-chart">echarts</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="2">
          <template #title>
            <el-icon><Compass /></el-icon>
            <span>帮助</span>
          </template>
          <el-menu-item-group title="基础">
            <el-menu-item index="/some-tool">工具类</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script lang="ts" setup>
import { Location, Compass } from "@element-plus/icons-vue";
import { useRoute } from "vue-router";

const route = useRoute();

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
