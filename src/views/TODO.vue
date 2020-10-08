<template>
  <div class="TODO">
    <span id="paste-from"></span>
    <el-input v-model="input" @keyup.enter.native="enterEvent($event)" placeholder="请输入内容"></el-input>
    <el-row :gutter="20" id="todo-list">
      <el-col v-bind:key="val" v-for="val in list">
        <el-checkbox>{{ val }}</el-checkbox>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
const clipboard = require('electron').clipboard
const nativeImage = require('electron').nativeImage
const path = require('path')
const fs = require('fs')

export default {
  name: 'TODO',
  data(){
    return {
      list : [],
      input: ''
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    enterEvent(event) {
      console.log(event)
      console.log('input回车事件激活')
      this.list.push(this.input)
      this.input = ''
    }
  },
  
}

function addNode() {
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

