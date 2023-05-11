<template>
  <div class="notification" :class="notificationClass">
    <div class="message">{{ message }}</div>
    <div class="button-container">
      <button class="close-button" @click="hideNotification">Login</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  data() {
    return {
      message: "Login your google account" as string,
      isActive: true as boolean,
      timeout: 0 as ReturnType<typeof setTimeout> | null,
    };
  },
  computed: {
    notificationClass(): string {
      return this.isActive ? "active" : "";
    },
  },
  mounted() {
    this.timeout = setTimeout(() => {
      this.hideNotification();
    }, 3000) as ReturnType<typeof setTimeout>;
  },
  beforeUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  },
  methods: {
    hideNotification() {
      this.isActive = false;
    },
  },
});
</script>

<style scoped>
.notification {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.3s;
  width: 400px;
  height: 100px;
  font-size: 32px;
}

.notification.active {
  opacity: 1;
}

.message {
  margin-bottom: 10px;
}

.button-container {
  display: flex;
  justify-content: flex-end;
}

.close-button {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 32px;
}
</style>
