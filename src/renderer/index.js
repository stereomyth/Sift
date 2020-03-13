import Vue from 'vue';
import App from '@/App';
import store from '@/store.js';

new Vue({
  store,
  render: h => h(App),
  beforeCreate() {
    this.$store.dispatch('init');
  },
}).$mount('#app');
