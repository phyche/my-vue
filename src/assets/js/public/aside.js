import '../../../assets/css/style.css'
import '../../../assets/css/login.css'
import Vue from 'vue'
/**
 * Created by W on 9/12 0012.
 */

Vue.component('nav-aside', {
    props: ['user','type'],
    template: ''+
    '<el-menu  default-active="1-1" id="navSidebar" class="menuDisplacement"'+
    'background-color="#272A33"'+
    'text-color="#fff"'+
    'active-text-color="#2F8CEE" >'+
    '<el-submenu index="1">'+
    '<template slot="title">'+
    '<i class="icon icon-data"></i>'+
    '<span slot="title">元数据管理</span>'+
    '</template>'+
    '<el-menu-item-group>'+
    '<el-menu-item index="1-1"><a href="metadata-source.html" target="_self"><i class="icon icon-dot"></i>数据源管理</a></el-menu-item>'+
    '<el-menu-item index="1-2"><a href="metadata-metadata.html" target="_self"><i class="icon icon-dot"></i>元数据管理</a></el-menu-item>'+
    '</el-menu-item-group>'+
    '</el-submenu>'+
    '<el-submenu index="2">'+
    '<template slot="title">'+
    '<i class="icon icon-rule"></i>'+
    '<span slot="title">规则管理</span>'+
    '</template>'+
    '<el-menu-item-group>'+
    '<el-menu-item index="2-1"><a href="rule-collection.html" target="_self"><i class="icon icon-dot"></i>采集规则管理</a></el-menu-item>'+
    '<el-menu-item index="2-2"><a href="rule-dispose.html" target="_self"><i class="icon icon-dot"></i>处理规则管理</a></el-menu-item>'+
    '<el-menu-item index="2-3"><a href="rule-excavate.html" target="_self"><i class="icon icon-dot"></i>挖掘规则管理</a></el-menu-item>'+
    '</el-menu-item-group>'+
    '</el-submenu>'+
    '<el-submenu index="3">'+
    '<template slot="title">'+
    '<i class="icon icon-work"></i>'+
    '<span slot="title">任务管理</span>'+
    '</template>'+
    '<el-menu-item-group>'+
    '<el-menu-item index="3-1"><i class="icon icon-dot"></i>采集调度管理</el-menu-item>'+
    '<el-menu-item index="3-2"><i class="icon icon-dot"></i>处理调度管理</el-menu-item>'+
    '<el-menu-item index="3-3"><i class="icon icon-dot"></i>挖掘调度管理</el-menu-item>'+
    '</el-menu-item-group>'+
    '</el-submenu>'+
    '<el-submenu index="4">'+
    '<template slot="title">'+
    '<i class="icon icon-look"></i>'+
    '<span slot="title">任务监控</span>'+
    '</template>'+
    '<el-menu-item-group>'+
    '<el-menu-item index="4-1"><i class="icon icon-dot"></i>采集任务监控</el-menu-item>'+
    '<el-menu-item index="4-2"><i class="icon icon-dot"></i>处理任务监控</el-menu-item>'+
    '<el-menu-item index="4-3"><i class="icon icon-dot"></i>挖掘任务监控</el-menu-item>'+
    '<el-menu-item index="4-4"><i class="icon icon-dot"></i>运行日志2</el-menu-item>'+
    '</el-menu-item-group>'+
    '</el-submenu>'+
    '</el-menu>',

    data:function() {
        return {

        }
    },
});

