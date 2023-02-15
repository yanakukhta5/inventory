export default {
 namespaced: true,
  state() {
    return {
      isCreating: false,
    };
  },
  mutations: {
    createModeChange(state) {
      state.isCreating = !state.isCreating;
    },
  },
};
