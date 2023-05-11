<template>
  <div class="picture-container">
    <img :src="pictureSrc" alt="Picture" class="picture" />
    <div class="score">{{ score }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    score: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      pictureSrc: require("@/assets/score.png"),
    };
  },
});
</script>

<style scoped>
.picture-container {
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: #000;
  width: 500px;
}

.picture {
  width: 100%;
  height: auto;
}

.score {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 1rem;
}
</style>
