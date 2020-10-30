<!--
 * @Description: 
 * @Author: 小熊熊
 * @Date: 2020-10-30 15:13:01
 * @LastEditors: 小熊熊
 * @LastEditTime: 2020-10-30 15:45:05
-->
<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <user-outlined />
          <span class="nav-text">nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span class="nav-text">nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span class="nav-text">nav 3</span>
        </a-menu-item>
        <a-menu-item key="4">
          <user-outlined />
          <span class="nav-text">nav 4</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          content
        </div>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons-vue';
export default defineComponent({
  name: 'DefaultLayout',
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined
  },
  data() {
    return {
      selectedKeys: ['4']
    };
  },
  methods: {
    onCollapse(collapsed: any, type: any) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken: any) {
      console.log(broken);
    }
  }
});
</script>

<style lang="scss" scoped>
#components-layout-demo-responsive {
  height: inherit;
}
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
