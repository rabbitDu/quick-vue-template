<template>
  <el-container class="el-container">
    <el-aside width="200px" class="side-bar">
      <div class="side-top">
        <i class="fa fa-language" aria-hidden="true"></i>
        <div class="system-name">系统名称</div>
      </div>
      <menu-list class="side-main"></menu-list>
    </el-aside>
    <el-container>
      <el-header class="top-bar">
        <el-button size="mini"  type="primary" >管理员
        </el-button>
      </el-header>
      <el-main class="el-main">
        <router-view></router-view>
      </el-main>
    </el-container>

  </el-container>
</template>

<script>
import logoUrl from '../../../assets/images/top-logo.jpg'
import MenuList from "./MenuList";

export default {
  name: "SideDarkLayout",
  components: {MenuList},
  data() {
    return {
      logoUrl,
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
  color: #ffffff;
  background-color: #1b2234;
  /*background: linear-gradient(to bottom, #f3f7fb 0%,#dceaf6 100%);*/
}

.side-top {
  text-align: center;
  margin-bottom: 20px;
}

.side-top i {
  font-size: 36px;
  color: #659fff;
  padding: 10px;
}

.system-name {
  font-size: 16px;
  font-weight: 600;

}
.top-bar{
  display: flex;
  justify-content: flex-end;
}

.el-header {
  height: 50px !important;
  display: flex;
  align-items: center;
  background-color: #222f3f;
}

.side-main {
  height: 100%;
  border-right: none !important;
}

.el-main {
  background-color: #222f3f;
  margin: 20px 20px 0 20px;
  border-radius: 8px;
}

.side-bar {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #222f3f;
  padding: 20px;
}

.side-bottom {
  text-align: center;
}
</style>
