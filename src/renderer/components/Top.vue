<script>
import { remote } from 'electron';
import { mapState, mapActions, mapMutations } from 'vuex';

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

    key(event) {
      if (event.key === 'ArrowLeft') {
        this.focusPrev();
      } else if (event.key === 'ArrowRight') {
        this.focusNext();
      }
    },

    ...mapActions(['config']),
    ...mapMutations(['focusNext', 'focusPrev']),
  },

  created() {
    window.addEventListener('keydown', this.key);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.key);
  },
};
</script>

<template>
  <div class="border-b border-gray-700">
    <div class="flex items-center px-2 py-1 font-mono select-none">
      <div @click="open('srcPath')" class="btn">
        {{ srcPath || 'Source path' }}
      </div>
      <div class="mx-2 text-gray-500">-></div>
      <div @click="open('destPath')" class="btn">
        {{ destPath || 'Destination path' }}
      </div>
    </div>
  </div>
</template>
