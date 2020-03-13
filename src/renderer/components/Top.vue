<script>
import { remote } from 'electron';
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['destPath', 'srcPath']),
  },

  methods: {
    open(target) {
      remote.dialog.showOpenDialog({ properties: ['openDirectory'] }).then(res => {
        if (res.filePaths[0]) {
          this.config({ [target]: res.filePaths[0] });
        }
      });
    },

    ...mapActions(['config']),
  },
};
</script>

<template>
  <div class="border-b border-gray-700">
    <div class="flex items-center px-2 py-1 font-mono select-none">
      <div @click="open('srcPath')" class="hover:bg-gray-700 cursor-pointer">
        {{ srcPath || 'Source path' }}
      </div>
      <div class="mx-2 text-gray-500">-></div>
      <div @click="open('destPath')" class="hover:bg-gray-700 cursor-pointer">
        {{ destPath || 'Destination path' }}
      </div>
    </div>
  </div>
</template>
