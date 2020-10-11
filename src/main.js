import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Router from 'director/build/director.js'

Vue.config.productionTip = false
Vue.use(ElementUI);
// Vue.use(Router);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

const clipboard = require('electron').clipboard
const path = require('path')
const fs = require('fs')
const pasteBtn = document.getElementById('paste-to')

// pasteBtn.addEventListener('click', function () {
//   clipboard2File()
// })



