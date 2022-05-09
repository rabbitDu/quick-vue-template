<template>
  <hot-table ref="hot" :settings="hotSettings" :width="width" :height="height"></hot-table>
</template>

<script>
import {HotTable} from '@handsontable/vue'
import {registerAllModules} from 'handsontable/registry'

registerAllModules()
export default {
  props: {
    /**
     * 表格数据
     */
    tableData: {
      type: Array,
      required: true
    },
    settings: {
      type: Object,
    },
    height: {
      type:Number,
      default:window.innerHeight
    },
    width: {
      type:Number,
      default:window.innerWidth
    },

  },
  name: "RtHotTable",
  components: {HotTable},
  data() {
    return {
      hotSettings:{},
      defaultSettings: {
        licenseKey: 'non-commercial-and-evaluation',
        className: "htCenter htMiddle cell-border",
        readOnlyCellClassName: 'cell-readonly',
        fixedRowsTop: 1,
        rowHeights: 30,
        colWidths: 80,
        // cells: function (row, column, prop) {
        //   const cellProperties = {};
        //   const visualRowIndex = this.instance.toVisualRow(row);
        //   if (visualRowIndex === 0) {
        //     cellProperties.readOnly = true;
        //   }
        //   return cellProperties;
        // },
        height: 'auto',
      }

    }
  },
  created() {
    this.mergeHotSettings()
  },
  methods:{
    mergeHotSettings(){
      this.hotSettings={...this.defaultSettings,...this.settings}
    },
    getTableData() {
      let hot = this.$refs.hot
      if (hot) {
        return  hot.hotInstance.getSourceData()
      }
    }
  }
}
</script>

<style scoped>

</style>
