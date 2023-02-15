<template>
 <form @submit.prevent="submit">
  <input type="color" name="color" v-model="color" />
  <input type="text" name="name" v-model="name" />
  <input type="text" name="description" v-model="description" />
  <input type="number" name="count" v-model="count" />
  <input type="submit" value="Сохранить"/>
 </form>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
export default {
 data(){
  return {
   name: '',
   description: '',
   color: '',
   count: 0
  }
 },
 methods: {
  ...mapMutations("create", ["createModeChange"]),
  ...mapActions("inventory", ["changeInventoryItems"]),
  submit(){
   this.createModeChange();
   this.changeInventoryItems({
    name: this.name,
    descr: this.description,
    id: Date.now(),
    color: this.color,
    count: this.count
   })
  }
 }
}
</script>

<style></style>