import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

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



