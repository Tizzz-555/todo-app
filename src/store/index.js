import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    user: "",
    snackbar: {
      show: false,
    },
  },
  mutations: {
    setUser(state, name) {
      state.user = name;
    },
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        user: state.user,
        done: false,
      };
      state.tasks.push(newTask);
    },
    doneTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    showSnackbar(state) {
      state.snackbar.show = true;
    },
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit("addTask", newTaskTitle);
      commit("showSnackbar");
    },
    deleteTask({ commit }, id) {
      commit("deleteTask", id);
      commit("showSnackbar");
    },
  },
  getters: {},
});
