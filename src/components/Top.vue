<script>
import { remote } from 'electron';

export default {
  methods: {
    open() {
      remote.dialog.showOpenDialog().then(thing => {
        console.log(thing);
      });
    },
  },
};
</script>

<template>
  <div class="">
    <button class="bg-black rounded p-2 m-2" @click="open">Open</button>
  </div>
</template>
