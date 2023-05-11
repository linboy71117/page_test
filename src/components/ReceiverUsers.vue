<template>
  <div class="gif-container">
    <img :src="Pics[gifIdx]" alt="GIF" class="gif" />
    <div class="user-counter">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    gifIdx: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      Pics: {
        1: require("@/assets/user_num/0.png"),
        2: require("@/assets/user_num/1.png"),
        3: require("@/assets/user_num/2.png"),
        4: require("@/assets/user_num/3.png"),
        5: require("@/assets/user_num/4.png"),
        6: require("@/assets/user_num/5.png"),
      },
    };
  },
});
</script>

<style scoped>
.gif-container {
  position: absolute;
  left: 10px;
  top: 10px;
  background-color: #000;
  width: 500px;
}

.gif {
  width: 100%;
  height: auto;
}

.user-counter {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.5rem;
  font-size: 1rem;
}
</style>
