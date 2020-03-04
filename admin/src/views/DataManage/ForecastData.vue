<!--<template>-->
<!--  <div class="forecast-data">-->
<!--    <el-table :data="forecast" border style="width:100%;">-->

<!--    </el-table>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import { Component, Vue, Provide } from 'vue-property-decorator'-->
<!--import { State, Getter, Mutation, Action } from 'vuex-class'-->
<!--import EditDialog from './EditDialog.vue'-->
<!--@Component({-->
<!--  components: {-->
<!--    EditDialog-->
<!--  }-->
<!--})-->
<!--export default class ForecastData extends Vue {-->
<!--  @Provide() forecast: any = []-->
<!--  @Getter('user') getUser: any-->
<!--  @Provide() dialogVisible: boolean = false-->
<!--  @Provide() formData: object = {-->
<!--    rounds: '',-->
<!--    time: '',-->
<!--    odds: '',-->
<!--    match: '',-->
<!--    forward: ''-->
<!--  }-->
<!--  created () {-->
<!--    this.getData()-->
<!--  }-->
<!--  getData () {-->
<!--    (this as any).$axios.get('/api/forwards/')-->
<!--      .then((res:any) => {-->
<!--        console.log(res)-->
<!--        this.forward = res.data.forwards-->
<!--      })-->
<!--      .catch((err:any) => {-->
<!--        (this as any).$message({ type: 'error', message: err.response.message })-->
<!--      })-->
<!--  }-->
<!--  handleDelete (index: number, row: any) {-->
<!--    (this as any).$axios.delete(`/api/forwards/${row._id}`)-->
<!--      .then((res:any) => {-->
<!--        (this as any).$message({ type: 'success', message: res.data.message })-->
<!--        this.forward.splice(index, 1)-->
<!--      })-->
<!--      .catch((err:any) => {-->
<!--        console.log(err)-->
<!--      })-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style lang="scss" scoped>-->

<!--</style>-->
