<!--
 * @Author: HanRui(JoyNop)
 * @Date: 2021-04-30 17:57:15
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-05 16:24:08
 * @Description: file content
 * @FilePath: /vue3_antd/src/components/ThreeViewer/index.vue
-->
<template>
  <div>
    <three-sketch class="sketch-container" :src="testScene" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import testScene from './testScene'
// import ThreeSketch component
// import ThreeSketch from '@alexpetercharles/three-sketch.vue'
import ThreeSketch from './three-sketch.vue'
export default defineComponent({
  name: 'LemonViewer',
  components: {
    ThreeSketch
  },
  setup() {
    return {
      testScene
    }
  }
})
</script>

<style scoped>
.sketch-container {
  height: 100vh;
  width: 80vw;
}
</style>
