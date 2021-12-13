<template>
  <teleport to="body">
    <div class="modelBox" v-show="showModel">
      <div class="contBox">
        <div class="title">{{ title }}</div>
        <div class="content">
          <slot></slot>
        </div>
        <div class="btnBottom" @click="closeModel">{{ btnTxt }}</div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: "ModelBox",
  props: {
    showModel: {
      type: Boolean,
      default: false,
      required: true,
    },
    title: {
      type: String,
      default: "温馨提示",
    },
    btnTxt: {
      type: String,
      default: "我知道了",
    },
  },
  emits: ["closeModel"],
  setup(props, context) {
    console.log(context.slots);
    const closeModel = () => {
      context.emit("closeModel");
    };
    return {
      closeModel,
    };
  },
};
</script>

<style lang="less" scoped src="./index.less">
</style>
