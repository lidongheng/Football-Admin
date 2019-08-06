<template>
  <div class="login">
    <LoginHeader>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" slot="container" label-position="left" label-width="0px">
        <div class="title">
          <h3>账号密码登录</h3>
        </div>
        <!-- username -->
        <el-form-item prop="email">
          <el-input type="text" v-model="ruleForm.email" auto-complete="off" placeholder="账号">
            <i slot="prefix" class="fa fa-lock"></i>
          </el-input>
        </el-form-item>

        <!-- password -->
        <el-form-item prop="password">
          <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="密码">
            <i slot="prefix" class="fa fa-user-o"></i>
          </el-input>
        </el-form-item>
        <!-- 登录button -->
        <el-form-item>
          <el-button type="primary" :loading="isLogin" @click.native.prevent="handleSubmit" style="width:100%;">登录</el-button>
        </el-form-item>
        <!-- 7天登录和忘记密码 -->
        <el-form-item>
          <el-checkbox v-model="ruleForm.autoLogin" :checked="ruleForm.autoLogin">7天内自动登录</el-checkbox>
          <el-button @click="$router.push('/password')" type="text" class="forget">忘记密码?</el-button>
        </el-form-item>
      </el-form>
    </LoginHeader>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import { State, Getter, Mutation, Action } from 'vuex-class'
import LoginHeader from './LoginHeader.vue'
@Component({
  components: { LoginHeader }
})
export default class Login extends Vue {
  @Action('setUser') setUser: any
  @Provide() isLogin:boolean = false
  @Provide() ruleForm: {
    email: String;
    password:String;
    autoLogin:boolean;
  } = {
    email: '',
    password: '',
    autoLogin: true
  }
  @Provide() rules = {
    email: [
      { required: true, message: '请输入账号', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' }
    ]
  }
  handleSubmit ():void {
    // @ts-ignore
    this.$refs['ruleForm'].validate((valid: boolean) => {
      if (valid) {
        this.isLogin = true;
        (this as any).$axios.post('/api/admin/login', this.ruleForm)
          .then((res: any) => {
            this.isLogin = false
            console.log(res.data)
            this.setUser(res.data.Token)
            localStorage.setItem('Token', res.data.token)
            this.setUser(res.data.token)
            this.$router.push('/')
          })
          .catch((err: any) => {
            this.isLogin = false
            console.log(err)
          })
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  i {
    font-size: 14px;
    margin-left: 8px;
  }
  .forget {
    float: right;
  }
</style>
