<template>
  <div class="logiondiv1">
    <div class="logiondiv2">
      <h1>会议室管理系统</h1>
      <form>
        <table>
          <tr>
            <td class="input">
              <input style="outline: none" type="text" id="j_username" placeholder="请输入平台登录账号"
                     v-model="user.username" />
            </td>
          </tr>
          <tr>
            <td class="input">
              <input style="outline: none" type="password" id="j_password" autocomplete="off"
                     placeholder="请输入平台登录密码"
                     @keyup.enter="clickLogin"
                     v-model="user.password"/>
            </td>
          </tr>
          <tr rowspan="2">
            <td>
              <input type="button" class="btn btn-success" :value="buttonText"
                     @click="clickLogin"
                     :disabled="isLoading"/>
            </td>
          </tr>
        </table>
      </form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Login',
  data () {
    return {
      // user0: [],
      user: {
        username: null,
        password: null,
        name: null,
        email: null
      },
      isLoading: false,
      buttonText: '登录'
    }
  },
  methods: {
    clickLogin: function () {
      var mm = /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{8,16}$/
      if (!this.user.username) {
        this.$message.warning('请输入帐号')
        return false
      }
      if (!this.user.password) {
        this.$message.warning('请输入密码')
        return false
      }
      if (this.user.password.match(mm) === null) {
        this.$message.warning('密码长度为8-16位，由字母、数字、字符任意两种及以上的组合')
        return false
      }
      // MD5 编码用户密码
      // let pasd = md5(Utils.trim(this.user.password)).toUpperCase()
      this.$axios({
        method: 'post',
        url: '/comp',
        data: this.user.username
      })
        .then((response) => {
          if (this.user.password === response.data.password) {
            this.user = response.data
            this.$router.push({name: 'center', params: {name: this.user.name}})
          } else this.$message.error('用户名或密码错误,请重新输入')
        })
      // this.isLoading = true
        // this.buttonText = '正在登录...'
    }
  }
}
</script>

<style scoped>
  table {
    width: 564px;
    height: 143px;
    display: block;
    float: left;
    margin-left: 160px;
    margin-top: 257px;
    border-spacing: 0;
    border-collapse: collapse;
  }

  td {
    height: 57px;
  }

  input {
    border: 0;
    line-height: 28px;
  }

  #j_username,
  #j_password {
    margin-left: 12px;
    width: 260px;
    height: 32px;
    text-indent: 7px;
  }

  .btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    margin-left: -27px;
    width: 310px;
    color: lemonchiffon;
    background-color: #5cb85c;
    border-color: darkolivegreen;
  }
</style>
