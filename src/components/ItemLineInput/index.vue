<template>
  <div :class="['itemLineInput', vertical ? 'vertical' : '']">
    <div class="left">
      <span>{{ title }}</span
      ><span class="redSign">*</span>
    </div>
    <div class="right">
      <textarea
        class="lineInput"
        v-if="inputType == 'textarea'"
        :readonly="readOnly && stubborn"
        :placeholder="placeholder"
        :value="modelValue"
        :maxlength="maxLength"
        @input="$emit('update:modelValue', $event.target.value)"
        @blur="$emit('inputBlur')"
      ></textarea>
      <input
        v-else
        :type="inputType"
        class="lineInput"
        :readonly="readOnly && stubborn"
        :placeholder="placeholder"
        :value="modelValue"
        :maxlength="maxLength"
        @input="$emit('update:modelValue', $event.target.value)"
        @blur="$emit('inputBlur')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemLineInput",
  props: {
    title: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "请输入",
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    inputType: {
      type: String,
      default: "text",
    },
    maxLength: {
      type: Number,
    },
    stubborn: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, context) {
    // console.log(props, context);
    // console.log(props);
    return {};
  },
};
</script>

<style lang="less" scoped src="./index.less">
</style>