import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/scss/global.scss';
import { loadAllPlugins } from '@/plugins';

export const app = createApp(App);
// 注册所有插件
loadAllPlugins(app);
app
  .use(store)
  .use(router)
  .mount('#app');
