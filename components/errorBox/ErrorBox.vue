<template>
  <div class="errorBox">
     <div>
       <img src="~/assets/images/error.jpg" alt="" @click="refresh()">
     </div>
  </div>
</template>
<script>
  export default {
    methods: {
      refresh () {
        location.reload()
      }
    }
  }
</script>
<style>
  img {display: block; width: auto;margin: auto; cursor: pointer;}
</style>
