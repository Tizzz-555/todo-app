import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appTitle: process.env.VUE_APP_TITLE,
    search: null,
    tasks: [
      {
        id: 1,
        title: "Wake up",
        user: "Gargiu",
        done: false,
        dueDate: "2023-10-16",
      },
      {
        id: 2,
        title: "Sit Down",
        user: "Maignan",
        done: false,
        dueDate: "2023-10-16",
      },
      {
        id: 3,
        title: "Eat lunch",
        user: "Leao",
        done: false,
        dueDate: null,
      },
    ],
    user: "",
    snackbar: {
      show: false,
      text: "",
    },
    sorting: false,
  },
  mutations: {
    setUser(state, name) {
      state.user = name;
    },
    setSearch(state, value) {
      state.search = value;
    },
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        user: state.user,
        done: false,
        dueDate: null,
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
    updateTaskTitle(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.title = payload.title;
    },
    updateTaskDueDate(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.dueDate = payload.dueDate;
    },
    showSnackbar(state, text) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.text = text;
      }, timeout);
    },
    hideSnackbar(state) {
      state.snackbar.show = false;
    },

    toggleSorting(state) {
      state.sorting = !state.sorting;
    },
  },
  actions: {
    setUser({ commit }, name) {
      commit("setUser", name);
      commit("showSnackbar", "User aggiunto!");
    },
    addTask({ commit }, newTaskTitle) {
      commit("addTask", newTaskTitle);
      commit("showSnackbar", "Nota aggiunta!");
    },
    deleteTask({ commit }, id) {
      commit("deleteTask", id);
      commit("showSnackbar", "Nota eliminata!");
    },
    updateTaskTitle({ commit }, payload) {
      commit("updateTaskTitle", payload);
      commit("showSnackbar", "Nota modificata!");
    },
    updateTaskDueDate({ commit }, payload) {
      commit("updateTaskDueDate", payload);
      commit("showSnackbar", "Data modificata!");
    },
  },
  getters: {
    tasksFiltered(state) {
      if (!state.search) {
        return state.tasks;
      }
      return state.tasks.filter(
        (task) =>
          task.title.toLowerCase().includes(state.search.toLowerCase()) ||
          task.user.toLowerCase().includes(state.search.toLowerCase())
      );
    },
  },
});
