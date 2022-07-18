<template>
  <el-submenu index="1">
    <template slot="title">
      <i :class="'el-icon-' + item.icon"></i>
      <span>{{ item.name }}</span>
    </template>
    <menuprops
      v-for="(childItem, index) in item.children"
      :key="index"
      :item="childItem"
    ></menuprops>
  </el-submenu>
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
