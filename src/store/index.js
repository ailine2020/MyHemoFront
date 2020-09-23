import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
// import rappel from "./rappel";
// import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    //rappel
  },
  // plugins: [createPersistedState()]
});
