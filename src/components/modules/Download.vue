<template>
  <div style="width:600px; height:500px; margin: 0 auto">
    <br>
    <!-- <el-form :model="resetForm" status-icon :rules="resetFormRules" ref="resetForm" label-width="100px">
      <el-form-item label="新密码" prop="newpwd">
        <el-input type="password" v-model="resetForm.newpwd" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="renewpwd">
        <el-input type="password" v-model="resetForm.renewpwd" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <el-card style="height: 350px" class="box-card">
      <div solt="header" class="clearfix">
        <el-button style="float: right; padding: 3px 0" type="text" @click="dialogFormVisible = true"> 修改密码</el-button>
        <el-dialog title="新密码" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="请输入新密码" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible=false">取消</el-button>
            <el-button tyoe="primary" @click="dialogFormVisible = false"></el-button>
          </div>
        </el-dialog>-->
        <table>
          <tr style=" height: 60px">
            <td width="100px" ><p style="font-family:verdana;font-size:80%;color:green">姓名</p></td>
              <td width="50px" align="left">:</td><td>{{user.name}}</td>
          </tr>
          <tr style="height: 60px"><td width="100px">账户</td><td width="50px" align="left">:</td><td>{{user.username}}</td></tr>
          <tr style="height: 60px"><td width="100px">密码</td><td width="50px" align="left">:</td><td>{{user.password}}</td></tr>
          <tr style="height: 60px"><td width="100px">邮箱</td><td width="50px" align="left">:</td><td>{{user.email}}</td></tr>
          <tr style="height: 60px"><td width="100px">开启提醒</td><td width="50px" align="left">:</td>
          <td><el-switch v-model="value" active-color="#13ce66" inactive-color="#ff494"></el-switch></td></tr>
        </table>
      </div>
</template>

<script>
export default {
  name: 'Download',
  data () {
    return {
      value: false,
      name: null,
      user: {
        username: null,
        password: null,
        name: null,
        email: null,
        guan: null
      }
    }
  },
  created: function () {
    this.name = this.$route.params.name
    this.getName()
  },
  methods: {
    getName () {
      this.$axios({
        method: 'post',
        url: '/getName',
        data: this.name
      }).then((response) => {
        this.user = response.data
      })
    },
    changemm () {
      this.$axios({
        method: 'post',
        url: '/changemm',
        data: this.user.password
      }).then((response) => {
        this.user.password = response.data.password
      })
    }
  }
}
</script>
