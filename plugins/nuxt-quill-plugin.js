import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor'

Vue.use(VueQuillEditor)
if (process.browser) {
  const VueQuillEditor = require('vue-quill-editor/dist/ssr')
  Vue.use(VueQuillEditor)
}
