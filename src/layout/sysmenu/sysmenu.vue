<template>
  <el-menu default-active="2" class="el-menu-vertical-demo">
    <menuprops
      v-for="(item, index) in routerList"
      :key="index"
      :item="item"
    ></menuprops
  ></el-menu>
</template>

<script>
import userApi from '@/api/userApi'
import menuprops from './menuprops'
export default {
  name: 'sysmenu',
  data() {
    return {
      routerList: [],
      token: ''
    }
  },
  created() {
    this.setmenuList()
    console.log(this.$router.getRoutes())
  },
  mounted() {},
  methods: {
    async setmenuList() {
      this.token = this.$store.getters.token
      // console.log(this.token)
      const res = await userApi.router(this.token)
      // console.log(res)
      this.routerList = res.data.data.menus
      console.log(this.routerList)
    }
  },
  components: { menuprops }
}
</script>

<style lang="scss"></style>
