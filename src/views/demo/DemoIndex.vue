<template>
  <div style="text-align: center;padding: 20px">
    <h2 style="margin: 0">恭喜你!!!</h2>
    <h3>已成功启动项目，接下来就可以大展拳脚了。</h3>
    <rt-table :tableData="tableData" :columns="columns" :stripe="true" border >
      <el-table-column slot="operate" label="操作" align="center" fixed="right" width="300">
        <template slot-scope="scope">
          <el-button size="mini" type="text"
                     icon='el-icon-edit'
                     >编辑
          </el-button>
          <el-button size="small" type="text"
                     icon='el-icon-success'
                     >启用
          </el-button>
        </template>
      </el-table-column>
    </rt-table>
  </div>
</template>

<script>
import RtTable from "../../components/RtTable";

export default {
  name: "DemoIndex",
  components: {RtTable},
  data() {
    return {
      tableData: [{adName:'1'},{adName:'1'},{adName:'1'}],
      columns: [
        {label: '名称', prop: 'adName'},
        {label: '链接', prop: 'adUrl'},
        {label: '排序', prop: 'sort'},
        {slot: 'operate'}], // 操作列
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
