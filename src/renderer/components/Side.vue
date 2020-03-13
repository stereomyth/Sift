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
  <div class="w-32 relative overflow-hidden">
    <div class="flex flex-col overflow-y-scroll absolute inset-0">
      <button v-for="choice in choices" :key="choice.path" class="hover:bg-gray-700 text-left">
        {{ choice.name }}
      </button>
    </div>
  </div>
</template>
