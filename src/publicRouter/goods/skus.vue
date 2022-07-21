<template>
  <div class="skus_container">
    <!-- 头部-->
    <div class="skus_header">
      <div class="skus_left">
        <Hybutton type="primary" size="mini" class="add" @click="skusAdd"
          >新增</Hybutton
        >
        <Hybutton type="warning" size="mini">批量删除</Hybutton>
      </div>
      <div class="skus_right">
        <el-tooltip
          class="item"
          effect="dark"
          content="刷新数据"
          placement="top"
        >
          <el-button
            icon="el-icon-refresh"
            @click="loadingAnimation"
          ></el-button>
        </el-tooltip>
      </div>
    </div>
    <!-- from主题 -->
    <div class="skus_main">
      <el-table
        ref="multipleTable"
        :data="skusList"
        tooltip-effect="dark"
        style="width: 100%"
        v-loading="loading"
        stripe
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="规格名称" width="80" prop="name">
        </el-table-column>
        <el-table-column prop="default" label="规格值" width="380">
        </el-table-column>
        <el-table-column prop="order" label="排序"> </el-table-column>
        <el-table-column label="状态">
          <template v-slot="scope">
            <div>
              <el-switch
                v-model="scope.row.status"
                active-color="#409dfd"
                :active-value="1"
                :inactive-value="2"
              >
              </el-switch>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="250" class="cell">
          <template v-solt="scope">
            <div class="operation"><span>修改</span><span>删除</span></div>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        center
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
    <!--    修改密码抽屉-->
    <transition name="silde">
      <div class="my-mask" v-show="Addshow">
        <div class="title">
          <span>新增</span><span @click="Addshow = false">X</span>
        </div>
        <el-form
          ref="formRef"
          label-width="100px"
          :model="Addskus"
          :rules="Addrules"
          class="formRef"
        >
          <el-form-item label="规格名称" prop="name">
            <el-input placeholder="规格名称" v-model="Addskus.name"></el-input>
          </el-form-item>
          <el-form-item label="排序">
            <el-input-number
              v-model="Addskus.order"
              @change="handleChange"
              label="描述文字"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="状态">
            <div>
              <el-switch
                v-model="Addskus.status"
                active-color="#409dfd"
                :active-value="1"
                :inactive-value="2"
              >
              </el-switch>
            </div>
          </el-form-item>
          <el-form-item label="规格值" prop="default">
            <el-tag
              closable
              v-for="(item, index) in tagList"
              :key="index"
              @close="tabRemove(index)"
              class="tags"
              >{{ item }}</el-tag
            >
            <el-input
              v-if="inputShow"
              v-model="AddskusIpi"
              @keyup.enter.native="inputEnter()"
              @blur="inputEnter"
              class="inputRef"
              ref="inputRef"
            ></el-input>
            <el-button v-else size="small" @click="inputShowSave"
              >+ 添加值</el-button
            >
          </el-form-item>
          <div class="footer">
            <el-button type="primary" size="small" @click="AddSubmit"
              >提交</el-button
            >
            <el-button type="text" @click="Addshow = false" size="small"
              >取消</el-button
            >
          </div>
        </el-form>
      </div>
    </transition>
  </div>
</template>
<script>
import goods from '../../api/goods'
export default {
  name: 'skus',
  data() {
    return {
      skusList: [],
      loading: false,
      // 总条数
      total: 0,
      // 新增模态框
      Addshow: false,
      AddskusIpi: '',
      // 新增form数据
      Addskus: {
        name: '',
        order: 50,
        status: '',
        default: []
      },
      // 新增tag数据
      tagList: [],
      // 新增form校验
      Addrules: {
        name: [
          { required: true, message: '规格名称不能为空', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        default: [
          {
            required: true,
            message: '规格值不能会空',
            trigger: 'blur'
          }
          // {
          //   min: this.tagList.length === 1,
          //   trigger: 'blur'
          // }
        ]
      },
      // 控制expand展开行输入框的显示隐藏
      inputShow: false
    }
  },
  created() {
    console.log(this.setSkus())
    console.log(this.setPagination())
  },
  mounted() {},
  methods: {
    /**
     *  分页第一页数据
     * @returns {Promise<void>}
     */
    async setSkus() {
      const res = await goods.skus()
      this.skusList = res.data.data.list
      // console.log(this.skusList)
      this.total = res.data.data.totalCount
      // console.log(this.total)
    },
    // 分页第二页数据
    async setPagination() {
      const res = await goods.pagination()
      this.skusList = res.data.data.list
    },
    // 加载动画
    loadingAnimation() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 500)
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    // 页数
    handleCurrentChange(val) {
      if (val === 1) {
        this.loading = true
        this.setSkus()
        setTimeout(() => {
          this.loading = false
        }, 500)
      } else {
        this.loading = true
        this.setPagination()
        setTimeout(() => {
          this.loading = false
        }, 500)
      }
    },
    // 点击显示input框
    inputShowSave() {
      this.inputShow = true
      // this.$nextTick((callback) => {
      // this.$refs.inputRef.focus()
      // const inputRef = document.querySelector('.inputRef')
      // console.log(inputRef)
      // console.log(this.$refs.inputRef)
      // })
    },
    // 文本框失去焦点,或者按下Enter触发
    inputEnter() {
      this.Addskus.default.push(this.AddskusIpi)
      console.log(this.Addskus.default)
      const str = this.Addskus.default.join()
      this.tagList.push(str)
      if (this.Addskus.default.length === 0) {
        this.inputShow = false
        this.Addskus.default = ''
        return false
      }

      // this.tagList.push(this.Addskus.default.trim())
      this.inputShow = false
      this.Addskus.default = ''
    },
    // 删除tabs标签
    tabRemove(i) {
      this.tagList.splice(i, 1)
    },
    // 新增按钮
    skusAdd() {
      this.Addshow = true
    },
    // 排序
    handleChange(value) {
      console.log(value)
    },
    // 添加到表单
    AddSubmit() {
      this.$refs.formRef.validate(async (valid) => {
        if (!valid) return false
        const res = await goods.skusAdd(this.Addskus)
        console.log(res)
      })
    }
  },
  components: {
    Hybutton: () => import('../../components/button/index.vue')
  }
}
</script>

<style lang="scss" scoped>
.skus_header {
  display: flex;
  justify-content: space-between;
}
.el-table th.el-table__cell > .cell {
  text-align: center;
}
.skus_main .operation {
  display: flex;
  // justify-content: space-around;
  span {
    display: block;
    font-size: 13px;
    color: #409dfd;
    margin-right: 30px;
    cursor: pointer;
  }
}
.is-background {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
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
  width: 45%;
  background: rgba($color: #000000, $alpha: 0);
  position: absolute;
  top: 0;
  right: 0;
  height: 722px;
  z-index: 10;
  // border: 1px solid red;
  background-color: #f6f6f6;
  .footer {
    display: flex;
    width: 130px;
    justify-content: space-around;
  }
  .tags {
    margin-right: 8px;
  }
  .inputRef {
    width: 73px;
    height: 24px !important;
  }
  overflow-y: auto;
  .footer {
    position: absolute;
    bottom: 50px;
    left: 20px;
  }
  .title {
    width: 90%;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
    color: #000;
  }
}
</style>
