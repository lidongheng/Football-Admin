<template>
  <el-dialog title="新增账户" :visible.sync="dialogVisible" :show-close="false" :close-on-click-modal="false" width="30%">
    <el-form :rules="rules" ref="ruleForm" :model="account" class="form-box" label-width="100px">
      <el-form-item label="请选择角色" prop="role">
        <el-select @change="selectChange" v-model="account.role" placeholder="请选择角色">
          <el-option v-for="option in options" :label="option.role" :value="option.role" :key="option.key"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="请输入账号" prop="username">
        <el-input v-model="account.username" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="请输入邮箱" prop="email">
        <el-input v-model="account.email" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item label="请输入密码" prop="password">
        <el-input type="password" v-model="account.password" placeholder="请输入密码"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('closeDialog')">取消</el-button>
      <el-button @click="handleAdd" type="primary">确定</el-button>
    </span>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop, Provide, Emit } from 'vue-property-decorator'
@Component({
  components: {

  }
})
export default class AddAccount extends Vue {
  @Prop(Boolean) dialogVisible!: boolean
  @Prop(Array) options!: any
  @Provide() account: object = {
    email: '',
    key: '',
    role: '',
    des: '',
    username: '',
    password: ''
  }
  @Provide() rules: any = {
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    role: [{ required: true, message: '请输入角色', trigger: 'change' }]
  }
  selectChange (select: string) {
    this.options.map((option: any) => {
      if (option.role === select) {
        (this as any).account.key = option.key;
        (this as any).account.des = option.des
      }
    })
  }
  @Emit('closeDialog')
  handleAdd ():void {
    // @ts-ignore
    this.$refs['ruleForm'].validate((valid: boolean) => {
      if (valid) {
        (this as any).$axios.post('/api/admin/register', this.account)
          .then((res: any) => {
            this.$emit('update');
            (this as any).$message({
              type: 'success',
              message: res.data.message
            })
          })
          .catch((err: any) => {
            console.log(err)
          })
      }
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
