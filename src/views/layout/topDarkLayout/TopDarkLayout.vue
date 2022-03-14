<template>
  <el-container class="el-container">
    <el-header class="el-header">
      <el-image :src="logoUrl" class="top-logo"></el-image>
      <menu-list class="top-main"></menu-list>
      <div class="user-block ">
        <el-dropdown @command="handleCommand">
          <el-button type="text" class="login-user">
            <i class="el-icon-user login-user-icon "></i>
            管理员
            <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-main class="el-main">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import logoUrl from '../../../assets/images/wind.png'
import MenuList from "./MenuList";

export default {
  name: "TopDarkLayout",
  components: {MenuList},
  data() {
    return {
      logoUrl
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
  color: #f6f6f6;
  background-color: #171b22;
}

.el-header {
  height: 60px !important;
  /*box-shadow: 0 2px 13px 0 #dcdcdc;*/
  display: flex;
  align-items: center;
  background-color: #1b2234;
}

.top-logo {
  height: 70%;
}

.top-main {
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  border-bottom: none !important;
}

.el-main {
  background-color: #1b2234;
  margin: 12px;
  border-radius: 8px;
}

.login-user {
color: #fac700;
}
</style>
