<template>
  <div id="User">
    <!--<img src="./assets/logo.png">-->
    <div>
      <el-col :span="6" ><el-input placeholder="请输入内容" v-model="keywords" style="padding-bottom:10px;"></el-input></el-col>
      <el-table ref="multipleTable" :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column prop="username" label="用户名" width="180" sortable></el-table-column>
        <el-table-column prop="password" label="密码"></el-table-column>
        <el-table-column prop="pic" label="头像" width="180">
          <template slot-scope="scope">
            <img  :src="scope.row.pic" alt="" style="width: 50px;height: 50px">
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="currentPage"
                     :page-sizes="[2, 5, 10, 20]"
                     :page-size="pageSize"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="total"
                     :current-page.sync = "currentPage">
      </el-pagination>
    </div>
    <!--<router-view/>-->
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      keywords: "",
      total: 5,
      currentPage: 1,
      pageSize: 2,
      tableData: [{
        id: '1111',
        username: '1111',
        password: '1',
        pic: 'http://localhost:8086/images/advertisement/63498178-25b3-4d87-aca5-0f672bda85c2-medium.jpg'
      }],
      multipleSelection: []
    }
  },
  created: function(){
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData();
  },
  methods: {
    /*toggleSelection:function(rows) {
        if (rows) {
            rows.forEach(function(row)  {
                this.$refs.multipleTable.toggleRowSelection(row);
            });
        } else {
            this.$refs.multipleTable.clearSelection();
        }
    },*/
    handleSelectionChange:function(val) {
      this.multipleSelection = val;
    },
    callbackFunction:function(result) {
      alert(result + "aaa");
    },
    fetchData:function(){ //获取数据
      var _this = this   //很重要！！
      axios.get('http://localhost:8086/getList',{keywords:this.keywords})
        .then(function (res) {
          console.log(res);
          _this.tableData = res.data.data;
          _this.total = res.data.count;
          _this.currentPage = res.data.curr;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    handleSizeChange:function(val){
      this.pageSize = val;
      this.currentPage = 1;
      this.fetchData(1, val);

    },
    handleCurrentChange:function(val){
      this.currentPage = val;
      this.fetchData(val, this.pageSize);

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
