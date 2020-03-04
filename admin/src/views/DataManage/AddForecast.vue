<!--<template>-->
<!--  <div class="add-forecast">-->
<!--    <el-form :rules="rules" ref="form" :model="form" label-width="100px">-->
<!--      <el-form-item label="队伍" prop="team">-->
<!--        <el-input v-model="form.team" placeholder="请输入队伍"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="问题" prop="program">-->
<!--        <el-input v-model="form.program" placeholder="请输入问题"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="" prop="match">-->
<!--        <el-input v-model="form.match" placeholder=""></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="" prop="">-->
<!--        <el-input v-model="form." placeholder="请输入"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="" prop="forward">-->
<!--        <el-input v-model="form.forward" placeholder="请输入"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item>-->
<!--        <el-button type="primary" @click="onSubmit('form')">增加比赛</el-button>-->
<!--        <el-button @click="resetForm('form')">重置</el-button>-->
<!--      </el-form-item>-->
<!--    </el-form>-->
<!--  </div>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--    import { Component, Vue, Provide } from 'vue-property-decorator'-->
<!--    @Component({-->
<!--        components: {-->

<!--        }-->
<!--    })-->
<!--    export default class AddMatch extends Vue {-->
<!--        @Provide() form:object = {-->
<!--            rounds: '',-->
<!--            time: '',-->
<!--            match: '',-->
<!--            odds: '',-->
<!--            forward: ''-->
<!--        }-->
<!--        @Provide() rules: any = {-->
<!--            rounds: [{ required: true, message: '请输入轮次', trigger: 'blur' }],-->
<!--            time: [{ required: true, message: '请输入比赛时间', trigger: 'blur' }],-->
<!--            match: [{ required: true, message: '请输入对阵信息', trigger: 'blur' }],-->
<!--            odds: [{ required: true, message: '请输入赔率', trigger: 'blur' }],-->
<!--            forward: [{ required: true, message: '请输入前瞻', trigger: 'blur' }]-->
<!--        }-->
<!--        onSubmit (formName: string) {-->
<!--            // @ts-ignore-->
<!--            this.$refs[formName].validate((valid: boolean) => {-->
<!--                if (valid) {-->
<!--                    (this as any).$axios.post('/api/forwards/', this.form)-->
<!--                        .then((res:any) => {-->
<!--                            (this as any).$message({ type: 'success', message: res.data.message })-->
<!--                        })-->
<!--                        .catch((err:any) => {-->
<!--                            console.log(err)-->
<!--                        })-->
<!--                }-->
<!--            })-->
<!--        }-->
<!--        resetForm (formName: string) {-->
<!--            (this as any).$refs[formName].resetFields()-->
<!--        }-->
<!--    }-->
<!--</script>-->

<!--<style lang="scss" scoped>-->

<!--</style>-->
