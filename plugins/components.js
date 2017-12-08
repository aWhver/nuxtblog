import Vue from 'vue'
import SvgIcon from '~/components/svgIcons/SvgIcon'
import ErrorBox from '~/components/errorBox/ErrorBox'

// 注册全局svg-icon组件
Vue.component('svg-icon', SvgIcon)
// 注册全局error-box组件
Vue.component('error-box', ErrorBox)
