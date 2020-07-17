<template>
  <div class="mainContent" width="85vw">
        <div style="width: 85vw;height: 5vh;font-size: 3vh;margin:0 2vw 2vh 2vw">进度条样式</div>
        <el-progress class="progress" type="circle" :percentage="percent"></el-progress>
        <div class="block">
          <span class="demonstration">分子的值:{{ num.a }}</span>
          <el-slider v-model="num.a"></el-slider>
          <span class="demonstration">分母的值:{{ num.b }}</span>
          <el-slider v-model="num.b"></el-slider>
        </div>
        <div class="alertBox">
          <el-alert
            v-if="errTip1"
            title="计算的结果不能大于100%"
            type="error"
            show-icon>
          </el-alert>
          <el-alert
            v-if="errTip2"
            title="分母不能为0"
            type="error"
            show-icon>
          </el-alert>
        </div>
  </div>
</template>

<script>
export default {
    name: 'progressPrc',
    data () {
      return {
        percent: 0,
        errTip1: false,
        errTip2: false,
        num: {
          a: 0,
          b: 1
        }
      }
    },
    mounted () {
    },
    methods: {
      getPercent () {
        let resNum = Number((this.num.a/this.num.b*100).toFixed(2))
        if (isNaN(resNum) || !isFinite(resNum)) {
          this.errTip2 = true
        } else {
          this.errTip2 = false
          if (resNum > 100) {
            this.errTip1 = true
          } else {
            this.percent = resNum
            this.errTip1 = false
          }
        }
      }
    },
    watch: {
      num: {
        handler () {
        this.getPercent()
      },
      deep: true
      }
    }

}
</script>

<style lang='scss' scoped>
  .mainContent {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    overflow: hidden;
    .el-progress {
      height: 126px;
      width: 126px;
    }
    .block {
      width: 40vw;
      height: 16vh;
      margin-left: 5vw;
    }
    .alertBox {
      margin: 3vh 3vw;
      height: 10vh;
    }
  }

</style>