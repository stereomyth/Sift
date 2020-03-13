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

  mutations: {},

  actions: {},
});
