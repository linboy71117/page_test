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
      <img src="../assets/Dropdown.png" />
      <div class="dropdown-row images-row">
        <div
          class="dropdown-item"
          v-for="cheerstick in cheersticks"
          :key="cheerstick"
          @click="selectCheerstick(cheerstick)"
        >
          <img
            :src="'../assets/' + cheerstick + '-level-1.png'"
            alt="stick"
            class="stick"
          />
          <!-- <Cheerstick :type="cheerstick" :level="1" :stop-animation="true" /> -->
        </div>
      </div>
      <div class="dropdown-row display-row">
        <div class="display-window">
          <!-- <Cheerstick :type="selectedCheerstick" /> -->
        </div>
      </div>
      <button class="confirm-button" @click="confirmSelection">Confirm</button>
    </div>
  </div>
</template>

<script lang="ts">
import Cheerstick from "@/components/CheerStick.vue";
import { defineComponent } from "vue";

export default defineComponent({
  // components: {
  //   Cheerstick,
  // },
  data() {
    return {
      showDropdown: false,
      selectedCheerstick: "Select Cheerstick",
      cheersticks: ["stick", "flower", "unknown"],
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
        this.$emit("updateCheerstickType", this.selectedCheerstickType);
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
  top: 20px;
  right: 5px;
  width: 21%;
  background-color: #afbc7d;
  display: grid;
  grid-template-rows: 50% 50%;
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
}

.dropdown-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column: 1 / span 3;
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
