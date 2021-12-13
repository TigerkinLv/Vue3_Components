<template>
  <TitleBar title="测试标题" />
</template>

<script>
import TitleBar from "@/components/TitleBar";

export default {
  name: "TitleBarDemo",
  components: {
    TitleBar,
  },
  setup() {
    console.log("TitleBar");
  },
};
</script>

<style>
</style>