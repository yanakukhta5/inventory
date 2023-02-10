<script>
export default {
  props: {
    inventoryItem: Object,
  },
  computed: {
    color() {
      return {
        "background-color": this.inventoryItem.color,
      };
    },
    blur() {
      return {
        "background-color": `${this.inventoryItem.color}59`,
      };
    },
  },
  methods: {
    handlerShow() {
      if (this.$refs.tooltip) this.$refs.tooltip.style.display = "block";
      else this.$refs.button.style.display = "block";
    },
    handlerHide() {
      this.$nextTick(() => {
        if (this.$refs.tooltip) this.$refs.tooltip.style.display = "none";
        else this.$refs.button.style.display = "none";
      });
    },
    handlerMove(event) {
      this.$nextTick(() => {
        if (this.$refs.tooltip) {
          const client = this.$refs.square.getBoundingClientRect();
          this.$refs.tooltip.style.top = event.clientY - client.y + 5 + "px";
          this.$refs.tooltip.style.left = event.clientX - client.x + 5 + "px";
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.inventory-item {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-color: $borderColor;
}
.item {
  position: relative;
}
.tooltip {
  display: none;
  position: absolute;
  z-index: 2;
  display: none;
  color: $lightest;
  font-size: 12px;
  border-radius: $smallBorderRadius;
  background-color: $background;
  padding: 6px;
  border: 1px solid $borderColor;
}
.color {
  position: absolute;
  top: -24px;
  left: -24px;
  width: 48px;
  height: 48px;
}
.blur {
  position: absolute;
  top: -32px;
  left: -16px;
  width: 48px;
  height: 48px;
}
.count {
  position: absolute;
  right: -1px;
  bottom: -1px;
  color: $secondaryFontColor;
  border: 1px solid $borderColor;
  padding: 4px 6px;
  font-size: 10px;
  border-top-left-radius: $smallBorderRadius;
}
.button {
  display: none;
  position: absolute;
  color: $secondaryFontColor;
  border: 1px solid $borderColor;
  padding: 4px 6px;
  font-size: 10px;
  background-color: transparent;
  border-radius: $smallBorderRadius;
  z-index: 2;
  cursor: pointer;
  &:hover {
    color: $lightest;
  }
  &:focus {
    border: 1px solid $lightest;
  }
}
</style>

<template>
  <div
    class="inventory-item"
    v-on:mouseover="handlerShow"
    v-on:mouseleave="handlerHide"
    v-on:mousemove="handlerMove"
    ref="square"
  >
    <div
      v-if="inventoryItem.count"
      v-on:click="teleportEditOpen"
      class="tooltip"
      ref="tooltip"
    >
      {{ inventoryItem.tooltip }}
    </div>
    <button v-else class="button" v-on:click="teleportCreateOpen" ref="button">
      Добавить цвет
    </button>
    <div class="item">
      <div class="color" :style="color"></div>
      <div class="blur" :style="blur"></div>
    </div>
    <div v-show="inventoryItem.count" class="count">
      {{ inventoryItem.count }}
    </div>
  </div>
</template>
