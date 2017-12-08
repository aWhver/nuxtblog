<template>
  <div class="breakCrumb-container">
    <el-breakcrumb separator="/">
      <el-breakcrumb-item v-for="item in routerList" :to="{path: item.route }">{{ item.routeName }}</el-breakcrumb-item>
    </el-breakcrumb>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        routerList: []
      }
    }
  }
</script>
<style>

</style>
