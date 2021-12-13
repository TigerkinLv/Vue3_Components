<template>
  <ItemLinePicker
    title="测试标题"
    :columns="columns"
    :customFieldName="customFieldName"
    @picker="pickerHandle"
  />
</template>

<script>
import ItemLinePicker from "@/components/ItemLinePicker";
import { reactive, toRefs } from "@vue/reactivity";

export default {
  name: "ItemLinePickerDemo",
  components: {
    ItemLinePicker,
  },
  setup() {
    let data = reactive({
      columns: [
        { label: "测试1", value: 1 },
        { label: "测试2", value: 2 },
        { label: "测试3", value: 3 },
        { label: "测试4", value: 4 },
        { label: "测试5", value: 5 },
      ],
      customFieldName: {
        text: "label",
      },
    });

    const pickerHandle = (value) => {
      console.log("选择的值是", value);
    };

    return {
      ...toRefs(data),
      pickerHandle,
    };
  },
};
</script>

<style>
</style>