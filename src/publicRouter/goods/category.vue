<template>
  <div class="menu">
    <ul>
      <li v-for="item in cates" :key="item.id">
        <td style="width: 500px">{{ item.name }}</td>
        <td class="er">推荐数据</td>
        <td class="er"><el-switch></el-switch>修改</td>
        <td class="er" @click="del(item.id)">删除</td>
      </li>
    </ul>
  </div>
</template>
<script>
import { GetTab } from '@/api/userApi'
export default {
  data() {
    return {
      cates: {},
      list: {}
      // tableData: {
      // name: "",
      // },
    }
  },
  // 计算属性
  computed: {},
  // 载入后生命周期函数
  mounted() {},
  // 监听属性
  watch: {},
  // 使用data属性里面的方法
  methods: {
    async GetList() {
      const res = await GetTab()
      this.cates = res.data.data.cates
      this.list = res.data.data.list
      // console.log(this.list);
      // console.log(this.cates);
    },
    async del(id) {}
  },
  // 创建后
  created() {
    console.log(this.GetList())
  }
}
</script>
<style lang="scss">
.menu {
  padding: 20px;
  box-sizing: border-box;
}
ul {
  width: 100%;
  background-color: #fff;
}
li {
  padding: 5px 20px;
  box-sizing: border-box;
  background-color: #fff;
}
.er {
  font-size: 12px;
  color: #409eff;
}
</style>
