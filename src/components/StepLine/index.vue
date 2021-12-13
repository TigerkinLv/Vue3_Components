<template>
  <div class="stepLineBox">
    <div :class="['stepItem', curStep >= 0 ? 'active' : '']">
      <div class="circle"></div>
      <div class="txt">{{ steps[0] }}</div>
    </div>
    <div
      :class="['stepItem', curStep >= index + 1 ? 'active' : '']"
      v-for="(item, index) in steps.slice(1)"
      :key="index"
    >
      <div class="line"></div>
      <div class="circle"></div>
      <div class="txt">{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepLine",
  props: ["steps", "curStep"],
  props: {
    steps: {
      type: Array,
      required: true,
    },
    curStep: {
      type: [String, Number],
      required: true,
    },
  },
  setup(props, context) {
    return {};
  },
};
</script>

<style lang="less" scoped src="./index.less">
</style>