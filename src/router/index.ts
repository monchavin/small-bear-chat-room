/*
 * @Description:
 * @Author: 小熊熊
 * @Date: 2020-10-26 10:55:29
 * @LastEditors: 小熊熊
 * @LastEditTime: 2020-10-30 15:13:37
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
const Main = () => import(/* webpackChunkName: "about" */ '../views/Main.vue');
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Main
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
