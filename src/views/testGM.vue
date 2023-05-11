<template>
  <div>
    <!-- Other content in your website -->
    <Notification />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Notification from "@/components/GoogleLoginModal.vue";

export default defineComponent({
  components: {
    Notification,
  },
});
</script>
