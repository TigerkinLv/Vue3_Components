<template>
  <div>
    <div class="pickerTrigger">
      <div class="left">
        {{ title }} <span class="redSign" v-show="necessary">*</span>
        <img
          v-if="hasIcon"
          :src="iconSrc"
          class="iconImg"
          @click="iconClickHandle"
        />
      </div>
      <div class="right" @click="chooseItem">
        <div :class="['txt', pickValue != '请选择' ? 'hasValue' : '']">
          {{ pickValue }}
        </div>
        <div>
          <img src="./images/right.png" alt="" />
        </div>
      </div>
    </div>
    <van-popup v-model:show="showPicker" round position="bottom">
      <van-picker
        :columns="columns"
        :columns-field-names="customFieldName"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "@vue/reactivity";
export default {
  name: "ItemLinePicker",
  props: {
    title: {
      type: String,
      required: true,
    },
    // pickValue: {
    //   type: String,
    //   default: "请选择",
    // },
    columns: {
      type: Array,
      required: true,
    },
    necessary: {
      type: Boolean,
      default: false,
    },
    customFieldName: {
      type: Object,
    },
    hasIcon: {
      type: Boolean,
      default: false,
    },
    iconSrc: {
      type: String,
    },
  },
  emits: ["picker", "iconClick"],
  setup(props, context) {
    const data = reactive({
      showPicker: false,
      pickValue: "请选择",
    });

    const onConfirm = (value, index) => {
      data.showPicker = false;
      data.pickValue = value[props.customFieldName.text];
      context.emit("picker", value);
    };
    const chooseItem = () => {
      data.showPicker = true;
    };
    const iconClickHandle = () => {
      context.emit("iconClick");
    };

    return {
      onConfirm,
      chooseItem,
      iconClickHandle,
      ...toRefs(data),
    };
  },
};
</script>

<style lang="less" scoped src="./index.less">
</style>
