import Vue from 'vue';
import Vuex from 'vuex';

const fs = require('fs');
const { join, extname } = require('path');
const settings = require('electron').remote.require('electron-settings');

const exts = ['.gif', '.jpg', '.jpeg', '.png', '.webp', '.jfif'];

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    srcPath: '',
    destPath: '',

    images: [],
    destDirs: [],
    cursor: 0,
  },

  mutations: {
    config(state, obj) {
      Object.keys(obj).forEach(key => {
        state[key] = obj[key];
      });
    },

    save(state, obj) {
      Object.keys(obj).forEach(key => {
        settings.set(key, obj[key]);
      });
    },

    focus(state, val) {
      state.cursor = val;
    },

    getDestDirs(state) {
      if (state.destPath) {
        fs.readdir(state.destPath, { withFileTypes: true }, (error, items) => {
          state.destDirs = items
            .filter(item => item.isDirectory() && item.name.charAt(0) !== '.')
            .map(dir => ({ path: join(state.destPath, dir.name), ...dir }));
        });
      }
    },

    getSrcImgs(state) {
      // make recursive?
      if (state.srcPath) {
        fs.readdir(join(state.srcPath), (error, files) => {
          console.log(
            'discovered extensions:',
            [...new Set(files.map(f => extname(f).toLowerCase()))].filter(
              ext => ext && !exts.includes(ext)
            )
          );

          state.images = files
            .filter(filename => exts.includes(extname(filename).toLowerCase()))
            .map((file, i) => ({
              path: join(state.srcPath, file),
              ext: extname(file),
              filename: file,
              id: i,
            }));
        });
      }
    },
  },

  getters: {
    current: state => (state.images.length ? state.images[state.cursor] : {}),
  },

  actions: {
    config({ commit, state }, obj) {
      commit('config', obj);
      commit('save', obj);
      commit('getSrcImgs');
      commit('getDestDirs');
    },

    init({ commit }) {
      commit('config', settings.getAll());
      commit('getSrcImgs');
      commit('getDestDirs');
    },
  },
});
