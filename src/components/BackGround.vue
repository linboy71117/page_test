<template>
  <div class="background">
    <img class="background-top" src="../assets/BG-top.png" />
    <img class="background-main" src="../assets/BG-main-window.png" />
    <img
      v-for="i in currentState"
      :key="i"
      :src="require(`../assets/BG-state-${i}.png`)"
      :style="{ animationDelay: `${(i - 1) * 0.1}s` }"
      :class="'background-image-' + i"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    state: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentState: this.state,
    };
  },
  watch: {
    state(newState) {
      if (newState > this.currentState) {
        const imagesToPop = newState - this.currentState;
        for (let i = 1; i <= imagesToPop; i++) {
          setTimeout(() => {
            this.currentState += 1;
          }, i * 100);
        }
      } else {
        this.currentState = newState;
      }
    },
  },
});
</script>

<style scoped>
.background {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #afbc7d;
}

.background-top {
  position: absolute;
  z-index: 3;
  width: 100%;
  top: 0%;
  left: 0%;
  object-fit: cover;
}

.background-main {
  z-index: 3;
  position: absolute;
  left: 16.71%;
  top: 17.13%;
  width: 65.14%;
}

.background-image-1 {
  position: absolute;
  left: 33.25%;
  top: 86.54%;
  width: 36%;
  object-fit: cover;
  opacity: 0;
  animation: pop-out 0.2s ease-out forwards;
}
.background-image-2 {
  position: absolute;
  z-index: 2;
  width: 36%;
  left: 36.13%;
  top: 72.11%;
  object-fit: cover;
  opacity: 0;
  animation: pop-out 0.18s ease-out forwards;
}
.background-image-3 {
  position: absolute;
  z-index: 1;
  width: 34%;
  left: 65.82%;
  top: 76.4%;
  object-fit: cover;
  opacity: 0;
  animation: pop-out 0.18s ease-out forwards;
}
.background-image-4 {
  position: absolute;
  z-index: 4;
  width: 53.12%;
  left: 0%;
  bottom: 0%;
  object-fit: cover;
  opacity: 0;
  animation: pop-out 0.18s ease-out forwards;
}
.background-image-5 {
  position: absolute;
  width: 31.88%;
  left: -0.9%;
  top: 48.97%;
  object-fit: cover;
  opacity: 0;
  animation: pop-out 0.18s ease-out forwards;
}
.background-image-6 {
  position: absolute;
  width: 24.6%;
  right: 0%;
  top: 22.84%;
  object-fit: cover;
  opacity: 0;
  animation: pop-out 0.18s ease-out forwards;
}
.background-image-7 {
  position: absolute;
  z-index: 6;
  width: 62.34%;
  right: 0%;
  top: 26.84%;
  object-fit: cover;
  opacity: 0;
  animation: pop-out-lb 0.18s ease-out forwards;
}

.background-image-8 {
  position: absolute;
  z-index: 2;
  width: 27.71%;
  left: 0.9%;
  top: 27.16%;
  object-fit: cover;
  opacity: 0;
  animation: pop-out 0.15s ease-out forwards;
}

.background-image-9 {
  position: absolute;
  z-index: 2;
  width: 37.74%;
  left: 42.49%;
  top: 12.16%;
  object-fit: cover;
  opacity: 0;
  animation: pop-out 0.15s ease-out forwards;
}

.background-image-10 {
  position: absolute;
  width: 50.72%;
  left: -0.17%;
  top: 10.17%;
  object-fit: cover;
  opacity: 0;
  animation: pop-out 0.13s ease-out forwards;
}

@keyframes pop-out {
  0% {
    opacity: 0;
    transform: scale(0.65);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes pop-out-lb {
  0% {
    opacity: 0;
    transform: translate(50%, 50%) scale(0.5);
  }
  50% {
    opacity: 0.8;
    transform: translate(40%, 40%) scale(0.6);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0) scale(1);
  }
}
</style>
