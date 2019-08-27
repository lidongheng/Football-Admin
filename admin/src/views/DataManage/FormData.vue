<template>
  <div class="form-data">
    <el-form :rules="rules" ref="ruleForm" :model="form" label-width="100px">
      <el-form-item label="球员姓名" prop="title">
        <el-input v-model="form.player" placeholder="请输入为球员姓名"></el-input>
      </el-form-item>
      <el-form-item label="球员属性" prop="attr">
        <el-select v-model="form.attr" placeholder="请选择球员属性">
          <el-option label="前锋" value="FW"></el-option>
          <el-option label="中场" value="MF"></el-option>
          <el-option label="后卫" value="DF"></el-option>
          <el-option label="门将" value="GK"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="球员位置" prop="position">
        <el-input v-model="form.position" placeholer="请输入球员常用位置"></el-input>
      </el-form-item>
      <el-form-item label="所属联赛" prop="league">
        <el-radio-group v-model="form.league">
          <el-radio label="英超" name="league"></el-radio>
          <el-radio label="中超" name="league"></el-radio>
          <el-radio label="西甲" name="league"></el-radio>
          <el-radio label="意甲" name="league"></el-radio>
          <el-radio label="德甲" name="league"></el-radio>
          <el-radio label="法甲" name="league"></el-radio>
          <el-radio label="欧冠" name="league"></el-radio>
          <el-radio label="欧联" name="league"></el-radio>
          <el-radio label="日职联" name="league"></el-radio>
          <el-radio label="日职乙" name="league"></el-radio>
          <el-radio label="亚冠" name="league"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="俱乐部" prop="club">
        <el-input v-model="form.club" placeholer="请输入球员所在俱乐部"></el-input>
      </el-form-item>
      <el-form-item label="club" prop="clubEname">
        <el-input v-model="form.clubEname" placeholer="input club of player"></el-input>
      </el-form-item>
      <el-form-item label="国家" prop="nation">
        <el-input v-model="form.nation" placeholer="请输入球员所在国家"></el-input>
      </el-form-item>
      <el-form-item label="重要性" prop="importance">
        <el-input v-model="form.importance" placeholer="请输入球员重要性"></el-input>
      </el-form-item>
      <el-form-item label="特点" prop="description">
        <el-input v-model="form.description" placeholer="请输入球员特点"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm('ruleForm')" type="primary">增加球员</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
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
export default class FormData extends Vue {
  @Provide() form:object = {
    league: '',
    club: '',
    player: '',
    nation: '',
    position: '',
    importance: '',
    description: '',
    clubEname: '',
    attr: ''
  }
  @Provide() rules: any = {
    league: [{ required: true, message: '请输入球员所属联赛', trigger: 'blur' }],
    position: [{ required: true, message: '请输入球员常用位置', trigger: 'blur' }],
    player: [{ required: true, message: '请输入球员姓名', trigger: 'blur' }]
  }
  submitForm (formName: string) {
    // @ts-ignore
    this.$refs[formName].validate((valid: boolean) => {
      if (valid) {
        (this as any).$axios.post(`/api/players/`, this.form)
          .then((res:any) => {
            console.log(res)
            this.resetForm(formName)
            this.$message({ message: res.data.message, type: 'success' })
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

<style>

</style>
