import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: "Wake up",
        user: "Gargiu",
        done: false,
      },
      {
        id: 2,
        title: "Sit Down",
        user: "Maignan",
        done: false,
      },
      {
        id: 3,
        title: "Eat lunch",
        user: "Leao",
        done: false,
      },
    ],
    user: "",
    snackbar: {
      show: false,
      text: "",
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
    showSnackbar(state, text) {
      state.snackbar.show = true;
      state.snackbar.text = text;
    },
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit("addTask", newTaskTitle);
      commit("showSnackbar", "Todo aggiunto!");
    },
    deleteTask({ commit }, id) {
      commit("deleteTask", id);
      commit("showSnackbar", "Todo eliminato!");
    },
  },
  getters: {},
});
