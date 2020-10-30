<!--
 * @Description: 
 * @Author: 小熊熊
 * @Date: 2020-10-26 10:55:29
 * @LastEditors: 小熊熊
 * @LastEditTime: 2020-10-30 15:50:14
-->
<template>
  <div id="app-container">
    <default-layout />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DefaultLayout from '@/layout/Default.vue';
export default defineComponent({
  components: {
    DefaultLayout
  }
});
</script>

<style lang="scss">
#app-container {
  width: 100vw;
  height: 100vh;
}
</style>
