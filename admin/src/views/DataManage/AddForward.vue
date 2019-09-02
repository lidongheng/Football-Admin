<template>
  <div class="add-match">
    <el-form :rules="rules" ref="form" :model="form" label-width="100px">
      <el-form-item label="轮次" prop="rounds">
        <el-input v-model="form.rounds" placeholder="请输入轮次，如：2"></el-input>
      </el-form-item>
      <el-form-item label="日期" prop="time">
        <el-input v-model="form.time" placeholder="请输入日期，如：2019-08-25 周日 23:30"></el-input>
      </el-form-item>
      <el-form-item label="对阵" prop="match">
        <el-input v-model="form.match" placeholder="狼队vs伯恩利"></el-input>
      </el-form-item>
      <el-form-item label="赔率" prop="odds">
        <el-input v-model="form.odds" placeholder="请输入赔率"></el-input>
      </el-form-item>
      <el-form-item label="前瞻" prop="forward">
        <el-input v-model="form.forward" placeholder="请输入前瞻"></el-input>
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
    rounds: '',
    time: '',
    match: '',
    odds: '',
    forward: ''
  }
  @Provide() rules: any = {
    rounds: [{ required: true, message: '请输入轮次', trigger: 'blur' }],
    time: [{ required: true, message: '请输入比赛时间', trigger: 'blur' }],
    match: [{ required: true, message: '请输入对阵信息', trigger: 'blur' }],
    odds: [{ required: true, message: '请输入赔率', trigger: 'blur' }],
    forward: [{ required: true, message: '请输入前瞻', trigger: 'blur' }]
  }
  onSubmit (formName: string) {
    // @ts-ignore
    this.$refs[formName].validate((valid: boolean) => {
      if (valid) {
        (this as any).$axios.post('/api/forwards/', this.form)
          .then((res:any) => {
            (this as any).$message({ type: 'success', message: res.data.message })
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
