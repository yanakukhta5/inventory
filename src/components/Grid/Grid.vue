<script>
import { computed } from "@vue/reactivity";
import GridItem from "./GridItem.vue";

export default {
  components: {
    GridItem,
  },
  data() {
    return {
      minAmountOfCells: 25,
      inventoryItems: [
        {
          color: "#7FAA65",
          count: 4,
          tooltip: "Зелёный",
        },
        {
          color: "#AA9765",
          count: 2,
          tooltip: "Оранжевый",
        },
        {
          color: "#656CAA",
          count: 5,
          tooltip: "Голубой",
        },
      ],
    };
  },
  computed: {
    inventoryItemsArr() {
      let inventoryItemsArr = JSON.parse(JSON.stringify(this.inventoryItems));
      if (inventoryItemsArr.length < this.minAmountOfCells) {
        for (
          let i = inventoryItemsArr.length - 1;
          i < this.minAmountOfCells;
          i++
        ) {
          if (this.inventoryItems[i])
            inventoryItemsArr[i] = this.inventoryItems[i];
          else inventoryItemsArr[i] = {};
        }
      }
      return inventoryItemsArr;
    },
  },
};
</script>

<template>
  <div class="grid-wrapper">
    <div class="grid">
      <GridItem
        v-for="inventoryItem in inventoryItemsArr"
        v-bind:inventoryItem="inventoryItem"
        v-bind:key="inventoryItem.id"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid-wrapper {
  border-radius: $borderRadius;
  border: 1px solid $borderColor;
  overflow: auto;
}
.grid {
  display: grid;
  width: 525px;
  height: 525px;
  min-height: 100%;
  background-color: $cardBackgroud;
  grid-template-columns: repeat(5, 1fr);
}
</style>
