<template>
  <div class="forward-data">
    <el-table :data="forecast" border style="width:100%;">
      <el-table-column type="index" label="序号" width="60"></el-table-column>
      <el-table-column label="球队" prop="team" width="60"></el-table-column>
      <el-table-column label="问题" prop="program" ></el-table-column>
      <el-table-column label="时间" prop="time" width="120"></el-table-column>
      <el-table-column label="概率" prop="percent" width="60"></el-table-column>
      <el-table-column label="状态" prop="status" width="60"></el-table-column>
      <el-table-column label="文章链接" prop="url" width="200"></el-table-column>
      <el-table-column label="操作" width="80" v-if="getUser !== 'visitor'">
        <template slot-scope="scope">
          <el-button @click="handleDelete(scope.$index,scope.row)" size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <EditDialog :dialogVisible="dialogVisible" @closeDialog="closeDialog" :form="formData"></EditDialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import { State, Getter, Mutation, Action } from 'vuex-class'
import EditDialog from './EditDialog.vue'
  @Component({
    components: {
      EditDialog
    }
  })
export default class ForecastData extends Vue {
    @Provide() forecast: any = []
    @Getter('user') getUser: any
    @Provide() dialogVisible: boolean = false
    @Provide() formData:object = {
      team: '',
      program: '',
      time: '',
      percent: '',
      status: '',
      url: ''
    }
    created () {
      this.getData()
    }
    getData () {
      (this as any).$axios.get('/api/forecast/')
        .then((res:any) => {
          console.log(res)
          this.forecast = res.data.forecast
        })
        .catch((err:any) => {
          (this as any).$message({ type: 'error', message: err.response.message })
        })
    }
    handleDelete (index: number, row: any) {
      (this as any).$axios.delete(`/api/forecast/${row._id}`)
        .then((res:any) => {
          (this as any).$message({ type: 'success', message: res.data.message })
          this.forecast.splice(index, 1)
        })
        .catch((err:any) => {
          console.log(err)
        })
    }
}
</script>

<style lang="scss" scoped>

</style>
