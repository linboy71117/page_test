<template>
  <div class="background">
    <div class="bg-footer">
      <img src="../assets/BG-footer.png" alt="footer" />
      <div class="profile">
        <img :src="profilePicture" alt="profile picture" />
        <span class="username">{{ username }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BgFooter",
  props: {
    username: {
      type: String,
      required: true,
      default: "user-1",
    },
    profilePicture: {
      type: String,
      required: true,
      default: "../assets/profile-pic.png",
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
}
.bg-footer {
  position: absolute;
  width: 100%;
  bottom: 0%;
}

.profile {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.5rem;
  display: flex;
  align-items: center;
}

.profile img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.username {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
