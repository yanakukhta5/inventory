<script>
export default {};
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
</style>

<template>
  <Teleport to="#drawer" v-if="isModalOpen">
    <Transition name="description">
      <div class="modal">
        <div>khluihuli</div>
      </div>
    </Transition>
  </Teleport>
</template>
