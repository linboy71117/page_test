<template>
  <div class="window">
    <CheerSticks />
    <Users :gifIdx="UserIdx" />
    <Score />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CheerSticks from "@/components/ReceiverSticks.vue";
import Users from "@/components/ReceiverUsers.vue";
import Score from "@/components/ReceiverScore.vue";

export default defineComponent({
  components: {
    CheerSticks,
    Users,
    Score,
  },
  data() {
    return {
      level: 1,
      UserIdx: 1,
    };
  },
  mounted() {
    setInterval(() => {
      this.UserIdx++;
      if (this.UserIdx > 6) {
        this.UserIdx = 1;
      }
    }, 100);
  },
});
</script>

<style scoped>
.window {
  position: relative;
  width: 100%;
  height: 100vh;
}
</style>
