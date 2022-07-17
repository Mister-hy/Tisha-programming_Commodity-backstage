<template>
  <el-row>
    <el-col :span="16"
      ><div class="left">
        <h1 style="color: #fff; font-size: 50px; font-weight: bold">
          欢迎光临
        </h1>
      </div></el-col
    >
    <el-col :span="8"
      ><div class="right">
        <div class="loginfrom">
          <h1>欢迎回来</h1>
          <div class="userPwd">
            <span class="line"></span><span>账号密码登录</span
            ><span class="line"></span>
          </div>
          <el-form :model="loginForm" :rules="rules" ref="form">
            <el-form-item prop="username">
              <el-input
                type="text"
                v-model.trim="loginForm.username"
                autocomplete="off"
                placeholder="请输入用户名"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                type="password"
                v-model.trim="loginForm.password"
                autocomplete="off"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-button
              type="primary"
              class="loginSave"
              @click="handlerRulesForm()"
              >登录</el-button
            >
          </el-form>
        </div>
      </div></el-col
    >
  </el-row>
</template>

<script>
import userApi from '../../api/userApi'
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      // form数据
      loginForm: {
        username: 'admin',
        password: 'admin',
        token: ''
      },
      // form校验
      rules: {
        username: { required: true, message: '请输入用户名', trigger: 'blur' },
        password: [{ validator: validatePass, trigger: 'blur' }]
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 表单校验
    handlerRulesForm() {
      // console.log(this.$refs.form)
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.setLoginList()
        }
      })
    },
    // 登录提交
    async setLoginList() {
      try {
        const token = await userApi.login(this.loginForm)
        // console.log(res)
        if (!token) return
        this.loginForm.token = token.data.data.token
        this.$store.dispatch('user/login', this.loginForm)
        this.$notify({
          title: '提示',
          message: '登录成功',
          type: 'success'
        })
        await this.$router.push('/')
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.el-row {
  width: 100%;
  height: 100%;
  display: flex;
}
.left {
  height: 100%;
}
.right {
  height: 100%;
  display: flex;
  align-items: center;
  .loginfrom {
    height: 300px;
    width: 100%;
    // border: 1px solid red;
    padding: 50px;
    box-sizing: border-box;
    .el-form-item__error {
      margin-left: 90px;
    }
    h1 {
      font-size: 30px;
      text-align: center;
      font-weight: bold;
    }
    .userPwd {
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
      margin-top: 20px;
      margin-bottom: 20px;
      --tw-text-opacity: 1;
      color: rgba(209, 213, 219, var(--tw-text-opacity));
      .line {
        --tw-bg-opacity: 1;
        background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
        height: 1px;
        width: 70px;
      }
    }
    .el-input {
      --el-input-height: var(--el-component-size);
      position: relative;
      font-size: var(--el-font-size-base);
      display: inline-flex;
      width: 250px;
      line-height: var(--el-input-height);
      box-sizing: border-box;
      margin-left: 90px;
      .el-form-item.is-error .el-input__wrapper {
        box-shadow: 0 0 0 1px var(--el-color-danger) inset;
        .el-input__wrapper {
          display: inline-flex;
          flex-grow: 1;
          align-items: center;
          justify-content: center;
          padding: 1px 11px;
          background-color: var(
            --el-input-bg-color,
            var(--el-fill-color-blank)
          );
          background-image: none;
          border-radius: var(
            --el-input-border-radius,
            var(--el-border-radius-base)
          );
          transition: var(--el-transition-box-shadow);
          box-shadow: 0 0 0 1px
            var(--el-input-border-color, var(--el-border-color)) inset;
        }
        .el-input__inner {
          --el-input-inner-height: calc(var(--el-input-height, 32px) - 2px);
          width: 100%;
          flex-grow: 1;
          -webkit-appearance: none;
          color: var(--el-input-text-color, var(--el-text-color-regular));
          font-size: inherit;
          height: var(--el-input-inner-height);
          line-height: var(--el-input-inner-height);
          padding: 0;
          outline: 0;
          border: none;
          background: 0 0;
          box-sizing: border-box;
        }
      }
    }
    .loginSave {
      width: 63%;
      border-radius: 16px;
      margin-left: 90px;
      background-color: #626aed;
    }
  }
}
.left {
  background-color: #6366ef;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
