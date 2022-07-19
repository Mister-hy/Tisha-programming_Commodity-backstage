<template>
  <div class="Aside">
    <el-menu default-active="2" class="el-menu-vertical-demo">
      <el-submenu :index="item.id">
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i> <span>{{ item.name }}</span>
        </template>
        <el-menu-item-group
          v-for="(SubItem, SubIndex) in item.child"
          :key="SubIndex"
        >
          <el-menu-item
            :class="'el-icon-' + SubItem.icon"
            :index="SubItem.id"
            >{{ SubItem.name }}</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
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
