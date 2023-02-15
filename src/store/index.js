import { createStore } from "vuex";
import activeItem from "./modules/activeItem";
import inventory from "./modules/inventory";
import create from "./modules/create";

const store = createStore({
  modules: {
    activeItem,
    inventory,
    create,
  },
});

export default store;
