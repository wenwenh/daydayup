<template>
  <div>
    <!--el-menu router :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark"-->
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#545c64"
             text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1" @click="userstation">会议室浏览</el-menu-item>
      <el-menu-item index="2" @click="usercenter">会议室申请</el-menu-item>
      <el-menu-item index="3" @click="download">我的消息</el-menu-item>
    </el-menu>
    <td>
      <p style="font-size:6px;">当前登录:{{name}}&#8194;&#8194;&#8194;<a href="Login.vue">注销</a></p>
    </td>
    <div><router-view></router-view></div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'Center',
  data () {
    return {
      name: null,
      activeIndex: '1'
    }
  },
  created: function () {
    this.name = this.$route.params.name
    this.$router.push({name: 'userstation', params: {name: this.$route.params.name}})
  },
  methods: {
    userstation () {
      this.$router.push({name: 'userstation', params: {name: this.name}})
    },
    usercenter () {
      this.$router.push({name: 'usercenter', params: {name: this.name}})
    },
    download () {
      this.$router.push({name: 'download', params: {name: this.name}})
    }
  }
}

</script>
