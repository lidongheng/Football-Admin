<template>
  <div class="home">
    <div class="home-body">
      <h4 class="title">欢迎来到足球后台管理系统</h4>
      <p class="des">这是一个后台管理系统，是使用element-ui框架制作的</p>
      <el-button @click="learn">进入管理</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {

  }
})
export default class Home extends Vue {
  learn ():void {
    this.$router.push({ path: '/tableData' })
  }
}
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    height: 100%;
    background: url(../assets/bg.jpg) no-repeat;
    background-size: 100% 100%;
    .home-body {
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      color: #fff;
      text-align: center;
      padding: 100px;
      box-sizing: border-box;
      .title {
        font-size: 32px;
        font-weight: bold;
        line-height: 60px;
      }
      .des {
        font-size: 18px;
        margin: 40px 0;
      }
    }
  }
</style>
