<template>
  <div class="home-filled">
    <div class="statistics1">
      <ul class="uu">
        <li class="li" v-for="(item, index) in panels" :key="index">
          <p>
            {{ item.title
            }}<el-button :type="item.unitColor">{{ item.unit }}</el-button>
          </p>

          <div>
            <h1>{{ item.value }}</h1>
            <span
              >{{ item.subTitle }} <u>{{ item.subValue }}</u>
            </span>
          </div>
        </li>
      </ul>
    </div>

    <div class="tab">
      <ul class="uu1">
        <li v-for="(SubItem, SubIndex) in List" :key="SubIndex" class="lis">
          <div>
            <i
              :style="`color:${SubItem.clock}`"
              :class="'el-icon-' + SubItem.icon"
            ></i>

            <p>{{ SubItem.name }}</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="three">
      <div class="Left"></div>

      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import { GetStat } from '@/api/userApi'
import GetList from './controboo.json'

export default {
  data() {
    return {
      panels: {},
      List: {}
    }
  }, // 计算属性
  computed: {}, // 载入后生命周期函数
  mounted() {}, // 监听属性
  watch: {}, // 使用data属性里面的方法
  methods: {
    async GetData() {
      const res = await GetStat()
      this.panels = res.data.data.panels
    },
    async GetListS() {
      this.List = await GetList.users
      console.log(this.List)
    }
  }, // 创建后
  created() {
    console.log(this.GetData())
    console.log(this.GetListS())
  }
}
</script>

<style lang="scss">
.uu {
  width: 100%;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  .li {
    width: 23%;
    height: 176px;
    // border: 1px solid red;
    background-color: #fff;
    border-radius: 10px;

    p {
      width: 100%;
      line-height: 40px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      font-size: 14px;
      padding: 0 5px;
      box-sizing: border-box;
    }
    div {
      padding: 15px;
      box-sizing: border-box;
      color: #6b7280;
      h1 {
        height: 70px;
        line-height: 70px;
        border-bottom: 1px solid #ccc;
        font-size: 35px;
      }
      span {
        display: flex;
        justify-content: space-between;
        line-height: 44px;
        font-size: 14px;
        u {
          text-decoration: none;
        }
      }
    }
  }
}
.tab {
  width: 100%;
  .uu1 {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    .lis {
      width: 10%;
      // border: 1px solid #cfcfcf;
      border-radius: 3px;
      text-align: center;
      background-color: #fff;
      height: 77px;
      div {
        margin-top: 19px;
        i {
          margin-bottom: 8px;
        }
      }
    }
  }
}
.three {
  width: 100%;
  // border: 1px solid red;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
</style>
