<template>
  <div class="add-forecast">
    <el-form :rules="rules" ref="form" :model="form" label-width="100px">
      <el-form-item label="球队" prop="team">
        <el-input v-model="form.team" placeholder="请输入球队"></el-input>
      </el-form-item>
      <el-form-item label="问题" prop="program">
        <el-input v-model="form.program" placeholder="请输入问题"></el-input>
      </el-form-item>
      <el-form-item label="时间" prop="time">
        <el-input v-model="form.time" placeholder="请输入时间"></el-input>
      </el-form-item>
      <el-form-item label="概率" prop="percent">
        <el-input v-model="form.percent" placeholder="请输入概率"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-input v-model="form.status" placeholder="请输入状态，默认是1"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="url">
        <el-input v-model="form.url" placeholder="请输入地址"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">增加预言</el-button>
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
  team: '',
  program: '',
  time: '',
  percent: '',
  status: '',
  url: ''
}
@Provide() rules: any = {
  team: [{ required: true, message: '请输入球队', trigger: 'blur' }],
  program: [{ required: true, message: '请输入问题', trigger: 'blur' }],
  time: [{ required: true, message: '请输入时间', trigger: 'blur' }],
  percent: [{ required: true, message: '请输入概率', trigger: 'blur' }],
  status: [{ required: true, message: '请输入状态', trigger: 'blur' }]
}
onSubmit (formName: string) {
  // @ts-ignore
  this.$refs[formName].validate((valid: boolean) => {
    if (valid) {
      (this as any).$axios.post('/api/forecast/', this.form)
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
