<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
<div id="main">
    <el-container>
        <el-header class="managerHeader">
            <el-row>
                <el-col :span="12">
                    <div class="header-logo">
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-menu class="el-menu-demo header-menu" mode="horizontal"
                             text-color="#fff" background-color="#0A77D3"
                             active-text-color="#fff">
                        <el-submenu index="1">
                            <template slot="title"><i class="icon icon-me"></i>欢迎您， 王先生</template>
                            <el-menu-item index="1-1" @click="editPassword">修改密码</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="2" @click="dialogFormSignOut = true">退出<i class="icon icon-return"></i></el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </el-header>
        <el-container>
            <el-aside width="200px" class="managerSidebar">
                <nav-aside></nav-aside>
            </el-aside>
            <el-main>
                <div class="w-main-iframe">
                    <iframe src="metadata-source.html" id="mainIframe" class="mainIframe" frameborder="0" width="100%"
                            height="100%"></iframe>
                </div>
            </el-main>
        </el-container>
        <div>
            <el-dialog title="修改密码" :visible.sync="dialogFormPassword" width="400px">
                <el-form :model="ruleForm2" status-icon :rules="rules2" size="mini" ref="ruleForm2" label-width="100px"
                         class="demo-ruleForm">
                    <el-form-item label="登录账号" prop="user">
                        <span style="font-weight: bold">{{ruleForm2.user}}</span>
                    </el-form-item>
                    <el-form-item label="旧密码" prop="oldPass">
                        <el-input type="password" v-model="ruleForm2.oldPass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                        <el-button @click="dialogFormPassword =  false">取消</el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>
            <el-dialog title="退出" :visible.sync="dialogFormSignOut" width="300px">
                <div>是否退出登录？</div>
                <div slot="footer" class="dialog-footer">
                   <el-button @click="dialogFormSignOut = false"  size="mini">取 消</el-button>
                   <el-button type="primary" @click="handSignOut"  size="mini">确 定</el-button>
  </div>
            </el-dialog>
        </div>
    </el-container>

</div>
</template>
<script>

  export default {
    name:'main',
        data: function () {
            var validateOldPass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };

            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm2.checkPass !== '') {
                        this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm2.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                dialogFormPassword: false,
                dialogFormSignOut:false,
                ruleForm2: {
                    user: '王先生',
                    oldPass: '',
                    pass: '',
                    checkPass: '',
                    age: ''
                },
                rules2: {
                    user: [
                        {required: true, trigger: 'blur'}
                    ],
                    oldPass: [
                        {required: true, validator: validateOldPass, trigger: 'blur'}
                    ],
                    pass: [
                        {required: true, validator: validatePass, trigger: 'blur'}
                    ],
                    checkPass: [
                        {required: true, validator: validatePass2, trigger: 'blur'}
                    ],
                }
            };
        },
        methods: {
            editPassword: function () {
                this.dialogFormPassword = true;
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$message({
                            showClose: true,
                            message: '修改成功',
                            type: 'success'
                        });
                        this.dialogFormPassword = false;
                    } else {
                        this.$message({
                            showClose: true,
                            message: '状态错误，修改失败',
                            type: 'error'
                        });
                        return false;
                    }
                });
            },
            handSignOut:function () {
                this.dialogFormSignOut = false;
                window.location.href = 'login';
            }
        }
    }

    //var Ctor = Vue.extend(Main)
    //new Ctor().$mount('#main')
</script>
</body>
</html>
