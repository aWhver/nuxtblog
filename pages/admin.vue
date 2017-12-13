<template>
  <div>
    <SlideMenu :class="{'hideSidebar': hideBarBool}"></SlideMenu>
    <div class="main-container" :style="{'margin-left': hideBarBool? '36px' : '180px'}">
      <div class="menu-horizontal">
        <div class="hamburger"  style="display: inline-block;margin-right: 15px;" :class="{'collapsein': hideBarBool}" @click="toggleClick()">
          <el-button>
            <span class="line-top line"></span>
            <span class="line-middle line"></span>
            <span class="line-bottom line"></span>
          </el-button>
        </div>
        <BreakCrumb></BreakCrumb>
      </div>
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>
<script>
  import SlideMenu from '~/components/admin/SlideMenu'
  import BreakCrumb from '~/components/breakcrumb/Breakcrumb'
  export default {
    layout: 'login',
    data () {
      return {
        hideBarBool: 0
      }
    },
    methods: {
      toggleClick () {
        this.hideBarBool = this.hideBarBool ? 0 : 1
      }
    },
    components: {
      SlideMenu,
      BreakCrumb
    }
  }
</script>
<style>
  .hamburger {display: inline-block;}
  .hamburger .line {
    background: #000;
    height: 2px;
    width: 18px;
    margin: 3px 0;
    display: block;
    transition: transform,width linear 0.4s;
  }
  .hamburger :hover .line-top {
    transform: rotate(-45deg) translateX(-1px) translateY(1px);
    width: 50%;
  }
  .hamburger :hover .line-bottom {
    transform: rotate(45deg) translateX(-1px) translateY(-1px);
    width: 50%;
  }
  .hamburger.collapsein:hover .line-top {
    transform: rotate(-135deg) translateX(-7px) translateY(6px);
    width: 50%;
  }
  .hamburger.collapsein:hover .line-bottom {
    transform: rotate(135deg) translateX(-7px) translateY(-6px);
    width: 50%;
  }
  .hamburger .el-button {
    padding: 5px 10px;
  }
</style>
