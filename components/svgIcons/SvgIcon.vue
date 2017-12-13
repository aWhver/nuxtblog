<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${iconClass}`"></use>
  </svg>
</template>
<style>
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    margin-right: 1rem;
  }
</style>
<script>
  // import '~/assets/icons/svg/wenzhangliebiao.svg'
  export default {
    name: 'svg-icon',
    props: {
      iconClass: {
        type: String,
        required: true
      }
    }
  }
</script>
