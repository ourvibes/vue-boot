<template>
  <el-row :gutter="12">
    <el-col :span="12">
      <el-card shadow="always">时间： {{ now }}</el-card>
    </el-col>

    <el-col :span="12">
      <el-card shadow="always">随机字符串： {{ uid }}</el-card>
    </el-col>
  </el-row>

  <el-divider border-style="dashed" />

  <el-row :gutter="12">
    <el-col :span="12">
      <el-card shadow="always">
        导出excel：
        <el-button @click="handleExportExcel">导出</el-button>
      </el-card>
    </el-col>

    <el-col :span="12">
      <el-card shadow="always">
        下载图片：
        <el-button @click="handleDownlaodImg">下载</el-button>
      </el-card>
    </el-col>
  </el-row>

  <el-divider border-style="dashed" />

  <el-row :gutter="12">
    <el-col :span="12">
      <el-card shadow="always">
        数字格式化：{{ num }}, {{ percent }}
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { formatTime, getUid, exportExcel, downlaodImg, formatNum, PERCENT_FORMAT } from "@tools";

let now = formatTime();

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

const num = formatNum(123456789);

const percent = formatNum(0.7632, PERCENT_FORMAT)
</script>