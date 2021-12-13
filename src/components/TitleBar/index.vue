<template>
  <div class="columnName">
    <span class="verticalBar"></span> <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "TitleBar",
  props: ["title"],
};
</script>

<style lang="less" scoped src="./index.less">
</style>