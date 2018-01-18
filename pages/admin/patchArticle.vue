<template>
  <div>
    <div class="quill-editor"
         :content="content"
         v-quill:myQuillEditor="editorOption">
    </div>

  </div>


</template>
<script>
  export default {
    layout: 'login',
    data () {
      return {
        content: '',
        editorOption: { }
      }
    },
    methods: {
      imgClick () {
        // this.showCrop = true
      }
    }
  }
</script>
<style>
  .quill-editor {
    width: 800px;
    height: 600px;
    margin: 0px auto 30px;
  }
  .ql-toolbar.ql-snow {
    width: 800px;
    margin: 30px auto 0;
  }
</style>
