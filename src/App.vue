<script>
 import Aside from '@/components/Aside.vue'
 import Grid from '@/components/Grid/Grid.vue'
 import Search from '@/components/Search.vue'
 export default {
   components: {
    Aside, Grid, Search
   },
 }
</script>

<template>
 <div class="app">
  <div class="_container">
    <div class="app-top">
      <Aside></Aside>
      <Grid></Grid>
    </div>
    <Search></Search>
  </div>
 </div>
</template>

<style lang="scss" scoped>
 .app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vh;
  min-height: 100vh;
 }
 .app-top {
  display: flex;
  justify-content: space-between;
 }
 ._container {
  max-width: 825px;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  margin: 0px auto;
 }
</style>
