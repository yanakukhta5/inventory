<script>
import { mapGetters, mapState } from "vuex";
import Wrapper from "./ItemWrapper.vue";
import Form from "./CreateForm.vue";

export default {
  computed: {
    ...mapGetters("activeItem", ["isActiveItem"]),
    ...mapState({
      isCreating: (state) => state.create.isCreating,
    }),
    activeComponet() {
      return this.isCreating ? "Form" : "Wrapper";
    },
  },
  components: {
    Wrapper,
    Form,
  },
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
      <component :is="activeComponet" />
    </div>
    <!-- </Transition> -->
  </Teleport>
</template>
