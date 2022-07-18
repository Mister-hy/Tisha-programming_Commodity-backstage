<template>
  <el-menu
    :default-active="activePath"
    class="el-menu-vertical-demo"
    text-color="#000"
    background-color="#fff"
    active-text-color="#4339c8"
    :collapse="isCollapse"
    :collapse-transition="false"
    :style="{ width: $store.getters.isCollapse ? '64px' : '200px' }"
    unique-opened
    router
  >
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
      token: '',
      userInfo: []
    }
  },
  created() {
    this.setmenuList()
    // console.log(this.$router.getRoutes())
  },
  computed: {
    // 路由跳转
    activePath() {
      return this.$route.path
    },
    isCollapse() {
      return this.$store.getters.isCollapse
    }
  },
  mounted() {},
  methods: {
    async setmenuList() {
      this.token = this.$store.getters.token
      // console.log(this.token)
      const res = await userApi.router(this.token)
      // console.log(res)
      this.routerList = res.data.data.menus
      // console.log(this.routerList)
      this.userInfo = res.data.data
      // console.log(this.userInfo)
      this.$store.dispatch('user/userInfo', this.userInfo)
    }
  },
  components: { menuprops }
}
</script>

<style lang="scss"></style>
