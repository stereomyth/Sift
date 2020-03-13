import Vue from 'vue';
import Vuex from 'vuex';

const fs = require('fs');
const { join } = require('path');

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

    getDestDirs(state) {
      if (state.destPath) {
        fs.readdir(state.destPath, { withFileTypes: true }, (error, items) => {
          state.destDirs = items
            .filter(item => item.isDirectory())
            .map(dir => ({ path: join(state.destPath, dir.name), ...dir }));
        });
      }
    },

    getSrcImgs(state) {
      // make recursive?
      if (state.srcPath) {
        fs.readdir(join(state.srcPath), (error, files) => {
          state.images = files.map((file, i) => ({
            path: join(state.srcPath, file),
            filename: file,
            id: i,
          }));
        });
      }
    },
  },

  actions: {},
});
