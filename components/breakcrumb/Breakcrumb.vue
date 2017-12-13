<template>
  <div class="breakCrumb-container" style="display: inline-block;">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in routerList" :key="item.path">
        <nuxt-link v-if="index === 0 || index !== routerList.length-1" :to="item.path">{{  item.path }} </nuxt-link>
        <span v-else>{{  item.path }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        routerList: []
      }
    },
    created () {
      this.getBreakCrumb()
    },
    methods: {
      getBreakCrumb () {
        // console.log(this.$route)
        let matched = this.$route.matched.filter(item => item.name)
        console.log(matched)
        const first = matched[0]
        if (first && first.name !== 'admin') {
          matched = [{path: '/admin', meta: {title: '首页'}}].concat(matched)
        }
        this.routerList = matched
      }
    },
    watch: {
      $route () {
        this.getBreakCrumb()
      }
    }
  }
</script>
<style>

</style>
