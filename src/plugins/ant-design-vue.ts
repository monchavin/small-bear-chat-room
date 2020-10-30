import { Form, Input, Button, message, Layout, Menu } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import { createApp } from 'vue';
/**
 * @description 手动注册 antd-vue 组件,达到按需加载目的
 * @param {ReturnType<typeof createApp>} app 整个应用的实例
 * @returns void
 */

message.config({
  maxCount: 2
});

export default function loadComponent(app: ReturnType<typeof createApp>) {
  app.config.globalProperties.$message = message;
  app.use(Form);
  app.use(Input);
  app.use(Button);
  app.use(Layout);
  app.use(Menu);
}
