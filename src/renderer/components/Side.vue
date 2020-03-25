<script>
import { mapState } from 'vuex';

export default {
  computed: {
    choices() {
      return this.destDirs.filter(d => d.path !== this.srcPath);
    },

    ...mapState(['destDirs', 'srcPath']),
  },
};
</script>

<template>
  <div class="flex flex-col overflow-y-auto pr-1 py-1">
    <button v-for="choice in choices" :key="choice.path" class="btn m-1 text-left">
      {{ choice.name }}
    </button>
  </div>
</template>
