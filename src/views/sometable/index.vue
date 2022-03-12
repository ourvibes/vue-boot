<template>
  <el-card class="box-card">
    <el-table :data="tableData" style="width: 100%" stripe border>
      <el-table-column prop="name" label="#书名" width="180" />
      <el-table-column prop="author" label="作者" />
      <el-table-column prop="time" label="出版日期" />
    </el-table>
  </el-card>
</template>

<script lang="ts" setup>
const tableData = [
  {
    name: "《活着》",
    author: "余华",
    time: "1993年",
  },
  {
    name: "《苏菲的世界》",
    author: "乔斯坦·贾德",
    time: "1991年",
  },
  {
    name: "《百年孤独》",
    author: "加西亚·马尔克斯",
    time: "1967年",
  },
  {
    name: "《呼啸山庄》",
    author: "艾米莉·勃朗特",
    time: "1847年",
  },
  {
    name: "《人性的弱点》",
    author: "戴尔·卡耐基",
    time: "1936年",
  },
  {
    name: "《傲慢与偏见》",
    author: "简·奥斯汀",
    time: "1813年",
  },
  {
    name: "《瓦尔登湖》",
    author: "亨利·戴维·梭罗",
    time: "1854年",
  },
  {
    name: "《老人与海》",
    author: "欧内斯特·米勒尔·海明威",
    time: "1951年",
  },
];
</script>

<style lang="less" scoped>
</style>
