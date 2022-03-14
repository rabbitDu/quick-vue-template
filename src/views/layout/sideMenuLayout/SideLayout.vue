<template>
  <el-container class="el-container">
    <el-aside width="200px" class="side-bar">
      <div class="side-top">
        <i class="fa fa-language" aria-hidden="true"></i>
        <div class="system-name">系统名称</div>
      </div>
      <menu-list class="side-main"></menu-list>
      <div class="side-bottom">
<!--        <el-image-->
<!--            style="width: 180px; height: 180px"-->
<!--            :src="SidePng"-->
<!--        ></el-image>-->
        <el-button size="medium" style="background-color: #2979ff;border: 1px solid #2979ff" type="primary" round>管理员
        </el-button>
      </div>
    </el-aside>
    <el-main class="el-main">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import logoUrl from '../../../assets/images/top-logo.jpg'
import SidePng from '../../../assets/images/side.png'
import MenuList from "./MenuList";

export default {
  name: "SideLayout",
  components: {MenuList},
  data() {
    return {
      logoUrl,
      SidePng
    }
  },
  methods: {
    handleCommand(command) {
      if (command === 'logout') {
        this.logout()
      }
    },
    logout() {
      this.$confirm('确定注销并退出系统吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('LogOut').then(() => {
          location.href = '/login';
        })
      }).catch(() => {
      });
    },
  }
}
</script>

<style scoped>
.el-container {
  height: 100%;
  background: linear-gradient(to bottom, #f3f7fb 0%,#dceaf6 100%);
}
.side-top{
  text-align: center;
  margin-bottom: 20px;
}
.side-top i{
  font-size: 36px;
  color: #2979ff;
  padding: 10px;
}
.system-name{
  font-size: 16px;
  font-weight: 600;

}

.el-header {
  height: 60px !important;
  box-shadow: 0 2px 13px 0 #dcdcdc;
  display: flex;
  align-items: center;
}

.side-main {
  height: 100%;
  border-right: none !important;
}

.el-main {
  margin-top: 10px;
}

.side-bar {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-right: 2px solid #dee5f0;
}

.side-bottom {
  text-align: center;
}
</style>
