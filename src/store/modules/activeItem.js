export default {
  namespaced: true,
  state() {
    return {
      active: null,
    };
  },
  mutations: {
    setActiveItem(state, item) {
      state.active = item;
    },
  },
  actions: {
    changeActiveItem(context, item) {
      context.commit("setActiveItem", item)
    },
  },
  getters: {
    isActiveItem(state) {
      return Boolean(state.active);
    },
  },
};
