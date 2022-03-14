<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      background-color="#222f3f"
      text-color="#e6e4e4"
      @select="handleSelect"
  >
    <el-menu-item index="/layout/demo">
      <i class="el-icon-menu"></i>
      <span slot="title">顶部菜单1</span>
    </el-menu-item>
    <el-menu-item index="/top/dark/layout/demo">
      <i class="el-icon-document"></i>
      <span slot="title">顶部菜单2</span>
    </el-menu-item>
    <el-submenu index="3">
      <template slot="title"> <i class="el-icon-menu"></i>侧边菜单</template>
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
      activeIndex: '/side/dark/layout/demo',
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
::v-deep .el-menu.el-menu--horizontal {
  border: none;
}
.el-submenu .el-menu-item{
  min-width: auto;
}
::v-deep .el-menu-item:hover,::v-deep .el-submenu__title:hover{
  background-color: #3580ff4f !important;
  border-radius: 12px;
}
::v-deep .el-menu-item.is-active{
  background-color: #3580ff4f !important;
  border-radius: 12px;
}
</style>
