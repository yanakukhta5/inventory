<template>
  <div class="color__wrapper">
    <div class="color" :style="color"></div>
    <div class="blur" :style="blur"></div>
  </div>
  <p class="name">{{ active.name }}</p>
  <p class="descripion">{{ active.description }}</p>
</template>

<script>
import { mapState } from 'vuex';

 export default {
  computed: {
   ...mapState('activeItem', ["active"]),
   color() {
      return "background-color: " + this.active ?  this.active.color : 'transparent'
    },
    blur() {
      return "background-color: " + this.active ? this.active.color + "59" : 'transparent'
    },
  } 
 }
</script>

<style></style>