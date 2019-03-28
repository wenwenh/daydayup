<template>
  <div>
    <el-tabs :tab-position="tabPosition" style="height: 600px">
    <el-tab-pane lable="会议室查询">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="选择日期">
          <el-col :span="11">
            <el-date-picker type="month" placeholder="选择日期" v-model="date" format="yyyy年MM月"
                            value-format="yyyyMM" style="width: 80%;"></el-date-picker>
          </el-col>
          <el-button type="primary" @click="find">查询</el-button>
        </el-form-item>
      </el-form>
      <template>
        <el-table height="500px" :data="list1"  border-radius="4px">
          <el-table-column align="center" prop="datetime" lable="日期" sortable width="160px"></el-table-column>
          <el-table-column align="center" prop="room" lable="会议室" sortable width="160px"></el-table-column>
          <el-table-column align="center" prop="name" lable="预约人" sortable width="160px"></el-table-column>
          <el-table-column align="center" prop="neirong" lable="内容" sortable width="160px"></el-table-column>
        </el-table>
      </template>
    </el-tab-pane>
      <el-tab-pane lable="我的预约">
        <el-table-column align="center" prop="datetime" label="日期" sortable width="160px"></el-table-column>
        <el-table-column align="center" prop="room" label="会议室" sortable width="140px"></el-table-column>
        <el-table-column align="center" prop="neirong" label="内容" ></el-table-column>
        <el-table-column align="center">
          <template slot-scope="scope">
            <el-button type="danger" round @click="delyuyue(scope.row)">取消预约</el-button>
          </template>
        </el-table-column>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default{
  name: 'Userstation',
  data () {
    return {
      name: null,
      form: null,
      date: null,
      tabPosition: 'left',
      list1: [],
      list2: []
    }
  },
  created: function () {
    this.name = this.$route.params.name
    this.findName()
  },
  methods: {
    find () {
      if (!this.date) {
        this.$message({
          message: '请选择日期！',
          center: true
        })
      } else {
        this.list1 = null
        this.$axios({
          method: 'post',
          url: '/all',
          data: this.date
        }).then(function (response) {
          this.list1 = response.data
        }.bind(this)).catch(function (error) {
          alert(error)
        })
      }
    },
    findName () {
      this.$axios({
        method: 'post',
        url: '/find',
        data: this.name
      }).then((response) => { this.list2 = response.data })
    },
    delyuyue (yuyue) {
      this.$confirm('确认取消预约？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios({
          method: 'post',
          url: '/del',
          data: yuyue
        }).then(() => {
          this.$message({
            message: '成功取消预约',
            center: true,
            type: 'success'
          })
          this.findName()
        })
      })
    }
  }
}
</script>
