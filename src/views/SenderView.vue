<template>
  <div class="window">
    <!-- <Settings /> -->
    <G_Modal v-if="showFirstModal" :emitLogin="handleLogin" />
    <A_Modal v-if="showSecondModal" />
    <Background :state="state" />
    <Settings @typeChange="updateCheerStickType" />
    <div class="cheerstick-container">
      <CheerStick ref="cheerstick" :level="level" :type="cheerStickType" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CheerStick from "@/components/CheerStick.vue";
import Background from "@/components/BackGround.vue";
import Settings from "@/components/SettingsDropdown.vue";
import G_Modal from "@/components/GoogleLoginModal.vue";
import A_Modal from "@/components/AccelerometerAccessModal.vue";

export default defineComponent({
  components: {
    CheerStick,
    Background,
    G_Modal,
    A_Modal,
    Settings,
  },
  data() {
    return {
      level: 1,
      state: 1,
      cheerStickType: "stick",
      showFirstModal: true as boolean,
      showSecondModal: false as boolean,
    };
  },
  mounted() {
    setInterval(() => {
      this.state++;
      if (this.state > 10) {
        this.state = 1;
        this.level = this.level < 5 ? this.level + 1 : 5;
      }
    }, 1000);
  },
  methods: {
    handleLogin() {
      this.showFirstModal = false;
      this.showSecondModal = true;
    },
    updateCheerStickType(type: string) {
      this.cheerStickType = type;
    },
  },
});
</script>

<style scoped>
.window {
  position: relative;
  width: 100%;
  height: 100vh;
}

.cheerstick-container {
  position: absolute;
  top: 47.8%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 15;
}
</style>
