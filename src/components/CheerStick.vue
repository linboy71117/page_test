<template>
  <div class="container">
    <div class="stick-container">
      <img :src="stickImage" alt="stick" class="stick" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
interface StickImages {
  [key: number]: string;
}

export default defineComponent({
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      stickImages: {
        1: require("@/assets/stick-level-1.png"),
        2: require("@/assets/stick-level-2.png"),
        3: require("@/assets/stick-level-3.png"),
        4: require("@/assets/stick-level-4.png"),
        5: require("@/assets/stick-level-5.png"),
      } as StickImages,
      intervalId: 0,
      duration: 1,
    };
  },
  methods: {
    updateDuration() {
      this.duration = (6 - this.level) / 3;
    },
  },
  computed: {
    stickImage(): string {
      return this.stickImages[this.level];
    },
  },
  watch: {
    level() {
      this.updateDuration();
    },
  },
  mounted() {
    this.updateDuration();
    const container = document.querySelector(".stick-container") as HTMLElement;
    if (container) {
      let position = 0;
      let direction = 1;
      let angle = 0;
      this.intervalId = setInterval(() => {
        if (position === 0) {
          direction = 1;
        }
        if (position === 6) {
          direction = -1;
        }
        position += direction;
        angle = (position - 3) * 10;
        container.style.setProperty("--rotation-angle", `${angle}deg`);
        container.style.setProperty("--shake-duration", `${this.duration}s`);
      }, this.duration * 30);
    }
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
});
</script>

<style scoped>
.container {
  position: absolute;
  top: 0%;
  left: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
.stick-container {
  position: relative;
  bottom: 8%;
  display: inline-block;
  z-index: 5;
  transform-origin: bottom center;
  transform: rotate(var(--rotation-angle));
  animation: shake var(--shake-duration) ease-in-out infinite;
}

@keyframes shake {
  0% {
    transform: rotate(0deg);
  }
  9% {
    transform: rotate(10deg);
  }
  18.2% {
    transform: rotate(20deg);
  }
  27.3% {
    transform: rotate(30deg);
  }
  36.3% {
    transform: rotate(20deg);
  }
  45.4% {
    transform: rotate(10deg);
  }
  54.5% {
    transform: rotate(0deg);
  }
  63.6% {
    transform: rotate(-10deg);
  }
  72.7% {
    transform: rotate(-20deg);
  }
  81.8% {
    transform: rotate(-30deg);
  }
  91% {
    transform: rotate(-20deg);
  }
  100% {
    transform: rotate(-10deg);
  }
}
</style>
