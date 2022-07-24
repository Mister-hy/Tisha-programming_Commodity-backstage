<template>
  <el-menu
    class="el-menu-vertical-demo"
    text-color="#000"
    background-color="#fff"
    active-text-color="#4339c8"
    unique-opened
    router
  >
    <el-submenu :index="item.icon">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i> <span>{{ item.name }}</span>
      </template>
      <el-menu-item-group
        v-for="(SubItem, SubIndex) in item.child"
        :key="SubIndex"
      >
        <el-menu-item
          :class="'el-icon-' + SubItem.icon"
          :index="SubItem.icon"
          >{{ SubItem.name }}</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu></el-menu
  >
</template>

<script>
export default {
  name: 'menuprops',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
  components: {}
}
</script>

<style lang="scss"></style>
