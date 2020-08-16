<template>
  <div class="home">
    <input id="" placeholder="" @keyup.ctrl.86="paste($event)"/>
    <span id="paste-from"></span>
    <button id="paste-to">paste</button>
    <img src="D:\\my_data\\emoticon_data\\02cb7b01-8e1c-41f0-a3a2-353efef07300.png">
  </div>
  <!-- <input v-model="inputName" placeholder="搜索你的文件" @keyup.enter.native="searchFile(params)"></input> -->
</template>




<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'



export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    paste(event) {
      console.log(event);
    }
  }
}


</script>
