import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: "Wake up",
        user: "",
        done: false,
      },
      {
        id: 2,
        title: "Banana",
        user: "",
        done: false,
      },
      {
        id: 3,
        title: "Tomato",
        user: "",
        done: false,
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
});
