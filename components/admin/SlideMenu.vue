<template>
  <div class="sidebar">
    <el-container>
      <el-menu
        default-active="/admin"
        class="el-menu-vertical-demo">
        <el-menu-item index="/admin">
          <nuxt-link to="/admin" @click.stop="console.log(1)">
            <svg-icon :icon-class="`shouye`"></svg-icon>
            <span slot="title">首页</span>
          </nuxt-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <svg-icon :icon-class="`wenzhangguanli`"></svg-icon>
            <span slot="title">文章管理</span>
          </template>
          <el-menu-item index="/admin/article">
            <nuxt-link to="/admin/article">
              <svg-icon :icon-class="`wenzhangliebiao`"></svg-icon>
              <span slot="title">文章列表</span>
            </nuxt-link>
          </el-menu-item>
          <el-menu-item index="/admin/patchArticle">
            <nuxt-link to="/admin/patchArticle">
              <svg-icon :icon-class="`bianjiwenzhang`"></svg-icon>
              <span slot="title">新增文章</span>
            </nuxt-link>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-container>
  </div>
</template>
<style>
.el-menu-vertical-demo {
  position: fixed;
  height: 100%;
  left: 0;
  width: 180px;
  background: #304156;
  color: #fff;
}
.el-menu-item.is-active {
  background-color: #304156;
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
.el-submenu .el-menu-item span{
  min-width: 180px !important;
  color: #bfcbd9;
}
.el-menu-item span{
  color: #bfcbd9;
}
.el-menu-item.is-active span{
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
