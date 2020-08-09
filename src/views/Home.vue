<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <input v-model="inputName" placeholder="搜索你的文件" @keyup.enter.native="searchFile(params)"/>
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
  }
}
</script>
