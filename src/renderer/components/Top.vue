<script>
import { remote } from 'electron';

export default {
  props: ['parent', 'source'],

  computed: {
    parentStyle() {
      return `width: ${this.parent.length * 0.6 + 0.5}em`;
    },
  },

  methods: {
    open() {
      remote.dialog.showOpenDialog({ properties: ['openDirectory'] }).then(thing => {
        this.$emit('change', { parent: thing.filePaths[0] });
      });
    },
  },
};
</script>

<template>
  <div>
    <div class="flex items-center">
      <button class="bg-black rounded p-2 m-2" @click="open">Open</button>
      <div>
        <!-- <label for="">Parent</label> -->
        <input
          type="text"
          :style="parentStyle"
          :value="parent"
          @input="$emit('change', { parent: $event.target.value })"
        />
      </div>
      <div class="font-mono">/</div>
      <div>
        <!-- <label for="">Source</label> -->
        <input
          type="text"
          :value="source"
          @input="$emit('change', { source: $event.target.value })"
        />
      </div>
    </div>
  </div>
</template>
