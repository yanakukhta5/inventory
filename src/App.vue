<script>
import { mapGetters, mapState } from "vuex";

// TODO:
// delete index
// in griditem edit objects 

import User from "@/components/User.vue";
import Grid from "@/components/Grid/index.vue";
import Search from "@/components/Search.vue";
import Description from "@/components/Description/index.vue";

export default {
  computed: {
    ...mapGetters("activeItem", ["isActiveItem"]),
    ...mapState({
      isCreating: (state) => state.creaate.isCreating,
      active: (state) => state.activeItem.active,
    }),
  },
  components: {
    User,
    Grid,
    Description,
    Search,
  },
};
</script>

<template>
  <div class="app">
    <div class="_container">
      <Search></Search>
      <div class="content">
        <User></User>
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
