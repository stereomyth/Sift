import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    srcPath: '',
    destPath: '',

    images: [],
    destDirs: [],
  },

  mutations: {
    config(state, obj) {
      Object.keys(obj).forEach(key => {
        state[key] = obj[key];
      });
    },
  },

  actions: {},
});
