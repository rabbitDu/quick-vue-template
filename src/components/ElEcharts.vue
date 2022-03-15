<template>
  <div class="echarts-container"></div>
</template>
<script>
export default {
  name: "ElEcharts",
  props: {
    option: {
      type: Object,
      required: true
    },
    autoresize: {
      type:Boolean,
      default:true
    },
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initEcharts()
  },
  methods: {
    //初始化图表
    initEcharts() {
      if (this.chart) {
        return
      }
      let chart = this.$echarts.init(this.$el);
      // 使用刚指定的配置项和数据显示图表。
      chart.setOption(this.option);
      this.chart = chart
    },
    updateOption(data) {
      this.chart.setOption(data)
    },
  }
}
</script>

<style scoped>
.echarts-container {
  height: 100%;
  width: 100%;
}
</style>
