<template>
  <div class="background">
    <!-- <CheerStick
      :type="'stick'"
      :level="1"
      :stop-animation="true"
      :width="200"
      :height="200"
    /> -->
    <div class="receiver-stick">
      <div
        class="cheerstick"
        v-for="(stick, index) in cheersticks"
        :key="index"
        :style="{ top: stick.y + 'px', left: stick.x + 'px' }"
      >
        <CheerStick
          :type="stick.type"
          :level="stick.level"
          :stop-animation="false"
          :height="170"
          :width="170"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CheerStick from "@/components/CheerStick.vue";
type CheerstickProps = {
  type: string;
  level: number;
  x: number;
  y: number;
};
export default defineComponent({
  components: {
    CheerStick,
  },
  data() {
    return {
      cheersticks: [] as CheerstickProps[],
      numCheersticks: 0,
      maxCheersticks: 30,
    };
  },
  created() {
    setInterval(() => {
      if (this.numCheersticks < this.maxCheersticks) {
        this.numCheersticks++;
        this.addCheerstick();
      }
    }, 3000);
  },
  methods: {
    addCheerstick() {
      const cheerstick = {
        type: "sword",
        level: Math.floor(Math.random() * 3) + 1,
        x: Math.floor(Math.random() * window.innerWidth),
        y: 50,
      } as CheerstickProps;
      this.cheersticks.push(cheerstick);
    },
  },
});
</script>

<style>
.background {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: black;
}
.receiver-stick {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 180px;
  z-index: 0;
}
.cheerstick {
  position: absolute;
  width: 170px;
  height: 170px;
  bottom: 0%;
  z-index: 1;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
