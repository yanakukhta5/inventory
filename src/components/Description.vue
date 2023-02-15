<script>
import { mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapGetters("activeItem", ["isActiveItem"]),
    ...mapState({
      isCreating: (state) => state.create.isCreating,
      inventoryItems: (state) => state.inventory.inventoryItems,
      activeItem: state => state.activeItem.active
    }),
    color() {
      return "background-color: " + this.activeItem ?  this.activeItem.color : 'transparent'
    },
    blur() {
      return "background-color: " + this.activeItem ? this.activeItem.color + "59" : 'transparent'
    },
  }
};
</script>

<style lang="scss" scoped>
.description-enter-from,
.description-leave-to {
  width: 250px;
  top: 0;
  height: 100vh;
  right: 0px;
  height: 100vh;
  padding: 18px 15px;
  border-left: 1px solid $borderColor;
}
.description-enter-to,
.description-leave-from {
  top: 0;
  width: 250px;
  height: 100vh;
  right: 250px;
  height: 100vh;
  padding: 18px 15px;
  border-left: 1px solid $borderColor;
}
.description-enter-active,
.description-leave-active {
  width: 250px;
  height: 100vh;
  position: fixed;
  transition: all 0.5s;
  height: 100vh;
  padding: 18px 15px;
  border-left: 1px solid $borderColor;
}
.modal {
  width: 250px;
  height: 100%;
}
.color {
  position: relative;
  width: 115px;
  height: 115px;
  &__wrapper {
    height: 215px;
    width: 100%;
  }
}
.blur {
  width: 115px;
  height: 115px;
  top: 15px;
  left: 15px;
  position: absolute;
}
.name {
  font-size: 1em;
}
</style>

<template>
  <Teleport to="#drawer">
    <!-- <Transition name="description"> -->
    <div class="modal" v-if="isCreating">
      <div class="color__wrapper">
        <div class="color" :style="color"></div>
        <div class="blur" :style="blur"></div>
      </div>
      <div class="text">
        <p class="name">kkj;lkjlkjlkjlkjlkjlkj{{ activeItem ? activeItem.name : '' }}</p>
        <p class="descr">kljjjjjjjjjjjj {{ activeItem ? activeItem.descr : '' }}</p>
      </div>
    </div>
    <!-- </Transition> -->
  </Teleport>
</template>
