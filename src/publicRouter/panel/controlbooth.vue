<template>
  <div class="home-filled">
    <div class="statistics1">
      <ul class="uu">
        <li v-for="(item, index) in orderList" :key="index">
          <p>
            {{ item.title }}<el-button :type="item.unitColor">{{ item.unit }}</el-button>
          </p>

          <div>
            <h1>{{ item.value }}</h1>
            <span
              >{{ item.subTitle }}<u>{{ item.subValue }}</u></span
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import userApi from '../../api/userApi'
export default {
  // name:'Roles',
  data() {
    return {
      orderList: []
    }
  }, // 计算属性
  computed: {}, // 载入后生命周期函数
  mounted() {}, // 监听属性
  watch: {}, // 使用data属性里面的方法
  methods: {
    async GetOrder() {
      const res = await userApi.order()
      this.orderList = res.data.data.panels
      console.log(this.orderList)
    }
  }, // 创建后
  created() {
    this.GetOrder()
    // console.log(this.GetOrder())
  }
}
</script>

<style lang="scss">
.uu {
  width: 100%;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  li {
    width: 200px;
    height: 150px;
    border: 1px solid red;
    background-color: #fff;
    border-radius: 10px;

    p {
      width: 100%;
      line-height: 35px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
    }
    div {
      padding: 15px;
      box-sizing: border-box;
      h1 {
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #ccc;
        font-size: 35px;
        color: #ccc;
      }
      span {
        display: flex;
        justify-content: space-between;
        line-height: 35px;
      }
      u {
        text-decoration: none;
      }
    }
  }
}
</style>
