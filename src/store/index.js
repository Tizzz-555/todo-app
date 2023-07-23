import Vue from "vue";
import Vuex from "vuex";
import Localbase from "localbase";

let db = new Localbase("db");
db.config.debug = false;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appTitle: process.env.VUE_APP_TITLE,
    search: null,
    tasks: [],
    user: "",
    snackbar: {
      show: false,
      text: "",
    },
    sorting: false,
    doneTasks: [],
  },
  mutations: {
    setUser(state, name) {
      state.user = name;
    },
    setSearch(state, value) {
      state.search = value;
    },
    addTask(state, newTask) {
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
    setTasks(state, tasks) {
      state.tasks = tasks;
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
    moveToDoneTasks(state, id) {
      let taskIndex = state.tasks.findIndex((task) => task.id === id);
      if (taskIndex !== -1 && state.tasks[taskIndex].done) {
        let task = state.tasks.splice(taskIndex, 1)[0];
        state.doneTasks.push(task);
        state.snackbar.show = true;
        state.snackbar.text = "Nota aggiunta a Completati!";
      }
    },
    setDoneTasks(state, tasks) {
      state.doneTasks = tasks;
    },
  },
  actions: {
    setUser({ commit }, name) {
      commit("setUser", name);
      commit("showSnackbar", "User aggiunto!");
    },
    addTask({ commit, state }, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        user: state.user,
        done: false,
        dueDate: null,
      };
      db.collection("tasks")
        .add(newTask)
        .then(() => {
          commit("addTask", newTask);
          commit("showSnackbar", "Nota aggiunta!");
        });
    },
    doneTask({ state, commit }, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      db.collection("tasks")
        .doc({ id: id })
        .update({
          done: !task.done,
        })
        .then(() => {
          commit("doneTask", id);
          if (task.done) {
            setTimeout(() => {
              commit("moveToDoneTasks", id);
            }, 3000);
          }
        });
    },
    deleteTask({ commit }, id) {
      db.collection("tasks")
        .doc({ id: id })
        .delete()
        .then(() => {
          commit("deleteTask", id);
          commit("showSnackbar", "Nota eliminata!");
        });
    },
    updateTaskTitle({ commit }, payload) {
      db.collection("tasks")
        .doc({ id: payload.id })
        .update({
          title: payload.title,
        })
        .then(() => {
          commit("updateTaskTitle", payload);
          commit("showSnackbar", "Nota modificata!");
        });
    },
    updateTaskDueDate({ commit }, payload) {
      db.collection("tasks")
        .doc({ id: payload.id })
        .update({
          dueDate: payload.dueDate,
        })
        .then(() => {
          commit("updateTaskDueDate", payload);
          commit("showSnackbar", "Data modificata!");
        });
    },
    setTasks({ commit }, tasks) {
      db.collection("tasks").set(tasks);
      commit("setTasks", tasks);
    },
    getTasks({ commit }) {
      db.collection("tasks")
        .get()
        .then((tasks) => {
          const undoneTasks = tasks.filter((task) => !task.done);
          const doneTasks = tasks.filter((task) => task.done);
          commit("setTasks", undoneTasks);
          commit("setDoneTasks", doneTasks);
        });
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
    completedTasks(state) {
      if (!state.search) {
        return state.doneTasks;
      }
      return state.doneTasks.filter(
        (task) =>
          task.title.toLowerCase().includes(state.search.toLowerCase()) ||
          task.user.toLowerCase().includes(state.search.toLowerCase())
      );
    },
    userNames(state) {
      const users = new Set(); // use Set to avoid duplicates
      // Merge tasks and doneTasks before collecting user names
      [...state.tasks, ...state.doneTasks].forEach((task) =>
        users.add(task.user)
      );
      return [...users]; // convert Set back to Array
    },
  },
});
