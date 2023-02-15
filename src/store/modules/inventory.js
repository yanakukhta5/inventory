export default {
  namespaced: true,
  state() {
    return {
      inventoryItems: [
        {
          color: "#7FAA65",
          count: 4,
          name: "Зелёный",
          descr: "",
          id: 1,
        },
        {
          color: "#AA9765",
          count: 2,
          name: "Оранжевый",
          descr: "",
          id: 2,
        },
        {
          color: "#656CAA",
          count: 5,
          name: "Голубой",
          descr: "",
          id: 3,
        },
      ],
    };
  },
  mutations: {
    setInventoryItems(state, newItems) {
      state.inventoryItems = newItems;
    },
  },
  actions: {
    changeInventoryItems(context, newItems) {
      context.commit("setInventoryItems", newItems);
    },
  },
};
