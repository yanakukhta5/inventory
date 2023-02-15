<script>
import GridItem from "./GridItem.vue";
import { mapState } from "vuex";

export default {
  components: {
    GridItem,
  },
  data() {
    return {
      minAmountOfCells: 25,
    };
  },
  computed: {
    ...mapState({ inventoryItems: (state) => state.inventory.inventoryItems }),
    inventoryItemsArr() {
      let inventoryItemsArr = this.inventoryItems;
      if (inventoryItemsArr.length < this.minAmountOfCells) {
        for (
          let i = inventoryItemsArr.length - 1;
          i < this.minAmountOfCells;
          i++
        ) {
          if (this.inventoryItems[i])
            inventoryItemsArr[i] = this.inventoryItems[i];
          else inventoryItemsArr[i] = { id: i + 1 };
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
  height: fit-content;
}
.grid {
  display: grid;
  width: 525px;
  height: 525px;
  background-color: $cardBackgroud;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
}
</style>
