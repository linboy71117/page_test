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
    }, 2000);
  },
  methods: {
    addCheerstick() {
      const dir = this.numCheersticks % 2 == 0 ? 1 : -1;
      const pos =
        this.numCheersticks % 2 == 0
          ? window.innerWidth * 0.0
          : window.innerWidth * 0.9;
      const interval = 38;
      const ranInt = Math.random() * 2 - 1;
      const cspeed = Math.floor(Math.random() * 4) + 1;
      const sspeed = Math.floor(Math.random() * 4) + 1;
      const xpos = Math.floor(
        pos + dir * Math.floor(this.numCheersticks / 2) * interval + ranInt * 5
      );
      const ypos = Math.floor(
        55 + this.numCheersticks * 1.6 + Math.random() * 5
      );
      const cheerstick = {
        type: "sword",
        level: cspeed,
        x: xpos,
        y: ypos,
      } as CheerstickProps;
      const shadow = {
        type: "sshadow",
        level: sspeed,
        x: xpos + ranInt * 30,
        y: ypos,
      } as CheerstickProps;
      if (this.numCheersticks % 7 == 0) {
        cheerstick.type = "stick";
        shadow.type = "bshadow";
      }
      this.cheersticks.push(shadow);
      this.cheersticks.push(cheerstick);
      //   console.log(pos + " " + dir * this.numCheersticks * interval);
      //   console.log(cheerstick.x + " " + cheerstick.y);
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
  height: 200px;
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
