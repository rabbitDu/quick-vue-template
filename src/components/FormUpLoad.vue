<template>
  <div style="display: flex;align-items: center;">
    <el-upload
        class="upload-demo"
        :auto-upload="false"
        :show-file-list="false"
        :accept="accept"
        :on-change="handleUpload"
        :file-list="fileList"
        :action="action">
      <el-button type="primary" plain size="medium">上传</el-button>
    </el-upload>
    <div class="file-tooltip" v-if="fileList.length===0">{{ tooltip }}</div>
    <div class="file-list" v-for="(file,index) in fileList" :key="index">
      {{ file.name }}
      <i class="el-icon-close file-icon" @click="onRemove"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormUpLoad",
  props: {
    //用于存文件列表的参数
    prop: {
      type: String,
      required: true
    },
    accept: String,
    tooltip: String,
    //文件检查
    fileCheck: {
      type: Function,
      default: null
    },
    action: {
      type: String,
      default: '#'
    }
  },
  data() {
    return {
      fileList: []
    }
  },
  watch: {
    fileList: {
      handler(value) {
        this.$emit('filechange', this.prop, value)
      },
      deep: true
    }
  },
  methods: {
    handleUpload(file, fileList) {
      if (fileList.length > 0) {
        if (this.fileCheck) {
          const result = this.fileCheck(file)
          if (result) {
            this.fileList = [fileList[fileList.length - 1]]
          }
        } else {
          this.fileList = [fileList[fileList.length - 1]]
        }
      }
    },
    onRemove() {
      this.fileList = []
    },
  }
}
</script>

<style scoped>
.file-tooltip {
  font-size: 14px;
  color: #878787;
  margin-left: 10px;
}

.file-list {
  background-color: #F5F7FA;
  border: 1px solid #E4E7ED;
  color: #c5c5c5;
  flex: 1;
  text-align: left;
  line-height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  border-radius: 5px;
}

.file-list .file-icon {
  display: none;
  cursor: pointer;
  margin-left: 10px;
}

.file-list:hover {
  background-color: #f5f5f5;
}

.file-list:hover .file-icon {
  display: block;
  color: #ff3939;
}

</style>
