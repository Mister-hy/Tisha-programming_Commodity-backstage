<template>
  <div class="header">
    <div class="logo">
      <i class="el-icon-eleme"> 积云编程 </i>
    </div>
    <transition name="silde-open">
      <div class="left-container">
        <!-- 左侧菜单缩放 -->
        <el-button
          type="text"
          size="nimi"
          @click="CollapseStatus"
          :icon="
            $store.getters.isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'
          "
        ></el-button>
      </div>
    </transition>
    <!-- 刷新 -->
    <el-tooltip content="刷新" placement="bottom">
      <i class="el-icon-refresh refresh" @click="refresh"></i>
    </el-tooltip>
    <div class="right-container">
      <el-tooltip effect="dark" content="全屏" placement="bottom">
        <i
          :class="isFullscreen ? 'el-icon-full-screen' : 'el-icon-aim'"
          @click="changeFullScreen"
        ></i>
      </el-tooltip>
      <!-- 头像 -->
      <el-avatar
        class="avatar"
        v-if="$store.getters.userinfo"
        :src="
          $store.getters.userinfo.avatar ? $store.getters.userInfo.avatar : ''
        "
      ></el-avatar>
      <transition name="silde-open">
        <!-- 下拉菜单 -->
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            admin
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="editpassword" @click="show = true"
              >修改密码</el-dropdown-item
            >
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </transition>
    </div>
    <!--    修改密码抽屉-->
    <transition name="silde">
      <div class="my-mask" v-show="show">
        <div class="title">
          <span>修改密码</span><span @click="show = false">X</span>
        </div>
        <el-form
          ref="formRef"
          :model="editPasswordFormModel"
          :rules="rules"
          label-width="100px"
        >
          <el-form-item label="旧密码" prop="oldPassword">
            <el-input
              v-model.trim="editPasswordFormModel.oldPassword"
              placeholder="请输入旧密码"
            ></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newPassword">
            <el-input
              v-model="editPasswordFormModel.newPassword"
              placeholder="请输入新密码"
              show-password
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="confirmPassword">
            <el-input
              v-model="editPasswordFormModel.confirmPassword"
              placeholder="请输入确认密码"
              show-password
              type="password"
            ></el-input>
          </el-form-item>
          <div class="footer">
            <el-button type="primary" size="small" @click="handleSubmit"
              >提交</el-button
            >
            <el-button type="text" @click="show = false" size="small"
              >取消</el-button
            >
          </div>
        </el-form>
      </div>
    </transition>
  </div>
</template>

<script>
import Notification from '../../utils/Notification'
import screenfull from '../../../node_modules/screenfull'
export default {
  name: 'sysheader',
  data() {
    return {
      list: [],
      show: false,
      editPasswordFormModel: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      },
      // 验证规则
      rules: {
        oldPassword: [
          {
            required: true,
            trigger: 'blur',
            message: '旧密码不能为空'
          }
        ],
        newPassword: [
          {
            required: true,
            message: '新密码不能为空',
            trigger: 'blur'
          }
        ],
        confirmPassword: [
          {
            required: true,
            trigger: 'blur',
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('确认密码不能为空'))
              } else if (value !== this.editPasswordFormModel.newPassword) {
                callback(new Error('两次输入密码不一致!'))
              } else {
                callback()
              }
            }
          }
        ]
      },
      isFullscreen: true
    }
  },
  computed: {
    // 用户信息
    userinfo() {
      console.log(this.$store.getters.userInfo)
      return this.$store.getters.userInfo
    }
  },
  mounted() {},
  methods: {
    // 退出登录
    async handleLogout() {
      this.$confirm('是否要退出登录？', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          const res = this.$store.dispatch('user/logout')
          // console.log(res)
          if (res) {
            this.$notify.success({
              title: '提示',
              message: '您已成功退出登录'
            })
          }
          this.$router.push('/login')
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    // 刷新页面
    refresh() {
      window.location.reload()
    },
    // 修改密码模态框
    handleEditpassword() {
      this.show = true
    },
    // 修改密码
    async handleSubmit() {
      try {
        await this.$refs.formRef.validate()
        Notification.ElNotification('修改密码', '', 'success')
        // alert(1)
        this.show = false
        // drawer.value = false
      } catch (e) {
        console.log(e)
      }
    },
    handleCommand(command) {
      switch (command) {
        case 'logout': {
          this.handleLogout()
          break
        }
        case 'editpassword': {
          this.handleEditpassword()
        }
      }
    },
    // 折叠
    CollapseStatus() {
      // this.$store.dispatch('menu/setCollapse')
      this.$store.commit('menu/SET_COllAPSE')
    },
    // 全屏切换
    changeFullScreen() {
      // node_modules/screenfull
      screenfull.toggle()
      this.$nextTick(() => {
        this.isFullscreen = screenfull.isFullscreen
      })
    }
  },
  components: {},
  created() {
    // window.location.reload()
  }
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
  // z-index: 1000;
  .silde-enter-from,
  .silde-leave-to {
    transform: translate(+100%);
  }
  .silde-enter-active,
  .silde-leave-active {
    transition: all 0.3s linear;
  }
  .silde-open-enter-from,
  .silde-open-leave-to {
    transform: translate(-100%);
  }
  .silde-open-enter-active,
  .silde-open-leave-active {
    transition: all 0.3s linear;
  }
  .my-mask,
  .my-mask-colors {
    width: 40%;
    background: rgba($color: #000000, $alpha: 0);
    position: absolute;
    top: 0;
    right: 0;
    height: 902px;
    z-index: 10;
    // border: 1px solid red;
    background-color: #fff;
    overflow-y: auto;
    .footer {
      position: absolute;
      bottom: 200px;
      left: 20px;
    }
    .title {
      width: 90%;
      margin: 30px auto;
      display: flex;
      justify-content: space-between;
      color: #000;
    }
    .el-form {
      width: 90%;
      margin: 0 auto;
      ::v-deep .el-form-item__content {
        display: flex;
        height: 22px;
        .el-form-item {
          margin-bottom: 0px;
        }
        ::v-deep .el-input {
          height: 100%;
          .el-input__inner {
            -webkit-appearance: none;
            background-color: #fff;
            border-radius: 4px;
            border: 1px solid #dcdfe6;
            box-sizing: border-box;
            color: #606266;
            display: inline-block;
            font-size: inherit;
            height: 22px;
            outline: 0;
            padding: 0 15px;
            transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
            width: 100%;
          }
        }
      }
    }
  }
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
  .refresh {
    font-size: 18px;
    color: #fff;
    width: 42px;
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: normal;
    justify-content: center;
    cursor: pointer;
  }
  .left-container {
    display: flex;
    align-items: center;
    .el-button {
      cursor: pointer;
      font-size: 18px;
      color: #fff;
      width: 42px;
      height: 100%;
    }
  }
  .right-container {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .el-dropdown {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      color: #fff;
      padding: 0 15px;
      .el-avatar--circle {
        margin-left: 15px;
      }
    }
    .el-dropdown-link {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 15px;
    }
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
