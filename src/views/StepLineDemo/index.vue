<template>
  <StepLine :steps="steps" :curStep="curStep" />
</template>

<script>
import StepLine from "@/components/StepLine";
import { reactive, toRefs } from "@vue/reactivity";

export default {
  name: "StepLineDemo",
  components: {
    StepLine,
  },
  setup() {
    let data = reactive({
      steps: ["第一步", "第二步", "第三步"],
      curStep: 1,
    });

    return {
      ...toRefs(data),
    };
  },
};
</script>

<style>
</style>