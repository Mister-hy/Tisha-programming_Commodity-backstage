<template>
  <div class="header">
    <div class="logo">
      <i class="el-icon-eleme"> 积云编程 </i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sysheader',
  data() {
    return {}
  },
  mounted() {},
  methods: {},
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
}
</style>
