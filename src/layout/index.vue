<template>
  <el-container>
    <el-header>
      <sysheader></sysheader>
    </el-header>
    <el-container>
      <el-aside width="250px"><sysmenu></sysmenu></el-aside>
      <el-main
        :style="{
          marginLeft: this.$store.getters.isCollapse ? '64px' : '250px'
        }"
        ><sysmain></sysmain
      ></el-main>
    </el-container>
  </el-container>
</template>

<script>
import sysheader from './sysheader/sysheader'
import sysmenu from './sysmenu/sysmenu.vue'
import sysmain from './sysmain/sysmain'
export default {
  name: 'index',
  data() {
    return {}
  },
  mounted() {},
  methods: {},
  components: { sysheader, sysmenu, sysmain }
}
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}
</style>
