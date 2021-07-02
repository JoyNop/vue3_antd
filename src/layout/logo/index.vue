<!--
 * @Author: HanRui(JoyNop)
 * @Date: 2021-07-01 10:46:44
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-07-01 11:42:29
 * @Description: file content
 * @FilePath: /vue3-antd-admin/src/layout/logo/index.vue
-->
<template>
  <div class="logo">
    <img src="~@/assets/images/logo.png" alt="" />
    <h2 v-show="!collapsed" class="title">JoyNop</h2>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: {
    collapsed: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  padding-left: 24px;
  height: 64px;
  line-height: 64px;
  overflow: hidden;
  white-space: nowrap;

  img {
    height: 32px;
    margin-right: 8px;
  }

  .title {
    color: white;
    margin-bottom: 0;
  }
}
</style>
