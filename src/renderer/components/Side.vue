<script>
import { mapState } from 'vuex';

export default {
  computed: {
    choices() {
      return this.destDirs.filter(d => d.path !== this.destPath);
    },

    ...mapState(['destDirs', 'destPath']),
  },
};
</script>

<template>
  <div class="flex bg-red">
    <div class="choices w-32 flex flex-col">
      <button v-for="choice in choices" :key="choice.path" class="hover:bg-gray-700 text-left">
        {{ choice.name }}
      </button>
    </div>
  </div>
</template>
