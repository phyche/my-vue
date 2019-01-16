<template>
  <div id="UserAdd">

    <div>
      <el-popover
        ref="popover1"
        placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      </el-popover>
      <el-button v-popover:popover1>hover 激活</el-button>

      <el-popover
        ref="popover2"
        placement="center"
        width="450"
        style=" position:absolute;top: 30%;left:32%;margin: 0 !important;transform:translate(-50%, -50%)"
        trigger="click">
        <el-table :data="gridData">
          <el-table-column width="150" property="username" label="用户名"></el-table-column>
          <el-table-column width="150" property="password" label="密码"></el-table-column>
          <el-table-column width="150" property="pic" label="头像">
            <template slot-scope="scope">
              <img  :src="scope.row.pic" alt="" style="width: 50px;height: 50px">
            </template>
          </el-table-column>
        </el-table>
      </el-popover>
      <el-button v-popover:popover2>click 激活</el-button>

      <el-select v-model="value"  placeholder="请选择" @change="getValue">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item">
        </el-option>
      </el-select>

      <el-dialog title="提示" :visible.sync="dialogDelVisible" width="30%" modal-append-to-body=“false”>
        <span>确定要删除吗？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogDelVisible = false">确定</el-button>
          <el-button @click="dialogDelVisible = false">取消</el-button>
        </span>
      </el-dialog>
    </div>
    <el-button @click="dialogDelVisible = true">充值</el-button>

    <el-button @click="getOptions"></el-button>测试
    <!--<router-view/>-->
  </div>
</template>

<script>
export default {
  name: 'UserAdd',
  data() {
    return {
      gridData:[],
      options: [],
      value: ''
    }
  },
  created: function(){
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.getOptions();
    this.getTables();
  },
  methods: {
    getOptions:function(){ //获取数据
      var _this = this   //很重要！！
      axios.get('http://localhost:8086/getOptionList')
        .then(function (res) {
          console.log(res);
          _this.options = res.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getTables:function(){ //获取数据
      var _this = this   //很重要！！
      axios.get('http://localhost:8086/getList')
        .then(function (res) {
          console.log(res);
          _this.gridData = res.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getValue: function (value) {
      alert(value.value)
      alert(value.label)
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
