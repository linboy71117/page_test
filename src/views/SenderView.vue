<template>
  <div class="window">
    <!-- <Settings /> -->
    <Background :state="state" />
    <CheerStick ref="cheerstick" :level="level" :type="type" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CheerStick from "@/components/CheerStick.vue";
import Background from "@/components/BackGround.vue";
// import Settings from "@/components/SettingsDropdown.vue";

export default defineComponent({
  components: {
    CheerStick,
    Background,
  },
  data() {
    return {
      level: 1,
      state: 1,
      type: "stick",
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
