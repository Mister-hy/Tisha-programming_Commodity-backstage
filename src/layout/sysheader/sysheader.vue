<template>
  <div class="header">
    <div class="logo">
      <i class="el-icon-eleme"> 积云编程 </i>
    </div>
    <div class="left-container">
      <el-button
        type="text"
        size="nimi"
        @click="CollapseStatus"
        :icon="
          $store.getters.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'
        "
      ></el-button>
    </div>
    <div class="right-container">
      <el-tooltip effect="dark" content="全屏" placement="bottom">
        <i class="el-icon-full-screen"></i>
      </el-tooltip>
      <!-- 头像 -->
      <el-avatar
        class="avatar"
        v-if="$store.getters.userinfo"
        :src="
          $store.getters.userinfo.avatar ? $store.getters.userInfo.avatar : ''
        "
      ></el-avatar>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link hand">
          {{ $store.getters.userinfo.username || '' }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="editpassword">修改密码</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sysheader',
  data() {
    return {
      list: []
    }
  },
  computed: {},
  mounted() {},
  methods: {
    // 退出登录
    async handleLogout() {
      const res = await this.$store.dispatch('user/logout')
      // console.log(res)
      if (res) {
        this.$notify.success({
          title: '提示',
          message: '您已成功退出登录'
        })
        this.$router.push('/login')
      }
    },
    handleCommand(command) {
      switch (command) {
        case 'logout': {
          this.handleLogout()
        }
      }
    },
    // 折叠
    CollapseStatus() {
      this.$store.dispatch('menu/setCollapse')
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.header {
  --tw-bg-opacity: 1;
  background-color: rgba(67, 56, 202, var(--tw-bg-opacity));
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  --tw-text-opacity: 1;
  color: rgba(253, 253, 253, var(--tw-text-opacity));
  height: 60px;
  z-index: 1000;
  .logo {
    width: 250px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    font-weight: 100;
    font-size: 20px;
    line-height: 60px;
  }
  .left-container {
    display: flex;
    align-items: center;
    .el-button {
      cursor: pointer;
      font-size: 16px;
      color: #fff;
    }
  }
  .right-container {
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: auto;
    ::v-deep .el-icon-full-screen {
      font-size: 16px;
      cursor: pointer;
    }
    .avatar {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
