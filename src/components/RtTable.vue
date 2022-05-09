<!--表格-前端分页-->
<template>
  <div class="wrapper">
    <el-table
        :data="currentRows"
        style="width: 100%"
        v-on="$listeners"
        v-bind="$attrs"
    >
      <el-table-column
          v-if="isTableSort"
          label="序号"
          type="index"
          width="50"
          align="center">
        <template slot-scope="scope">
          <!-- 有分页时，序号显示 -->
          <span v-if="isPaging">{{ (currentPage - 1) * pageSize + scope.$index + 1 }}</span>
          <!-- 无分页时，序号显示 -->
          <span v-else>{{ scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <template v-for="(col, index) in columns">
        <!-- 操作列/自定义列 -->
        <slot v-if="col.slot" :name="col.slot"></slot>
        <!-- 普通列 -->
        <el-table-column
            v-else
            :key="index"
            v-bind="col"
            align="center">
        </el-table-column>
      </template>
    </el-table>
    <el-pagination
        background
        class="page-wrapper"
        v-if="isPaging"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        :current-page.sync="currentPage"
        layout="->,total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
    >
    </el-pagination>
  </div>

</template>

<script>
export default {
  name: "RtTable",
  props: {
    //表格数据
    tableData: {
      type: Array,
    },
    //分页列表
    pageSizes: {
      type: Array,
      default() {
        return [10, 15, 20, 50, 100, 500]
      }
    },
    //分页大小
    pageSize: {
      type: Number,
      default() {
        return 12;
      }
    },
    //是否分页
    isPaging: {
      type: Boolean,
      default: true
    },
    //是否需要序号列
    isTableSort: {
      type: Boolean,
      default: false
    },
    //列
    columns: {
      type: Array
    }
  },
  data() {
    return {
      currentPage: 1,  //当前页码
      tablePageSize: this.pageSize
    }
  },
  computed: {
    currentRows() {
      const tablePageSize = this.tablePageSize;
      if (this.tableData) {
        const tableLength = this.tableData.length;
        const start = (this.currentPage - 1) * tablePageSize;
        const end = (this.currentPage * tablePageSize > tableLength) ? tableLength : this.currentPage * tablePageSize;
        return this.tableData.slice(start, end)
      }
    },
  },
  methods: {
    handleNextClick(value) {
      this.currentPage = value
    },
    handlePrevClick(value) {
      this.currentPage = value
    },
    handleSizeChange(value) {
      this.currentPage = 1;
      this.tablePageSize = value
    },
    handleCurrentChange(val) {
      this.currentPage = val
    },
  }
}
</script>

<style scoped>
.page-wrapper {
  margin-top: 10px;
}
</style>
