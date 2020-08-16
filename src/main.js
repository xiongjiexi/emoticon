import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


const clipboard = require('electron').clipboard
const path = require('path')
const fs = require('fs')


const pasteBtn = document.getElementById('paste-to')


pasteBtn.addEventListener('click', function () {
  // clipboard.writeText('一段示例内容!')
  // clipboard.writeHTML('一段示例内容!')
  // const message = `粘贴的内容: ${clipboard.readText()}`
  // document.getElementById('paste-from').innerHTML = message
  let img = clipboard.readImage()
  let dataUrl = img.toDataURL()
  let imgDom = document.createElement('img')
  imgDom.src = dataUrl
  document.body.appendChild(imgDom)

  // 保存图片到本地
  let imgData = new Buffer(img.toPNG(), 'base64')
  console.log(imgData)
  fs.writeFileSync(path.resolve('D:\\my_data\\emoticon_data\\' + uuid() + '.png'), imgData, function(err){
    if(err) return console.log(err)
    console.log('success')
  })
})


function uuid() {
  var d = new Date().getTime();
  if (window.performance && typeof window.performance.now === "function") {
      d += performance.now(); //use high-precision timer if available
  }
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}