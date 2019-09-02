<template>
  <div class="forward-data">
    <el-table :data="forward" border style="width:100%;">
      <el-table-column type="index" label="序号" width="60"></el-table-column>
      <el-table-column label="轮次" prop="rounds" width="60"></el-table-column>
      <el-table-column label="日期" prop="time" width="200"></el-table-column>
      <el-table-column label="赔率" prop="odds" width="180"></el-table-column>
      <el-table-column label="对阵" prop="match" width="120"></el-table-column>
      <el-table-column label="前瞻" prop="forward"></el-table-column>
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
export default class ForwardData extends Vue {
  @Provide() forward: any = []
  @Getter('user') getUser: any
  @Provide() dialogVisible: boolean = false
  @Provide() formData:object = {
    rounds: '',
    time: '',
    odds: '',
    match: '',
    forward: ''
  }
  created () {
    this.getData()
  }
  getData () {
    (this as any).$axios.get('/api/forwards/')
      .then((res:any) => {
        console.log(res)
        this.forward = res.data.forwards
      })
      .catch((err:any) => {
        (this as any).$message({ type: 'error', message: err.response.message })
      })
  }
  handleDelete (index: number, row: any) {
    (this as any).$axios.delete(`/api/forwards/${row._id}`)
      .then((res:any) => {
        (this as any).$message({ type: 'success', message: res.data.message })
        this.forward.splice(index, 1)
      })
      .catch((err:any) => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>

</style>
