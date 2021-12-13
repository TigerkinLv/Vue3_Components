<template>
  <ItemLineInput title="测试标题" v-model.trim="testInputValue" />
</template>

<script>
import ItemLineInput from "@/components/ItemLineInput";
import { reactive, toRefs } from "@vue/reactivity";

export default {
  name: "ItemLineInputDemo",
  components: {
    ItemLineInput,
  },
  setup() {
    let data = reactive({
      testInputValue: "",
    });

    return {
      ...toRefs(data),
    };
  },
};
</script>

<style>
</style>