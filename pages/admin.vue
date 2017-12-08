<template>
  <div>
    <SlideMenu></SlideMenu>
    <div class="main-container">
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>
<script>
  import SlideMenu from '~/components/admin/SlideMenu'
  export default {
    layout: 'login',
    components: {
      SlideMenu
    }
  }
</script>
<style>

</style>
