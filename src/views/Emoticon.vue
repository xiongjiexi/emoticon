<template>
  <div class="Emoticon">
    <!-- <input id="" placeholder="" @keyup.ctrl.86="paste($event)"/> -->
    <span id="paste-from"></span>
    <el-row :gutter="20">
      <el-col :span="3" v-bind:key="val" v-for="val in list">
          <img v-on:dblclick="imgdblclick($event)" :src="val" style="width:100px;height:100px">
      </el-col>
    </el-row>
    <!-- <div id="imgs"></div> -->
    <!-- <img src="D:\\my_data\\emoticon_data\\02cb7b01-8e1c-41f0-a3a2-353efef07300.png"> -->
  </div>
  <!-- <input v-model="inputName" placeholder="搜索你的文件" @keyup.enter.native="searchFile(params)"></input> -->
</template>




<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
const clipboard = require('electron').clipboard
const nativeImage = require('electron').nativeImage
const path = require('path')
const fs = require('fs')

export default {
  name: 'Emoticon',
  data(){
    return {
      list : arr()
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    paste(event) {
      console.log(event)
    },
    imgdblclick(event) {
      console.log(event)
      clipboard.writeImage(nativeImage.createFromBuffer(fs.readFileSync(event.srcElement.currentSrc.substr(5))))
    }
  },
  mounted(){
    document.onkeydown = function(e) {            
    let key = window.event.keyCode            
      console.log('ss')
    if (key== 86 && event.ctrlKey) {
        clipboard2File()
        window.event.preventDefault()
      }
    }
    // renderImg()
    img2Clipboard()
  },
  
}


/**
 * 保存剪贴板中的图片到本地
 */
function clipboard2File(){
// clipboard.writeText('一段示例内容!')
  // clipboard.writeHTML('一段示例内容!')
  // const message = `粘贴的内容: ${clipboard.readText()}`
  // document.getElementById('paste-from').innerHTML = message
  // let dataUrl = img.toDataURL()
  // let imgDom = document.createElement('img')
  // imgDom.src = dataUrl
  // document.body.appendChild(imgDom)
  let img = clipboard.readImage()
  if(!img.isEmpty()){
    let imgData = new Buffer(img.toPNG(), 'base64')
    console.log(imgData)
    fs.writeFileSync(path.resolve('D:\\my_data\\emoticon_data\\' + uuid() + '.png'), imgData, function(err){
      if(err) return console.log(err)
      console.log('success')
    })
  }else{
    console.log('clipboard is not image')
  }
  
}



/**
 * img2Clipboard
 */
function img2Clipboard() {
  document.querySelectorAll('img').forEach(x => {
      x.addEventListener('dblclick', function(event) {
        clipboard.writeImage(nativeImage.createFromBuffer(fs.readFileSync(x.src.substr(5))))
    })
  })
}


/**
 * 生成uuid
 */
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

// renderImg()

/**
 * 渲染图片
 */
function renderImg() {
  let imgPath = 'D:/my_data/emoticon_data/'
  let parentDiv = document.getElementById('imgs')
  document.createElement('img')
  let files = fs.readdirSync(imgPath)

  files.forEach(x => {
    console.log(x)
    let img = document.createElement('img')
    img.src = 'ff://' + imgPath + '/' + x
    parentDiv.appendChild(img)
  })
}

function arr() {
  console.log('step1')
  let imgPath = 'D:/my_data/emoticon_data/'
  let files = fs.readdirSync(imgPath)
  let array = files.map(x => {
    return 'ff://' + imgPath + '/' + x
  })
  console.log(array)
  return array
}

</script>


<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 100px;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

