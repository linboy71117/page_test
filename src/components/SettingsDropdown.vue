<template>
  <div class="settings">
    <!-- <Cheerstick
      ref="cheerstick"
      :level="1"
      :type="selectedCheerstick"
    ></Cheerstick> -->
    <img src="../assets/SettingFrame.png" />
    <div class="btn-1">
      <img src="../assets/SettingButton.png" @click="toggleDropdown" />
    </div>
    <div class="btn-2">
      <img src="../assets/RefreshButton.png" @click="refreshPage" />
    </div>
    <div v-if="showDropdown" class="dropdown">
      <div class="dropdown-row images-row">
        <div
          class="dropdown-item"
          v-for="cheerstick in cheersticks"
          :key="cheerstick"
          @click="selectCheerstick(cheerstick)"
        >
          <img
            :src="require(`../assets/${cheerstick}.png`)"
            alt="stick"
            class="stick"
          />
        </div>
      </div>
      <div class="dropdown-row display-row">
        <div class="display-window">
          <CheerStick
            :type="selectedCheerstickType"
            :level="1"
            :stop-animation="false"
            :height="460"
            :width="380"
          />
        </div>
      </div>
      <button class="confirm-button" @click="confirmSelection">Confirm</button>
    </div>
  </div>
</template>

<script lang="ts">
import CheerStick from "@/components/CheerStick.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    CheerStick,
  },
  data() {
    return {
      showDropdown: false,
      selectedCheerstick: "Select Cheerstick",
      cheersticks: ["stick", "flower", "sword"],
      selectedCheerstickType: "stick",
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    selectCheerstick(type: string) {
      this.selectedCheerstickType = type;
    },
    confirmSelection() {
      if (this.selectedCheerstickType) {
        this.selectedCheerstick = this.selectedCheerstickType;
        this.$emit("typeChange", this.selectedCheerstickType);
      }
      this.showDropdown = false;
    },
    refreshPage() {
      location.reload();
    },
  },
});
</script>

<style scoped>
.settings {
  position: absolute;
  top: 80px;
  right: 5px;
  width: 21%;
  background-color: #afbc7d;
  display: grid;
  grid-template-rows: 50% 50%;
  z-index: 9998;
}

.btn-1 {
  position: absolute;
  top: 20%;
  height: 80%;
  object-fit: cover;
  grid-row: 1;
  justify-self: center;
}
.btn-2 {
  position: absolute;
  top: 20%;
  height: 80%;
  object-fit: cover;
  grid-row: 2;
  justify-self: center;
}

.button {
  padding: 0.5rem;
  border: none;
  background-color: #fff;
  color: #000;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  font-size: xx-large;
}

.dropdown {
  position: absolute;
  top: calc(100% + 5px);
  right: calc(2% + 5px);
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  max-width: 1000px; /* adjust to your desired max width */
  margin: 0 auto;
  background-image: url(../assets/Dropdown.png);
  width: 976px;
  height: 1214px;
  z-index: 9999;
}

.dropdown-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.dropdown-item {
  padding: 0.5rem;
  width: 33%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
  border: #000;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.confirm-button {
  padding: 0.5rem;
  background-color: #0047ba;
  color: #fff;
  font-weight: bold;
  border: none;
  cursor: pointer;
  border-radius: 0 0 5px 5px;
}

.confirm-button:hover {
  background-color: #003d9e;
}
</style>
