<template>
  <el-menu
      :default-active="activeIndex"
      @select="handleSelect"
      class="nav-middle"
      mode="horizontal"
  >
    <el-menu-item index="/layout/demo">顶部菜单1</el-menu-item>
    <el-menu-item index="/top/dark/layout/demo">顶部菜单2</el-menu-item>
    <el-submenu index="3">
      <template slot="title">侧边菜单</template>
      <el-menu-item index="/side/dark/layout/demo">dark</el-menu-item>
      <el-menu-item index="/side/layout/demo">light</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "MenuList",
  data() {
    return {
      activeIndex: '/layout/demo',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push(key)
    },
  }
}
</script>

<style scoped>
::v-deep .el-menu.el-menu--horizontal{
  border: none;
}
</style>
