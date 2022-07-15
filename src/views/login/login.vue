<template>
  <el-row>
    <el-col :span="12"
      ><div class="left">
        <h1 style="color: #fff; font-size: 50px">欢迎光临</h1>
      </div></el-col
    >
    <el-col :span="12"
      ><div class="right">
        <div class="loginFrom"></div></div
    ></el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {},
  components: {}
}
</script>

<style lang="css" scoped>
.el-row {
  width: 100%;
  height: 100%;
  display: flex;
}
.left,
.right {
  flex: 1;
  height: 100%;
}
.left {
  background-color: #6366ef;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loginFrom {
}
</style>
