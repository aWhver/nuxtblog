<template>
  <el-container>
    <el-menu
      default-active="admin/info"
      class="el-menu-vertical-demo">
      <el-menu-item index="/admin/info">
        <nuxt-link to="/admin/info">
          <i class="el-icon-location"></i>
          <!--<svg-icon></svg-icon>-->
          <span slot="title">个人信息</span>
        </nuxt-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span slot="title">文章管理</span>
        </template>
        <el-menu-item index="/admin/article">
          <nuxt-link to="/admin/article">
            <i class="el-icon-setting"></i>
            <span slot="title">文章列表</span>
          </nuxt-link>
        </el-menu-item>
        <el-menu-item index="/admin/patchArticle">
          <nuxt-link to="/admin/patchArticle">
            <i class="el-icon-location"></i>
            <span slot="title">新增文章</span>
          </nuxt-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-container>
</template>
<style>
.el-menu-vertical-demo {
  position: fixed;
  height: 100%;
  left: 0;
  width: 180px;
  background: #324751;
  color: #fff;
}
.el-menu-item.is-active {
  background-color: #324751;
}
.el-menu-item:focus, .el-menu-item:hover {
  background-color: #48576a;
}
.el-submenu__title span{
  color: #bfcbd9;
}
.el-submenu__title:hover {
  background-color: #48576a;
}
.el-submenu .el-menu-item {
  min-width: 180px !important;
  color: #bfcbd9;
}
.el-menu-item {
  color: #bfcbd9;
}
.el-menu-item.is-active {
  color: #409eff !important;
}
.el-menu-vertical-demo .el-submenu .el-menu {
  background-color: #1f2d3d;
}
.nuxt-link-exact-active.nuxt-link-active {
  color: #6aabef;
}
</style>
<script>
</script>
