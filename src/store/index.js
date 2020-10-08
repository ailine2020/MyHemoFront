import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
import rappels from "./rappels";
import drugs from "./drugs";
// import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    rappels,
    drugs
  },
  // plugins: [createPersistedState()]
});
