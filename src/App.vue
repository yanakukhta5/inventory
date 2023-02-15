<script>
import Aside from "@/components/Aside.vue";
import Grid from "@/components/Grid/Grid.vue";
import Search from "@/components/Search.vue";
import Description from "./components/Description.vue";

export default {
  components: {
    Aside,
    Grid,
    Description,
    Search,
  }
};
</script>

<template>
  <div class="app">
    <div class="_container">
      <Search></Search>
      <div class="content">
        <Aside></Aside>
        <Grid></Grid>
      </div>
    </div>
  </div>
  <Description />
</template>

<style lang="scss" scoped>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vh;
  min-height: 100vh;
}
.content {
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
.drawer {
  position: fixed;
  top: 0;
  right: 0;
}
</style>
