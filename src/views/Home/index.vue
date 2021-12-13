<template>
  <div class="declare">一个Vue3组件库，部分组件基于vant3</div>
  <div class="componentBox">
    <router-link to="/item-line-input-demo" class="componentItem"
      >输入框</router-link
    >
    <router-link to="/item-line-picker-demo" class="componentItem"
      >选择器</router-link
    >
    <router-link to="/model-box" class="componentItem">弹窗</router-link>
    <router-link to="/step-line" class="componentItem">步进条</router-link>
    <router-link to="/title-bar" class="componentItem">标题栏</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  setup() {
    console.log("Home");
  },
};
</script>

<style lang="less" scoped src="./index.less">
</style>