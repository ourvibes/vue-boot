<template>
  <el-row :gutter="12">
    <el-col :span="8">
      <el-card shadow="always">实时时间： {{ now }} </el-card>
    </el-col>

    <el-col :span="8">
      <el-card shadow="always">随机字符串： {{ uid }} </el-card>
    </el-col>

    <el-col :span="8">
      <el-card shadow="always"
        >导出excel： <el-button @click="handleExportExcel">导出</el-button>
      </el-card>
    </el-col>

    <el-col :span="8">
      <el-card shadow="always"
        >下载图片： <el-button @click="handleDownlaodImg">下载</el-button>
      </el-card>
    </el-col>

  </el-row>
</template>

<script setup>
import { onUnmounted, ref } from "vue";
import { formatTime, getUid, exportExcel, downlaodImg } from "@tools/index.ts";

let now = ref();

const interval = setInterval(() => {
  now.value = formatTime();
}, 100);

onUnmounted(() => clearInterval(interval));

const uid = getUid();

const handleExportExcel = () => {
  exportExcel({
    fileName: "测试",
    exportData: [
      {
        歌曲: "《平凡之路》",
        作者: "朴树",
      },
    ],
  });
};

const handleDownlaodImg = () => {
  downlaodImg('https://cn.vuejs.org/images/logo.svg');
};
</script>