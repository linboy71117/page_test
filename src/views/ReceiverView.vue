<template>
  <div>
    <Background :state="state" />
    <CheerStick ref="cheerstick" :level="level" />
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref } from "vue";
import CheerStick from "@/components/CheerStick.vue";
import Background from "@/components/BackGround.vue";

interface CheerStickComponent {
  updateSpeed: (level: number) => void;
}

export default defineComponent({
  components: {
    CheerStick,
    Background,
  },
  data() {
    return {
      level: 1,
      state: 1,
    };
  },
  mounted() {
    setInterval(() => {
      this.state++;
      if (this.state > 10) {
        this.state = 1;
      }
      console.log(this.state + " " + this.level);
    }, 1000);
  },
});
</script>

<style>
/* add any styles specific to this view component */
</style>
