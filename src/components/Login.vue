<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
<div id="loginMain">
    <div class="login-bg" :style="{height:windowHeight}">
        <el-row class="login-body">
            <el-col :span="16" :offset="4">
                <div class="login-center">
                    <div class="w-left">
                        <div class="login-form-img"></div>
                    </div>
                    <div class="w-right"  style="padding: 10px 50px 40px 40px;">
                        <el-form :model="loginForm"  :rules="rules" ref="loginForm" size="mini">
                            <div class="login-form-title">
                                <img class="login-logo" src="../assets/images/logo.png"/>
                                <span>市场监管大数据支撑平台</span>
                                <p>一款更便捷的操作平台</p>
                            </div>
                            <el-form-item label=""  prop="name">
                                <div class="login-icon"><i class="icon icon-user"></i></div>
                                <el-input v-model="loginForm.name" placeholder="用户名" class="login-form-input">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="" prop="password">
                                <div class="login-icon"><i class="icon icon-password"></i></div>
                                <el-input type="password" v-model="loginForm.password" placeholder="密码"
                                          class="login-form-input">
                                </el-input>
                            </el-form-item>
                            <el-form-item label="">
                                <el-checkbox v-model="loginForm.checked">记住密码</el-checkbox>
                            </el-form-item>
                            <el-form-item style="margin: 0px">
                                <el-button type="primary" class="login-btn"  @click="submitForm('loginForm')">登 录</el-button>
                            </el-form-item>
                        </el-form>
                    </div>

                </div>
                <div class="login-footer">Copyright © 2019 广东亿迅科技有限公司武汉研发中心 | 为获得最佳浏览效果，推荐使用谷歌浏览器或IE8以上浏览器</div>
            </el-col>
        </el-row>
    </div>
</div>
</template>
<!--<style>
  @import "../assets/css/style.css";
  @import "../assets/css/login.css";
  @import "../assets/js/jquery-1.11.3.min.js";
  @import "../assets/js/nicescroll/jquery.nicescroll.js";
  @import "../assets/js/common.js";
</style>-->
<script>

  export default {
    name: 'loginMain',
    data: function () {
        return {
            windowHeight: "",
            topHeight: "",
            loginFormImg:"../assets/images/login_img.png",
            /*loginLogo: "../assets/images/logo.png",*/
            loginForm: {
                name: '',
                password: '',
                checked: false
            },
            rules:{
                name: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ],
            }
        }

    },
    methods: {
        submitForm(loginForm) {
            this.$refs[loginForm].validate((valid) => {
                if (valid) {

                    parent.location.href = 'index';
                } else {
                    return false;
                }
            });
        },
    },
    mounted() {   //背景图片自适应高度
        this.windowHeight = window.innerHeight  + "px";
        window.onresize = () => {
            return (() => {
                this.windowHeight = window.innerHeight + "px";
            })();
        };
    },
    watch: {   //监听背景图片自适应
        windowHeight(val) {
            this.windowHeight = val;
        }
    },
  }

    //var Ctor = Vue.extend(Main)
    //new Ctor().$mount('#loginMain')
</script>
