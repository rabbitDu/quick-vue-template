<template>
  <div style="text-align: center;padding: 20px">
    <h2 style="margin: 0">恭喜你!!!</h2>
    <h3>已成功启动项目，接下来就可以大展拳脚了。</h3>
    <form-upload
        accept=".xlsx"
        tooltip="测试"
        :file-check="onCheckFile"
        @filechange="onFileChange"
    ></form-upload>

  </div>
</template>

<script>

export default {
  name: "DemoIndex",
  data() {
    return {}
  },
  methods: {
    onCheckFile(file) {
      if (file.name.indexOf("m10概率") < 0) {
        this.$message.error('文件命名请包含“m10概率”关键字！！！');
      } else if (file.name.length > 104) {
        this.$message.error('文件名字过长，请修改文件名字。');
      }
    },
    onFileChange(fileList) {

    }
  }
}
</script>

<style scoped>

</style>
