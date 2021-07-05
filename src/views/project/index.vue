<!--
 * @Author: HanRui(JoyNop)
 * @Date: 2021-07-05 15:07:58
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-05 16:22:21
 * @Description: file content
 * @FilePath: /vue3_antd/src/views/project/index.vue
-->
<template>
  <div>
    sdfasdfasdfasd

    <a-input v-model:value="value" placeholder="Basic usage" />
    <Three />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import Three from '@/components/ThreeViewer/index.vue'
export default defineComponent({
  components: {
    Three
  },
  setup() {
    const value = ref<string>('')
    return {
      value
    }
  }
})
</script>

<style lang="scss" scoped></style>
