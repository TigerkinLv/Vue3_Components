<template>
  <ModelBox :showModel="showModelBox" @closeModel="onCloseModel">
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis debitis
      quisquam, ipsum corrupti libero saepe adipisci alias cumque, fuga
      perferendis perspiciatis dolores explicabo quia labore hic dicta? Quae,
      assumenda ducimus?
    </div>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quasi debitis
      hic perferendis a quos assumenda officia! Sunt explicabo, a necessitatibus
      non, similique adipisci esse at, rerum suscipit tenetur quia?
    </div>
    <div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam illo ex
      officiis iusto aliquid, enim suscipit odio quidem sequi dolorem placeat
      qui iure odit. Rem laudantium nesciunt quos aliquam optio!
    </div>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi distinctio
      facere voluptates commodi, perspiciatis ad. Maiores, quos fugit? Doloribus
      veritatis aperiam ullam blanditiis at, obcaecati est quam vel esse? Esse!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloremque
      accusantium non hic saepe eligendi vel, aut dolore. A, sint adipisci totam
      dolores ullam voluptatibus. Quos possimus quibusdam fugit fuga.
    </div>
  </ModelBox>
</template>

<script>
import ModelBox from "@/components/ModelBox";
import { reactive, toRefs } from "@vue/reactivity";

export default {
  name: "ModelBoxDemo",
  components: {
    ModelBox,
  },
  setup() {
    let data = reactive({
      showModelBox: true,
    });

    const onCloseModel = () => {
      data.showModelBox = false;
      console.log("关闭弹窗后的操作");
    };

    return {
      ...toRefs(data),
      onCloseModel,
    };
  },
};
</script>

<style>
</style>