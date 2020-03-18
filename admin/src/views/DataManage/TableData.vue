<template>
  <div class="table-data">
    <div class="search-box">
      <el-input size="small" v-model="searchVal" placeholder="请输入球员名称"></el-input>
      <el-button size="small" type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
      <el-input size="small" v-model="searchNation" placeholder="请输入国家"></el-input>
      <el-button size="small" type="primary" icon="el-icon-search" @click="handleSearchNation">搜索</el-button>
    </div>
    <el-table :data="tableData" border style="width:100%;" :height="tHeight" class="table-box">
      <el-table-column type="index" label="序号" width="60"></el-table-column>
      <el-table-column label="所属球队" prop="club" width="120"></el-table-column>
      <el-table-column label="属性" prop="attr" width="120"></el-table-column>
      <el-table-column label="位置" prop="position" width="120"></el-table-column>
      <el-table-column label="球员" prop="player" width="160"></el-table-column>
      <el-table-column label="特点" prop="description"></el-table-column>
      <el-table-column label="重要性" prop="importance" width="120"></el-table-column>
      <el-table-column label="操作" width="160" v-if="getUser.key !== 'visitor'">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
          <el-button @click="handleDelete(scope.$index,scope.row)" size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pages" ref="page-box">
      <el-pagination @current-change="handleCurrentChange" :page-sizes="[10]" :page-size="pageSize" layout="total,sizes,prev,pager,next,jumper" :total="rows"></el-pagination>
    </div>
    <EditDialog :dialogVisible="dialogVisible" @closeDialog="closeDialog" :form="formData"></EditDialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import EditDialog from './EditDialog.vue'
import { State, Getter, Mutation, Action } from 'vuex-class'
@Component({
  components: {
    EditDialog
  }
})
export default class TableData extends Vue {
  @Getter('user') getUser: any;
  @Provide() searchVal:string = ''
  @Provide() searchNation:string = ''
  @Provide() tHeight:number = document.body.offsetHeight - 270
  @Provide() tableData: any = []
  @Provide() pageNow: number = 1
  @Provide() pageSize: number = 10
  @Provide() rows: number = 0
  @Provide() dialogVisible:boolean = false
  @Provide() formData:object = {
    league: '',
    club: '',
    player: '',
    nation: '',
    position: '',
    importance: '',
    description: '',
    clubEname: '',
    attr: '',
    _id: ''
  }
  handleEdit (index:number, row:any) {
    this.formData = row
    this.dialogVisible = true
  }
  handleDelete (index: number, row: any) {
    (this as any).$axios.delete(`/api/players/${row._id}/`)
      .then((res: any) => {
        console.log(res)
        this.tableData.splice(index, 1)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }
  closeDialog () {
    this.dialogVisible = false
  }
  created () {
    this.loadData()
  }
  loadData () {
    (this as any).$axios.get(`/api/players/${this.pageNow}/`)
      .then((res: any) => {
        console.log(res.data.players)
        this.tableData = res.data.players
        this.rows = res.data.rows
      })
      .catch((err: any) => {
        console.log(err)
      })
  }

  handleCurrentChange (val:number):void {
    this.pageNow = val
    this.searchVal ? this.loadSearchData() : (this.searchNation ? this.loadSearchNationalPlayers() : this.loadData())
  }
  handleSearch ():void {
    this.pageNow = 1
    this.searchNation = ''
    this.searchVal ? this.loadSearchData() : this.loadData()
  }
  handleSearchNation ():void {
    this.pageNow = 1
    this.searchVal = ''
    this.searchNation ? this.loadSearchNationalPlayers() : this.loadData()
  }
  loadSearchData () {
    (this as any).$axios.get(`/api/players/search/${this.searchVal}/${this.pageNow}/`)
      .then((res: any) => {
        console.log(res.data)
        this.tableData = res.data.players
        this.rows = res.data.rows
      })
      .catch((err: any) => {
        console.log(err)
      })
  }
  loadSearchNationalPlayers () {
    console.log(this.searchNation);
    (this as any).$axios.get(`/api/players/searchNational/${this.searchNation}/${this.pageNow}/`)
      .then((res: any) => {
        console.log(res.data)
        this.tableData = res.data.players
        this.rows = res.data.rows
      })
      .catch((err: any) => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
  .table-data {
    height: 100%;
    .table-box {
      font-size: 14px;
    }
    .pages {
      background: #fff;
      margin-top: 10px;
      padding: 10px 10px;
      text-align: right;
      height: 55px;
      box-sizing: border-box;
    }
    .search-box {
      background: #fff;
      margin-bottom: 10px;
      padding: 10px 10px;
      border-radius: 4px;
      height: 55px;
      box-sizing: border-box;
      .el-input {
        width: 200px;
        margin-right: 10px;
      }
    }
  }
</style>
