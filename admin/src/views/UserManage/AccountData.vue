<template>
  <div class="account-data">
    <div class="add-box">
      <el-button @click="addAccount" type="primary">新增账户</el-button>
    </div>
    <el-table :data="tableData" border style="width:100%">
      <el-table-column label="角色" width="180">
        <template slot-scope="scope">
          <el-select @change="selectChange(scope.row)" v-if="scope.row.edit" v-model="scope.row.role">
            <el-option v-for="option in options" :label="option.role" :value="option.role" :key="option.key"></el-option>
          </el-select>
          <span v-else>{{scope.row.role}}</span>
        </template>
      </el-table-column>
      <el-table-column label="账号" width="180">
        <template slot-scope="scope">
          <el-input v-model="scope.row.username" v-if="scope.row.edit"></el-input>
          <span v-else>{{scope.row.username}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="des" label="描述"></el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope" v-if="scope.row.username !== 'admin'">
          <el-button size="mini" @click="handleEdit(scope.$index,scope.row)" v-if="!scope.row.edit">编辑</el-button>
          <el-button size="mini" @click="handleSave(scope.$index,scope.row)" v-else type="success">完成</el-button>
          <el-button size="mini" @click="handleDelete(scope.$index,scope.row)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <AddAccount :dialogVisible="dialogVisible" :options="options" @closeDialog="closeDialog" @update="getData"></AddAccount>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import AddAccount from './AddAccount.vue'
@Component({
  components: {
    AddAccount
  }
})
export default class AccountData extends Vue {
  @Provide() tableData:any = []
  @Provide() dialogVisible:boolean = false
  @Provide() options: any = [
    {
      key: 'admin',
      role: '管理员',
      des: 'Super Administrator. Have access to view all pages.'
    },
    {
      key: 'editor',
      role: '客服',
      des: 'Normal Editor. Can see all pages except permission page'
    },
    {
      key: 'visitor',
      role: '游客',
      des: 'Just a visitor. Can only see the home page and the document page'
    }
  ]
  addAccount () {
    this.dialogVisible = true
  }
  closeDialog () {
    this.dialogVisible = false
  }
  created () {
    this.getData()
  }
  getData () {
    (this as any).$axios.get('/api/admin/')
      .then((res: any) => {
        res.data.users.forEach((user: any) => {
          user.edit = false
        })
        this.tableData = res.data.users
      })
      .catch((err: any) => {
        console.log(err)
      })
  }
  handleEdit (index: number, row: any) {
    row.edit = true
  }
  handleSave (index: number, row: any) {
    row.edit = false;
    (this as any).$axios.post('/api/admin/', row)
      .then((res: any) => {
        (this as any).$message({
          type: 'success',
          message: res.data.message
        })
      })
      .catch((err: any) => {
        console.log(err)
      })
  }
  selectChange (item: any) {
    this.options.map((option: any) => {
      if (option.role === item.role) {
        item.key = option.key
        item.des = option.des
      }
    })
  }
  handleDelete (index: number, row: any) {
    (this as any).$axios.delete(`/api/admin/${row._id}/`)
      .then((res: any) => {
        (this as any).$message({
          type: 'success',
          message: res.data.message
        })
        this.tableData.splice(index, 1)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
  .account-data {
    height: 100%;
    overflow: auto;
    .add-box {
      margin-bottom: 10px;
    }
  }
</style>
