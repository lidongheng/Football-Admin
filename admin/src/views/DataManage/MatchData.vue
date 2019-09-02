<template>
  <div class="match-data">
    <el-tabs type="border-card">
      <el-tab-pane label="曼城">
        <el-table :data="Mancity" border style="width:100%;">
          <el-table-column type="index" label="序号" width="60"></el-table-column>
          <el-table-column label="时间" prop="time" width="240"></el-table-column>
          <el-table-column label="日期" prop="weekday" width="120"></el-table-column>
          <el-table-column label="对阵" prop="match"></el-table-column>
          <el-table-column label="地点" prop="place" width="240"></el-table-column>
          <el-table-column label="距上一场比赛间隔" prop="period" width="180"></el-table-column>
          <el-table-column label="操作" width="120">
            <template slot-scope="scope">
              <el-button @click="handleDelete1(scope.$index,scope.row)" size="mini" type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="利物浦">
        <el-table :data="Liverpool" border style="width:100%;">
          <el-table-column type="index" label="序号" width="60"></el-table-column>
          <el-table-column label="时间" prop="time" width="240"></el-table-column>
          <el-table-column label="日期" prop="weekday" width="120"></el-table-column>
          <el-table-column label="对阵" prop="match"></el-table-column>
          <el-table-column label="地点" prop="place" width="240"></el-table-column>
          <el-table-column label="距上一场比赛间隔" prop="period" width="180"></el-table-column>
          <el-table-column label="操作" width="120">
            <template slot-scope="scope">
              <el-button @click="handleDelete2(scope.$index,scope.row)" size="mini" type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="热刺">
        <el-table :data="TottenhamHotSpur" border style="width:100%;">
          <el-table-column type="index" label="序号" width="60"></el-table-column>
          <el-table-column label="时间" prop="time" width="240"></el-table-column>
          <el-table-column label="日期" prop="weekday" width="120"></el-table-column>
          <el-table-column label="对阵" prop="match"></el-table-column>
          <el-table-column label="地点" prop="place" width="240"></el-table-column>
          <el-table-column label="距上一场比赛间隔" prop="period" width="180"></el-table-column>
          <el-table-column label="操作" width="120">
            <template slot-scope="scope">
              <el-button @click="handleDelete3(scope.$index,scope.row)" size="mini" type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="阿森纳">
        <el-table :data="Arsenal" border style="width:100%;">
          <el-table-column type="index" label="序号" width="60"></el-table-column>
          <el-table-column label="时间" prop="time" width="240"></el-table-column>
          <el-table-column label="日期" prop="weekday" width="120"></el-table-column>
          <el-table-column label="对阵" prop="match"></el-table-column>
          <el-table-column label="地点" prop="place" width="240"></el-table-column>
          <el-table-column label="距上一场比赛间隔" prop="period" width="180"></el-table-column>
          <el-table-column label="操作" width="120">
            <template slot-scope="scope">
              <el-button @click="handleDelete4(scope.$index,scope.row)" size="mini" type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="曼联">
        <el-table :data="ManUtd" border style="width:100%;">
          <el-table-column type="index" label="序号" width="60"></el-table-column>
          <el-table-column label="时间" prop="time" width="240"></el-table-column>
          <el-table-column label="日期" prop="weekday" width="120"></el-table-column>
          <el-table-column label="对阵" prop="match"></el-table-column>
          <el-table-column label="地点" prop="place" width="240"></el-table-column>
          <el-table-column label="距上一场比赛间隔" prop="period" width="180"></el-table-column>
          <el-table-column label="操作" width="120">
            <template slot-scope="scope">
              <el-button @click="handleDelete5(scope.$index,scope.row)" size="mini" type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="切尔西">
        <el-table :data="Chelsea" border style="width:100%;">
          <el-table-column type="index" label="序号" width="60"></el-table-column>
          <el-table-column label="时间" prop="time" width="240"></el-table-column>
          <el-table-column label="日期" prop="weekday" width="120"></el-table-column>
          <el-table-column label="对阵" prop="match"></el-table-column>
          <el-table-column label="地点" prop="place" width="240"></el-table-column>
          <el-table-column label="距上一场比赛间隔" prop="period" width="180"></el-table-column>
          <el-table-column label="操作" width="120">
            <template slot-scope="scope">
              <el-button @click="handleDelete6(scope.$index,scope.row)" size="mini" type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="狼队">
        <el-table :data="Wolfhampton" border style="width:100%;">
          <el-table-column type="index" label="序号" width="60"></el-table-column>
          <el-table-column label="时间" prop="time" width="240"></el-table-column>
          <el-table-column label="日期" prop="weekday" width="120"></el-table-column>
          <el-table-column label="对阵" prop="match"></el-table-column>
          <el-table-column label="地点" prop="place" width="240"></el-table-column>
          <el-table-column label="距上一场比赛间隔" prop="period" width="180"></el-table-column>
          <el-table-column label="操作" width="120">
            <template slot-scope="scope">
              <el-button @click="handleDelete7(scope.$index,scope.row)" size="mini" type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="西班牙人">
        <el-table :data="Espanyol" border style="width:100%;">
          <el-table-column type="index" label="序号" width="60"></el-table-column>
          <el-table-column label="时间" prop="time" width="240"></el-table-column>
          <el-table-column label="日期" prop="weekday" width="120"></el-table-column>
          <el-table-column label="对阵" prop="match"></el-table-column>
          <el-table-column label="地点" prop="place" width="240"></el-table-column>
          <el-table-column label="距上一场比赛间隔" prop="period" width="180"></el-table-column>
          <el-table-column label="操作" width="120">
            <template slot-scope="scope">
              <el-button @click="handleDelete8(scope.$index,scope.row)" size="mini" type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import { State, Getter, Mutation, Action } from 'vuex-class'
@Component({
  components: {

  }
})
export default class MatchData extends Vue {
  @Getter('user') getUser: any;
  @Provide() Mancity: any = []
  @Provide() Liverpool: any = []
  @Provide() TottenhamHotSpur: any = []
  @Provide() Arsenal: any = []
  @Provide() ManUtd: any = []
  @Provide() Chelsea: any = []
  @Provide() Wolfhampton: any = []
  @Provide() Espanyol: any = []
  created () {
    this.getData()
  }
  getData () {
    (this as any).$axios.get('/api/teams/focusMatch/')
      .then((res:any) => {
        res.data.teams.map((team:any) => {
          if (team.club === 'Mancity') {
            this.Mancity = team.recentMatch
          }
          if (team.club === 'Liverpool') {
            this.Liverpool = team.recentMatch
          }
          if (team.club === 'TottenhamHotSpur') {
            this.TottenhamHotSpur = team.recentMatch
          }
          if (team.club === 'Arsenal') {
            this.Arsenal = team.recentMatch
          }
          if (team.club === 'ManUtd') {
            this.ManUtd = team.recentMatch
          }
          if (team.club === 'Chelsea') {
            this.Chelsea = team.recentMatch
          }
          if (team.club === 'Wolfhampton') {
            this.Wolfhampton = team.recentMatch
          }
          if (team.club === 'Espanyol') {
            this.Espanyol = team.recentMatch
          }
        })
      })
      .catch((err:any) => {
        console.log(err)
      })
  }
  handleDelete1 (index: number, row: any) {
    (this as any).$axios.delete(`/api/teams/match/Mancity/${row._id}`)
      .then((res:any) => {
        (this as any).$message({ type: 'success', message: res.data.message })
        this.Mancity.splice(index, 1)
      })
      .catch((err:any) => {
        console.log(err)
      })
  }
  handleDelete2 (index: number, row: any) {
    (this as any).$axios.delete(`/api/teams/match/Liverpool/${row._id}`)
      .then((res:any) => {
        (this as any).$message({ type: 'success', message: res.data.message })
        this.Liverpool.splice(index, 1)
      })
      .catch((err:any) => {
        console.log(err)
      })
  }
  handleDelete3 (index: number, row: any) {
    (this as any).$axios.delete(`/api/teams/match/TottenhamHotSpur/${row._id}`)
      .then((res:any) => {
        (this as any).$message({ type: 'success', message: res.data.message })
        this.TottenhamHotSpur.splice(index, 1)
      })
      .catch((err:any) => {
        console.log(err)
      })
  }
  handleDelete4 (index: number, row: any) {
    (this as any).$axios.delete(`/api/teams/match/Arsenal/${row._id}`)
      .then((res:any) => {
        (this as any).$message({ type: 'success', message: res.data.message })
        this.Arsenal.splice(index, 1)
      })
      .catch((err:any) => {
        console.log(err)
      })
  }
  handleDelete5 (index: number, row: any) {
    (this as any).$axios.delete(`/api/teams/match/ManUtd/${row._id}`)
      .then((res:any) => {
        (this as any).$message({ type: 'success', message: res.data.message })
        this.ManUtd.splice(index, 1)
      })
      .catch((err:any) => {
        console.log(err)
      })
  }
  handleDelete6 (index: number, row: any) {
    (this as any).$axios.delete(`/api/teams/match/Chelsea/${row._id}`)
      .then((res:any) => {
        (this as any).$message({ type: 'success', message: res.data.message })
        this.Chelsea.splice(index, 1)
      })
      .catch((err:any) => {
        console.log(err)
      })
  }
  handleDelete7 (index: number, row: any) {
    (this as any).$axios.delete(`/api/teams/match/Wolfhampton/${row._id}`)
      .then((res:any) => {
        (this as any).$message({ type: 'success', message: res.data.message })
        this.Wolfhampton.splice(index, 1)
      })
      .catch((err:any) => {
        console.log(err)
      })
  }
  handleDelete8 (index: number, row: any) {
    (this as any).$axios.delete(`/api/teams/match/Espanyol/${row._id}`)
      .then((res:any) => {
        (this as any).$message({ type: 'success', message: res.data.message })
        this.Espanyol.splice(index, 1)
      })
      .catch((err:any) => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>

</style>
