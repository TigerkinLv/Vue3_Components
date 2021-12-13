import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/views/Home";
import ItemLineInputDemo from "@/views/ItemLineInputDemo";
import ItemLinePickerDemo from "@/views/ItemLinePickerDemo";
import ModelBoxDemo from "@/views/ModelBoxDemo";
import StepLineDemo from "@/views/StepLineDemo";
import TitleBarDemo from "@/views/TitleBarDemo";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/item-line-input-demo',
    name: 'ItemLineInputDemo',
    component: ItemLineInputDemo
  },
  {
    path: '/item-line-picker-demo',
    name: 'ItemLinePickerDemo',
    component: ItemLinePickerDemo
  },
  {
    path: '/model-box',
    name: 'ModelBox',
    component: ModelBoxDemo
  },
  {
    path: '/step-line',
    name: 'StepLine',
    component: StepLineDemo
  },
  {
    path: '/title-bar',
    name: 'TitleBar',
    component: TitleBarDemo
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router