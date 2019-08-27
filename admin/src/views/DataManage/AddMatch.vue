<template>
  <div class="add-match">
    <el-form :rules="rules" ref="form" :model="form" label-width="100px">
      <el-form-item label="时间" prop="time">
        <el-input v-model="form.time" placeholder="请输入时间，如：2018-10-01 02:45:00"></el-input>
      </el-form-item>
      <el-form-item label="日期" prop="weekday">
        <el-input v-model="form.weekday" placeholder="请输入周几，如：周二"></el-input>
      </el-form-item>
      <el-form-item label="球队" prop="team">
        <el-input v-model="form.team" placeholder="请输入是哪个球队的相关赛程"></el-input>
      </el-form-item>
      <el-form-item label="联赛" prop="league">
        <el-input v-model="form.league" placeholder="请输入联赛名"></el-input>
      </el-form-item>
      <el-form-item label="对阵" prop="match">
        <el-input v-model="form.match" placeholder="请输入对阵"></el-input>
      </el-form-item>
      <el-form-item label="地点" prop="place">
        <el-input v-model="form.place" placeholder="请输入比赛地点"></el-input>
      </el-form-item>
      <el-form-item label="间隔时间" prop="period">
        <el-input v-model="form.period" placeholder="距上一场间隔小时"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">增加比赛</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
@Component({
  components: {

  }
})
export default class AddMatch extends Vue {
  @Provide() form:object = {
    time: '',
    weekday: '',
    team: '',
    league: '',
    match: '',
    place: '',
    period: ''
  }
  @Provide() rules: any = {
    league: [{ required: true, message: '请输入本场比赛所属联赛', trigger: 'blur' }],
    time: [{ required: true, message: '请输入比赛时间', trigger: 'blur' }],
    weekday: [{ required: true, message: '请输入周几', trigger: 'blur' }],
    match: [{ required: true, message: '请输入对阵信息', trigger: 'blur' }],
    period: [{ required: true, message: '请输入距离上一场比赛的间隔时间', trigger: 'blur' }],
    place: [{ required: true, message: '请输入比赛地点', trigger: 'blur' }],
    team: [{ required: true, message: '请输入球队名', trigger: 'blur' }]
  }
  onSubmit (formName: string) {
    // @ts-ignore
    this.$refs[formName].validate((valid: boolean) => {
      if (valid) {
        (this as any).form.time.replace(/：/g, ':');
        (this as any).$axios.post('/api/teams/match/', this.form)
          .then((res:any) => {
            this.$message({ type: 'success', message: res.data.message })
          })
          .catch((err:any) => {
            console.log(err)
          })
      }
    })
  }
  resetForm (formName: string) {
    (this as any).$refs[formName].resetFields()
  }
}
</script>

<style lang="scss" scoped>

</style>
